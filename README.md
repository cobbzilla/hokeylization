Hokeylization
=============
The name is a portmanteau, meaning 'hokey localization'

It's hokey because it's very simple: it runs some strings against Google Translate

You can translate:
* a JavaScript object containing messages
* a directory of files, recursively

## Source
* [hokeylization on GitHub](https://github.com/cobbzilla/hokeylization)
* [hokeylization on npm](https://www.npmjs.com/package/hokeylization)

## Setup
Set the `GOOGLE_TRANSLATE_PROJECT_ID` env var to identify your project

Set the `GOOGLE_APPLICATION_CREDENTIALS` env var to the JSON credentials you downloaded
after navigating the holy hell that is figuring out authentication on Google cloud

If you're running from source, you can also put these in a `.env` file in the source directory
they'll be loaded at runtime via [dotenv](https://www.npmjs.com/package/dotenv)

## Translating a JavaScript string resource file
Your string table **must** be in a JavaScript file in the form:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

If this file was named `myfile.en.js`, you can translate it to Spanish and German with:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

The `LANG` in the above is special -- I hope you're not using it in your filenames, because
it's a reserved word in this tool! The `LANG` is replaced with the language code for the
output files, so the above command creates the files:

    myfile.es.js
    myfile.de.js

The `-l` / `--language` option is a comma-separated list of 2-letter language codes
[supported by Google Translate](https://cloud.google.com/translate/docs/languages)

If the output file already exists, it will not be overwritten. Instead, only translations
for missing keys will be generated and appended to the end of the output JS file.

To re-translate all keys, use the `-f` / `--force` option.

## Translating a directory of text files
You can also translate a directory, hokey will recursively visit every file
in the directory and run its contents through Google Translate, and save the output
to an identically named file in a separate directory tree

When the target of your translation is a directory, this mode is enabled

The `-o` / `--outfile` option specifies the output directory

**BIG WARNING**: When translating directories, **DO NOT** specify an output directory
that is within your input directory! If you do, you will:
* induce infinite recursion
* run up your Google bill
* fill up your disk
* have less fun

Here is an example of what *not to do*:

    hokey -l es -o templates/es templates    # <--- DON'T DO THIS!

When this runs, translated files are written to `templates/es`, and thus become new
source files to translate, since they are under `templates/` -- this process continues
forever, don't do it!

OK, let's say you have some email templates in a directory:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

To translate all of these to Spanish and German, run:

    hokey -l es,de -o templates/email/LANG templates/email/en

In the above, `LANG` is a reserved word and will be replaced with the 2-letter locale code.

What happens when the above runs:
* The `templates/email/es` and `templates/email/de` directories will be created (if they don't exist)
* Every file in `templates/email/en` will be translated to Spanish and German
  * Existing output files will not be regenerated unless you use `-f` / `--force`
* You'll end up with an identical directory structure and files within `es` and `de` like you have under `en`

## Other options

### Force
Pass `-f` / `--force` to always regenerate translations, even if they already exist.

### Handlebars
The strings to translate might contain `{{ handlebars }}` templates, either with two or three curly-braces.

You probably *DON'T* want the stuff inside those templates to be translated.

Pass the `-h` / `--handlebars` flag, and anything within `{{ ... }}` will not be translated.

### Help
Use `-h` / `--help` to show help

## Happy Translating!
