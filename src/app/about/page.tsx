export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-10 text-black">
      <div className="mx-auto max-w-2xl">
        <a href="/" className="text-sm text-gray-500 underline">
          ← トップへ戻る
        </a>

        <h1 className="mt-8 text-3xl font-black">このサイトについて</h1>

        <div className="mt-8 space-y-6 leading-8 text-gray-700">
          <p>
            メルカリ発送ナビは、メルカリ出品時に配送方法や送料の目安を
            簡単に確認できるように、個人開発者が制作した非公式ツールです。
          </p>

          <p>
            サイズと重さを入力することで、利用できる可能性のある配送方法や、
            送料の目安を確認できます。
          </p>

          <section className="rounded-2xl border border-gray-200 p-5">
            <h2 className="text-xl font-bold text-black">非公式ツールです</h2>
            <p className="mt-3">
              当サイトは株式会社メルカリおよび各配送事業者とは一切関係ありません。
              メルカリ公式サイトではありません。
            </p>
          </section>

          <section className="rounded-2xl border border-gray-200 p-5">
            <h2 className="text-xl font-bold text-black">掲載情報について</h2>
            <p className="mt-3">
              掲載している送料・サイズ条件は、できる限り正確になるようにしていますが、
              最新情報や正確性を保証するものではありません。
            </p>
            <p className="mt-3">
              送料・配送条件・対応エリア・キャンペーン内容などは変更される場合があります。
            </p>
          </section>

          <section className="rounded-2xl border border-gray-200 p-5">
            <h2 className="text-xl font-bold text-black">公式情報の確認</h2>
            <p className="mt-3">
              実際の発送前には、必ずメルカリ公式サイトや各配送会社の案内をご確認ください。
            </p>

            <a
              href="https://help.jp.mercari.com/guide/articles/1080/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-bold text-blue-600 underline"
            >
              メルカリ公式「配送方法 早わかり表」を確認する
            </a>
          </section>

          <section className="rounded-2xl border border-gray-200 p-5">
            <h2 className="text-xl font-bold text-black">運営者</h2>
            <p className="mt-3">個人開発者</p>
          </section>
        </div>
      </div>
    </main>
  );
}