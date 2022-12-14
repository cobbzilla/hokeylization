ホケイ化
=============
アプリまたはサイト全体を Google 翻訳で実行して、別の言語で基本的な翻訳を取得できないのはなぜですか?

 ***今、できます!***

 `hokeylization`という名前はかばん語で、「ホーキー ローカリゼーション」を意味します。

非常に単純なので、ややばかげています。文字列を Google 翻訳に送信します。

シンプルでありながら非常に強力です。 HTMLドキュメントを特別にサポートしています。
 [HandlebarsJS](https://handlebarsjs.com/) テンプレート、
 [Markdown](https://daringfireball.net/projects/markdown) ファイル。

あなたは翻訳することができます：
 * メッセージを含む JavaScript オブジェクト
* 任意の数のファイルまたはディレクトリ。常にディレクトリを再帰的にトラバースします。

 # これを別の言語で読む
この README.md ドキュメントは、フック化ツール自体を使用して、
 **[Google 翻訳でサポートされているすべての言語](https://cloud.google.com/translate/docs/languages)!**

完璧ではないことは確かですが、何もないよりはましだと思います!

 [🇸🇦 アラビア語](../ar/README.md)
 [🇧🇩ベンガル語](../bn/README.md)
 [🇩🇪 ドイツ語](../de/README.md)
 [🇺🇸 英語](../en/README.md)
 [🇪🇸 スペイン語](../es/README.md)
 [🇫🇷フランス語](../fr/README.md)
 [🇹🇩ハウサ](../ha/README.md)
 [🇮🇳 ヒンディー語](../hi/README.md)
 [🇮🇩 インドネシア語](../id/README.md)
 [🇮🇹 イタリア語](../it/README.md)
 [🇯🇵 日本語](../ja/README.md)
 [🇰🇷韓国語](../ko/README.md)
 [🇮🇳 マランティ語](../mr/README.md)
 [🇵🇱 ポーランド語](../pl/README.md)
 [🇧🇷ポルトガル語](../pt/README.md)
 [🇷🇺 ロシア語](../ru/README.md)
 [🇰🇪 スワヒリ語](../sw/README.md)
 [🇵🇭 タガログ語](../tl/README.md)
 [🇹🇷トルコ語](../tr/README.md)
 [🇵🇰 ウルドゥー語](../ur/README.md)
 [🇻🇳 ベトナム語](../vi/README.md)
 [🇨🇳 中国語](../zh/README.md)


 **[📚 ... すべての言語 ...](../README.md)**
 ----

 ### この README の翻訳に問題はありますか?
元の [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md) の特定の翻訳
欠陥がある可能性があります -- *修正は大歓迎です!* [GitHub のプル リクエスト](https://github.com/cobbzilla/hokeylization/pulls) を送信してください。
または、それが苦手な場合は、[問題を開く](https://github.com/cobbzilla/hokeylization/issues)

翻訳に関する新しい GitHub の問題を作成する場合は、次のことを行ってください。
 * ページの URL を含めます (ブラウザのアドレス バーからコピー/貼り付け)
 * 間違っている正確なテキストを含めます (ブラウザからコピー/貼り付け)
 * 何が間違っているのか説明してください -- 翻訳は間違っていますか?どういうわけかフォーマットが壊れていますか？
 * より良い翻訳の提案、またはテキストを適切にフォーマットする方法を親切に提供してください
* **ありがとうございました！**

 ＃ コンテンツ
* [ソース](#ソース)
 * [支援と資金提供](#支援と資金提供)
 * [インストール](#インストール)
 * [セットアップ](#セットアップ)
 * [JavaScript 文字列リソース ファイルの翻訳](#Translating-a-JavaScript-string-resource-file)
 * [テキスト ファイルのディレクトリの翻訳](#テキスト ファイルのディレクトリの翻訳)
 * [その他のオプション](#その他のオプション)
 * [JSON バッチ コマンド](#JSON-バッチ コマンド)

 ＃＃ ソース
* [GitHub の Hokeylization](https://github.com/cobbzilla/hokeylization)
 * [npmでのhokeylization](https://www.npmjs.com/package/hokeylization)

 ## サポートと資金提供
私はプロのオープン ソース ソフトウェア開発者になろうとしています。私はで働いています
長年ソフトウェア業界に携わってきた私は、成功した会社を立ち上げ、上場企業に売却してきました。
最近、仕事を失い、他に仕事が決まっているわけではありません

だから私は役立つソフトウェアを書いてみて、それがうまくいくかどうかを見ていきます

このソフトウェアをお楽しみいただけましたら、
最小 [Patreon による月間貢献](https://www.patreon.com/cobbzilla)

 *ありがとうございました！*

 ## インストール
コマンド ライン ツールを使用するには、 `npm`または`yarn`を使用してインストールします。

    npm install -g hokeylization
    yarn global add hokeylization

ライブラリとして使用するには、はるかに小さい`lite`バージョンをインストールします。

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

次に、 `hokey`コマンドのヘルプを見てください。

    hokey --help
    hokey -h

あなたの言語または別の言語で出力を見たいですか?

 `hokey`は、シェルの環境変数から自動的に言語を検出しようとします

`LC_ALL`環境変数を設定することにより、言語を強制することができます:

    LC_ALL=it hokey --help

 `hokeylization-lite`をインストールした場合、コマンド ヘルプは英語でのみ利用可能であることに注意してください

＃＃ 設定
`GOOGLE_TRANSLATE_PROJECT_ID`環境変数を設定して、Google 翻訳プロジェクトを識別します

`GOOGLE_APPLICATION_CREDENTIALS`環境変数を、ダウンロードした JSON 認証情報に設定します
Googleクラウドで認証がどのように機能するかを理解した後（楽しいかもしれません）

ソースコードから実行している場合は、これらをソースの`.env`ファイルに入れることもできます
[dotenv](https://www.npmjs.com/package/dotenv) 経由で実行時に読み込まれるディレクトリ

## JavaScript 文字列リソース ファイルの翻訳
文字列テーブルは、次の 2 つの形式のいずれかで JavaScript ファイルにある必要があります:

 ES6 エクスポート:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS エクスポート

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

このファイルが`myfile.en.js`という名前の場合、次のようにスペイン語とドイツ語に翻訳できます。

    hokey -l es,de -o myfile.LANG.js myfile.en.js

上記の`LANG`は特殊です -- これはこのツールの予約語です!

 `LANG`は、出力ファイルの言語コードに置き換えられます

したがって、上記のコマンドはファイルを作成します。

    myfile.es.js
    myfile.de.js

 `-l` / `--languages`オプションは、ISO 言語コードのコンマ区切りリストです
[Google 翻訳でサポート](https://cloud.google.com/translate/docs/languages)

出力ファイルが既に存在する場合は、どのキーが既に存在するかを判断するために調べられます。
既存のキーは変換されません。不足しているキーの翻訳が生成され、追加されます
JS オブジェクトの最後まで。ファイル全体が常に書き換えられます。

すべてのキーを強制的に再変換するには、 `-f` / `--force`オプションを使用します

## テキストファイルのディレクトリの翻訳
ファイルのディレクトリを翻訳することもできます。 hokeylization は再帰的に訪問します
ディレクトリ内のファイルを開き、その内容を Google 翻訳で実行し、出力を保存します。
別のディレクトリ ツリー内の同じ名前のファイルに

翻訳の対象がディレクトリの場合、このモードが有効になります

`-o` / `--outfile`オプションは、出力ディレクトリを指定します

**重大な警告**: ディレクトリを変換するときは、**出力ディレクトリを指定しないでください**
それはあなたの入力ディレクトリ内にあります！これを行うと、次のようになります。
 * 無限再帰を誘発する
* Google の請求書を作成する
*ディスクをいっぱいにしてください
* 楽しみが減る

*してはいけないこと*の例を次に示します。

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

これが実行されると、翻訳されたファイルが`templates/es`に書き込まれるため、新しいファイルになります
`templates/`の下にあるため、翻訳するソース ファイル -- このプロセスは続きます
永遠に、それをしないでください！

 #### 正しい使い方
OK、ディレクトリにいくつかの電子メールテンプレートがあるとしましょう:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

これらすべてをスペイン語とドイツ語に翻訳するには、次を実行します。

    hokey -l es,de -o templates/email/LANG templates/email/en

上記の`LANG`は予約語であり、ISO 言語コードに置き換えられます

上記を実行するとどうなりますか：
 * `templates/email/es`および`templates/email/de`ディレクトリが作成されます (存在しない場合)。
 * `templates/email/en`内のすべてのファイルは、スペイン語とドイツ語に翻訳されます
* `-f` / `--force`を使用しない限り、既存の出力ファイルは再生成されません
* `es`と`de`内のディレクトリ構造とファイルは、` `en`の下と同じになります。

 ＃＃ その他のオプション

### ドライラン
`-n` / `--dry-run`を渡して何が行われるかを表示しますが、実際には API 呼び出しを行ったりファイルを書き込んだりしません

＃＃＃ 力
`-f` / `--force`を渡して、翻訳が既に存在する場合でも、常に翻訳を再生成します

＃＃＃ マッチ
`-m` / `--match`を渡して、ディレクトリ モードでの実行時に処理されるファイルを制限します

ソース ディレクトリ内のすべてのファイルを常にターゲット ディレクトリに変換する必要があるとは限りません。

 `-m` / `--match`オプションの値は、指定する正規表現です (シェルの引用規則に注意してください!)。
どのファイルを翻訳する必要があるか

不明な場合は、このオプションを`-n` / `--dry-run`と組み合わせて、どのファイルが変換されるかを確認できます

### 除外
`-m`が一致するファイルが多すぎる場合があります。 `-e` / `--excludes`オプションを使用して明示的に除外します
そうでなければ一致したはずのファイル

複数の正規表現をスペースで区切ってリストできます

一般的な使用法は次のとおりです: `--excludes node_modules dist \.git build tmp`

 ### ハンドルバー
翻訳する文字列には、2 つまたは 3 つの中かっこを含む`{{ handlebars }}`テンプレートが含まれる場合があります

おそらく、これらのテンプレート内のものを翻訳したくないでしょう*

 `-H` / `--handlebars`フラグを渡すと、 `{{ ... }}`内のものは翻訳されません

### マークダウン
Markdown はテキストでも html でもありません。

 `-M` / `--markdown`フラグは、マークダウン ファイルの特別な処理を有効にします

マークダウン ファイルで`-M`フラグを使用しない場合、おそらく次の問題が発生します。
 * リンク切れ。翻訳では、マークダウンリンクの記述が終わった後にスペース文字が表示されます（ `]`で）が、
ターゲット リンクが始まる前 ( `(`を使用)。これにより、マークダウンが正しくレンダリングされず、リンクが
ドキュメントを表示すると壊れています。
 * コード ブロックが翻訳されます。 Google翻訳は、マークダウンがコードと見なすものとそうでないものを認識していません
* インデントされたコード ブロックの間隔が正しくありません。翻訳でスペースを維持するのは難しい
* ほとんどの場合、リテラル値にしたい場合、 `backticks`内のものは変換されます

`-M` / `--markdown`フラグが有効な場合:
 * パターン`](`は `]( `](`に凝縮されるため、壊れたマークダウン リンクが修正されます
* インデントされたコード ブロックの周りに「翻訳なし」ラッパーが配置され、適切なインデントが維持され、翻訳されないようになります。
 * 「翻訳なし」ラッパーが`backticks`内のテキストの周りに配置され、翻訳されないようにします

### Process-as
通常はすべてプレーンテキストとして処理されます

コンテンツが HTML の場合、 `-p html` html` / `--process-as html`オプションを渡さない限り、内容が壊れてしまいます

＃＃＃ フィルター
冒険者向け: ディレクトリ内のファイルを処理する場合、 `-F` / `--filter`オプションを渡すことができます
ファイルシステムに書き込まれる前に出力をフィルタリングする

このオプションの値は、 `filter`という名前の関数をエクスポートする JS ファイルへのパスでなければなりません

`filter`関数は`async` async` でなければなりません`await`が呼び出されるからです。

ファイルがディスクに書き込まれる前に、ファイルの内容全体が文字列として`filter`関数に渡されます

`filter`関数からの戻り値は、実際にストレージに書き込まれるものです

したがって、最終的に何が書き込まれるかを完全に制御できます

`filter`スクリプトは次の場所で検索されます ( `.js`がフィルタに追加されます)
名前、すでに`.js`で終わっていない限り)
 * 現在のディレクトリ
* 現在のディレクトリ内の`.hokey-filters`という名前のディレクトリ
* `${HOME}/.hokey-filters`という名前のディレクトリ。ここで、 `${HOME}`は現在のユーザーのホーム ディレクトリです。
 * 組み込みの [filters ディレクトリ](https://github.com/cobbzilla/hokeylization/tree/master/util/filter)

 #### フィルタ パラメータ
`filter`文字列は複数の単語にすることができます。この場合、最初の単語はフィルター名です。
残りの単語は引数として`filter`関数に渡されます

＃＃＃ ヘルプ
ヘルプを表示するには、 `-h` / `--help` help」を使用します

## JSON バッチ コマンド
`-j` / `--json`オプションを使用すると、複数の調整され`hokey`コマンドを実行できます

慣例により、このファイルは`hokey.json`と呼ばれますが、好きな名前を付けることができます

`-j`オプションとしてディレクトリを渡すと、 `hokey.json`はそのディレクトリで`hokey`を探します。

 JSON ファイルには 1 つのオブジェクトが含まれている必要があります。そのオブジェクト内では、そのプロパティ名は
コマンドライン オプションと、 `hokey`という名前の 1 つの追加プロパティ

`hokey`プロパティは、実行するコマンドの配列です。これらのコマンド内で宣言されたプロパティは、
外側のオブジェクトで重複する宣言をオーバーライドします。

 `hokey`配列の各オブジェクト内で、 `name` name` と入力ファイルと出力ファイルを指定する必要があります

これは`hokey.json`の例です

    {
        "inputLanguage": "en",
        "languages": "es,fr,ja", # can also be an array of strings
        "force": false,
        "match": null,
        "processAs": null,
        "excludes": ["exclude-1", "exclude-2"],
        "handlebars": false,
        "markdown": false,
        "regular": false,
        "dryRun": false,
        "filter": "theFilter.js",
        "hokey": [
          {
            "name": "locale names",
            "infile": "messages/locales_en.js",
            "outfile": "messages/locales_LANG.js",
            "handlebars": true
          },
          {
            "name": "CLI messages",
            "infile": "messages/en_messages.js",
            "outfile": "messages/LANG_messages.js",
            "handlebars": true
          },
          {
            "name": "README",
            "infile": "README.md",
            "outfile": "lang/LANG/",
            "excludes": ["lang/", "node_modules/", "\\.git/", "tmp/"],
            "filter": "relativizeMarkdownLinks lang",
            "markdown": true,
            "index": "lang/README.md"
          }
        ]
    }

 ### 複数の入力ファイル
次の例のように、単一のパス`infile` `infiles`として渡します。

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### インデックス
多くの言語に翻訳する場合、 `hokey`は、行われたすべての翻訳をリストするインデックス ファイルを作成できます。
それらへのリンクを提供します

*インデックスを生成する場合、入力ソースは 1 つしか持てません*

 `-I` / `--index`オプションを渡します。値は、インデックス ファイルが生成される場所です。
またはディレクトリ。ディレクトリの場合、テンプレートに基づいてデフォルトのファイル名が使用されます (以下を参照)。

 `-A` / `--index-template`を使用して、インデックス出力のフォーマット方法を決定します。 「html」を指定できます。
 「markdown」、「text」、または独自の [HandlebarsJS](https://handlebarsjs.com/) テンプレートへのファイル パス

独自のテンプレートを指定する場合は、 `-I` / `--index`に (ディレクトリではなく) ファイルも指定する必要があります
オプション

## 言語の翻訳を楽しんでください!

</pre>
