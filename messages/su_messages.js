export default {
  err_fatal: 'Kasalahan fatal: {{error}}',
  err_env_googleProjectId: 'Variabel lingkungan GOOGLE_TRANSLATE_PROJECT_ID teu ditetepkeun',
  err_env_googleCredentials: 'Variabel lingkungan GOOGLE_APPLICATION_CREDENTIALS teu ditetepkeun',
  err_option_processAs_invalid: 'Nilai pilihan teu valid pikeun -p / --process-as: pilihan ieu ngan ngarojong nilai \'teks\' atawa \'html\'',
  err_infileNotFound: 'file input atawa diréktori teu kapanggih: {{ jsFile }}',
  err_cannotWriteSource: 'nampik nimpa sumber input (dinyarankeun dina basa kaluaran): {{source}}',
  err_invalidOutfile: 'outfile diperkirakeun ngandung \'LANG\' (diganti ku {{lang}} )',
  err_readMessageKeys_invalidFileStart: 'readMessageKeys: file ekspektasi {{ file }} dimimitian ku \'ékspor standar\' atawa \'module.exports\' tapi kapanggih: {{actualPrefix}} ...',
  err_readMessageKeys_invalidJson: 'json teu valid dina {{file}}',
  err_processFile_writeFile: '*** Kasalahan nulis ka outfile pikeun {{lang}} : {{langOut}} : {{e}}',
  err_processFile_error: '*** Kasalahan narjamahkeun: {{e}}',
  err_processing: '*** Kasalahan teu kaduga: {{e}}',
  warn_missing_close_notranslate_tag: 'Kaluaran tina tarjamahan leungit tag panutupan dimana salah sahiji anu dipiharep. Label {{ label }} , nomer garis {{ lineNumber }} , garis: {{ line }}',
  info_summary: 'Ladenan tarjamahan gancang nganggo Google Tarjamah\n Vérsi {{VERSION}}',
  info_description: 'Hiji alat pikeun pamekar. Kalayan hokeylization, ngalokalkeun aplikasi anjeun tiasa gancang, senang sareng gampang!\n\n === Sumber ===\n GitHub: https://github.com/cobbzilla/hokeylization\n npm: https://www.npmjs.com/package/hokeylization\n\n === WAJIB variabel lingkungan ===\n * GOOGLE_TRANSLATE_PROJECT_ID: proyék Google Tarjamah anjeun\n * GOOGLE_APPLICATION_CREDENTIALS: file JSON kredensial anjeun\n\n === Kode basa ISO ===\n Nalika nangtukeun kode ISO (boh basa input atanapi basa target) nganggo kode ieu:\n https://cloud.google.com/translate/docs/languages',
  info_option_inputLanguage: 'Kode ISO pikeun basa pikeun ditarjamahkeun. Default nyaéta {{DEFAULT_LOCALE}}',
  info_option_processAs: 'Jenis tiasa téks atanapi html. Default nyaéta téks',
  info_option_match: 'Nalika ngolah diréktori, ukur pertimbangkeun file anu cocog sareng regex ieu',
  info_option_excludes: 'Nalika ngolah diréktori, sacara eksplisit ngaluarkeun file anu cocog sareng regexes ieu, sanaos éta cocog sareng regex `-m` / `--match`',
  info_option_filter: 'Nalika ngolah diréktori: 1) meryogikeun file JS ieu, anu kedah ngékspor fungsi anu namina `filter` anu nyandak parameter senar sareng ngabalikeun senar, sareng 2) nerapkeun fungsi saringan ieu ka sadaya file kaluaran sateuacan ditulis.',
  info_option_dryRun: 'Entong nyerat file atanapi nelepon API ka Google Tarjamah, tapi tuliskeun naon anu bakal dilakukeun',
  info_option_languages: 'Daptar kode ISO anu dipisahkeun koma pikeun basa pikeun ditarjamahkeun',
  info_option_outfile: 'Pikeun ngolah file JS: nyerat kaluaran JS kana file ieu\n Pikeun ngolah diréktori: nyerat file kana diréktori ieu, anu bakal didamel upami teu aya',
  info_option_force: 'Salawasna ngahasilkeun tarjamahan anyar, overwriting sagala file kaluaran aya',
  info_option_handlebars: 'Mastikeun {{ handlebars }} eusi dilestarikan sakumaha-aya sarta NOT ditarjamahkeun',
  info_option_markdown: 'Pastikeun [markdown](https://links) dilestarikan bener, disebutkeun spasi diwanohkeun antara tungtung pedaran link dina kurung kuadrat jeung link sorangan dina kurung',
  info_arg_source: 'Sumber pikeun tarjamahan; tiasa janten file JS atanapi diréktori file pikeun ditarjamahkeun',
  info_filter_applied: 'Filter hasil dilarapkeun sateuacan nyerat: {{langFile}}',
  info_dryRun_key: '(garing ngajalankeun) teu nulis tarjamahan pikeun konci: {{key}}',
  info_dryRun_file: '(dry run) bakal gaduh file ditulis: {{langOut}}',
  warn_walk_readDir: 'leumpang ( {{dir}} ): kasalahan maca: {{e}}',
  err_readDirFiles_mkdir: 'readDirFiles ( {{dir}} ): aya kasalahan nalika nyobian daptar file dina diréktori: {{e}}',
  err_readDirFiles_notDir: 'readDirFiles ( {{dir}} ): jalur ieu lain diréktori',
  info_processDirectory_skippingExisting: 'processDirectory ( {{lang}} ): skipping file aya: {{langFile.file}}',
  info_processDirectory_fileWritten: 'Berkas parantos ditulis: {{langFile}}',
  err_option_json_notFound: 'file JSON teu kapanggih: {{ jsonFile }}',
  err_option_json_errorReading: 'Aya kasalahan nalika maca atanapi nga-parsing file JSON {{ jsonFile }} : {{ e }}',
  err_option_languages_required: 'Teu aya basa tarjamahan anu disebatkeun. Anggo `-l` / `--languages` sareng tangtukeun daptar kode basa ISO anu dipisahkeun koma',
  err_option_outfile_required: 'Taya file kaluaran atawa diréktori ieu dieusian. Anggo `-o` / `--outfile` pikeun nangtukeun file kaluaran atanapi diréktori',
  err_noSources: 'euweuh file sumber disadiakeun pikeun tarjamah',
  info_option_jsonFile: 'Ngajalankeun sababaraha paréntah hokey dieusian dina file JSON. Upami teu aya file JSON anu disayogikeun, paréntah milarian file anu namina \'hokey.json\' dina diréktori ayeuna',
  info_option_indexFile: 'Ngahasilkeun file indéks pikeun tarjamahan. Ngaran koropak kudu ditungtungan ku `.html`, `.md` atawa `.txt`, iwal mun nyadiakeun citakan jeung `-A` / `--index-template`',
  info_option_indexTemplate: 'Ieu tiasa janten \'html\', \'markdown\', \'text\', atanapi jalur pikeun citakan kétang anjeun nyalira. Citakan ieu dipaké nalika nyieun file indéks. Tingali dina témplat standar dina kode sumber hokeylization pikeun conto',
  info_option_regular: 'Tarjamahkeun file sumber salaku file biasa, sanés narjamahkeun objék JavaScript anu ngandung sumber string. Bandéra `-M` / `--markdown` nunjukkeun bandéra ieu.',
  info_arg_sources: 'Sumber pikeun tarjamahan; ieu tiasa hiji atawa leuwih file JavaScript atawa directories',
  info_jsonProcessing_start: 'Konfigurasi ngolah JSON: {{name}}',
  err_index_singleFileMultipleSources: 'A file indéks tunggal ieu dieusian, tapi aya sababaraha file input. Sebutkeun diréktori tinimbang file pikeun indéks',
  err_index_targetDirAndNoTypeOrTemplate: 'A diréktori target ieu dieusian pikeun indéks, tapi euweuh citakan indéks dieusian. Anggo `-A` / `--indexTemplate` pikeun milih citakan',
  err_index_parentDirDoesNotExist: 'Diréktori indungna indéks teu aya: {{ parentDir }}',
  err_cannotNoExtCannotDetermineType: 'Ngaran koropak teu boga ekstensi jadi tipe template teu bisa ditangtukeun: {{ file }}',
  err_cannotInvalidExtCannotDetermineType: 'Ngaran koropak boga ekstensi teu valid jadi tipe template teu bisa ditangtukeun: {{ file }}',
  err_index_templateLoadingError: 'Aya kasalahan nalika ngamuat template khusus {{ file }} : {{ e }}',
  err_index_templateCompilationError: 'Aya kasalahan nalika nyusun témplat khusus {{ file }} : {{ e }}',
  info_index_wroteFile: 'file indéks hasil dijieun: {{ indexFile }}',
  label_indexOfTranslations: 'Indéks tarjamahan',
  label_findYourLanguageCode: 'Panggihan kode basa anjeun',
  err_processing_unknown: '*** Kasalahan teu kaduga: {{e}}\n {{e.stack}}',
  warn_missingLangFile: 'Taya file kaluaran dihasilkeun pikeun basa {{ lang }} , jadi bakal kaasup ti indéks dina'
}