/*
 *
 * TextSelection constants
 *
 */

export const GET_DPB_TEXTS = 'app/TextSelection/GET_DPB_TEXTS';
export const GET_COUNTRY = 'app/TextSelection/GET_COUNTRY';
export const GET_LANGUAGES = 'app/TextSelection/GET_LANGUAGES';
export const SET_LANGUAGES = 'app/TextSelection/SET_LANGUAGES';
export const GET_COUNTRIES = 'app/TextSelection/GET_COUNTRIES';
export const SET_ISO_CODE = 'app/TextSelection/SET_ISO_CODE';
export const SET_VERSION_LIST_STATE =
	'app/TextSelection/SET_VERSION_LIST_STATE';
export const SET_LANGUAGE_LIST_STATE =
	'app/TextSelection/SET_LANGUAGE_LIST_STATE';
export const SET_COUNTRY_LIST_STATE =
	'app/TextSelection/SET_COUNTRY_LIST_STATE';
export const SET_COUNTRY_NAME = 'app/TextSelection/SET_COUNTRY_NAME';
export const LOAD_COUNTRY = 'app/TextSelection/LOAD_COUNTRY';
export const LOAD_TEXTS = 'app/TextSelection/LOAD_TEXTS';
export const LOAD_COUNTRIES = 'app/TextSelection/LOAD_COUNTRIES';
export const ERROR_GETTING_LANGUAGES =
	'app/TextSelection/ERROR_GETTING_LANGUAGES';
export const ERROR_GETTING_VERSIONS =
	'app/TextSelection/ERROR_GETTING_VERSIONS';
export const LOAD_COUNTRIES_ERROR = 'app/TextSelection/LOAD_COUNTRIES_ERROR';
export const CLEAR_ERROR_GETTING_VERSIONS =
	'app/TextSelection/CLEAR_ERROR_GETTING_VERSIONS';
export const CLEAR_ERROR_GETTING_LANGUAGES =
	'app/TextSelection/CLEAR_ERROR_GETTING_LANGUAGES';
