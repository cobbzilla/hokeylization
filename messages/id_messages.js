export default {
  err_fatal: 'KESALAHAN FATAL: {{error}}',
  err_env_googleProjectId: 'Variabel lingkungan GOOGLE_TRANSLATE_PROJECT_ID tidak ditentukan',
  err_env_googleCredentials: 'Variabel lingkungan GOOGLE_APPLICATION_CREDENTIALS tidak ditentukan',
  err_option_processAs_invalid: 'Nilai opsi tidak valid untuk -p / --process-as : opsi ini hanya mendukung nilai \'teks\' atau \'html\'',
  err_infileNotFound: 'masukan file atau direktori tidak ditemukan: {{ jsFile }}',
  err_cannotWriteSource: 'menolak untuk menimpa sumber input (ditentukan dalam bahasa output): {{source}}',
  err_invalidOutfile: 'outfile yang diharapkan berisi \'LANG\' (akan diganti dengan {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: file yang diharapkan {{ file }} untuk memulai dengan \'ekspor default\' atau \'module.ekspor\' tetapi ditemukan: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'json tidak valid di {{file}}',
  err_processFile_writeFile: '*** Kesalahan menulis ke outfile untuk {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Kesalahan menerjemahkan: {{e}}',
  err_processing: '*** Kesalahan tak terduga: {{e}}',
  warn_missing_close_notranslate_tag: 'Keluaran dari terjemahan tidak memiliki tag penutup yang diharapkan. Label {{ label }} , nomor baris {{ lineNumber }} , baris: {{ line }}',
  info_summary: 'Layanan terjemahan cepat menggunakan Google Terjemahan\n Versi {{VERSION}}',
  info_description: 'Sebuah alat untuk pengembang. Dengan tipu muslihat, pelokalan aplikasi Anda bisa cepat, menyenangkan, dan mudah!\n\n === Sumber ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === Variabel lingkungan yang DIBUTUHKAN ===\n * GOOGLE_TRANSLATE_PROJECT_ID: proyek Google Terjemahan Anda\n * GOOGLE_APPLICATION_CREDENTIALS: file JSON kredensial Anda\n\n === Kode bahasa ISO ===\n Saat menentukan kode ISO (baik bahasa input atau bahasa target) gunakan kode berikut:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'Kode ISO untuk bahasa yang akan diterjemahkan. Standarnya adalah {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Ketik bisa berupa teks atau html. Defaultnya adalah teks',
  info_option_match: 'Saat memproses direktori, pertimbangkan hanya file yang cocok dengan ekspresi reguler ini',
  info_option_excludes: 'Saat memproses direktori, secara eksplisit mengecualikan file yang cocok dengan regex ini, meskipun file tersebut cocok dengan `-m` / `--match` regex',
  info_option_filter: 'Saat memproses direktori: 1) memerlukan file JS ini, yang harus mengekspor fungsi bernama `filter` yang mengambil parameter string dan mengembalikan string, dan 2) menerapkan fungsi filter ini ke semua file keluaran sebelum ditulis',
  info_option_dryRun: 'Jangan menulis file apa pun atau membuat panggilan API apa pun ke Google Terjemahan, tetapi catat apa yang akan dilakukan',
  info_option_languages: 'Daftar kode ISO yang dipisahkan koma untuk bahasa yang akan diterjemahkan',
  info_option_outfile: 'Untuk pemrosesan file JS: tulis output JS ke file ini\n Untuk pemrosesan direktori: tulis file ke direktori ini, yang akan dibuat jika tidak ada',
  info_option_force: 'Selalu buat terjemahan baru, timpa semua file keluaran yang ada',
  info_option_handlebars: 'Pastikan konten {{ handlebars }} dipertahankan apa adanya dan TIDAK diterjemahkan',
  info_option_markdown: 'Pastikan [penurunan harga](https://links) dipertahankan dengan benar, jika tidak, akan ada spasi di antara akhir deskripsi tautan dalam tanda kurung siku dan tautan itu sendiri dalam tanda kurung',
  info_arg_source: 'Sumber untuk terjemahan; bisa berupa file JS atau direktori file untuk diterjemahkan',
  info_filter_applied: 'Filter berhasil diterapkan sebelum menulis: {{langFile}}',
  info_dryRun_key: '(dry run) tidak menulis terjemahan untuk kunci: {{key}}',
  info_dryRun_file: '(dry run) akan menulis file: {{langOut}}',
  warn_walk_readDir: 'berjalan ( {{dir}} ): kesalahan membaca: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): terjadi kesalahan saat mencoba membuat daftar file dalam direktori: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): jalur ini bukan direktori',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): melewatkan file yang ada: {{langFile.file}}',
  info_processDirectory_fileWritten: 'File telah ditulis: {{langFile}}',
  err_option_json_notFound: 'File JSON tidak ditemukan: {{ jsonFile }}',
  err_option_json_errorReading: 'Terjadi kesalahan saat membaca atau menguraikan file JSON {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'Tidak ada bahasa terjemahan yang ditentukan. Gunakan `-l` / `--languages` dan tentukan daftar kode bahasa ISO yang dipisahkan koma',
  err_option_outfile_required: 'Tidak ada file atau direktori keluaran yang ditentukan. Gunakan `-o` / `--outfile` untuk menentukan file atau direktori keluaran',
  err_noSources: 'tidak ada file sumber yang disediakan untuk terjemahan',
  info_option_jsonFile: 'Jalankan beberapa perintah tipuan yang ditentukan dalam file JSON. Jika tidak ada file JSON yang disediakan, perintah akan mencari file bernama \'hokey.json\' di direktori saat ini',
  info_option_indexFile: 'Hasilkan file indeks untuk terjemahan. Nama file harus diakhiri dengan `.html`, `.md` atau `.txt`, kecuali Anda menyediakan template dengan `-A` / `--index-template`',
  info_option_indexTemplate: 'Ini bisa berupa \'html\', \'penurunan harga\', \'teks\', atau jalur ke template setang Anda sendiri. Template ini digunakan saat membuat file indeks. Lihat template default dalam kode sumber tipu muslihat untuk contoh',
  info_option_regular: 'Terjemahkan file sumber sebagai file biasa, bukan menerjemahkan objek JavaScript yang berisi sumber daya string. Bendera `-M` / `--markdown` menyiratkan tanda ini.',
  info_arg_sources: 'Sumber untuk terjemahan; ini bisa berupa satu atau lebih file atau direktori JavaScript',
  info_jsonProcessing_start: 'Konfigurasi pemrosesan JSON: {{name}}',
  err_index_singleFileMultipleSources: 'Satu file indeks telah ditentukan, tetapi ada beberapa file input. Tentukan direktori alih-alih file untuk indeks',
  err_index_targetDirAndNoTypeOrTemplate: 'Direktori target ditentukan untuk indeks, tetapi tidak ada templat indeks yang ditentukan. Gunakan `-A` / `--indexTemplate` untuk memilih template',
  err_index_parentDirDoesNotExist: 'Direktori induk indeks tidak ada: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'Nama file tidak memiliki ekstensi sehingga jenis template tidak dapat ditentukan: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'Nama file memiliki ekstensi yang tidak valid sehingga jenis template tidak dapat ditentukan: {{ file }}',
  err_index_templateLoadingError: 'Terjadi kesalahan saat memuat template khusus {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'Terjadi kesalahan saat mengkompilasi template kustom {{ file }} : {{ e }}',
  info_index_wroteFile: 'Berhasil membuat file indeks: {{ indexFile }}',
  label_indexOfTranslations: 'Indeks terjemahan',
  label_findYourLanguageCode: 'Temukan kode bahasa Anda',
  err_processing_unknown: '*** Kesalahan tak terduga: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'Tidak ada file keluaran yang dihasilkan untuk bahasa {{ lang }} , sehingga akan dikeluarkan dari indeks',
  err_filter_loading: 'Filter tidak ditemukan: {{ filter }}\n Filter tidak ditemukan di salah satu: direktori saat ini, direktori ./.hokey-filters, direktori ${HOME}/.hokey-filters, atau direktori filter bawaan'
}