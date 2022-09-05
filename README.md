Hokeylization-lite
==================
Why can't I run my whole app or site through Google Translate and get a basic translation in another language?

***Now, you can!***

The name `hokeylization` is a portmanteau, meaning 'hokey localization'

It's somewhat hokey because it's very simple: it sends strings to Google Translate

And it is simple, yet also very powerful. It has special support for HTML documents,
[HandlebarsJS](https://handlebarsjs.com/) templates,
and [Markdown](https://daringfireball.net/projects/markdown) files.

You can translate:
* a JavaScript object containing messages
* any number of files or directories, always traversing directories recursively

### This is hokeylization-lite
In order to lighten the weight of this npm package, this branch does not include any localized translations
of the hokeylization documentation

The tool works the same, you can translate any language to any language. However, the tool's documentation
and command-line help output will only be in English

To see command-line help for the `hokey` command in your native language, use the
regular `hokeylization` package instead of `hokeylization-lite`

# Read this in another language
This README.md document has been translated, using the hokeylization tool itself, into
**[every language supported by Google Translate](https://cloud.google.com/translate/docs/languages)!**

I'm certain it's not perfect, but I hope it's better than nothing!

&nbsp;&nbsp;&nbsp;[🇸🇦 Arabic](lang/ar/README.md)
&nbsp;&nbsp;&nbsp;[🇧🇩 Bengali](lang/bn/README.md)
&nbsp;&nbsp;&nbsp;[🇩🇪 German](lang/de/README.md)
&nbsp;&nbsp;&nbsp;[🇺🇸 English](lang/en/README.md)
&nbsp;&nbsp;&nbsp;[🇪🇸 Spanish](lang/es/README.md)
&nbsp;&nbsp;&nbsp;[🇫🇷 French](lang/fr/README.md)
&nbsp;&nbsp;&nbsp;[🇹🇩 Hausa](lang/ha/README.md)
&nbsp;&nbsp;&nbsp;[🇮🇳 Hindi](lang/hi/README.md)
&nbsp;&nbsp;&nbsp;[🇮🇩 Indonesian](lang/id/README.md)
&nbsp;&nbsp;&nbsp;[🇮🇹 Italian](lang/it/README.md)
&nbsp;&nbsp;&nbsp;[🇯🇵 Japanese](lang/ja/README.md)
&nbsp;&nbsp;&nbsp;[🇰🇷 Korean](lang/ko/README.md)
&nbsp;&nbsp;&nbsp;[🇮🇳 Maranthi](lang/mr/README.md)
&nbsp;&nbsp;&nbsp;[🇵🇱 Polish](lang/pl/README.md)
&nbsp;&nbsp;&nbsp;[🇧🇷 Portuguese](lang/pt/README.md)
&nbsp;&nbsp;&nbsp;[🇷🇺 Russian](lang/ru/README.md)
&nbsp;&nbsp;&nbsp;[🇰🇪 Swahili](lang/sw/README.md)
&nbsp;&nbsp;&nbsp;[🇵🇭 Tagalog](lang/tl/README.md)
&nbsp;&nbsp;&nbsp;[🇹🇷 Turkish](lang/tr/README.md)
&nbsp;&nbsp;&nbsp;[🇵🇰 Urdu](lang/ur/README.md)
&nbsp;&nbsp;&nbsp;[🇻🇳 Vietnamese](lang/vi/README.md)
&nbsp;&nbsp;&nbsp;[🇨🇳 Chinese](lang/zh/README.md)
<br/>
&nbsp;&nbsp;&nbsp;**[📚 ... All Languages ...](lang/README.md)**
----

### Is there a problem with this translation of the README?
This particular translation of the original [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
may be flawed -- *corrections are very welcome!* Please send a [pull request on GitHub](https://github.com/cobbzilla/yuebing/pulls),
or if you're not comfortable doing that, [open an issue](https://github.com/cobbzilla/yuebing/issues)

When you create a new GitHub issue about a translation, please do:
* include the page URL (copy/paste from browser address bar)
* include the exact text that is wrong (copy/paste from browser)
* please describe what is wrong -- is the translation incorrect? is the formatting broken somehow?
* kindly offer a suggestion of a better translation, or how the text should be properly formatted
* **Thank you!**

# Contents
* [Source](#Source)
* [Support and Funding](#Support-and-Funding)
* [Installation](#Installation)
* [Setup](#Setup)
* [Translating a JavaScript string resource file](#Translating-a-JavaScript-string-resource-file)
* [Translating a directory of text files](#Translating-a-directory-of-text-files)
* [Other options](#Other-options)
* [JSON batch commands](#JSON-batch-commands)

## Source
* [hokeylization on GitHub](https://github.com/cobbzilla/hokeylization)
* [hokeylization on npm](https://www.npmjs.com/package/hokeylization)

## Support and Funding
I am attempting to be a professional open source software developer. I have been working in
the software industry for many years, I have started successful companies and sold them to public companies.
Recently I lost my job, and I don't really have any other work lined up

So I'm going to try writing helpful software and see if that works

I would sincerely appreciate even the smallest [monthly contribution via Patreon](https://www.patreon.com/cobbzilla)

## Installation
To use the command line tool, install using `npm` or `yarn`:

    npm install -g hokeylization
    yarn global add hokeylization

To use as a library, install the `lite` version, which is much smaller:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

Then look at help for the `hokey` command:

    hokey --help
    hokey -h

Want to see output in your langauge or another language?

`hokey` tries to detect the language automatically from your shell's environment variables

You can force a language by setting the `LC_ALL` environment variable:

    LC_ALL=it hokey --help

Note that if you have installed `hokeylization-lite`, command help is only available in English

## Setup
Set the `GOOGLE_TRANSLATE_PROJECT_ID` environment variable to identify your Google Translate project

Set the `GOOGLE_APPLICATION_CREDENTIALS` environment variable to the JSON credentials you downloaded
after figuring out how authentication works on Google cloud (it can be fun)

If you're running from the source code, you can also put these in a `.env` file in the source
directory they'll be loaded at runtime via [dotenv](https://www.npmjs.com/package/dotenv)

## Translating a JavaScript string resource file
Your string table **must** be in a JavaScript file in one of these two forms:

ES6 export:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

CommonJS export

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

If this file was named `myfile.en.js`, you can translate it to Spanish and German with:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

The `LANG` in the above is special -- it is a reserved word in this tool!

The `LANG` is replaced with the language code for the output files

Thus the above command creates the files:

    myfile.es.js
    myfile.de.js

The `-l` / `--languages` option is a comma-separated list of ISO language codes
[supported by Google Translate](https://cloud.google.com/translate/docs/languages)

If the output file already exists, it will be examined to determine which keys already exist.
Existing keys will not be translated. Translations for missing keys will be generated and appended
to the end of the JS object. The entire file is always rewritten.

To force retranslation all keys, use the `-f` / `--force` option

## Translating a directory of text files
You can also translate a directory of files. hokeylization will recursively visit every
file in the directory and run its contents through Google Translate, and save the output
to an identically named file in a separate directory tree

When the target of your translation is a directory, this mode is enabled

The `-o` / `--outfile` option specifies the output directory

**BIG WARNING**: When translating directories, **DO NOT** specify an output directory
that is within your input directory! If you do this, you will:
* induce infinite recursion
* run up your Google bill
* fill up your disk
* have less fun

Here is an example of what *not to do*:

    hokey -l es -o templates/es templates    # <--- DON'T DO THIS!

When this runs, translated files are written to `templates/es`, and thus become new
source files to translate, since they are under `templates/` -- this process continues
forever, don't do it!

#### Correct usage
OK, let's say you have some email templates in a directory:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

To translate all of these to Spanish and German, run:

    hokey -l es,de -o templates/email/LANG templates/email/en

In the above, `LANG` is a reserved word and will be replaced with the ISO language code

What happens when the above runs:
* The `templates/email/es` and `templates/email/de` directories will be created (if they don't exist)
* Every file in `templates/email/en` will be translated to Spanish and German
  * Existing output files will not be regenerated unless you use `-f` / `--force`
* You'll end up with an identical directory structure and files within `es` and `de` like you have under `en`

## Other options

### Dry run
Pass `-n` / `--dry-run` to display what would be done, but do not actually make any API calls or write any files

### Force
Pass `-f` / `--force` to always regenerate translations, even if they already exist

### Match
Pass `-m` / `--match` to limit the files processed when running in directory-mode

You may not always want to translate *every* file in your source directory to your target directory

The value of the `-m` / `--match` option is a regex (beware shell quoting rules!) that specifies
which files should be translated

When in doubt, you can combine this option with `-n` / `--dry-run` to see which files would be translated

### Excludes
Sometimes your `-m` matches too many files. Use the `-e` / `--excludes` option to explicitly exclude
files that otherwise would have matched

You can list multiple regexes, separated by spaces

A common usage would be: `--excludes node_modules dist \.git build tmp`

### Handlebars
The strings to translate might contain `{{ handlebars }}` templates, either with two or three curly-braces

You probably *DON'T* want the stuff inside those templates to be translated

Pass the `-H` / `--handlebars` flag, and anything within `{{ ... }}` will not be translated

### Markdown
Markdown is neither text nor html, so Google Translate has some difficulties with it

The `-M` / `--markdown` flag enables special handling for markdown files

With markdown files, if you don't use the `-M` flag, you will probably find these problems:
* Broken links. In the translation, a space character appears after a markdown link description ends (with `]`) but
before its target link begins (with `(`). This causes the markdown to render incorrectly, and the link
is broken when viewing the document.
* Code blocks get translated. Google translate doesn't know what markdown considers code and what it doesn't
* Incorrect spacing for indented code blocks. Spacing is difficult to preserve in translation
* Things inside of `backticks` will get translated, when you almost always want them to be literal values

When the `-M` / `--markdown` flag is enabled:
* The pattern `] (` will be condensed to `](` thus fixing the broken markdown links
* A "no translate" wrapper will be placed around indented code blocks, preserving proper indentation and ensuring they are not translated
* A "no translate" wrapper will be placed around text within `backticks` to ensure that they are not translated

### Process-as
Normally everything is processed as plain text

If your content is HTML, it will get mangled unless you pass the `-p html` / `--process-as html` option

### Filter
For the adventurous: when processing files in a directory, you can pass the `-F` / `--filter` option
to filter the output before it is written to the filesystem

The value of this option must be a path to a JS file that exports a function named `filter`

The `filter` function must be `async` because `await` will be called upon it

Before files are written to disk, the entire file contents will be passed to the `filter` function as a string

The return value from the `filter` function is what will actually be written to storage

Thus, you have total control over what will finally be written

### Help
Use `-h` / `--help` to show help

## JSON batch commands
With the `-j` / `--json` option, you can run multiple coordinated `hokey` commands

By convention this file is called `hokey.json`, but you can name it whatever you want

If you pass a directory as the `-j` option, `hokey` will look for a `hokey.json` in that directory

The JSON file should contain one object. Within that object, its property names are the same as
the command-line options, plus one additional property named `hokey`

The `hokey` property is an array of commands to run. The properties declared within these commands will
override any duplicate declarations in the outer object.

Within each object in the `hokey` array, you should specify a `name`, and the input and output files

Here is an example of a `hokey.json`

    {
        "inputLanguage": "en",
        "languages": "es,fr,ja",  # can also be an array of strings
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
            "filter": "util/filterReadme.js",
            "markdown": true,
            "index": "lang/README.md"
          }
        ]
    }

### Multiple input files
Pass an array of file paths as `infiles` instead of a single path `infile`, as in this example:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

### Indexes
When translating to many languages, `hokey` can create an index file that lists all the translations made
and provides links to them

*When generating indexes, you can have only one input source*

Pass the `-I` / `--index` option, the value is where the index file will be generated, which can be a file
or a directory. If it's a directory, a default filename will be used, based on the template (see below)

Use the `-A` / `--index-template` to determine how the index output is formatted. You can specify 'html',
'markdown', 'text', or the file path to your own [HandlebarsJS](https://handlebarsjs.com/) template

If you specify your own template, you must also specify a file (not a directory) for the `-I` / `--index`
option

## Have a fun time translating languages!
