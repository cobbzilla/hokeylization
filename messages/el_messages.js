export default {
  err_fatal: 'ΘΑΝΑΤΙΚΟ ΣΦΑΛΜΑ: {{error}}',
  err_env_googleProjectId: 'Η μεταβλητή περιβάλλοντος GOOGLE_TRANSLATE_PROJECT_ID δεν έχει οριστεί',
  err_env_googleCredentials: 'Η μεταβλητή περιβάλλοντος GOOGLE_APPLICATION_CREDENTIALS δεν έχει οριστεί',
  err_option_processAs_invalid: 'Μη έγκυρη τιμή επιλογής για -p / --process-as : αυτή η επιλογή υποστηρίζει μόνο τιμές "text" ή "html"',
  err_infileNotFound: 'αρχείο εισόδου ή κατάλογος δεν βρέθηκε: {{ jsFile }}',
  err_cannotWriteSource: 'άρνηση αντικατάστασης της πηγής εισόδου (καθορίστηκε στις γλώσσες εξόδου): {{source}}',
  err_invalidOutfile: 'Το αναμενόμενο αρχείο θα περιέχει "LANG" (θα αντικατασταθεί με {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: αναμένεται το αρχείο {{ file }} να ξεκινά με "εξαγωγή προεπιλογής" ή "module.exports" αλλά βρέθηκε: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'μη έγκυρο json σε {{file}}',
  err_processFile_writeFile: '*** Σφάλμα κατά την εγγραφή στο αρχείο για {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Σφάλμα μετάφρασης: {{e}}',
  err_processing: '*** Μη αναμενόμενο σφάλμα: {{e}}',
  warn_missing_close_notranslate_tag: 'Από την έξοδο από τη μετάφραση έλειπε μια ετικέτα κλεισίματος όπου αναμενόταν. Ετικέτα {{ label }} , αριθμός γραμμής {{ lineNumber }} , γραμμή: {{ line }}',
  info_summary: 'Υπηρεσία γρήγορης μετάφρασης με χρήση του Google Translate\n Έκδοση {{VERSION}}',
  info_description: 'Ένα εργαλείο για προγραμματιστές. Με το hokeylization, η τοπική προσαρμογή της εφαρμογής σας μπορεί να είναι γρήγορη, διασκεδαστική και εύκολη!\n\n === Πηγή ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === ΑΠΑΙΤΟΥΜΕΝΕΣ μεταβλητές περιβάλλοντος ===\n * GOOGLE_TRANSLATE_PROJECT_ID: το έργο σας στο Google Translate\n * GOOGLE_APPLICATION_CREDENTIALS: αρχείο JSON των διαπιστευτήριών σας\n\n === Κωδικοί γλώσσας ISO ===\n Κατά τον καθορισμό κωδικών ISO (είτε γλώσσα εισαγωγής είτε γλώσσες προορισμού) χρησιμοποιήστε αυτούς τους κωδικούς:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'Κώδικας ISO για γλώσσες από τις οποίες μπορείτε να μεταφράσετε. Η προεπιλογή είναι {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Ο τύπος μπορεί να είναι κείμενο ή html. Η προεπιλογή είναι κείμενο',
  info_option_match: 'Κατά την επεξεργασία ενός καταλόγου, λάβετε υπόψη μόνο τα αρχεία που αντιστοιχούν σε αυτό το regex',
  info_option_excludes: 'Κατά την επεξεργασία ενός καταλόγου, εξαιρέστε ρητά αρχεία που ταιριάζουν με αυτά τα regex, ακόμα κι αν αντιστοιχούν στο regex `-m` / `--match`',
  info_option_filter: 'Κατά την επεξεργασία ενός καταλόγου: 1) απαιτείται αυτό το αρχείο JS, το οποίο πρέπει να εξάγει μια συνάρτηση με το όνομα `filter` η οποία παίρνει μια παράμετρο συμβολοσειράς και επιστρέφει μια συμβολοσειρά, και 2) εφαρμόζεται αυτή η συνάρτηση φίλτρου σε όλα τα αρχεία εξόδου προτού εγγραφούν',
  info_option_dryRun: 'Μην κάνετε εγγραφή αρχείων ή μην πραγματοποιείτε κλήσεις API στη Μετάφραση Google, αλλά καταγράψτε τι θα είχε γίνει',
  info_option_languages: 'Λίστα κωδικών ISO διαχωρισμένων με κόμματα για γλώσσες προς μετάφραση',
  info_option_outfile: 'Για επεξεργασία αρχείων JS: γράψτε την έξοδο JS σε αυτό το αρχείο\n Για επεξεργασία καταλόγου: γράψτε αρχεία σε αυτόν τον κατάλογο, ο οποίος θα δημιουργηθεί εάν δεν υπάρχει',
  info_option_force: 'Να δημιουργείτε πάντα νέες μεταφράσεις, αντικαθιστώντας τυχόν υπάρχοντα αρχεία εξόδου',
  info_option_handlebars: 'Βεβαιωθείτε ότι το περιεχόμενο {{ handlebars }} διατηρείται ως έχει και ΔΕΝ μεταφράζεται',
  info_option_markdown: 'Βεβαιωθείτε ότι το [markdown](https://links) διατηρείται σωστά, διαφορετικά εισάγεται ένα κενό μεταξύ του τέλους της περιγραφής του συνδέσμου σε αγκύλες και του ίδιου του συνδέσμου σε παρένθεση',
  info_arg_source: 'Η πηγή για τις μεταφράσεις. μπορεί να είναι ένα αρχείο JS ή ένας κατάλογος αρχείων προς μετάφραση',
  info_filter_applied: 'Το φίλτρο εφαρμόστηκε με επιτυχία πριν από τη σύνταξη: {{langFile}}',
  info_dryRun_key: '(στεγνό τρέξιμο) δεν γράφω μετάφραση για το κλειδί: {{key}}',
  info_dryRun_file: '(dry run) θα είχε γράψει αρχείο: {{langOut}}',
  warn_walk_readDir: 'περπάτημα ( {{dir}} ): σφάλμα ανάγνωσης: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): παρουσιάστηκε σφάλμα κατά την προσπάθεια καταχώρισης αρχείων στον κατάλογο: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): αυτή η διαδρομή δεν είναι κατάλογος',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): παράλειψη υπάρχοντος αρχείου: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Το αρχείο έχει γραφτεί: {{langFile}}',
  err_option_json_notFound: 'Το αρχείο JSON δεν βρέθηκε: {{ jsonFile }}',
  err_option_json_errorReading: 'Παρουσιάστηκε σφάλμα κατά την ανάγνωση ή ανάλυση του αρχείου JSON {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'Δεν έχουν καθοριστεί γλώσσες μετάφρασης. Χρησιμοποιήστε "-l" / "--languages" και καθορίστε μια λίστα κωδικών γλώσσας ISO διαχωρισμένη με κόμμα',
  err_option_outfile_required: 'Δεν καθορίστηκε αρχείο εξόδου ή κατάλογος. Χρησιμοποιήστε το «-o» / «--outfile» για να καθορίσετε το αρχείο ή τον κατάλογο εξόδου',
  err_noSources: 'δεν παρέχονται αρχεία πηγής για μετάφραση',
  info_option_jsonFile: 'Εκτελέστε πολλές εντολές hokey που καθορίζονται σε ένα αρχείο JSON. Εάν δεν παρέχεται αρχείο JSON, η εντολή αναζητά ένα αρχείο με το όνομα "hokey.json" στον τρέχοντα κατάλογο',
  info_option_indexFile: 'Δημιουργήστε ένα αρχείο ευρετηρίου για τις μεταφράσεις. Το όνομα αρχείου πρέπει να τελειώνει με ".html", ".md" ή ".txt", εκτός εάν παρέχετε ένα πρότυπο με "-A" / "--index-template"',
  info_option_indexTemplate: 'Αυτό μπορεί να είναι \'html\', \'markdown\', \'text\' ή μια διαδρομή προς το δικό σας πρότυπο τιμόνι. Αυτό το πρότυπο χρησιμοποιείται κατά τη δημιουργία του αρχείου ευρετηρίου. Δείτε τα προεπιλεγμένα πρότυπα στον πηγαίο κώδικα hokeyization για παραδείγματα',
  info_option_regular: 'Μεταφράστε τα αρχεία πηγής ως κανονικά αρχεία, χωρίς να μεταφράσετε αντικείμενα JavaScript που περιέχουν πόρους συμβολοσειρών. Η σημαία `-M` / `--markdown` υποδηλώνει αυτή τη σημαία.',
  info_arg_sources: 'Η πηγή(ες) για μεταφράσεις. Αυτό μπορεί να είναι ένα ή περισσότερα αρχεία ή κατάλογοι JavaScript',
  info_jsonProcessing_start: 'διαμόρφωση επεξεργασίας JSON: {{name}}',
  err_index_singleFileMultipleSources: 'Καθορίστηκε ένα μόνο αρχείο ευρετηρίου, αλλά υπάρχουν πολλά αρχεία εισόδου. Καθορίστε έναν κατάλογο αντί για ένα αρχείο για το ευρετήριο',
  err_index_targetDirAndNoTypeOrTemplate: 'Καθορίστηκε ένας κατάλογος προορισμού για το ευρετήριο, αλλά δεν καθορίστηκε πρότυπο ευρετηρίου. Χρησιμοποιήστε «-A» / «--indexTemplate» για να επιλέξετε ένα πρότυπο',
  err_index_parentDirDoesNotExist: 'Ο γονικός κατάλογος του ευρετηρίου δεν υπάρχει: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'Το όνομα αρχείου δεν έχει επέκταση, επομένως δεν μπορεί να προσδιοριστεί ένας τύπος προτύπου: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'Το όνομα αρχείου έχει μη έγκυρη επέκταση, επομένως δεν μπορεί να προσδιοριστεί ένας τύπος προτύπου: {{ file }}',
  err_index_templateLoadingError: 'Παρουσιάστηκε σφάλμα κατά τη φόρτωση του προσαρμοσμένου προτύπου {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'Παρουσιάστηκε σφάλμα κατά τη σύνταξη του προσαρμοσμένου προτύπου {{ file }} : {{ e }}',
  info_index_wroteFile: 'Το αρχείο ευρετηρίου δημιουργήθηκε με επιτυχία: {{ indexFile }}',
  label_indexOfTranslations: 'Ευρετήριο μεταφράσεων',
  label_findYourLanguageCode: 'Βρείτε τον κωδικό της γλώσσας σας',
  err_processing_unknown: '*** Μη αναμενόμενο σφάλμα: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'Δεν δημιουργήθηκε αρχείο εξόδου για τη γλώσσα {{ lang }} , επομένως θα εξαιρεθεί από το ευρετήριο',
  err_filter_loading: 'Το φίλτρο δεν βρέθηκε: {{ filter }}\n Το φίλτρο δεν βρέθηκε σε κανένα από τα εξής: τον τρέχοντα κατάλογο, τον κατάλογο ./.hokey-filters, τον κατάλογο ${HOME}/.hokey-filters ούτε τον ενσωματωμένο κατάλογο φίλτρων'
}