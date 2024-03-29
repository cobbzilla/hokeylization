Hokeylisierung
 =============
 Warum kann ich nicht meine gesamte App oder Website über Google Übersetzer ausführen und eine einfache Übersetzung in eine andere Sprache erhalten?

 ***Jetzt kannst du!***

 Der Name `hokeylization` ist ein Kunstwort und bedeutet „Hokey-Lokalisierung“.

 Es ist etwas hokey, weil es sehr einfach ist: Es sendet Zeichenfolgen an Google Translate

 Und es ist einfach, aber auch sehr mächtig. Es hat spezielle Unterstützung für HTML-Dokumente,
 [LenkerJS](https://handlebarsjs.com/) Vorlagen,
 und [Markdown](https://daringfireball.net/projects/markdown) Dateien.

 Du kannst übersetzen:
 * ein JavaScript-Objekt, das Nachrichten enthält
 * eine beliebige Anzahl von Dateien oder Verzeichnissen, wobei die Verzeichnisse immer rekursiv durchlaufen werden

 # Lesen Sie dies in einer anderen Sprache
 Dieses README.md-Dokument wurde mit dem Hokeylization-Tool selbst in übersetzt
 **[jede von Google Übersetzer unterstützte Sprache](https://cloud.google.com/translate/docs/languages)!**

 Ich bin sicher, es ist nicht perfekt, aber ich hoffe, es ist besser als nichts!

 [🇸🇦 Arabisch](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Deutsch](../de/README.md)
 [🇺🇸 Englisch](../en/README.md)
 [🇪🇸 Spanisch](../es/README.md)
 [🇫🇷 Französisch](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesisch](../id/README.md)
 [🇮🇹 Italienisch](../it/README.md)
 [🇯🇵 Japanisch](../ja/README.md)
 [🇰🇷 Koreanisch](../ko/README.md)
 [🇮🇳 Marathi](../mr/README.md)
 [🇵🇱 Polnisch](../pl/README.md)
 [🇧🇷 Portugiesisch](../pt/README.md)
 [🇷🇺 Russisch](../ru/README.md)
 [🇰🇪 Suaheli](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Türkisch](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamesisch](../vi/README.md)
 [🇨🇳 Chinesisch](../zh/README.md)


 **[📚 ... Alle Sprachen ...](../README.md)**
 ----

 ### Gibt es ein Problem mit dieser Übersetzung der README?
 Diese spezielle Übersetzung der ursprünglichen [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md)
 kann fehlerhaft sein -- *Korrekturen sind sehr willkommen!* Bitte senden Sie eine [Pull-Anfrage auf GitHub](https://github.com/cobbzilla/hokeylization/pulls),
 oder wenn Sie sich dabei nicht wohlfühlen, [öffnen Sie ein Problem](https://github.com/cobbzilla/hokeylization/issues)

 Wenn Sie ein neues GitHub-Problem zu einer Übersetzung erstellen, gehen Sie bitte wie folgt vor:
 * Fügen Sie die Seiten-URL hinzu (Kopieren/Einfügen aus der Adressleiste des Browsers)
 * Geben Sie genau den falschen Text ein (Kopieren/Einfügen aus dem Browser)
 * Bitte beschreiben Sie, was falsch ist -- ist die Übersetzung falsch? ist die Formatierung irgendwie kaputt?
 * Machen Sie bitte einen Vorschlag für eine bessere Übersetzung oder wie der Text richtig formatiert werden sollte
 * **Vielen Dank!**

 # Inhalt
 * [Quelle](#Quelle)
 * [Unterstützung und Finanzierung](#Unterstützung-und-Finanzierung)
 * [Installation](#Installation)
 * [Einrichtung](#Einrichtung)
 * [Übersetzen einer JavaScript-String-Ressourcendatei](#Translating-a-JavaScript-string-resource-file)
 * [Übersetzen eines Verzeichnisses von Textdateien](#Übersetzen-eines-Verzeichnisses-von-Textdateien)
 * [Weitere Optionen](#Andere-Optionen)
 * [JSON-Batch-Befehle](#JSON-Batch-Befehle)

 ## Quelle
 * [hokeylization auf GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization auf npm](https://www.npmjs.com/package/hokeylization)

 ## Unterstützung und Finanzierung
 Ich versuche, ein professioneller Open-Source-Softwareentwickler zu werden. Ich habe in gearbeitet
 Ich arbeite seit vielen Jahren in der Softwarebranche, habe erfolgreiche Unternehmen gegründet und an Aktiengesellschaften verkauft.
 Kürzlich habe ich meinen Job verloren, und ich habe eigentlich keine andere Arbeit vor mir

 Also werde ich versuchen, hilfreiche Software zu schreiben und sehen, ob das funktioniert

 Wenn Sie diese Software gerne verwenden, würde ich mich sehr über eine Zusendung freuen
 kleinster [monatlicher Beitrag über Patreon](https://www.patreon.com/cobbzilla)

 *Vielen Dank!*

 ## Installation
 Um das Befehlszeilentool zu verwenden, installieren Sie es mit `npm` oder `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Um es als Bibliothek zu verwenden, installieren Sie die `lite` Version, die viel kleiner ist:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Sehen Sie sich dann die Hilfe für den Befehl `hokey` :

    hokey --help
    hokey -h

 Möchten Sie die Ausgabe in Ihrer Sprache oder einer anderen Sprache sehen?

 `hokey` versucht, die Sprache automatisch aus den Umgebungsvariablen Ihrer Shell zu erkennen

 Sie können eine Sprache erzwingen, indem Sie die Umgebungsvariable `LC_ALL` :

    LC_ALL=it hokey --help

 Beachten Sie, dass die Befehlshilfe nur auf Englisch verfügbar ist, wenn Sie `hokeylization-lite` installiert haben

 ## Konfiguration
 Legen Sie die Umgebungsvariable `GOOGLE_TRANSLATE_PROJECT_ID` , um Ihr Google Übersetzer-Projekt zu identifizieren

 Legen Sie die Umgebungsvariable `GOOGLE_APPLICATION_CREDENTIALS` auf die heruntergeladenen JSON-Anmeldeinformationen fest
 nachdem Sie herausgefunden haben, wie die Authentifizierung in der Google Cloud funktioniert (es kann Spaß machen)

 Wenn Sie den Quellcode verwenden, können Sie diese auch in eine `.env` -Datei in der Quelle einfügen
 Verzeichnis werden sie zur Laufzeit über [dotenv](https://www.npmjs.com/package/dotenv) geladen

 ## Übersetzen einer JavaScript-String-Ressourcendatei
 Ihre Zeichenfolgentabelle **muss** in einer JavaScript-Datei in einer dieser beiden Formen vorliegen:

 ES6-Export:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS-Export

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Wenn diese Datei `myfile.en.js` , können Sie sie ins Spanische und Deutsche übersetzen mit:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 Das `LANG` oben ist etwas Besonderes – es ist ein reserviertes Wort in diesem Tool!

 Das `LANG` wird durch den Sprachcode für die Ausgabedateien ersetzt

 Somit erstellt der obige Befehl die Dateien:

    myfile.es.js
    myfile.de.js

 Die Option „-l“ / `--languages` `-l` ist eine durch Kommas getrennte Liste von ISO-Sprachcodes
 [unterstützt von Google Übersetzer](https://cloud.google.com/translate/docs/languages)

 Wenn die Ausgabedatei bereits vorhanden ist, wird untersucht, welche Schlüssel bereits vorhanden sind.
 Vorhandene Schlüssel werden nicht übersetzt. Übersetzungen für fehlende Schlüssel werden generiert und angehängt
 bis zum Ende des JS-Objekts. Es wird immer die gesamte Datei neu geschrieben.

 Um die Neuübersetzung aller Schlüssel zu erzwingen, verwenden Sie die Option `-f` / `--force`

 ## Übersetzen eines Verzeichnisses von Textdateien
 Sie können auch ein Dateiverzeichnis übersetzen. hokeylization besucht rekursiv alle
 Datei im Verzeichnis, führen Sie ihren Inhalt über Google Translate aus und speichern Sie die Ausgabe
 in eine gleichnamige Datei in einem separaten Verzeichnisbaum

 Wenn das Ziel Ihrer Übersetzung ein Verzeichnis ist, ist dieser Modus aktiviert

 Die Option `-o` / `--outfile` gibt das Ausgabeverzeichnis an

 **GROSSE WARNUNG**: Geben Sie beim Übersetzen von Verzeichnissen **KEIN** ein Ausgabeverzeichnis an
 das ist in Ihrem Eingabeverzeichnis! Wenn Sie dies tun, werden Sie:
 * unendliche Rekursion induzieren
 * Führen Sie Ihre Google-Rechnung aus
 * Füllen Sie Ihre Festplatte auf
 * Weniger Spaß haben

 Hier ist ein Beispiel dafür, was *nicht zu tun* ist:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Wenn dies ausgeführt wird, werden übersetzte Dateien in `templates/es` geschrieben und werden somit neu
 Quelldateien zu übersetzen, da sie sich unter `templates/` befinden – dieser Prozess wird fortgesetzt
 für immer, tu es nicht!

 #### Richtige Benutzung
 Angenommen, Sie haben einige E-Mail-Vorlagen in einem Verzeichnis:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Um all dies ins Spanische und Deutsche zu übersetzen, führen Sie Folgendes aus:

    hokey -l es,de -o templates/email/LANG templates/email/en

 Oben ist `LANG` ein reserviertes Wort und wird durch den ISO-Sprachcode ersetzt

 Was passiert, wenn das obige ausgeführt wird:
 * Die `templates/email/es` und `templates/email/de` werden angelegt (falls noch nicht vorhanden)
 * Jede Datei in `templates/email/en` wird ins Spanische und Deutsche übersetzt
 * Vorhandene Ausgabedateien werden nicht neu generiert, es sei denn, Sie verwenden `-f` / `--force`
 * Sie erhalten eine identische Verzeichnisstruktur und Dateien innerhalb `es` und `de` wie unter `en`

 ## Andere Optionen

 ### Probelauf
 Übergeben Sie `-n` / `--dry-run` , um anzuzeigen, was getan werden würde, aber führen Sie keine API-Aufrufe durch oder schreiben Sie keine Dateien

 ### Macht
 Übergeben Sie `-f` / `--force` , um Übersetzungen immer neu zu generieren, auch wenn sie bereits existieren

 ### Passen
 Übergeben Sie `-m` / `--match` , um die verarbeiteten Dateien zu begrenzen, wenn Sie im Verzeichnismodus laufen

 Möglicherweise möchten Sie nicht immer *jede* Datei in Ihrem Quellverzeichnis in Ihr Zielverzeichnis übersetzen

 Der Wert der Option `-m` / `--match` ist ein regulärer Ausdruck (Vorsicht Shell-Quoting-Regeln!), der spezifiziert
 welche Dateien übersetzt werden sollen

 Im Zweifelsfall können Sie diese Option mit `-n` / `--dry-run` , um zu sehen, welche Dateien übersetzt würden

 ### Ausgeschlossen
 Manchmal stimmt Ihr `-m` mit zu vielen Dateien überein. Verwenden Sie die Option "-e" / `--excludes` `-e` , um explizit auszuschließen
 Dateien, die sonst zusammenpassen würden

 Sie können mehrere reguläre Ausdrücke auflisten, die durch Leerzeichen getrennt sind

 Eine übliche Verwendung wäre: `--excludes node_modules dist \.git build tmp`

 ### Lenker
 Die zu übersetzenden Zeichenfolgen können `{{ handlebars }}` -Vorlagen enthalten, entweder mit zwei oder drei geschweiften Klammern

 Sie möchten wahrscheinlich *NICHT*, dass das Zeug in diesen Vorlagen übersetzt wird

 Übergeben Sie das Flag `-H` / `--handlebars` , und alles innerhalb von `{{ ... }}` wird nicht übersetzt

 ### Abschlag
 Markdown ist weder Text noch HTML, daher hat Google Translate einige Schwierigkeiten damit

 Das `-M` / `--markdown` Flag ermöglicht eine spezielle Handhabung für Markdown-Dateien

 Wenn Sie bei Markdown-Dateien das `-M` Flag nicht verwenden, werden Sie wahrscheinlich auf diese Probleme stoßen:
 * Kaputte Links. In der Übersetzung erscheint ein Leerzeichen, nachdem eine Markdown-Link-Beschreibung endet (mit `]` ), aber
 bevor der Ziellink beginnt (mit `(` ). Dies führt dazu, dass der Markdown falsch gerendert wird und der Link
 ist beim Anzeigen des Dokuments defekt.
 * Codeblöcke werden übersetzt. Google Translate weiß nicht, was Markdown als Code betrachtet und was nicht
 * Falscher Abstand für eingerückte Codeblöcke. Bei der Übersetzung ist es schwierig, den Abstand beizubehalten
 * Dinge innerhalb von `backticks` werden übersetzt, wenn Sie fast immer wollen, dass sie wörtliche Werte sind

 Wenn das `-M` / `--markdown` Flag aktiviert ist:
 * Das Muster `](` wird zu `](` verdichtet, wodurch die defekten Markdown-Links repariert werden
 * Ein "no translate"-Wrapper wird um eingerückte Codeblöcke gelegt, um die richtige Einrückung zu erhalten und sicherzustellen, dass sie nicht übersetzt werden
 * Ein "no translate"-Wrapper wird um Text innerhalb von `backticks` " platziert, um sicherzustellen, dass sie nicht übersetzt werden

 ### Prozess-als
 Normalerweise wird alles als Klartext verarbeitet

 Wenn Ihr Inhalt HTML ist, wird er verstümmelt, es sei denn, Sie übergeben die Option `-p html` / `--process-as html`

 ### Filtern
 Für Abenteuerlustige: Beim Verarbeiten von Dateien in einem Verzeichnis können Sie die Option `-F` / `--filter`
 um die Ausgabe zu filtern, bevor sie in das Dateisystem geschrieben wird

 Der Wert dieser Option muss ein Pfad zu einer JS-Datei sein, die eine Funktion namens `filter`

 Die `filter` Funktion muss `async` sein, da `await` darauf aufgerufen wird

 Bevor Dateien auf die Festplatte geschrieben werden, wird der gesamte Dateiinhalt als Zeichenfolge an die Funktion `filter`

 Der Rückgabewert der `filter` -Funktion ist das, was tatsächlich in den Speicher geschrieben wird

 Somit haben Sie die volle Kontrolle darüber, was letztendlich geschrieben wird

 Das Skript „filter“ wird an den folgenden Stellen gesucht (wobei `.js` `filter` an den Filter angehängt wird
 Name, es sei denn, er endet bereits auf `.js` )
 * Das aktuelle Verzeichnis
 * Ein Verzeichnis namens `.hokey-filters` innerhalb des aktuellen Verzeichnisses
 * Ein Verzeichnis namens `${HOME}/.hokey-filters` , wobei `${HOME}` das Heimatverzeichnis des aktuellen Benutzers ist
 * Das eingebaute [Filterverzeichnis](https://github.com/cobbzilla/hokeylization/tree/master/util/filter)

 #### Filterparameter
 Die `filter` kann aus mehreren Wörtern bestehen. In diesem Fall ist das erste Wort der Filtername und
 die restlichen Wörter werden als Argumente an die `filter` Funktion übergeben

 ### Hilfe
 Verwenden Sie `-h` / `--help` , um Hilfe anzuzeigen

 ## JSON-Stapelbefehle
 Mit der Option `-j` / `--json` können Sie mehrere koordinierte `hokey` Befehle ausführen

 Konventionell heißt diese Datei `hokey.json` , aber Sie können sie beliebig benennen

 Wenn Sie ein Verzeichnis als `-j` Option übergeben, sucht `hokey` `hokey.json` in diesem Verzeichnis nach einer `hokey.json`

 Die JSON-Datei sollte ein Objekt enthalten. Innerhalb dieses Objekts sind seine Eigenschaftsnamen identisch mit
 die Befehlszeilenoptionen sowie eine zusätzliche Eigenschaft namens `hokey`

 Die Eigenschaft `hokey` ist ein Array von auszuführenden Befehlen. Die in diesen Befehlen deklarierten Eigenschaften werden
 Überschreiben Sie alle doppelten Deklarationen im äußeren Objekt.

 Innerhalb jedes Objekts im `hokey` sollten Sie einen `name` sowie die Eingabe- und Ausgabedateien angeben

 Hier ist ein Beispiel für eine `hokey.json`

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

 ### Mehrere Eingabedateien
 Übergeben Sie ein Array von Dateipfaden als `infiles` anstelle eines einzelnen Pfads `infile` , wie in diesem Beispiel:

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Indizes
 Bei Übersetzungen in viele Sprachen kann `hokey` eine Indexdatei erstellen, die alle vorgenommenen Übersetzungen auflistet
 und bietet Links zu ihnen

 *Beim Generieren von Indizes können Sie nur eine Eingabequelle haben*

 Übergeben Sie die Option `-I` / `--index` , der Wert ist, wo die Indexdatei generiert wird, die eine Datei sein kann
 oder ein Verzeichnis. Wenn es sich um ein Verzeichnis handelt, wird ein Standarddateiname verwendet, basierend auf der Vorlage (siehe unten).

 Verwenden Sie `-A` / `--index-template` , um festzulegen, wie die Indexausgabe formatiert wird. Sie können 'html' angeben,
 'markdown', 'text' oder der Dateipfad zu Ihrer eigenen [HandlebarsJS](https://handlebarsjs.com/)-Vorlage

 Wenn Sie ein eigenes Template angeben, müssen Sie auch eine Datei (kein Verzeichnis) für das `-I` / `--index`
 Möglichkeit

 ## Viel Spaß beim Übersetzen von Sprachen!

</pre>
