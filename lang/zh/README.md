霍基化
==============
这个名字是一个portmanteau，意思是“hokey本地化”

它很简单，因为它非常简单：它将字符串发送到谷歌翻译

你可以翻译：
 * 一个包含消息的 JavaScript 对象
* 文件目录，递归

# 用另一种语言阅读
这个 README.md 文件已经被翻译，使用了 hokeyization 工具本身，
变成**[谷歌翻译支持的所有语言](../README.md)！**

我敢肯定它并不完美，但我希望它总比没有好！

 [🇸🇦 阿拉伯语](../ar/README.md)
 [🇧🇩 孟加拉语](../bn/README.md)
 [🇩🇪 德语](../de/README.md)
 [🇺🇸英文](../en/README.md)
 [🇪🇸 西班牙语](../es/README.md)
 [🇫🇷 法语](../fr/README.md)
 [🇹🇩豪萨语](../ha/README.md)
 [🇮🇳印地语](../hi/README.md)
 [🇮🇩 印尼语](../id/README.md)
 [🇮🇹 意大利语](../it/README.md)
 [🇯🇵 日语](../ja/README.md)
 [🇰🇷韩语](../ko/README.md)
 [🇮🇳 马兰地语](../mr/README.md)
 [🇵🇱波兰语](../pl/README.md)
 [🇧🇷 葡萄牙语](../pt/README.md)
 [🇷🇺 俄语](../ru/README.md)
 [🇰🇪 斯瓦希里语](../sw/README.md)
 [🇵🇭 他加禄语](../tl/README.md)
 [🇹🇷 土耳其语](../tr/README.md)
 [🇵🇰乌尔都语](../ur/README.md)
 [🇻🇳 越南语](../vi/README.md)
 [🇨🇳 中文](../zh/README.md)


 **[📚 ...所有语言 ...](../README.md)**
 ----

 ### README 的这个翻译有问题吗？
