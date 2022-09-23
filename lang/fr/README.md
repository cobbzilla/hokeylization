Hokeyylisation
 =============
 Pourquoi ne puis-je pas exécuter l'intégralité de mon application ou de mon site via Google Traduction et obtenir une traduction de base dans une autre langue ?

 ***Maintenant vous pouvez!***

 Le nom `hokeylization` est un mot-valise, signifiant "localisation hokey"

 C'est un peu hokey parce que c'est très simple : ça envoie des chaînes à Google Translate

 Et c'est simple, mais aussi très puissant. Il a un support spécial pour les documents HTML,
 [HandlebarsJS](https://handlebarsjs.com/) modèles,
 et [Markdown](https://daringfireball.net/projects/markdown).

 Tu peux traduire:
 * un objet JavaScript contenant des messages
 * n'importe quel nombre de fichiers ou de répertoires, parcourant toujours les répertoires de manière récursive

 # Lire ceci dans une autre langue
 Ce document README.md a été traduit, à l'aide de l'outil de hokeyylisation lui-même, en
 **[toutes les langues prises en charge par Google Translate](https://cloud.google.com/translate/docs/languages) !**

 Je suis certain que ce n'est pas parfait, mais j'espère que c'est mieux que rien !

 [🇸🇦 Arabe](../ar/README.md)
 [🇧🇩 Bengali](../bn/README.md)
 [🇩🇪 allemand](../de/README.md)
 [🇺🇸 Anglais](../en/README.md)
 [🇪🇸 Espagnol](../es/README.md)
 [🇫🇷 Français](../fr/README.md)
 [🇹🇩 Haoussa](../ha/README.md)
 [🇮🇳 Hindi](../hi/README.md)
 [🇮🇩 Indonésien](../id/README.md)
 [🇮🇹 Italien](../it/README.md)
 [🇯🇵 japonais](../ja/README.md)
 [🇰🇷 coréen](../ko/README.md)
 [🇮🇳 Maranthi](../mr/README.md)
 [🇵🇱 polonais](../pl/README.md)
 [🇧🇷 portugais](../pt/README.md)
 [🇷🇺 russe](../ru/README.md)
 [🇰🇪 Swahili](../sw/README.md)
 [🇵🇭 Tagalog](../tl/README.md)
 [🇹🇷 Turc](../tr/README.md)
 [🇵🇰 Ourdou](../ur/README.md)
 [🇻🇳 Vietnamien](../vi/README.md)
 [🇨🇳 chinois](../zh/README.md)


 **[📚 ... Toutes les langues ...](../README.md)**
 ----

 ### Y a-t-il un problème avec cette traduction du README ?
 Cette traduction particulière de l'original [README](https://github.com/cobbzilla/hokeylization/blob/master/README.md)
 peut être défectueux -- *les corrections sont les bienvenues !* Veuillez envoyer une [pull request on GitHub](https://github.com/cobbzilla/hokeylization/pulls),
 ou si vous n'êtes pas à l'aise pour le faire, [ouvrez un problème](https://github.com/cobbzilla/hokeylization/issues)

 Lorsque vous créez un nouveau ticket GitHub à propos d'une traduction, veuillez faire :
 * inclure l'URL de la page (copier/coller depuis la barre d'adresse du navigateur)
 * inclure le texte exact qui est erroné (copier/coller depuis le navigateur)
 * veuillez décrire ce qui ne va pas -- la traduction est-elle incorrecte ? le formatage est-il cassé d'une manière ou d'une autre ?
 * veuillez suggérer une meilleure traduction, ou comment le texte doit être correctement formaté
 * **Merci!**

 # Contenu
 * [Source](#Source)
 * [Soutien et financement](#Soutien-et-Financement)
 * [Installation](#Installation)
 * [Configuration](#Configuration)
 * [Traduction d'un fichier de ressources de chaîne JavaScript](#Translating-a-JavaScript-string-resource-file)
 * [Traduction d'un répertoire de fichiers texte](#Translating-a-directory-of-text-files)
 * [Autres options](#Autres-options)
 * [Commandes batch JSON](#Commandes-batch-JSON)

 ## La source
 * [hokeylisation sur GitHub](https://github.com/cobbzilla/hokeylization)
 * [hokeylization sur npm](https://www.npmjs.com/package/hokeylization)

 ## Soutien et financement
 J'essaie d'être un développeur professionnel de logiciels open source. j'ai travaillé dans
 l'industrie du logiciel depuis de nombreuses années, j'ai lancé des entreprises prospères et les ai vendues à des sociétés ouvertes.
 Récemment, j'ai perdu mon emploi et je n'ai pas vraiment d'autre travail en vue

 Je vais donc essayer d'écrire un logiciel utile et voir si cela fonctionne

 Si vous aimez utiliser ce logiciel, je serais si heureux de recevoir même le
 la plus petite [contribution mensuelle via Patreon](https://www.patreon.com/cobbzilla)

 *Merci!*

 ## Installation
 Pour utiliser l'outil de ligne de commande, installez en utilisant `npm` ou `yarn` :

    npm install -g hokeylization
    yarn global add hokeylization

 Pour l'utiliser comme bibliothèque, installez la version `lite` ", qui est beaucoup plus petite :

    npm install -g hokeylization-lite
    yarn global add hokeylization-lite

 Ensuite, regardez l'aide de la commande `hokey` :

    hokey --help
    hokey -h

 Vous voulez voir la sortie dans votre langue ou dans une autre langue ?

 `hokey` essaie de détecter automatiquement la langue à partir des variables d'environnement de votre shell

 Vous pouvez forcer une langue en définissant la variable d'environnement `LC_ALL` :

    LC_ALL=it hokey --help

 Notez que si vous avez installé `hokeylization-lite` , l'aide de la commande n'est disponible qu'en anglais

 ## Installer
 Définissez la variable d'environnement `GOOGLE_TRANSLATE_PROJECT_ID` pour identifier votre projet Google Traduction

 Définissez la variable d'environnement `GOOGLE_APPLICATION_CREDENTIALS` sur les informations d'identification JSON que vous avez téléchargées
 après avoir compris comment l'authentification fonctionne sur Google cloud (cela peut être amusant)

 Si vous exécutez à partir du code source, vous pouvez également les mettre dans un fichier `.env` dans la source
 répertoire, ils seront chargés au moment de l'exécution via [dotenv](https://www.npmjs.com/package/dotenv)

 ## Traduction d'un fichier de ressources de chaîne JavaScript
 Votre table de chaînes **doit** se trouver dans un fichier JavaScript sous l'une de ces deux formes :

 Exportation ES6 :

    export default {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Exportation CommonJS

    module.exports = {
      string_key: "some value",
      another_key: "another value",
      ... more keys ...
    }

 Si ce fichier s'appelait `myfile.en.js` , vous pouvez le traduire en espagnol et en allemand avec :

    hokey -l es,de -o myfile.LANG.js myfile.en.js

 Le `LANG` ci-dessus est spécial -- c'est un mot réservé dans cet outil !

 Le `LANG` est remplacé par le code de langue pour les fichiers de sortie

 Ainsi, la commande ci-dessus crée les fichiers :

    myfile.es.js
    myfile.de.js

 L' `-l` / `--languages` est une liste de codes de langue ISO séparés par des virgules
 [pris en charge par Google Traduction](https://cloud.google.com/translate/docs/languages)

 Si le fichier de sortie existe déjà, il sera examiné pour déterminer quelles clés existent déjà.
 Les clés existantes ne seront pas traduites. Les traductions des clés manquantes seront générées et ajoutées
 à la fin de l'objet JS. Le fichier entier est toujours réécrit.

 Pour forcer la retraduction de toutes les clés, utilisez l' `-f` / `--force`

 ## Traduction d'un répertoire de fichiers texte
 Vous pouvez également traduire un répertoire de fichiers. hokeylization visitera récursivement chaque
 fichier dans le répertoire et exécutez son contenu via Google Translate, et enregistrez la sortie
 à un fichier portant le même nom dans une arborescence de répertoires distincte

 Lorsque la cible de votre traduction est un répertoire, ce mode est activé

 L' `-o` / `--outfile` spécifie le répertoire de sortie

 **GRAND AVERTISSEMENT** : lors de la traduction de répertoires, **NE PAS** spécifier un répertoire de sortie
 qui se trouve dans votre répertoire d'entrée ! Si vous faites cela, vous allez :
 * induire une récursivité infinie
 * augmenter votre facture Google
 * remplir votre disque
 * s'amuser moins

 Voici un exemple de ce qu'il ne faut *pas faire* :

    hokey -l es -o templates/es templates # <--- DON'T DO THIS!

 Lorsque cela s'exécute, les fichiers traduits sont écrits dans `templates/es` , et deviennent ainsi de nouveaux
 fichiers source à traduire, puisqu'ils sont sous `templates/` -- ce processus continue
 pour toujours, ne le fais pas !

 #### Usage correct
 OK, disons que vous avez des modèles d'e-mails dans un répertoire :

    templates/email/en/welcome.txt
    templates/email/en/welcome.html
    templates/email/en/verify-account.txt
    templates/email/en/verify-account.html
    templates/email/en/reset-password.txt
    templates/email/en/reset-password.html

 Pour traduire tout cela en espagnol et en allemand, exécutez :

    hokey -l es,de -o templates/email/LANG templates/email/en

 Dans ce qui précède, `LANG` est un mot réservé et sera remplacé par le code de langue ISO

 Que se passe-t-il lorsque ce qui précède s'exécute :
 * Les `templates/email/es` et `templates/email/de` seront créés (s'ils n'existent pas)
 * Chaque fichier dans `templates/email/en` sera traduit en espagnol et en allemand
 * Les fichiers de sortie existants ne seront pas régénérés à moins que vous n'utilisiez `-f` / `--force`
 * Vous vous retrouverez avec une structure de répertoires et des fichiers identiques dans `es` et `de` comme vous avez sous `en`

 ## Autres options

 ### Essai à sec
 Passez `-n` / `--dry-run` pour afficher ce qui serait fait, mais n'effectuez pas d'appels d'API ni n'écrivez de fichiers

 ### Force
 Passez `-f` / `--force` pour toujours régénérer les traductions, même si elles existent déjà

 ### Match
 Passez `-m` / `--match` pour limiter les fichiers traités lors de l'exécution en mode répertoire

 Vous ne voudrez peut-être pas toujours traduire *tous* les fichiers de votre répertoire source vers votre répertoire cible

 La valeur de l' `-m` / `--match` est une expression régulière (attention aux règles de citation du shell !) qui spécifie
 quels fichiers doivent être traduits

 En cas de doute, vous pouvez combiner cette option avec `-n` / `--dry-run` pour voir quels fichiers seraient traduits

 ### Exclut
 Parfois, votre `-m` correspond à trop de fichiers. Utilisez l' `-e` / `--excludes` pour exclure explicitement
 fichiers qui, autrement, auraient correspondu

 Vous pouvez lister plusieurs regex, séparés par des espaces

 Une utilisation courante serait : `--excludes node_modules dist \.git build tmp`

 ### Guidon
 Les chaînes à traduire peuvent contenir des modèles `{{ handlebars }}` , soit avec deux ou trois accolades

 Vous ne voulez probablement * PAS * que les éléments contenus dans ces modèles soient traduits

 Passez le `-H` / `--handlebars` , et tout ce qui se trouve entre `{{ ... }}` ne sera pas traduit

 ### Markdown
 Markdown n'est ni texte ni html, donc Google Translate a quelques difficultés avec ça

 Le `-M` / `--markdown` permet une gestion spéciale des fichiers de démarquage

 Avec les fichiers Markdown, si vous n'utilisez pas le drapeau `-M` , vous rencontrerez probablement ces problèmes :
 * Liens brisés. Dans la traduction, un espace apparaît après la fin d'une description de lien de démarquage (avec `]` ) mais
 avant que son lien cible ne commence (avec `(` ). Cela entraîne un rendu incorrect du démarquage et le lien
 est cassé lors de la visualisation du document.
 * Les blocs de code sont traduits. Google Translate ne sait pas ce que Markdown considère comme du code et ce qu'il ne sait pas
 * Espacement incorrect pour les blocs de code en retrait. L'espacement est difficile à conserver dans la traduction
 * Les choses à l'intérieur de `backticks` seront traduites, alors que vous voulez presque toujours qu'elles soient des valeurs littérales

 Lorsque le `-M` / `--markdown` est activé :
 * Le motif `](` sera condensé en `](` corrigeant ainsi les liens de démarquage rompus
 * Un wrapper "sans traduction" sera placé autour des blocs de code indentés, préservant l'indentation appropriée et garantissant qu'ils ne sont pas traduits
 * Un wrapper "pas de traduction" sera placé autour du texte dans `backticks` pour s'assurer qu'ils ne sont pas traduits

 ### Traiter comme
 Normalement, tout est traité comme du texte brut

 Si votre contenu est HTML, il sera mutilé à moins que vous ne passiez l' `-p html` / `--process-as html`

 ### Filtre
 Pour les aventuriers : lors du traitement de fichiers dans un répertoire, vous pouvez passer l' `-F` / `--filter`
 pour filtrer la sortie avant qu'elle ne soit écrite dans le système de fichiers

 La valeur de cette option doit être un chemin vers un fichier JS qui exporte une fonction nommée `filter`

 La fonction `filter` doit être `async` car `await` sera appelée dessus

 Avant que les fichiers ne soient écrits sur le disque, tout le contenu du fichier sera transmis à la fonction `filter` sous forme de chaîne

 La valeur de retour de la fonction `filter` est ce qui sera réellement écrit dans le stockage

 Ainsi, vous avez un contrôle total sur ce qui sera finalement écrit

 Le script `filter` sera recherché dans les emplacements suivants (avec `.js` sera ajouté au filtre
 name, à moins qu'il ne se termine déjà par `.js` )
 * Le répertoire courant
 * Un répertoire nommé `.hokey-filters` dans le répertoire courant
 * Un répertoire nommé `${HOME}/.hokey-filters` , où `${HOME}` est le répertoire personnel de l'utilisateur actuel
 * Le [répertoire des filtres] intégré (https://github.com/cobbzilla/hokeylization/tree/master/util/filter)

 #### Paramètres de filtre
 La chaîne `filter` peut être composée de plusieurs mots. Dans ce cas, le premier mot est le nom du filtre, et
 les mots restants seront passés en arguments à la fonction `filter`

 ### Aider
 Utilisez `-h` / `--help` pour afficher l'aide

 ## Commandes batch JSON
 Avec l' `-j` / `--json` , vous pouvez exécuter plusieurs commandes `hokey` coordonnées

 Par convention, ce fichier s'appelle `hokey.json` , mais vous pouvez le nommer comme vous le souhaitez

 Si vous passez un répertoire en tant `-j` , `hokey` recherchera un `hokey.json` dans ce répertoire

 Le fichier JSON doit contenir un objet. Dans cet objet, ses noms de propriété sont les mêmes que
 les options de ligne de commande, plus une propriété supplémentaire nommée `hokey`

 La propriété `hokey` est un tableau de commandes à exécuter. Les propriétés déclarées dans ces commandes seront
 remplacer toutes les déclarations en double dans l'objet externe.

 Dans chaque objet du tableau `hokey` , vous devez spécifier un `name` , et les fichiers d'entrée et de sortie

 Voici un exemple de `hokey.json`

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

 ### Plusieurs fichiers d'entrée
 Transmettez un tableau de chemins de fichiers en tant que `infiles` au lieu d'un seul chemin `infile` , comme dans cet exemple :

    {
      ... [
        {
          "name": "my docs",
          "infiles": ["README.md", "INSTALL.md", "TUTORIAL.md"],
          "outfile": "docs/LANG/",
          "markdown": true
      ]
    }

 ### Index
 Lors de la traduction dans de nombreuses langues, `hokey` peut créer un fichier d'index qui répertorie toutes les traductions effectuées
 et fournit des liens vers eux

 *Lors de la génération d'index, vous ne pouvez avoir qu'une seule source d'entrée*

 Passez l' `-I` / `--index` , la valeur est l'endroit où le fichier d'index sera généré, qui peut être un fichier
 ou un répertoire. S'il s'agit d'un répertoire, un nom de fichier par défaut sera utilisé, basé sur le modèle (voir ci-dessous)

 Utilisez `-A` / `--index-template` pour déterminer comment la sortie de l'index est formatée. Vous pouvez spécifier 'html',
 'markdown', 'text' ou le chemin du fichier vers votre propre modèle [HandlebarsJS](https://handlebarsjs.com/)

 Si vous spécifiez votre propre modèle, vous devez également spécifier un fichier (pas un répertoire) pour le `-I` / `--index`
 option

 ## Amusez-vous à traduire des langues !

</pre>
