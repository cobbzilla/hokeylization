Hokeylizzazione
 ==============
 Il nome è un portmanteau, che significa "localizzazione hokey"

 È hokey perché è molto semplice: invia le stringhe a Google Translate

 Puoi tradurre:
 * un oggetto JavaScript contenente messaggi
 * una directory di file, ricorsivamente

 # Leggi questo in un'altra lingua
 Questo documento README.md è stato tradotto, utilizzando lo stesso strumento di hokeylization,
 in **[ogni lingua supportata da Google Translate](../README.md)!**

 Sono certa che non sia perfetto, ma spero sia meglio di niente!

 [🇸🇦 Arabo](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 Tedesco](../de/README.md)
 [🇺🇸 Inglese](../en/README.md)
 [🇪🇸 Spagnolo](../es/README.md)
 [🇫🇷 Francese](../fr/README.md)
 [🇹🇩 Hausa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonesiano](../id/README.md)
 [🇮🇹 Italiano](../it/README.md)
 [🇯🇵 Giapponese](../ja/README.md)
 [🇰🇷 Coreano](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 Polacco](../pl/README.md)
 [🇧🇷 Portoghese](../pt/README.md)
 [🇷🇺 Russo](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turco](../tr/README.md)
 [🇵🇰 Urdu](../ur/README.md)
 [🇻🇳 Vietnamita](../vi/README.md)
 [🇨🇳 Cinese](../zh/README.md)


 **[📚 ... Tutte le lingue ...](../README.md)**
 ----

 ### C'è un problema con questa traduzione del README?
 Questa particolare traduzione dell'originale [README](https://github.com/cobbzilla/yuebing/blob/master/README.md)
 potrebbe essere difettoso -- *le correzioni sono molto gradite!* Si prega di inviare una [richiesta pull su GitHub](https://github.com/cobbzilla/yuebing/pulls),
 o se non ti senti a tuo agio nel farlo, [apri un problema](https://github.com/cobbzilla/yuebing/issues)

 Quando crei un nuovo problema GitHub su una traduzione, esegui:
 * includi l'URL della pagina (copia/incolla dalla barra degli indirizzi del browser)
 * includi il testo esatto che è sbagliato (copia/incolla dal browser)
 * gentilmente offrire un suggerimento per una traduzione migliore
 * **Grazie!**

 # Contenuti
 * [Fonte](#Fonte)
 * [Supporto e finanziamento](#Supporto e finanziamento)
 * [Installazione](#Installazione)
 * [Configurazione](#Configurazione)
 * [Traduzione di un file di risorse stringa JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Tradurre una directory di file di testo](#Tradurre-una-directory-di-file-di-testo)
 * [Altre opzioni](#Altre-opzioni)

 ## Fonte
 * [hokeylization su GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization su npm](https://www.npmjs.com/package/hokeylization)

 ## Supporto e finanziamento
 Sto cercando di essere uno sviluppatore di software open source professionista. Ci ho lavorato
 nell'industria del software per molti anni, ho avviato società di successo e le ho vendute a società pubbliche.
 Recentemente ho perso il lavoro, e non ho altro in programma

 Quindi proverò a scrivere un software utile e vedere se funziona

 Apprezzerei sinceramente anche il più piccolo [contributo mensile tramite Patreon](https://www.patreon.com/cobbzilla)

 ## Installazione
 Per utilizzare lo strumento da riga di comando, installa usando `npm` o `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Per usarla come libreria, installa la versione `lite` , che è molto più piccola:

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Quindi guarda la guida per il comando `hokey` :

    hokey --help
    hokey -h

 Vuoi vedere l'output nella tua lingua o in un'altra lingua?

 `hokey` prova a rilevare automaticamente la lingua dalle variabili d'ambiente della tua shell

 Puoi forzare una lingua impostando la variabile d'ambiente `LC_ALL` :

    LC_ALL=it hokey --help

 Nota che se hai installato `hokeylization-lite` , la guida ai comandi è disponibile solo in inglese

 ## Impostare
 Imposta la variabile di ambiente `GOOGLE_TRANSLATE_PROJECT_ID` per identificare il tuo progetto Google Translate

 Imposta la variabile di ambiente `GOOGLE_APPLICATION_CREDENTIALS` sulle credenziali JSON che hai scaricato
 dopo aver capito come funziona l'autenticazione su Google cloud (può essere divertente)

 Se stai eseguendo dal codice sorgente, puoi anche inserirli in un file `.env` nel sorgente
 directory verranno caricati in fase di esecuzione tramite [dotenv](https://www.npmjs.com/package/dotenv)

 ## Traduzione di un file di risorse stringa JavaScript
 La tua tabella di stringhe **deve** essere in un file JavaScript in una di queste due forme:

 Esportazione ES6:

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Esportazione CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Se questo file è stato chiamato `myfile.en.js` , puoi tradurlo in spagnolo e tedesco con:

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 Il `LANG` in quanto sopra è speciale -- è una parola riservata in questo strumento!

 Il `LANG` viene sostituito con il codice della lingua per i file di output

 Quindi il comando sopra crea i file:

    myfile.es.js
    myfile.de.js

 L' `-l` / `--languages` è un elenco di codici lingua ISO separati da virgole
 [supportato da Google Translate](https://cloud.google.com/translate/docs/languages)

 Se il file di output esiste già, verrà esaminato per determinare quali chiavi esistono già.
 Le chiavi esistenti non verranno tradotte. Le traduzioni per le chiavi mancanti verranno generate e aggiunte
 alla fine dell'oggetto JS. L'intero file viene sempre riscritto.

 Per forzare la ritraduzione di tutte le chiavi, usa l' `-f` / `--force`

 ## Traduzione di una directory di file di testo
 Puoi anche tradurre una directory di file. l'hokeylizzazione visiterà ricorsivamente ogni
 file nella directory ed esegui il suo contenuto tramite Google Translate e salva l'output
 in un file con lo stesso nome in un albero di directory separato

 Quando la destinazione della tua traduzione è una directory, questa modalità è abilitata

 L' `-o` / `--outfile` specifica la directory di output

 **GRANDE AVVISO**: durante la traduzione delle directory, **NON** specificare una directory di output
 che è all'interno della tua directory di input! Se lo fai, dovrai:
 * indurre una ricorsione infinita
 * aumenta la tua fattura di Google
 * riempi il tuo disco
 * divertiti di meno

 Ecco un esempio di cosa *non fare*:

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Quando viene eseguito, i file tradotti vengono scritti in `templates/es` , e quindi diventano nuovi
 file sorgente da tradurre, poiché si trovano in `templates/` -- questo processo continua
 per sempre, non farlo!

 #### Uso corretto
 OK, supponiamo che tu abbia alcuni modelli di email in una directory:

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Per tradurre tutto questo in spagnolo e tedesco, esegui:

    hokey -l es,de -o templates/email/LANG templates/email/en

 In quanto sopra, `LANG` è una parola riservata e verrà sostituita con il codice della lingua ISO

 Cosa succede quando viene eseguito quanto sopra:
 * Verranno create le directory `templates/email/es` e `templates/email/de` (se non esistono)
 * Ogni file in `templates/email/en` sarà tradotto in spagnolo e tedesco
 * I file di output esistenti non verranno rigenerati a meno che non si utilizzi `-f` / `--force`
 * Ti ritroverai con una struttura di directory e file identici all'interno di `es` e `de` come quelli di `en`

 ## Altre opzioni

 ### Funzionamento a secco
 Passa `-n` / `--dry-run` per visualizzare cosa sarebbe stato fatto, ma in realtà non effettuare chiamate API o scrivere file

 ### Forza
 Passa `-f` / `--force` per rigenerare sempre le traduzioni, anche se esistono già

 ### Incontro
 Passa `-m` / `--match` per limitare i file elaborati durante l'esecuzione in modalità directory

 Potresti non voler sempre tradurre *ogni* file nella tua directory di origine nella tua directory di destinazione

 Il valore `-m` / `--match` è una regex (attenzione alle regole di citazione della shell!) che specifica
 quali file devono essere tradotti

 In caso di dubbio, puoi combinare questa opzione con `-n` / `--dry-run` per vedere quali file verrebbero tradotti

 ### Esclude
 A volte il tuo `-m` corrisponde a troppi file. Usa l' `-e` / `--excludes` per escludere esplicitamente
 file che altrimenti avrebbero corrisposto

 Puoi elencare più espressioni regolari, separate da spazi

 Un uso comune sarebbe: `--excludes node_modules dist \.git build tmp`

 ### Manubri
 Le stringhe da tradurre potrebbero contenere modelli `{{ handlebars }}` , con due o tre parentesi graffe

 Probabilmente *NON* vuoi che le cose all'interno di quei modelli vengano tradotte

 Passa il `-H` / `--handlebars` e qualsiasi cosa all'interno di `{{ ... }}` non verrà tradotta

 ### Ribasso
 Markdown non è né testo né html, quindi Google Translate ha alcune difficoltà con esso

 Il `-M` / `--markdown` abilita una gestione speciale per i file markdown

 Hokeylizer gestisce le cose in modo decente, ma con i file markdown, potresti spesso avere questi problemi:
 * Collegamenti interrotti. Nella traduzione, viene visualizzato uno spazio dopo che la descrizione di un collegamento markdown termina (con `]` ) ma
 prima che il suo collegamento di destinazione inizi (con `(` ). Ciò causa un rendering errato del markdown e il collegamento
 è rotto durante la visualizzazione del documento.
 * I blocchi di codice vengono tradotti. Google Translate non sa cosa markdown considera il codice e cosa no
 * Spaziatura errata per i blocchi di codice rientrati. La spaziatura è difficile da preservare nella traduzione
 * Le cose all'interno di `backticks` verranno tradotte, quando quasi sempre vorrai che siano valori letterali

 Quando il `-M` / `--markdown` è abilitato:
 * Il pattern `] (` sarà condensato in `](` così i link di markdown interrotti
 * Un wrapper "no translate" verrà posizionato attorno ai blocchi di codice rientrati, preservando la corretta indentazione e assicurando che non vengano tradotti
 * Un wrapper "nessuna traduzione" verrà posizionato attorno al testo all'interno di `backticks` per garantire che non vengano tradotti

 ### Elabora come
 Normalmente tutto viene elaborato come testo normale

 Se il tuo contenuto è HTML, verrà alterato a meno che tu non passi l' `-p html` / `--process-as html`

 ### Filtro
 Per gli avventurosi: durante l'elaborazione di file in una directory, puoi passare l' `-F` / `--filter` --filter`
 per filtrare l'output prima che venga scritto nel filesystem

 Il valore di questa opzione deve essere un percorso di un file JS che esporta una funzione denominata `filter`

 La funzione `filter` deve essere `async` perché su di essa verrà chiamato `await`

 Prima che i file vengano scritti su disco, l'intero contenuto del file verrà passato alla funzione `filter` come una stringa

 Il valore restituito dalla funzione `filter` è ciò che verrà effettivamente scritto nella memoria

 Quindi, hai il controllo totale su ciò che verrà finalmente scritto

 ### Aiuto
 Usa `-h` / `--help` per mostrare la guida

 ## Buona traduzione!

</pre>
