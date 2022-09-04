Hokeylization-lite
==================
The name is a portmanteau, meaning 'hokey localization'

It's hokey because it's very simple: it sends strings to Google Translate

You can translate:
* a JavaScript object containing messages
* a directory of files, recursively

### This is hokeylization-lite
In order to lighten the weight of this npm package, this branch does not include any localized translations
of the hokeylization documentation

The tool works the same, you can translate any language to any language. However, the tool's documentation
and command-line help output will only be in English

To see command-line help for the `hokey` command in your native language, use the
regular `hokeylization` package instead of `hokeylization-lite`

# Read this in another language
This README.md document has been translated, using the hokeylization tool itself,
into **[every language supported by Google Translate](https://github.com/cobbzilla/hokeylization/blob/master/README.md)!**

I'm certain it's not perfect, but I hope it's better than nothing!

&nbsp;&nbsp;&nbsp;[🇸🇦 Arabic](https://github.com/cobbzilla/hokeylization/blob/master/lang/ar/README.md)
&nbsp;&nbsp;&nbsp;[🇧🇩 Bengali](https://github.com/cobbzilla/hokeylization/blob/master/lang/bn/README.md)
&nbsp;&nbsp;&nbsp;[🇩🇪 German](https://github.com/cobbzilla/hokeylization/blob/master/lang/de/README.md)
&nbsp;&nbsp;&nbsp;[🇺🇸 English](https://github.com/cobbzilla/hokeylization/blob/master/lang/en/README.md)
&nbsp;&nbsp;&nbsp;[🇪🇸 Spanish](https://github.com/cobbzilla/hokeylization/blob/master/lang/es/README.md)
&nbsp;&nbsp;&nbsp;[🇫🇷 French](https://github.com/cobbzilla/hokeylization/blob/master/lang/fr/README.md)
&nbsp;&nbsp;&nbsp;[🇹🇩 Hausa](https://github.com/cobbzilla/hokeylization/blob/master/lang/ha/README.md)
&nbsp;&nbsp;&nbsp;[🇮🇳 Hindi](https://github.com/cobbzilla/hokeylization/blob/master/lang/hi/README.md)
&nbsp;&nbsp;&nbsp;[🇮🇩 Indonesian](https://github.com/cobbzilla/hokeylization/blob/master/lang/id/README.md)
&nbsp;&nbsp;&nbsp;[🇮🇹 Italian](https://github.com/cobbzilla/hokeylization/blob/master/lang/it/README.md)
&nbsp;&nbsp;&nbsp;[🇯🇵 Japanese](https://github.com/cobbzilla/hokeylization/blob/master/lang/ja/README.md)
&nbsp;&nbsp;&nbsp;[🇰🇷 Korean](https://github.com/cobbzilla/hokeylization/blob/master/lang/ko/README.md)
&nbsp;&nbsp;&nbsp;[🇮🇳 Maranthi](https://github.com/cobbzilla/hokeylization/blob/master/lang/mr/README.md)
&nbsp;&nbsp;&nbsp;[🇵🇱 Polish](https://github.com/cobbzilla/hokeylization/blob/master/lang/pl/README.md)
&nbsp;&nbsp;&nbsp;[🇧🇷 Portuguese](https://github.com/cobbzilla/hokeylization/blob/master/lang/pt/README.md)
&nbsp;&nbsp;&nbsp;[🇷🇺 Russian](https://github.com/cobbzilla/hokeylization/blob/master/lang/ru/README.md)
&nbsp;&nbsp;&nbsp;[🇰🇪 Swahili](https://github.com/cobbzilla/hokeylization/blob/master/lang/sw/README.md)
&nbsp;&nbsp;&nbsp;[🇵🇭 Tagalog](https://github.com/cobbzilla/hokeylization/blob/master/lang/tl/README.md)
&nbsp;&nbsp;&nbsp;[🇹🇷 Turkish](https://github.com/cobbzilla/hokeylization/blob/master/lang/tr/README.md)
&nbsp;&nbsp;&nbsp;[🇵🇰 Urdu](https://github.com/cobbzilla/hokeylization/blob/master/lang/ur/README.md)
&nbsp;&nbsp;&nbsp;[🇻🇳 Vietnamese](https://github.com/cobbzilla/hokeylization/blob/master/lang/vi/README.md)
&nbsp;&nbsp;&nbsp;[🇨🇳 Chinese](https://github.com/cobbzilla/hokeylization/blob/master/lang/zh/README.md)
<br/>
&nbsp;&nbsp;&nbsp;**[📚 ... All Languages ...](https://github.com/cobbzilla/hokeylization/blob/master/lang/README.md)**
----

# Contents
* [Source](#Source)
* [Support and Funding](#Support-and-Funding)
* [Installation](#Installation)
* [Setup](#Setup)
* [Translating a JavaScript string resource file](#Translating-a-JavaScript-string-resource-file)
* [Translating a directory of text files](#Translating-a-directory-of-text-files)
* [Other options](#Other-options)

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

    > LC_ALL=it hokey --help
    Usage:  hokey [options] <source>
    ...

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

Hokeylizer handles things decently well, but with markdown files, you may oftentimes these problems:
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

## Happy Translating!
