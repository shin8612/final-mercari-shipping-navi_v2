export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-10 text-black">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-gray-500 underline">
          ← トップへ戻る
        </a>

        <h1 className="mt-8 text-3xl font-black">
          プライバシーポリシー
        </h1>

        <div className="mt-8 space-y-6 leading-8 text-gray-700">
          <p>
            当サイトではアクセス解析や広告配信のためにCookie等を利用する場合があります。
          </p>

          <p>
            取得した情報はサービス改善の目的以外では利用しません。
          </p>

          <p>
            Googleなどの第三者配信事業者がCookieを利用して広告を表示する場合があります。
          </p>

          <p>
            当サイトは掲載情報の正確性に努めていますが、
            内容の完全性や正確性を保証するものではありません。
          </p>

          <p>
            本サイト利用によって生じた損害等について責任を負いかねます。
          </p>
        </div>
      </div>
    </main>
  );
}