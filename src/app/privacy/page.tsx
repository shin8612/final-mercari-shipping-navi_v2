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
          <section>
            <h2 className="text-xl font-bold text-black">
              当サイトについて
            </h2>

            <p className="mt-3">
              本サイト「メルカリ発送ナビ（非公式）」は、個人開発者が制作・運営する非公式ツールです。
              株式会社メルカリおよび関連会社、各配送事業者とは一切関係ありません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black">
              アクセス解析について
            </h2>

            <p className="mt-3">
              当サイトでは、サイト改善のためにアクセス解析ツールを利用する場合があります。
              これらのツールはCookieを使用して匿名のトラフィックデータを収集することがあります。
            </p>

            <p className="mt-3">
              収集される情報は個人を特定するものではありません。
              Cookieの利用を望まない場合は、ブラウザの設定からCookieを無効にできます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black">
              広告配信について
            </h2>

            <p className="mt-3">
              当サイトでは、第三者配信の広告サービスを利用する場合があります。
              広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。
            </p>

            <p className="mt-3">
              Googleを含む第三者配信事業者は、Cookieを使用して、
              ユーザーが当サイトや他のサイトに過去にアクセスした情報に基づいて広告を配信する場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black">
              掲載情報について
            </h2>

            <p className="mt-3">
              当サイトでは、配送方法・送料・サイズ条件などの情報を掲載していますが、
              最新性・正確性・完全性を保証するものではありません。
            </p>

            <p className="mt-3">
              送料、配送条件、対応エリア、キャンペーン内容などは変更される場合があります。
              実際の発送前には、必ずメルカリ公式サイトおよび各配送事業者の公式情報をご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black">
              免責事項
            </h2>

            <p className="mt-3">
              本サイトの利用によって生じた損害、トラブル、不利益等について、
              当サイト運営者は一切の責任を負いません。
            </p>

            <p className="mt-3">
              本サイトはメルカリ公式サイトではありません。
              掲載情報は参考情報としてご利用ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black">
              プライバシーポリシーの変更
            </h2>

            <p className="mt-3">
              本ポリシーの内容は、必要に応じて予告なく変更することがあります。
              変更後の内容は、本ページに掲載した時点で有効となります。
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}