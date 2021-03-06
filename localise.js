console.log("connected");

const eng = document.querySelector(".eng");
const ja = document.querySelector(".ja");
// projects
const netflix = document.getElementById("netflix");
const crown = document.getElementById("crown");
const expensify = document.getElementById("expensify");
const forkify = document.getElementById("forkify");
const mapty = document.getElementById("mapty");
const natours = document.getElementById("natours");
const omni = document.getElementById("omni");
const nexter = document.getElementById("nexter");
const pig = document.getElementById("pig");
const mystery = document.getElementById("mystery");
const todo = document.getElementById("todo");
const about = document.getElementById("about");

const language = {
  ja: {
    netflix:
      "このNetflixのクローンは、creat react app, context API、react-reduxで構築しました。このアプリの構築には、compound componentパターンを使用しました。又、Styled components を使用して、スタイルがアタッチされた通常のReactコンポーネントを作成することにより、コンポーネントとスタイル間のマッピングを削除しました。 ユーザーのサインアップとサインイン認証をサポートできるように、Firebaseを使用しました。 Herokuというクラウドベースのプラットフォームとして公開されています。",
    crown:
      "Crown clothingは、Shopifyのような EC サイトであり、creat react app、react-router、redux saga、永続性、セッションストレージを備えています。 Firebase Firestoreクラウドデータベースを使用して、製品の詳細を保存しました。ユーザーのFirebase認証は、Gmailでサインアップしてサインインします。 Stripe APIは、クレジットカード決済を処理するために統合されました",

    expensify:
      "Expensifyは、ユーザーの毎日の経費を管理するアプリケーションです。このアプリはreact-routerとreact−reduxを使用しています。 webpackにバンドルされ、babelツールチェーンに準拠しているため、ECMAScript2015 +コードを、現在および古いブラウザー環境と下位互換性のあるバージョンのJavaScriptに変換します。 Firebaseデータベースと認証を使用して構築されているため、ユーザーはGoogle gmailアカウントからログインして、いつでもどこでも複数のデバイスで経費のエントリデータを確認できます。アプリはJestとEnzymeで完全にテストされています。 herokuプラットフォームてして公開されています。",
    forkify:
      "Forkifyは、food2fork APIを利用し、様々なレシピ食品データを取得および表示するバニラJavaScriptアプリケーションです。 MVC方法論を通じて構築します。このアプリは、Parcelなどの最新のJavaScriptツールを使用し、モジュールをバンドルし、Babelを使用し、ES6、ES7、ES8をES5に変換します。ユーザーは特定のレシピを検索し、サービングサイズを設定して材料を調整し、お気に入りをブックマークしてローカルストレージに保存できます",

    mapty:
      "Maptyは、geolocation APIを使用し、ユーザーの現在地を表示するバニラJavaScriptアプリケーションです。ユーザーは、現在の場所に対応するランニングとサイクリングのトレーニングをログに記録できます。また、leaflet　APIを使用し、ユーザーワークアウトをプロットするためのインタラクティブマップを取得して表示します。このアプリは、Parcelなどの最新のJavaScriptツールを使用してモジュールをバンドルし、Babelを使用し、ES6、ES7、ES8をES5に変換します。ユーザーが記録したワークアウトの詳細は、ローカルストレージにて保存されます。",

    natours:
      "Natoursは、アウトドアツアーを提供するフィクショナルの会社のランディングページです。このアプリは、多くの最新の機能を含む純粋なCSSを使用して構築されました。レイアウトは、レスポンシブデザインとなり複数のデバイス対応しています。言語にパワーとエレガンスを追加するCSSの優れた拡張機能であるSassを使用します。クラスには、BEMシステムを使用して名前が付けられます。",

    omni:
      "Omni Foodは、世界中で毎月のメンバーシッププランを備えたフードデリバリーサービスを提供するフィクショナルの会社のランディングページです。 HTML5、CSS3、Jqueryで作成されました。レイアウトは、レスポンシブデザインとなり複数のデバイス対応しています。優れた速度のパフォーマンスと検索エンジン（SEO）のためにウェブサイトを最適化する方法を学びました。",

    nexter:
      "Nexterは、世界中の高級不動産の売買、不動産コンサルティングを提供するフィクショナルの不動産会社のランディングページです。このサイトは、HTML5、CSS3、JavaScriptで構築されています。 CSSグリッドはページ全体のレイアウトに使用され、レスポンシブデザインとなり複数のデバイス対応しています。言語にパワーとエレガンスを追加するCSSの優れた拡張機能であるSassを使用します。クラスには、BEMシステムを使用して名前が付けられます。",

    pig:
      "これは、バニラJavaScriptで作成された2人用のダイスゲームアプリケーションです。ゲームの目的は100ポイントを貯めることであり、プレイをしながら、勝ちポイントを調整することもできます。各プレイヤーはダイスを振ったり、ホルドするチャンスがあります。プレイヤーが1を出した場合、彼のラウンドスコアはすべて失われます。その後、次のプレイヤーの番となります。",

    mystery:
      "これはバニラJavaScriptで作成されたゲームアプリケーションです。ゲームの目的は、謎の数を推測することです。すべての間違った推測はスコアへの控除になります。プレイヤーが正しい数字を推測すると、残りのスコアがハイスコアとして設定されます。",

    todo:
      "バニラJavaScriptで作成されたToDoリストのアプリです。ユーザーは、ToDoをエントリし、Todoが完了したら、リストから削除することができます。完了していないToDoは、ローカルストレージにて保存されます。",

    about:
      "私は2年間で、インテリアデザイナーとして働いていました。コロナの影響による、人々の動きが制限され、直接にお店へ行ったり、買い物したり、食べることなどが難しくなった社会の中で、技術の役割の重要性を感じしておりました。そこから、技術を利用し、飲食店や店舗運営、多くの企業を支えていきたいと考えています。 ウェブサイトやウェブアプリ開発の必要なスキルを得るため、HTML・CSS・JavaScript・ReactJSなどをオンラインスクールで勉強しておりました。そして現在、自分のプログラミングのスキルを磨くようにウェブプロジェクトを構築を続けています。 仕事としては未経験ではありますが、技術を学ぶ意欲を活かして、よりいっそう技術を身につけ、世の中の多くの人々に利用されるウェブアプリを作りたいと考えています。",
  },
};

ja.addEventListener("click", function () {
  netflix.textContent = language.ja.netflix;
  crown.textContent = language.ja.crown;
  expensify.textContent = language.ja.expensify;
  forkify.textContent = language.ja.forkify;
  mapty.textContent = language.ja.mapty;
  natours.textContent = language.ja.natours;
  omni.textContent = language.ja.omni;
  nexter.textContent = language.ja.nexter;
  mystery.textContent = language.ja.mystery;
  pig.textContent = language.ja.pig;
  todo.textContent = language.ja.todo;
  about.textContent = language.ja.about;
});

eng.addEventListener("click", function () {
  location.reload(true);
});
