"use client";

import { useMemo, useState } from "react";
import {
  shippingMethods,
  shippingServices,
  type ShippingMethod,
} from "../lib/shippingData";

type InvalidResult = {
  method: ShippingMethod;
  reasons: string[];
};

export default function ShippingNavi() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [showOther, setShowOther] = useState(false);
  const [serviceFilter, setServiceFilter] = useState("all");

  const l = Number(length);
  const w = Number(width);
  const h = Number(height);
  const g = Number(weight);
  const totalSize = l + w + h;

  const targetMethods = useMemo(() => {
    return shippingMethods.filter((method) => {
      if (!showOther && method.type !== "mercari") return false;
      if (serviceFilter !== "all" && method.service !== serviceFilter) {
        return false;
      }
      return true;
    });
  }, [showOther, serviceFilter]);

  const { valid, invalid } = useMemo(() => {
    if (!l || !w || !h || !g) {
      return { valid: [] as ShippingMethod[], invalid: [] as InvalidResult[] };
    }

    const validMethods: ShippingMethod[] = [];
    const invalidMethods: InvalidResult[] = [];
    const itemSides = [l, w, h].sort((a, b) => b - a);

    for (const method of targetMethods) {
      const reasons: string[] = [];

      if (method.maxWeightGram !== undefined && g > method.maxWeightGram) {
        reasons.push(`重さ${method.maxWeightGram / 1000}kg以内`);
      }

      if (method.maxTotalCm !== undefined && totalSize > method.maxTotalCm) {
        reasons.push(`3辺合計${method.maxTotalCm}cm以内`);
      }

      const limits = [method.maxLength, method.maxWidth, method.maxHeight]
        .filter((v): v is number => typeof v === "number")
        .sort((a, b) => b - a);

      if (limits.length > 0) {
        if (limits[0] !== undefined && itemSides[0] > limits[0]) {
          reasons.push(`長辺${limits[0]}cm以内`);
        }
        if (limits[1] !== undefined && itemSides[1] > limits[1]) {
          reasons.push(`中辺${limits[1]}cm以内`);
        }
        if (limits[2] !== undefined && itemSides[2] > limits[2]) {
          reasons.push(`厚さ${limits[2]}cm以内`);
        }
      }

      if (reasons.length === 0) {
        validMethods.push(method);
      } else {
        invalidMethods.push({ method, reasons });
      }
    }

    validMethods.sort((a, b) => a.price - b.price);
    invalidMethods.sort((a, b) => a.method.price - b.method.price);

    return { valid: validMethods, invalid: invalidMethods };
  }, [l, w, h, g, totalSize, targetMethods]);

  const best = valid[0];
  const others = valid.slice(1, 4);

  return (
    <main className="min-h-screen bg-white px-4 py-8 text-black">
      <div className="mx-auto max-w-xl">
        <header className="mb-8 text-center">
          <p className="mb-2 text-sm font-bold text-red-500">メルカリ発送ナビ</p>
          <h1 className="text-3xl font-black">最安の発送方法を調べる</h1>
          <p className="mt-4 text-gray-600">
            サイズと重さを入力すると、使える配送方法と送料がわかります。
          </p>
        </header>

        <section className="rounded-3xl border border-gray-200 p-5 shadow-sm">
          <div className="grid grid-cols-3 gap-3">
            <Input label="縦(cm)" value={length} onChange={setLength} />
            <Input label="横(cm)" value={width} onChange={setWidth} />
            <Input label="高さ(cm)" value={height} onChange={setHeight} />
          </div>

          <div className="mt-4">
            <Input label="重さ(g)" value={weight} onChange={setWeight} />
          </div>

          <div className="mt-5">
            <label className="block">
              <span className="mb-2 block font-bold">配送サービスで絞り込み</span>
              <select
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
                className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-4 text-base font-bold outline-none focus:border-black"
              >
                <option value="all">すべて</option>
                {shippingServices
                  .filter((service) => showOther || service.type === "mercari")
                  .map((service) => (
                    <option key={service.name} value={service.name}>
                      {service.name}
                    </option>
                  ))}
              </select>
            </label>
          </div>

          <div className="mt-5 rounded-2xl bg-gray-50 p-4">
            <p className="text-sm text-gray-500">サイズ合計</p>
            <p className="mt-1 text-2xl font-black">{totalSize || 0}cm</p>
            <p className="mt-1 text-sm text-gray-500">重さ：{g || 0}g</p>
          </div>

          <button
            type="button"
            onClick={() => {
              setShowOther(!showOther);
              setServiceFilter("all");
            }}
            className="mt-5 w-full rounded-2xl border border-gray-300 py-3 text-sm font-bold"
          >
            {showOther ? "メルカリ便だけ見る" : "メルカリ便以外も見る"}
          </button>
        </section>

        {best ? (
          <>
            <section className="mt-6 rounded-3xl border-2 border-black p-6">
              <p className="text-sm font-bold text-gray-500">🥇 最安</p>

              <div className="mt-3 flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black">{best.name}</h2>
                  <p className="mt-1 text-gray-500">{best.service}</p>
                </div>
                <p className="text-4xl font-black">{best.price}円</p>
              </div>

              <div className="mt-5 space-y-1 text-sm">
                <p>✓ サイズOK</p>
                <p>✓ 重さOK</p>
                <p>✓ 条件内で最安</p>
              </div>

              {best.notes && (
                <p className="mt-4 text-sm text-gray-500">{best.notes}</p>
              )}
            </section>

            {others.length > 0 && (
              <section className="mt-5 rounded-3xl border border-gray-200 p-6">
                <h2 className="text-xl font-black">他の候補</h2>

                <div className="mt-4 divide-y">
                  {others.map((method) => (
                    <div
                      key={method.id}
                      className="flex items-center justify-between py-4"
                    >
                      <div>
                        <p className="font-bold">{method.name}</p>
                        <p className="text-sm text-gray-500">{method.service}</p>
                      </div>
                      <p className="text-xl font-black">{method.price}円</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        ) : (
          <section className="mt-6 rounded-3xl border border-gray-200 p-6 text-center">
            <p className="font-bold">使える配送方法が見つかりませんでした</p>
            <p className="mt-2 text-sm text-gray-500">
              サイズ、重さ、絞り込み条件を確認してください。
            </p>
          </section>
        )}

        {invalid.length > 0 && (
          <section className="mt-5 rounded-3xl border border-gray-200 p-6">
            <h2 className="text-xl font-black">使えない配送方法</h2>

            <div className="mt-4 space-y-4">
              {invalid.slice(0, 8).map(({ method, reasons }) => (
                <div key={method.id}>
                  <p className="font-bold">{method.name}</p>
                  <p className="text-sm text-gray-500">{reasons.join("・")}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <footer className="mt-10 border-t pt-6 text-xs leading-6 text-gray-500">
          <p>
            本サイトは個人開発者が制作した非公式ツールです。
            株式会社メルカリおよび各配送事業者とは関係ありません。
          </p>

          <p className="mt-2">
            送料・サイズ条件は変更される場合があります。
            最新情報はメルカリ公式サイトをご確認ください。
          </p>

          <p className="mt-2">
            本ツールは参考情報としてご利用ください。
            実際の発送前には必ず公式情報をご確認ください。
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href="https://help.jp.mercari.com/guide/articles/1080/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              メルカリ公式「配送方法 早わかり表」
            </a>

            <a href="/about" className="underline">
              このサイトについて
            </a>
          </div>

          <p className="mt-4 text-gray-400">
            © {new Date().getFullYear()} 個人開発者
          </p>
        </footer>
      </div>
    </main>
  );
}

function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-bold">{label}</span>
      <input
        type="number"
        min="0"
        inputMode="decimal"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-gray-300 px-4 py-4 text-xl outline-none focus:border-black"
      />
    </label>
  );
}