原文 [README](https://github.com/cobbzilla/yuebing/blob/master/README.md) 的特别翻译
可能有缺陷 -- *非常欢迎更正！* 请发送 [GitHub 上的拉取请求](https://github.com/cobbzilla/yuebing/pulls)，
或者如果你不习惯这样做，[打开一个问题](https://github.com/cobbzilla/yuebing/issues)

当您创建有关翻译的新 GitHub 问题时，请执行以下操作：
 * 包括页面 URL（从浏览器地址栏复制/粘贴）
 *包括错误的确切文本（从浏览器复制/粘贴）
 * 请提供更好的翻译建议
* **谢谢！**

 ＃ 内容
* [来源](#来源)
 * [支持和资助](#Support-and-Funding)
 * [安装](#安装)
 * [设置](#设置)
 * [翻译 JavaScript 字符串资源文件](#Translating-a-JavaScript-string-resource-file)
 * [翻译文本文件目录](#Translating-a-directory-of-text-files)
 * [其他选项](#Other-options)

 ＃＃ 资源
* [GitHub上的hokeylization](https://github.com/cobbzilla/hokeylization)
 * [npm 上的 hokeylization](https://www.npmjs.com/package/hokeylization)

 ## 支持和资金
我正在努力成为一名专业的开源软件开发人员。我一直在工作
从事软件行业多年，我创办了成功的公司，并把它们卖给了上市公司。
最近我失业了，我真的没有其他工作要做

所以我将尝试编写有用的软件，看看是否可行

即使是最小的 [通过 Patreon 的每月贡献]，我也会真诚地感谢（https://www.patreon.com/cobbzilla）

 ＃＃ 安装
要使用命令行工具，请使用`npm`或`yarn`安装：

    npm install -g hokeylization
    yarn global add hokeylization

要用作库，请安装`lite`版本，它要小得多：

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

然后查看`hokey`命令的帮助：

    hokey --help
    hokey -h

想要以您的语言或其他语言查看输出？

 `hokey`尝试从 shell 的环境变量中自动检测语言

您可以通过设置`LC_ALL`环境变量来强制使用一种语言：

    LC_ALL=it hokey --help

请注意，如果您安装了`hokeylization-lite` ，命令帮助仅提供英文版本

＃＃ 设置
设置`GOOGLE_TRANSLATE_PROJECT_ID`环境变量以识别您的 Google 翻译项目

将`GOOGLE_APPLICATION_CREDENTIALS`环境变量设置为您下载的 JSON 凭据
在弄清楚身份验证如何在谷歌云上工作之后（这可能很有趣）

如果您从源代码运行，您也可以将它们放在源代码中的`.env`文件中
它们将在运行时通过 [dotenv](https://www.npmjs.com/package/dotenv) 加载的目录

## 翻译一个 JavaScript 字符串资源文件
您的字符串表**必须**位于以下两种形式之一的 JavaScript 文件中：

 ES6 导出：

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS 导出

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

如果这个文件被命名为`myfile.en.js` ，你可以将它翻译成西班牙语和德语：

    hokey -l es,de -o myfile.LANG.js myfile.en.js

上面的`LANG` ”是特殊的——它是这个工具中的保留字！

 `LANG`被替换为输出文件的语言代码

因此，上面的命令创建了文件：

    myfile.es.js
    myfile.de.js

 `-l` / `--languages`选项是以逗号分隔的 ISO 语言代码列表
[谷歌翻译支持](https://cloud.google.com/translate/docs/languages)

如果输出文件已经存在，它将被检查以确定哪些键已经存在。
现有密钥将不会被翻译。将生成并附加缺少键的翻译
到 JS 对象的末尾。整个文件总是被重写。

要强制重新翻译所有键，请使用`-f` / `--force`选项

## 翻译文本文件目录
您还可以翻译文件目录。 hokeyization 将递归地访问每个
目录中的文件并通过谷歌翻译运行其内容，并保存输出
到单独目录树中的同名文件

当翻译的目标是目录时，启用此模式

`-o` / `--outfile`选项指定输出目录

**大警告**：翻译目录时，**不要**指定输出目录
那是在您的输入目录中！如果您这样做，您将：
 * 引发无限递归
* 增加您的 Google 账单
*填满你的磁盘
* 少一些乐趣

这是*不应该做*的示例：

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

当它运行时，翻译后的文件被写入`templates/es` ，从而成为新的
要翻译的源文件，因为它们在`templates/`下——这个过程继续
永远不要这样做！

 ####正确用法
好的，假设您在目录中有一些电子邮件模板：

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

要将所有这些翻译成西班牙语和德语，请运行：

    hokey -l es,de -o templates/email/LANG templates/email/en

上面的`LANG`是一个保留字，会被替换为ISO语言代码

以上运行时会发生什么：
 * `templates/email/es`和`templates/email/de`目录将被创建（如果它们不存在）
 * `templates/email/en`中的每个文件都将被翻译成西班牙语和德语
* 除非使用`-f` / `--force` ，否则不会重新生成现有的输出文件
* 你会在`es`和`de`中得到相同的目录结构和文件，就像在`en`下一样

## 其他选项

### 试运行
通过`-n` / `--dry-run`来显示将要执行的操作，但实际上并不进行任何 API 调用或写入任何文件

＃＃＃ 力量
传递`-f` / `--force`以始终重新生成翻译，即使它们已经存在

＃＃＃ 匹配
通过`-m` / `--match`限制在目录模式下运行时处理的文件

您可能并不总是希望将源目录中的 *every* 文件翻译到目标目录

`-m` / `--match`选项的值是一个正则表达式（注意 shell 引用规则！），它指定
应该翻译哪些文件

如有疑问，您可以将此选项与`-n` / `--dry-run`以查看要翻译的文件

### 排除
有时你的`-m`匹配了太多的文件。使用`-e` / `--excludes`选项显式排除
否则会匹配的文件

您可以列出多个正则表达式，用空格分隔

一个常见的用法是： `--excludes node_modules dist \.git build tmp`

 ### 车把
要翻译的字符串可能包含`{{ handlebars }}`模板，带有两个或三个花括号

您可能*不*希望翻译这些模板中的内容

通过`-H` / `--handlebars`标志， `{{ ... }}`中的任何内容都不会被翻译

### 降价
Markdown 既不是文本也不是 html，所以谷歌翻译有一些困难

`-M` / `--markdown`标志启用对降价文件的特殊处理

Hokeylizer 可以很好地处理事情，但是对于降价文件，您可能经常会遇到以下问题：
 *断开的链接。在翻译中，markdown 链接描述结束后会出现一个空格字符（带有`]` ）但是
在其目标链接开始之前（使用`(` )。这会导致降价不正确地呈现，并且链接
查看文档时损坏。
 * 代码块被翻译。谷歌翻译不知道 Markdown 考虑什么代码，什么不考虑
* 缩进代码块的间距不正确。翻译中很难保留间距
* `backticks`里面的东西会被翻译，当你几乎总是希望它们是字面值时

当启用`-M` / `--markdown`标志时：
 * 模式`] (`将被压缩为`](`从而修复损坏的 Markdown 链接
* 将在缩进的代码块周围放置一个“不翻译”包装器，保留适当的缩进并确保它们不被翻译
* 将在`backticks`内的文本周围放置一个“不翻译”包装，以确保它们不被翻译

### 处理方式
通常所有内容都作为纯文本处理

如果您的内容是 HTML，除非您传递`-p html` / `--process-as html`选项，否则它将被破坏

＃＃＃ 筛选
对于喜欢冒险的人：在处理目录中的文件时，可以通过`-F` / `--filter`选项
在将输出写入文件系统之前过滤输出

此选项的值必须是导出名为`filter`的函数的 JS 文件的路径

`filter`函数必须是`async`因为`await`将被调用

在文件写入磁盘之前，整个文件内容将作为字符串传递给`filter`函数

`filter`函数的返回值是实际写入存储的值

因此，您可以完全控制最终将要写入的内容

＃＃＃ 帮助
使用`-h` / `--help`显示帮助

##翻译快乐！

</pre>