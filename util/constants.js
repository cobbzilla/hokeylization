const VERSION = require('../package.json').version

// change the env var, don't change this
const DEFAULT_LANG = process.env.HOKEY_DEFAULT_LANG || 'en'

const ALL_LANGS = 'af,sq,am,ar,hy,az,eu,be,bn,bs,bg,ca,ceb,zh,co,hr,cs,da,nl,en,eo,et,fi,fr,fy,gl,ka,de,el,gu,ht,ha,haw,he,iw,hi,hmn,hu,is,ig,id,ga,it,ja,jv,kn,kk,km,rw,ko,ku,ky,lo,la,lv,lt,lb,mk,mg,ms,ml,mt,mi,mr,mn,my,ne,no,ny,or,ps,fa,pl,pt,pa,ro,ru,sm,gd,sr,st,sn,sd,si,sk,sl,so,es,su,sw,sv,tl,tg,ta,tt,te,th,tr,tk,uk,ur,ug,uz,vi,cy,xh,yi,yo,zu'
const ALL_LANGS_NAME = 'all'

const DEFAULT_HOKEY_JSON_FILE = 'hokey.json'

const LANG_PLACEHOLDER = 'LANG'

// adapted from https://stackoverflow.com/a/3561711/1251543
const escapeRegex = (string) => string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')

module.exports = {
    VERSION, DEFAULT_LANG, ALL_LANGS, ALL_LANGS_NAME, LANG_PLACEHOLDER,
    DEFAULT_HOKEY_JSON_FILE, escapeRegex
}
