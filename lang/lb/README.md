Hokeylizéierung
 ==============
 Den Numm ass e Portmanteau, dat heescht 'Hokey Lokalisatioun'

 Et ass hokey well et ganz einfach ass: et schéckt Saiten op Google Translate

 Dir kënnt iwwersetzen:
 * e JavaScript Objet mat Messagen
 * e Verzeechnes vu Fichieren, rekursiv

 # Liest dëst an enger anerer Sprooch
 Dëst README.md Dokument gouf iwwersat, mam Hokeylizéierungsinstrument selwer, an
 **[all Sprooch ënnerstëtzt vu Google Translate](https://cloud.google.com/translate/docs/languages)!**

 Ech si sécher datt et net perfekt ass, awer ech hoffen et ass besser wéi näischt!

 [🇸🇦 Arabesch](../ar/README.md)
 [🇧🇩 Bengalesch](../bn/README.md)
 [🇩🇪 Däitsch](../de/README.md)
 [🇺🇸 Englesch](../en/README.md)
 [🇪🇸 Spuenesch](../es/README.md)
 [🇫🇷 Franséisch](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 indonesesch](../id/README.md)
 [🇮🇹 Italienesch](../it/README.md)
 [🇯🇵 Japanesch](../ja/README.md)
 [🇰🇷 Koreanesch](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polnesch](../pl/README.md)
 [🇧🇷 Portugisesch](../pt/README.md)
 [🇷🇺 Russesch](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 tierkesch](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamesesch](../vi/README.md)
 [🇨🇳 Chinesesch](../zh/README.md)


 **[📚 ... All Sproochen ...](../README.md)**
 ----

 ### Gëtt et e Problem mat dëser Iwwersetzung vum README?
 Dës speziell Iwwersetzung vum Original [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 kann fehlerhaft sinn -- *Korrekturen si ganz wëllkomm!* Schéckt w.e.g. eng [Pull Ufro op GitHub](https://github.com/cobbzilla/yuebing/pulls),
 oder wann Dir net bequem sidd dat ze maachen, [maacht en Thema op](https://github.com/cobbzilla/yuebing/issues)

 Wann Dir en neit GitHub Thema iwwer eng Iwwersetzung erstellt, maacht w.e.g.:
 * enthält d'Säit URL (Kopie / Paste vun der Adressbar vum Browser)
 * enthält den exakten Text dee falsch ass (copy/paste vum Browser)
 * bitt frëndlech e Virschlag fir eng besser Iwwersetzung
 * **Merci!**

 # Inhalter
 * [Source](#Source)
 * [Support a Finanzéierung](#Support-a-Finanzéierung)
 * [Installatioun](#Installatioun)
 * [Setup](#Setup)
 * [Eng JavaScript String Ressource Datei iwwersetzen] (#Iwwersetzen-e-JavaScript-String-Ressource-Datei)
 * [E Verzeechnes vun Textdateien iwwersetzen] (#Iwwersetzen-en-Verzeechnes-vun-Text-Dateien)
 * [Aner Optiounen] (#Aner-Optiounen)

 ## Quell
 * [Hokeylization op GitHub](https://github.com/cobbzilla/hokeylization)
 * [Hokeylization op npm](https://www.npmjs.com/package/hokeylization)

 ## Ënnerstëtzung a Finanzéierung
 Ech probéieren e professionnelle Open Source Software Entwéckler ze sinn. Ech hu geschafft an
 der Software Industrie fir vill Joren, Ech hunn erfollegräich Betriber ugefaangen a verkaf hinnen un ëffentlech Firmen.
 Viru kuerzem hunn ech meng Aarbecht verluer, an ech hu wierklech keng aner Aarbecht opgestallt

 Also ech probéieren hëllefräich Software ze schreiwen a kucken ob dat funktionnéiert

 Ech schätzen och déi klengst [monatlecht Bäitrag iwwer Patreon](https://www.patreon.com/cobbzilla)

 ## Installatioun
 Fir de Kommandozeil-Tool ze benotzen, installéiere mat `npm` oder `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Fir als Bibliothéik ze benotzen, installéiert d' `lite` Versioun, déi vill méi kleng ass:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Da kuckt d'Hëllef fir de `hokey` Kommando:

    hokey --help
    hokey -h

 Wëllt Dir d'Ausgab an Ärer Sprooch oder enger anerer Sprooch gesinn?

 `hokey` probéiert d'Sprooch automatesch aus den Ëmfeldvariablen vun Ärer Shell z'entdecken

 Dir kënnt eng Sprooch forcéieren andeems Dir d' `LC_ALL` :

    LC_ALL=it hokey --help

 Notéiert datt wann Dir `hokeylization-lite` installéiert hutt, Kommando Hëllef ass nëmmen op Englesch verfügbar

 ## Ageriicht
 Setzt d' `GOOGLE_TRANSLATE_PROJECT_ID` fir Äre Google Translate Projet z'identifizéieren

 Setzt d' `GOOGLE_APPLICATION_CREDENTIALS` op d'JSON Umeldungsinformatiounen déi Dir erofgelueden hutt
 nodeems ech erausfonnt hunn wéi d'Authentifikatioun op Google Cloud funktionnéiert (et kann lëschteg sinn)

 Wann Dir aus dem Quellcode leeft, kënnt Dir dës och an eng `.env` Datei an der Quell setzen
 Verzeechnes gi se während der Runtime iwwer [dotenv] (https://www.npmjs.com/package/dotenv) gelueden

 ## Eng JavaScript String Ressource Datei iwwersetzen
 Är String Tabell **muss** an enger JavaScript Datei an enger vun dësen zwou Formen sinn:

 ES6 Export:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 CommonJS exportéieren

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Wann dëse Fichier `myfile.en.js` genannt gouf, kënnt Dir en op Spuenesch an Däitsch iwwersetzen mat:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 D' `LANG` an der uewen ass speziell - et ass e reservéiert Wuert an dësem Tool!

 Den `LANG` gëtt mam Sproochcode fir d'Ausgabdateien ersat

 Also erstellt de Kommando uewen d'Dateien:

    myfile.es.js
    myfile.de.js

 D' `-l` / `--languages` ass eng komma-getrennte Lëscht vun ISO Sproochcoden
 [ënnerstëtzt vu Google Translate](https://cloud.google.com/translate/docs/languages)

 Wann d'Ausgabdatei scho existéiert, gëtt se iwwerpréift fir ze bestëmmen wéi eng Schlëssele scho existéieren.
 Bestehend Schlësselen ginn net iwwersat. Iwwersetzunge fir fehlend Schlësselen ginn generéiert an ugeschloss
 bis zum Enn vum JS Objet. De ganze Fichier gëtt ëmmer nei geschriwwen.

 Fir d'Wiederiwwersetzung vun all Schlësselen ze zwéngen, benotzt d' `-f` / `--force`

 ## Iwwersetzen vun engem Verzeechnes vun Textdateien
 Dir kënnt och e Verzeechnes vu Fichieren iwwersetzen. hokeylization wäert rekursiv besicht all
 Datei am Verzeechnes a lafen säin Inhalt iwwer Google Iwwersetzer, a späichert d'Ausgab
 op eng identesch benannt Datei an engem getrennten Verzeichnisbaum

 Wann d'Zil vun Ärer Iwwersetzung e Verzeechnes ass, ass dëse Modus aktivéiert

 D' `-o` / `--outfile` spezifizéiert den Ausgangsverzeechnes

 ** BIG OPGEPASST **: Wann Dir Verzeichnisser iwwersetzt, ** NET ** spezifizéiert en Ausgangsverzeechnes
 dat ass an Ärem Input Verzeichnis! Wann Dir dëst maacht, wäert Dir:
 * induzéieren onendlech Rekursioun
 * lafen Är Google Rechnung op
 * Fëllt Är Disk aus
 * manner Spaass hunn

 Hei ass e Beispill vu wat *net ze maachen*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Wann dëst leeft, ginn iwwersat Dateien op `templates/es` , a ginn domat nei
 Quelldateien fir ze iwwersetzen, well se ënner `templates/` stinn -- dëse Prozess geet weider
 fir ëmmer, maachen et net!

 #### Korrekt Benotzung
 OK, loosst eis soen datt Dir e puer E-Mail Templates an engem Verzeechnes hutt:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Fir all dës op Spuenesch an Däitsch ze iwwersetzen, lafen:

    hokey -l es,de -o templates/email/LANG templates/email/en

 An der uewen ass `LANG` e reservéiert Wuert a gëtt duerch den ISO Sproochcode ersat

 Wat geschitt wann dat hei uewen leeft:
 * D `templates/email/es` ' an `templates/email/de` Verzeichnisser ginn erstallt (wann se net existéieren)
 * All Datei an `templates/email/en` gëtt op Spuenesch an Däitsch iwwersat
 * Bestehend Ausgangsdateien ginn net regeneréiert ausser Dir benotzt `-f` / `--force`
 * Dir wäert mat enger identescher Verzeechnesstruktur a Dateien bannent `es` an `de` wéi Dir ënner `en`

 ## Aner Optiounen

 ### Dréchent Laf
 `-n` / `--dry-run` fir ze weisen wat géif gemaach ginn, awer maacht keng API Uruff oder schreift keng Dateien

 ### Kraaft
 Pass `-f` / `--force` fir ëmmer Iwwersetzungen ze regeneréieren, och wa se scho existéieren

 ### Match
 Pass `-m` / `--match` fir d'Fichier'en ze limitéieren déi veraarbecht ginn wann se am Verzeechnes-Modus lafen

 Dir wëllt vläicht net ëmmer *all* Datei an Ärem Quellverzeechnes an Ären Zilverzeechnes iwwersetzen

 De Wäert vun der `-m` / `--match` Optioun ass e Regex (opgepasst Shell Zitéiere Regelen!)
 wéi eng Dateie sollen iwwersat ginn

 Wann Dir Zweifel hutt, kënnt Dir dës Optioun mat `-n` / `--dry-run` fir ze kucken wéi eng Dateien iwwersat ginn

 ### Ausgeschloss
 Heiansdo passt Ären `-m` ze vill Dateien. Benotzt d' `-e` / `--excludes` fir explizit auszeschléissen
 Dateien déi soss matenee passen

 Dir kënnt verschidde Regexes oplëschten, getrennt vu Plazen

 Eng allgemeng Benotzung wier: `--excludes node_modules dist \.git build tmp`

 ### Lenker
 D'Strings fir ze iwwersetzen kënnen `{{ handlebars }}` Schabloune enthalen, entweder mat zwee oder dräi Curly Klameren

 Dir wëllt wahrscheinlech *NET* datt d'Saachen an deene Templates iwwersat ginn

 Gitt den `-H` / `--handlebars` Fändel laanscht, an alles bannent `{{ ... }}` gëtt net iwwersat

 ### Markdown
 Markdown ass weder Text nach HTML, sou datt Google Translate e puer Schwieregkeeten huet

 Den `-M` / `--markdown` Fändel erméiglecht speziell Handhabung fir Markdown Dateien

 Hokeylizer handhabt Saachen anstänneg gutt, awer mat Markdown-Dateien, kënnt Dir dacks dës Probleemer:
 * Broken Linken. An der Iwwersetzung erschéngt e Raum Charakter nodeems eng Markdown Link Beschreiwung eriwwer ass (mat `]` ) awer
 ier säin Zillink ufänkt (mat `(` ). Dëst bewierkt datt d'Markdown falsch rendert, an de Link
 ass gebrach wann Dir d'Dokument kuckt.
 * Code Blocks ginn iwwersat. Google Translate weess net wat Markdown als Code ugesinn a wat et net
 * Falsch Abstand fir indented Code Blocks. Abstand ass schwéier an der Iwwersetzung ze erhaalen
 * D'Saache bannent `backticks` " ginn iwwersat, wann Dir bal ëmmer wëllt datt se wuertwiertlech Wäerter sinn

 Wann de `-M` / `--markdown` Fändel aktivéiert ass:
 * D'Muster `] (` wäert op `](` kondenséiert ginn, sou datt déi futtis Markdown Links fixéiert ginn
 * E "no translate" Wrapper gëtt ronderëm agedréckte Codeblocken plazéiert, déi richteg Abriecher behalen an sécherstellen datt se net iwwersat ginn
 * E "no translate" Wrapper gëtt ronderëm den Text bannent `backticks` fir sécherzestellen datt se net iwwersat ginn

 ### Prozess-as
 Normalerweis gëtt alles als Kloertext veraarbecht

 Wann Ären Inhalt HTML ass, gëtt et vermëscht ausser Dir passéiert d' `-p html` " / `--process-as html`

 ### Filter
 Fir Abenteuer: Wann Dir Dateien an engem Verzeichnis veraarbecht, kënnt Dir d'Optioun `-F` / `--filter`
 fir den Ausgang ze filteren ier se an de Dateiesystem geschriwwe gëtt

 De Wäert vun dëser Optioun muss e Wee zu enger JS-Datei sinn, déi eng Funktioun mam Numm `filter`

 D' `filter` muss `async` , well `await` op se opgeruff gëtt

 Ier Dateien op Disk geschriwwe ginn, gëtt de ganze Fichierinhalt un d' `filter` als String weiderginn

 De `filter` vun der "Filter" Funktioun ass wat tatsächlech op d'Späichere geschriwwe gëtt

 Also hutt Dir total Kontroll iwwer dat wat endlech geschriwwe gëtt

 ### Hëllef
 Benotzt `-h` / `--help` fir Hëllef ze weisen

 ## Happy Iwwersetzung!

</pre>