// export const unitedStates = {
// 	name: 'United States',
// 	uri: 'https://bible.build/countries/US',
// 	continent_code: 'NA',
// 	hidden: false,
// 	languages: {
// 		tpx: 'Acatepec Me\'phaa',
// 		acv: 'Achumawi',
// 		fub: 'Adamawa Fulfulde',
// 		ady: 'Adyghe',
// 		afr: 'Afrikaans',
// 		afs: 'Afro-Seminole Creole',
// 		aht: 'Ahtena',
// 		aka: 'Akan',
// 		akl: 'Aklanon',
// 		akz: 'Alabama',
// 		ale: 'Aleut',
// 		arq: 'Algerian Arabic',
// 		ase: 'American Sign Language',
// 		amh: 'Amharic',
// 		rme: 'Angloromani',
// 		aig: 'Antigua and Barbuda Creole English',
// 		anu: 'Anuak',
// 		arp: 'Arapaho',
// 		arw: 'Arawak',
// 		ari: 'Arikara',
// 		asb: 'Assiniboine',
// 		aii: 'Assyrian Neo-Aramaic',
// 		bam: 'Bambara',
// 		bfa: 'Bari',
// 		mot: 'Barí',
// 		eus: 'Basque',
// 		bar: 'Bavarian',
// 		bel: 'Belarusian',
// 		bzj: 'Belize Kriol English',
// 		ben: 'Bengali',
// 		bos: 'Bosnian',
// 		kxd: 'Brunei',
// 		bhh: 'Bukharic',
// 		bul: 'Bulgarian',
// 		cad: 'Caddo',
// 		chl: 'Cahuilla',
// 		frc: 'Cajun French',
// 		cal: 'Carolinian',
// 		rmc: 'Carpathian Romani',
// 		cay: 'Cayuga',
// 		ceb: 'Cebuano',
// 		ckb: 'Central Kurdish',
// 		khm: 'Central Khmer',
// 		bcl: 'Central Bikol',
// 		ryu: 'Central Okinawan',
// 		esu: 'Central Yupik',
// 		ess: 'Central Siberian Yupik',
// 		poo: 'Central Pomo',
// 		shu: 'Chadian Arabic',
// 		cld: 'Chaldean Neo-Aramaic',
// 		cha: 'Chamorro',
// 		chr: 'Cherokee',
// 		chy: 'Cheyenne',
// 		cic: 'Chickasaw',
// 		chn: 'Chinook jargon',
// 		ciw: 'Chippewa',
// 		cho: 'Choctaw',
// 		ctu: 'Chol',
// 		chk: 'Chuukese',
// 		coc: 'Cocopa',
// 		col: 'Columbia-Wenatchi',
// 		com: 'Comanche',
// 		trc: 'Copala Triqui',
// 		cos: 'Corsican',
// 		cow: 'Cowlitz',
// 		mus: 'Creek',
// 		gyn: 'Guyanese Creole English',
// 		hrv: 'Croatian',
// 		cro: 'Crow',
// 		kpc: 'Curripaco',
// 		ces: 'Czech',
// 		dak: 'Dakota',
// 		dan: 'Danish',
// 		ing: 'Degexit\'an',
// 		nld: 'Dutch',
// 		dyu: 'Dyula',
// 		kee: 'Eastern Keres',
// 		ydd: 'Eastern Yiddish',
// 		emk: 'Eastern Maninkakan',
// 		cjm: 'Eastern Cham',
// 		efi: 'Efik',
// 		arz: 'Egyptian Arabic',
// 		ekk: 'Standard Estonian',
// 		crn: 'El Nayar Cora',
// 		ewe: 'Ewe',
// 		fij: 'Fijian',
// 		fin: 'Finnish',
// 		car: 'Galibi Carib',
// 		lug: 'Ganda',
// 		cab: 'Garifuna',
// 		aln: 'Gheg Albanian',
// 		ats: 'Gros Ventre',
// 		gcf: 'Guadeloupean Creole French',
// 		guj: 'Gujarati',
// 		afb: 'Gulf Arabic',
// 		gul: 'Sea Island Creole English',
// 		gwi: 'Gwichʼin',
// 		hat: 'Haitian',
// 		khk: 'Halh Mongolian',
// 		hur: 'Halkomelem',
// 		haa: 'Han',
// 		mey: 'Hassaniyya',
// 		yuf: 'Havasupai-Walapai-Yavapai',
// 		hps: 'Hawai\'i Sign Language (HSL)',
// 		haw: 'Hawaiian',
// 		hwc: 'Hawai\'i Creole English',
// 		heb: 'Hebrew',
// 		hid: 'Hidatsa',
// 		acw: 'Hijazi Arabic',
// 		hin: 'Hindi',
// 		hnj: 'Hmong Njua',
// 		mww: 'Hmong Daw',
// 		win: 'Ho-Chunk',
// 		hop: 'Hopi',
// 		hun: 'Hungarian',
// 		hup: 'Hupa',
// 		geh: 'Hutterite German',
// 		isl: 'Icelandic',
// 		ilo: 'Iloko',
// 		ind: 'Indonesian',
// 		gle: 'Irish',
// 		ita: 'Italian',
// 		ium: 'Iu Mien',
// 		jam: 'Jamaican Creole English',
// 		tow: 'Jemez',
// 		apj: 'Jicarilla Apache',
// 		bex: 'Jur Modo',
// 		kbd: 'Kabardian',
// 		kea: 'Kabuverdianu',
// 		fla: 'Kalispel-Pend d\'Oreille',
// 		xal: 'Kalmyk',
// 		cak: 'Kaqchikel',
// 		krc: 'Karachay-Balkar',
// 		kyh: 'Karok',
// 		kju: 'Kashaya',
// 		kaz: 'Kazakh',
// 		kjg: 'Khmu',
// 		khf: 'Khuen',
// 		quc: 'K\'iche\'',
// 		kic: 'Kickapoo',
// 		kin: 'Kinyarwanda',
// 		apk: 'Kiowa Apache',
// 		kio: 'Kiowa',
// 		cku: 'Koasati',
// 		kor: 'Korean',
// 		kos: 'Kosraean',
// 		koy: 'Koyukon',
// 		kri: 'Krio',
// 		dih: 'Kumiai',
// 		kut: 'Kutenai',
// 		kwk: 'Kwakiutl',
// 		lhi: 'Lahu Shi',
// 		lkt: 'Lakota',
// 		lao: 'Lao',
// 		lbo: 'Laven',
// 		brb: 'Lave',
// 		ayl: 'Libyan Arabic',
// 		lin: 'Lingala',
// 		lit: 'Lithuanian',
// 		lou: 'Louisiana Creole',
// 		dsb: 'Lower Sorbian',
// 		taa: 'Lower Tanana',
// 		lua: 'Luba-Lulua',
// 		lui: 'Luiseno',
// 		luo: 'Luo (Kenya and Tanzania)',
// 		lut: 'Lushootseed',
// 		khb: 'Lü',
// 		lvs: 'Standard Latvian',
// 		ymm: 'Maay',
// 		mkd: 'Macedonian',
// 		mal: 'Malayalam',
// 		zlm: 'Malay (individual language)',
// 		pqm: 'Malecite-Passamaquoddy',
// 		mlt: 'Maltese',
// 		mam: 'Mam',
// 		cmn: 'Mandarin Chinese',
// 		mnk: 'Mandinka',
// 		mri: 'Maori',
// 		mar: 'Marathi',
// 		mrc: 'Maricopa',
// 		mah: 'Marshallese',
// 		yan: 'Mayangna',
// 		men: 'Mende (Sierra Leone)',
// 		mez: 'Menominee',
// 		apm: 'Mescalero-Chiricahua Apache',
// 		sac: 'Meskwaki',
// 		acm: 'Mesopotamian Arabic',
// 		mxv: 'Metlatónoc Mixtec',
// 		crg: 'Michif',
// 		mik: 'Mikasuki',
// 		mic: 'Mi\'kmaq',
// 		cdo: 'Min Dong Chinese',
// 		nan: 'Min Nan Chinese',
// 		ell: 'Modern Greek (1453-)',
// 		mov: 'Mohave',
// 		moh: 'Mohawk',
// 		mkj: 'Mokilese',
// 		mte: 'Mono (Solomon Islands)',
// 		mnr: 'Mono (USA)',
// 		ary: 'Moroccan Arabic',
// 		mgd: 'Moru',
// 		mos: 'Mossi',
// 		unx: 'Munda',
// 		ars: 'Najdi Arabic',
// 		nav: 'Navajo',
// 		npi: 'Nepali (individual language)',
// 		nez: 'Nez Perce',
// 		pcm: 'Nigerian Pidgin',
// 		twf: 'Northern Tiwa',
// 		frr: 'Northern Frisian',
// 		kmr: 'Northern Kurdish',
// 		pbu: 'Northern Pashto',
// 		uzn: 'Northern Uzbek',
// 		azj: 'North Azerbaijani',
// 		tts: 'Northeastern Thai',
// 		mrq: 'North Marquesan',
// 		hdn: 'Northern Haida',
// 		esi: 'North Alaskan Inupiatun',
// 		esk: 'Northwest Alaska Inupiatun',
// 		mjd: 'Northwest Maidu',
// 		pao: 'Northern Paiute',
// 		cst: 'Northern Ohlone',
// 		apc: 'North Levantine Arabic',
// 		nor: 'Norwegian',
// 		hye: 'Armenian',
// 		tur: 'Turkish',
// 		kat: 'Georgian',
// 		mya: 'Burmese',
// 		wol: 'Wolof',
// 		ibo: 'Igbo',
// 		jpn: 'Japanese',
// 		tsi: 'Tsimshian',
// 		mid: 'Mandaic',
// 		nus: 'Nuer',
// 		oka: 'Okanagan',
// 		oma: 'Omaha-Ponca',
// 		acx: 'Omani Arabic',
// 		one: 'Oneida',
// 		ono: 'Onondaga',
// 		ory: 'Odia',
// 		otw: 'Ottawa',
// 		ems: 'Pacific Gulf Yupik',
// 		pau: 'Palauan',
// 		pam: 'Pampanga',
// 		pag: 'Pangasinan',
// 		pan: 'Panjabi',
// 		pap: 'Papiamento',
// 		prp: 'Parsi',
// 		pdc: 'Pennsylvania German',
// 		mvf: 'Peripheral Mongolian',
// 		pht: 'Phu Thai',
// 		pia: 'Pima Bajo',
// 		pif: 'Pingelapese',
// 		psd: 'Plains Indian Sign Language',
// 		crk: 'Plains Cree',
// 		plt: 'Plateau Malagasy',
// 		pdt: 'Plautdietsch',
// 		pon: 'Pohnpeian',
// 		pol: 'Polish',
// 		jac: 'Popti\'',
// 		por: 'Portuguese',
// 		pot: 'Potawatomi',
// 		pui: 'Puinave',
// 		fuf: 'Pular',
// 		fuc: 'Pulaar',
// 		tsz: 'Purepecha',
// 		kjb: 'Q\'anjob\'al',
// 		qua: 'Quapaw',
// 		yum: 'Quechan',
// 		ron: 'Romanian',
// 		rus: 'Russian',
// 		bsy: 'Sabah Bisaya',
// 		acf: 'Saint Lucian Creole French',
// 		smo: 'Samoan',
// 		zab: 'Western Tlacolula Valley Zapotec',
// 		gla: 'Scottish Gaelic',
// 		syn: 'Senaya',
// 		see: 'Seneca',
// 		srp: 'Serbian',
// 		sjw: 'Shawnee',
// 		sth: 'Shelta',
// 		xsr: 'Sherpa',
// 		shk: 'Shilluk',
// 		shh: 'Shoshoni',
// 		bla: 'Siksika',
// 		mks: 'Silacayoapan Mixtec',
// 		snd: 'Sindhi',
// 		sin: 'Sinhala',
// 		rmo: 'Sinte Romani',
// 		ska: 'Skagit',
// 		slv: 'Slovenian',
// 		slk: 'Slovak',
// 		som: 'Somali',
// 		snk: 'Soninke',
// 		azb: 'South Azerbaijani',
// 		uzs: 'Southern Uzbek',
// 		tix: 'Southern Tiwa',
// 		slh: 'Southern Puget Sound Salish',
// 		npl: 'Southeastern Puebla Nahuatl',
// 		css: 'Southern Ohlone',
// 		quh: 'South Bolivian Quechua',
// 		ajp: 'South Levantine Arabic',
// 		spo: 'Spokane',
// 		srn: 'Sranan Tongo',
// 		spa: 'Spanish',
// 		cat: 'Catalan',
// 		fra: 'French',
// 		eng: 'English',
// 		deu: 'German',
// 		str: 'Straits Salish',
// 		apd: 'Sudanese Arabic',
// 		swh: 'Swahili (individual language)',
// 		ssw: 'Swati',
// 		swe: 'Swedish',
// 		tgl: 'Tagalog',
// 		tah: 'Tahitian',
// 		blt: 'Tai Dam',
// 		twh: 'Tai Dón',
// 		acq: 'Ta\'izzi-Adeni Arabic',
// 		tgk: 'Tajik',
// 		tam: 'Tamil',
// 		tfn: 'Tanaina',
// 		tcb: 'Tanacross',
// 		tat: 'Tatar',
// 		tyz: 'Tày',
// 		tel: 'Telugu',
// 		tqn: 'Tenino',
// 		tew: 'Tewa (USA)',
// 		tha: 'Thai',
// 		bod: 'Tibetan',
// 		tir: 'Tigrinya',
// 		xtl: 'Tijaltepec Mixtec',
// 		tli: 'Tlingit',
// 		ood: 'Tohono O\'odham',
// 		tpi: 'Tok Pisin',
// 		ton: 'Tonga (Tonga Islands)',
// 		als: 'Tosk Albanian',
// 		trl: 'Traveller Scottish',
// 		tru: 'Turoyo',
// 		tzh: 'Tzeltal',
// 		tzo: 'Tzotzil',
// 		udu: 'Uduk',
// 		uig: 'Uighur',
// 		ukr: 'Ukrainian',
// 		uli: 'Ulithian',
// 		uma: 'Umatilla',
// 		tau: 'Upper Tanana',
// 		kuu: 'Upper Kuskokwim',
// 		pov: 'Upper Guinea Crioulo',
// 		urd: 'Urdu',
// 		ute: 'Ute-Southern Paiute',
// 		vie: 'Vietnamese',
// 		vls: 'Vlaams',
// 		rmy: 'Vlax Romani',
// 		waa: 'Walla Walla',
// 		wac: 'Wasco-Wishram',
// 		cym: 'Welsh',
// 		fry: 'Western Frisian',
// 		pes: 'Iranian Persian',
// 		mlq: 'Western Maninkakan',
// 		apw: 'Western Apache',
// 		pua: 'Western Highland Purepecha',
// 		kjq: 'Western Keres',
// 		cja: 'Western Cham',
// 		gaz: 'West Central Oromo',
// 		wuu: 'Wu Chinese',
// 		hsn: 'Xiang Chinese',
// 		yak: 'Yakama',
// 		yap: 'Yapese',
// 		yaq: 'Yaqui',
// 		yok: 'Yokuts',
// 		yor: 'Yoruba',
// 		yua: 'Yucateco',
// 		yue: 'Yue Chinese',
// 		yup: 'Yukpa',
// 		nhi: 'Zacatlán-Ahuacatlán-Tepetzintla Nahuatl',
// 		zne: 'Zande (individual language)',
// 		ziw: 'Zigula',
// 		zpq: 'Zoogocho Zapotec',
// 		zun: 'Zuni',
// 	},
// 	codes: {
// 		fips: 'US',
// 		iso_a3: 'USA',
// 		iso_a2: 'US',
// 		iso_num: 'null',
// 	},
// };
