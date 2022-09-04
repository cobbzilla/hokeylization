export default {
  err_fatal: 'RALAT MAUT: {{error}}',
  err_env_googleProjectId: 'Pembolehubah persekitaran GOOGLE_TRANSLATE_PROJECT_ID tidak ditentukan',
  err_env_googleCredentials: 'Pembolehubah persekitaran GOOGLE_APPLICATION_CREDENTIALS tidak ditakrifkan',
  err_option_processAs_invalid: 'Nilai pilihan tidak sah untuk -p / --process-as : pilihan ini hanya menyokong nilai \'teks\' atau \'html\'',
  err_infileNotFound: 'fail input atau direktori tidak ditemui: {{ jsFile }}',
  err_cannotWriteSource: 'enggan menulis ganti sumber input (telah dinyatakan dalam bahasa output): {{source}}',
  err_invalidOutfile: 'Fail luar dijangka mengandungi \'LANG\' (digantikan dengan {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: fail {{ file }} dijangka bermula dengan \'eksport lalai\' atau \'module.exports\' tetapi ditemui: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'json tidak sah dalam {{file}}',
  err_processFile_writeFile: '*** Ralat menulis untuk outfile untuk {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Ralat menterjemah: {{e}}',
  err_processing: '*** Ralat tidak dijangka: {{e}}',
  info_summary: 'Perkhidmatan terjemahan pantas menggunakan Terjemahan Google\n Versi {{VERSION}}',
  info_description: '=== Sumber ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === Pembolehubah persekitaran yang DIPERLUKAN ===\n * GOOGLE_TRANSLATE_PROJECT_ID: projek Terjemahan Google anda\n * GOOGLE_APPLICATION_CREDENTIALS: fail JSON bukti kelayakan anda\n\n === Kod bahasa ISO ===\n Apabila menentukan kod ISO (sama ada bahasa input atau bahasa sasaran) gunakan kod ini:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'Kod ISO untuk bahasa untuk diterjemahkan. Lalai ialah {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Jenis boleh menjadi teks atau html. Lalai ialah teks',
  info_option_match: 'Apabila memproses direktori, hanya pertimbangkan fail yang sepadan dengan regex ini',
  info_option_excludes: 'Apabila memproses direktori, kecualikan secara eksplisit fail yang sepadan dengan regeks ini, walaupun ia sepadan dengan regex `-m` / `--match`',
  info_option_filter: 'Apabila memproses direktori: 1) memerlukan fail JS ini, yang mesti mengeksport fungsi bernama `filter` yang mengambil parameter rentetan dan mengembalikan rentetan, dan 2) gunakan fungsi penapis ini pada semua fail output sebelum ia ditulis',
  info_option_dryRun: 'Jangan buat sebarang fail tulis atau buat apa-apa panggilan API ke Terjemahan Google, tetapi log apa yang telah dilakukan',
  info_option_languages: 'Senarai kod ISO yang dipisahkan koma untuk bahasa diterjemahkan',
  info_option_outfile: 'Untuk pemprosesan fail JS: tulis output JS ke fail ini\n Untuk pemprosesan direktori: tulis fail ke direktori ini, yang akan dibuat jika ia tidak wujud',
  info_option_force: 'Sentiasa jana terjemahan baharu, timpa sebarang fail keluaran sedia ada',
  info_option_handlebars: 'Pastikan kandungan {{ handlebars }} dikekalkan seperti sedia ada dan TIDAK diterjemahkan',
  info_option_markdown: 'Pastikan [markdown](https://links) dipelihara dengan betul, jika tidak, ruang diperkenalkan antara penghujung perihalan pautan dalam kurungan segi empat sama dan pautan itu sendiri dalam kurungan',
  info_arg_source: 'Sumber untuk terjemahan; boleh menjadi fail JS atau direktori fail untuk diterjemahkan',
  info_filter_applied: 'Penapis berjaya digunakan sebelum menulis: {{langFile}}',
  info_dryRun_key: '(dry run) tidak menulis terjemahan untuk kunci: {{key}}',
  info_dryRun_file: '(dry run) akan mempunyai fail bertulis: {{langOut}}',
  warn_walk_readDir: 'berjalan ( {{dir}} ): ralat membaca: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles( {{dir}} ): ralat berlaku semasa cuba menyenaraikan fail dalam direktori: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles( {{dir}} ): laluan ini bukan direktori',
  info_processDirectory_skippingExisting: 'processDirectory( {{lang}} ): melangkau fail sedia ada: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Fail telah ditulis: {{langFile}}'
}