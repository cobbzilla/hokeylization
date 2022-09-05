הוקליזציה
 =============
 למה אני לא יכול להפעיל את כל האפליקציה או האתר שלי דרך Google Translate ולקבל תרגום בסיסי בשפה אחרת?

 ***עכשיו אתה יכול!***

 השם `hokeylization` הוא פורטמנטאו, שפירושו 'לוקליזציה הוקי'

 זה קצת מגניב כי זה מאוד פשוט: הוא שולח מחרוזות ל-Google Translate

 וזה פשוט, אך גם חזק מאוד. יש לו תמיכה מיוחדת עבור מסמכי HTML,
 [HandlebarsJS](https://handlebarsjs.com/) תבניות,
 וקבצי [Markdown](https://daringfireball.net/projects/markdown).

 אתה יכול לתרגם:
 * אובייקט JavaScript המכיל הודעות
 * כל מספר של קבצים או ספריות, תמיד חוצה ספריות באופן רקורסיבי

 # קרא את זה בשפה אחרת
 מסמך README.md זה תורגם, באמצעות כלי ההקליזציה עצמו, ל
 **[בכל שפה נתמכת על ידי Google Translate](https://cloud.google.com/translate/docs/languages)!**

 אני בטוח שזה לא מושלם, אבל אני מקווה שזה יותר טוב מכלום!

 [🇸🇦 ערבית](../ar/README.md)
 [🇧🇩 בנגלית](../bn/README.md)
 [🇩🇪 גרמנית](../de/README.md)
 [🇺🇸 אנגלית](../en/README.md)
 [🇪🇸 ספרדית](../es/README.md)
 [🇫🇷 צרפתית](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 הינדי](../hi/README.md)
 [🇮🇩 אינדונזית](../id/README.md)
 [🇮🇹 איטלקית](../it/README.md)
 [🇯🇵 יפנית](../ja/README.md)
 [🇰🇷 קוריאנית](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 פולנית](../pl/README.md)
 [🇧🇷 פורטוגזית](../pt/README.md)
 [🇷🇺 רוסית](../ru/README.md)
 [🇰🇪 סוואהילי](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 טורקית](../tr/README.md)
 [🇵🇰 אורדו](../ur/README.md)
 [🇻🇳 וייטנאמית](../vi/README.md)
 [🇨🇳 סינית](../zh/README.md)


 **[📚 ... כל השפות ...](../README.md)**
 ----

 ### האם יש בעיה עם התרגום הזה של README?
 התרגום הספציפי הזה של [README] המקורי (https://github.com/cobbzilla/hokeylization/blob/master/README.md)
 עשוי להיות פגום -- *תיקונים יתקבלו בברכה!* אנא שלח [pull request on GitHub](https://github.com/cobbzilla/hokeylization/pulls),
 או אם לא נוח לך לעשות את זה, [פתח בעיה](https://github.com/cobbzilla/hokeylization/issues)

 כאשר אתה יוצר בעיה חדשה של GitHub על תרגום, אנא עשה:
 * כלול את כתובת האתר של הדף (העתק/הדבק משורת הכתובת של הדפדפן)
 * כלול את הטקסט המדויק השגוי (העתק/הדבק מדפדפן)
 * נא לתאר מה לא בסדר -- האם התרגום שגוי? הפורמט שבור איכשהו?
 * אנא הציעו הצעה לתרגום טוב יותר, או כיצד יש לעצב את הטקסט כראוי
 * **תודה!**

 # תוכן
 * [מקור](#מקור)
 * [תמיכה ומימון](#Support-and-Funding)
 * [התקנה](#התקנה)
 * [הגדרה](#Setup)
 * [תרגום קובץ משאב מחרוזת JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [תרגום ספריה של קבצי טקסט](#תרגום-ספרייה של קבצי טקסט)
 * [אפשרויות אחרות](#אפשרויות אחרות)
 * [פקודות אצווה JSON](#JSON-batch-commands)

 ## מקור
 * [hokeylization ב-GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization ב-npm](https://www.npmjs.com/package/hokeylization)

 ## תמיכה ומימון
 אני מנסה להיות מפתח תוכנה מקצועי בקוד פתוח. עבדתי ב
 בתעשיית התוכנה במשך שנים רבות, הקמתי חברות מצליחות ומכרתי אותן לחברות ציבוריות.
 לאחרונה איבדתי את עבודתי, ואין לי באמת עבודה אחרת

 אז אני הולך לנסות לכתוב תוכנה מועילה ולראות אם זה עובד

 אשמח מאוד אפילו לקטנה ביותר [תרומה חודשית דרך Patreon](https://www.patreon.com/cobbzilla)

 ## התקנה
 כדי להשתמש בכלי שורת הפקודה, התקן באמצעות `npm` או `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 כדי להשתמש כספרייה, התקן את גרסת `lite` , שהיא הרבה יותר קטנה:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 לאחר מכן חפש בעזרה את הפקודה `hokey` :

    hokey --help
    hokey -h

 רוצה לראות פלט בשפה שלך או בשפה אחרת?

 `hokey` מנסה לזהות את השפה באופן אוטומטי ממשתני הסביבה של המעטפת שלך

 אתה יכול לאלץ שפה על ידי הגדרת משתנה הסביבה `LC_ALL` :

    LC_ALL=it hokey --help

 שימו לב שאם התקנתם `hokeylization-lite` , עזרה בפקודה זמינה רק באנגלית

 ## להכין
 הגדר את משתנה הסביבה `GOOGLE_TRANSLATE_PROJECT_ID` כדי לזהות את פרויקט Google Translate שלך

 הגדר את משתנה הסביבה `GOOGLE_APPLICATION_CREDENTIALS` לאישורי ה-JSON שהורדת
 לאחר שהבנת איך האימות עובד בענן של Google (זה יכול להיות כיף)

 אם אתה פועל מקוד המקור, אתה יכול גם לשים אותם בקובץ `.env` במקור
 ספרייה הם ייטענו בזמן ריצה דרך [dotenv](https://www.npmjs.com/package/dotenv)

 ## תרגום קובץ משאב מחרוזת JavaScript
 טבלת המחרוזות שלך **חייבת** להיות בקובץ JavaScript באחת משתי הצורות הבאות:

 ייצוא ES6:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 ייצוא CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 אם קובץ זה נקרא `myfile.en.js` , תוכל לתרגם אותו לספרדית וגרמנית באמצעות:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 ה `LANG` שלמעלה הוא מיוחד -- זוהי מילה שמורה בכלי זה!

 ה- `LANG` מוחלף בקוד השפה עבור קבצי הפלט

 לפיכך הפקודה לעיל יוצרת את הקבצים:

    myfile.es.js
    myfile.de.js

 האפשרות `-l` / `--languages` היא רשימה מופרדת בפסיקים של קודי שפות ISO
 [נתמך על ידי Google Translate](https://cloud.google.com/translate/docs/languages)

 אם קובץ הפלט כבר קיים, הוא ייבדק כדי לקבוע אילו מפתחות כבר קיימים.
 מפתחות קיימים לא יתורגמו. תרגומים למפתחות חסרים ייווצרו ויצורפו
 לסוף אובייקט JS. כל הקובץ תמיד נכתב מחדש.

 כדי לכפות תרגום מחדש של כל המפתחות, השתמש באפשרות `-f` / `--force`

 ## תרגום ספרייה של קבצי טקסט
 אתה יכול גם לתרגם ספריית קבצים. הוקליזציה תבקר באופן רקורסיבי בכל
 קובץ בספריה והפעל את תוכנו דרך Google Translate, ושמור את הפלט
 לקובץ בעל שם זהה בעץ ספריות נפרד

 כאשר היעד של התרגום שלך הוא ספרייה, מצב זה מופעל

 האפשרות `-o` / `--outfile` מציינת את ספריית הפלט

 **אזהרה גדולה**: בעת תרגום ספריות, **אל** ציין ספריית פלט
 זה בתוך ספריית הקלט שלך! אם תעשה זאת, תוכל:
 * לגרום לרקורסיה אינסופית
 * להגדיל את חשבון Google שלך
 *מלא את הדיסק שלך
 * שיהיה פחות כיף

 הנה דוגמה למה *לא לעשות*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 כאשר זה פועל, קבצים מתורגמים נכתבים ל- `templates/es` , וכך הופכים לחדשים
 קבצי מקור לתרגום, מכיוון שהם נמצאים תחת `templates/` -- תהליך זה נמשך
 לנצח, אל תעשה את זה!

 #### שימוש נכון
 בסדר, נניח שיש לך כמה תבניות דוא"ל בספרייה:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 כדי לתרגם את כל אלה לספרדית וגרמנית, הפעל:

    hokey -l es,de -o templates/email/LANG templates/email/en

 לעיל, `LANG` היא מילה שמורה ותוחלף בקוד שפת ה-ISO

 מה קורה כאשר האמור לעיל פועל:
 * הספריות `templates `templates/email/es` ו- `templates/email/de` email/de` ייווצרו (אם הן לא קיימות)
 * כל קובץ ב- `templates/email/en` יתורגם לספרדית וגרמנית
 * קבצי פלט קיימים לא ייווצרו מחדש אלא אם תשתמש `-f` / `--force`
 * בסופו של דבר יהיה לך מבנה ספריות זהה וקבצים בתוך `es` ו `de` de` כמו שיש לך תחת `en`

 ## אפשרויות אחרות

 ### ריצה יבשה
 העבר `-n` / `--dry-run` כדי להציג את מה שנעשה, אך אל תבצע קריאות API או תכתוב קבצים

 ### כוח
 העבר `-f` / `--force` כדי ליצור תרגומים מחדש תמיד, גם אם הם כבר קיימים

 ### התאמה
 העבר `-m` / `--match` כדי להגביל את הקבצים המעובדים כאשר הם פועלים במצב ספרייה

 ייתכן שלא תמיד תרצה לתרגם *כל* קובץ בספריית המקור שלך לספריית היעד שלך

 הערך של האפשרות `-m` / `--match` הוא ביטוי רגולרי (היזהר מכללי ציטוט מעטפת!) המציין
 אילו קבצים יש לתרגם

 כאשר יש ספק, תוכל לשלב אפשרות זו עם `-n` / `--dry-run` כדי לראות אילו קבצים יתורגמו

 ### לא כולל
 לפעמים `-m` שלך תואם ליותר מדי קבצים. השתמש באפשרות `-e` / `--excludes` כדי לא לכלול במפורש
 קבצים שאחרת היו תואמים

 אתה יכול לרשום קבצים רגסיים מרובים, מופרדים על ידי רווחים

 שימוש נפוץ יהיה: `--excludes node_modules dist \.git build tmp`

 ### כידון
 המחרוזות לתרגום עשויות להכיל תבניות `{{ handlebars }}` , עם שניים או שלושה סוגרים מסולסלים

 אתה כנראה *לא* רוצה שהחומר שבתבניות האלה יתורגמו

 העבר את `-H` / `--handlebars` וכל דבר בתוך `{{ ... }}` לא יתורגם

 ### סימון
 Markdown הוא לא טקסט ולא html, אז ל-Google Translate יש כמה קשיים עם זה

 `-M` / `--markdown` מאפשר טיפול מיוחד בקבצי סימון

 עם קבצי סימון, אם אינך משתמש בדגל `-M` , סביר להניח שתמצא את הבעיות הבאות:
 * קישורים שבורים. בתרגום, תו רווח מופיע לאחר שתיאור קישור סימון מסתיים (עם `]` ) אבל
 לפני שהקישור היעד שלו מתחיל (עם `(` ). הדבר גורם לעיבוד שגוי של הסימון ולקישור
 שבור בעת הצגת המסמך.
 * קוביות קוד מתורגמות. Google translate לא יודע מה סימון מחשיב קוד ומה לא
 * מרווח שגוי עבור בלוקי קוד מחורצים. קשה לשמר ריווח בתרגום
 * דברים ב- `backticks` יתורגמו, כאשר אתה כמעט תמיד רוצה שהם יהיו ערכים מילוליים

 כאשר `-M` / `--markdown` מופעל:
 * הדפוס `](` יתמצה ל- `](` ובכך יתקן את קישורי הסימון השבורים
 * מעטפת "ללא תרגום" תוצב סביב גושי קוד מחורצים, תוך שמירה על הזחה נאותה ותוודא שהם לא מתורגמים
 * עטיפה "ללא תרגום" תמוקם סביב טקסט בתוך `backticks` כדי להבטיח שהם לא מתורגמים

 ### Process-as
 בדרך כלל הכל מעובד כטקסט רגיל

 אם התוכן שלך הוא HTML, הוא יתקלקל אלא אם תעבור את האפשרות `-p html` / `--process-as html`

 ### מסנן
 להרפתקנים: בעת עיבוד קבצים בספרייה, ניתן לעבור את `-F` / `--filter`
 לסנן את הפלט לפני שהוא נכתב למערכת הקבצים

 הערך של אפשרות זו חייב להיות נתיב לקובץ JS `filter`

 הפונקציה `filter` חייבת להיות `async` מכיוון ש- `await` תיקרא עליה

 לפני כתיבת קבצים לדיסק, כל תוכן הקובץ יועבר `filter` כמחרוזת

 ערך ההחזרה `filter` הוא מה שייכתב בפועל לאחסון

 לפיכך, יש לך שליטה מוחלטת על מה שייכתב לבסוף

 הסקריפט `filter` במיקומים הבאים:
 * הספרייה הנוכחית
 * ספרייה בשם `.hokey-filters` בתוך הספרייה הנוכחית
 * ספרייה בשם `${HOME}/.hokey-filters` , כאשר `${HOME}` היא ספריית הבית של המשתמש הנוכחי
 * [ספריית המסננים] המובנית (https://github.com/cobbzilla/hokeylization/tree/master/util/filter)

 ### עזרה
 השתמש `-h` / `--help` כדי להציג עזרה

 ## פקודות אצווה של JSON
 עם האפשרות `-j` / `--json` , אתה יכול להפעיל מספר פקודות `hokey`

 לפי המוסכמה, הקובץ הזה נקרא `hokey.json` , אבל אתה יכול לקרוא לו איך שאתה רוצה

 אם תעביר ספריה כאפשרות `-j` ', `hokey` את `hokey.json` בספרייה זו

 קובץ JSON צריך להכיל אובייקט אחד. בתוך האובייקט הזה, שמות המאפיינים שלו זהים לזה
 אפשרויות שורת הפקודה, בתוספת מאפיין אחד נוסף בשם `hokey`

 המאפיין `hokey` הוא מערך של פקודות להפעלה. המאפיינים שהוכרזו בפקודות אלה יהיו
 לעקוף כל הצהרות כפולות באובייקט החיצוני.

 בתוך כל אובייקט במערך `hokey` , עליך לציין `name` ואת קבצי הקלט והפלט

 הנה דוגמה של `hokey.json`

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
            "filter": "filterReadme.js",
            "markdown": true,
            "index": "lang/README.md"
          }
        ]
    }

 ### קבצי קלט מרובים
 העבר מערך של נתיבי קבצים בתור `infiles` במקום נתיב יחיד `infile` , כמו בדוגמה זו:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### אינדקסים
 בעת תרגום לשפות רבות, `hokey` יכול ליצור קובץ אינדקס המפרט את כל התרגומים שנעשו
 ומספק קישורים אליהם

 *בעת יצירת אינדקסים, אתה יכול לקבל רק מקור קלט אחד*

 העבר את `-I` / `--index` , הערך הוא המקום שבו יווצר קובץ האינדקס, שיכול להיות קובץ
 או ספרייה. אם מדובר בספריה, ישמש שם קובץ ברירת מחדל, בהתבסס על התבנית (ראה להלן)

 השתמש ב- `-A` / `--index-template` כדי לקבוע כיצד פלט האינדקס מעוצב. אתה יכול לציין 'html',
 'markdown', 'text', או נתיב הקובץ לתבנית [HandlebarsJS](https://handlebarsjs.com/) משלך

 אם אתה מציין תבנית משלך, עליך לציין גם קובץ (לא ספריה) עבור `-I` / `--index`
 אוֹפְּצִיָה

 ## תהנה בתרגום שפות!

</pre>
