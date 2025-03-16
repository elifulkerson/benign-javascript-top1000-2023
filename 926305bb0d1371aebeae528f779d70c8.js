String.prototype.klyFiltering = function(delimiter) {
				return this.trim().split(delimiter).map(function(t) {
					return t.trim().toLowerCase()
				}).filter(x => x != "");
			};

			/** GAM LIBRARY - START */
			window.GAMLibrary = {};
			window.GAMLibrary = {
				gamLeaderboard: '/36504930/brilio.net/desktop/WWW.BRILIO.NET/LEADERBOARD',
				gamHalfPage: '/36504930/brilio.net/desktop/WWW.BRILIO.NET/HALFPAGE',
				gamShowcase1: '/36504930/brilio.net/desktop/WWW.BRILIO.NET/SHOWCASE_1',
				gamShowcase2: '/36504930/brilio.net/desktop/WWW.BRILIO.NET/SHOWCASE_2',
				gamShowcase3: '/36504930/brilio.net/desktop/WWW.BRILIO.NET/SHOWCASE_3',
				gamPopup: '/36504930/brilio.net/desktop/WWW.BRILIO.NET/POP',
				gamMasthead: '/36504930/brilio.net/desktop/WWW.BRILIO.NET/MASTHEAD',
				gamInterscroller: '/36504930/brilio.net/desktop/WWW.BRILIO.NET/INTERSCROLLER',
				gamNativeout1: '/36504930/brilio.net/desktop/WWW.BRILIO.NET/NATIVE_OUT_1',
				gamNativeout2: '/36504930/brilio.net/desktop/WWW.BRILIO.NET/NATIVE_OUT_2',
				gamNativeout3: '/36504930/brilio.net/desktop/WWW.BRILIO.NET/NATIVE_OUT_3',
				gamCard: '/36504930/brilio.net/desktop/WWW.BRILIO.NET/CARD',
				gamWhatsHot: '/36504930/brilio.net/desktop/WWW.BRILIO.NET/WHATS_HOT',
				gamYoutubeMidArticle: '/36504930/brilio.net/desktop/WWW.BRILIO.NET/YOUTUBE_MIDDLE_ARTICLE',
				gamMidDetailArticle: '/36504930/brilio.net/desktop/WWW.BRILIO.NET/SHOWCASE_MIDDLE_ARTICLE',
				gamDetailRecomm: '/36504930/brilio.net/desktop/WWW.BRILIO.NET/DETAIL_RECOMMENDATION',
				gamMidWidget: '/36504930/brilio.net/desktop/WWW.BRILIO.NET/MIDDLE_WIDGET',
				gamBottomfrm: '/36504930/brilio.net/desktop/WWW.BRILIO.NET/BOTTOM_FRAME',
				documentMeta: function(metaName) {
					var metaResult = '';
					var metas = document.getElementsByTagName('meta');
					if (metas) {
						for (var x = 0, y = metas.length; x < y; x++) {
							if (metas[x].name.toLowerCase() == metaName) {
								metaResult += metas[x].content;
							}
						}
					}
					return metaResult != '' ? metaResult : '';
				},
				brandSafetyChecker: function() {
					_klyObject = typeof window.kly !== 'undefined' ? window.kly : window.kmklabs,
						_articlePages = _klyObject && _klyObject.article,
						_isAdultContent = _articlePages && _articlePages.isAdultContent;
					isMatcont = "0",
						isViolateBrandSafety = "0",

						//POPULATE META DATA
						bsKeyword = [],
						dfp_pageTitle = _articlePages && _articlePages.title.klyFiltering(' '),
						dfp_titles = (typeof dfp_pageTitle !== 'undefined') ? dfp_pageTitle : '',
						dfp_keyword = this.documentMeta("keywords"),
						dfp_desc = this.documentMeta("description"),
						tagForAds = _klyObject.gtm.tag.replace(/[^A-Za-z0-9|\- ]/ig, "").klyFiltering("|");
					const bsKeywordList = {
						'adult': ['adegan erotis', 'adegan seks', 'aduhai', 'adult', 'affair', 'air mani', 'alat bantu seks', 'alat kelamin', 'alat kontrasepsi', 'alat vital pria', 'alergi', 'anal', 'anatomi vagina', 'anjeng', 'anjing', 'anjlng', 'anjrit', 'anus', 'anying', 'apa itu kondom', 'artis indonesia bugil', 'artis porno', 'ass', 'asu', 'ayam hitam', 'babi', 'bahaya masturbasi', 'bajingan', 'bandar ceme', 'bangsat', 'bdsm', 'bego', 'belahan', 'bentuk kelamin', 'bentuk payudara', 'bercinta', 'bercinta saat hamil', 'bergairah', 'berhubungan intim', 'berhubungan seks', 'berhubungan seksual', 'bersetubuh', 'bikini', 'bintang film porno', 'bintang porno', 'biseksual', 'bitch', 'bocah sd foto mesum', 'body shaming', 'bokne', 'bokong', 'bom surabaya 2018', 'boneka seks', 'boob', 'bra', 'bugil', 'bullshit', 'bulshit', 'bulu kemaluan', 'bunuh diri', 'cabul', 'cara berhubungan intim', 'cara membuat suami bergairah', 'cara memperbesar penis', 'cara mengatasi ejakulasi dini', 'cara seksual', 'celana', 'cemani', 'cemen', 'chat firza-rizieq', 'ciuman', 'cleavage', 'cock', 'cok', 'cukur bulu kemaluan', 'cum', 'dada', 'death', 'dewasa', 'di bawah umur', 'dick', 'dildo', 'diremas', 'disfungsi ereksi', 'doggie', 'doll', 'drunk', 'ejakulasi', 'ejakulasi dini', 'ejakulasi wanita', 'eksotik', 'elo', 'entot', 'ereksi', 'erotic', 'erotis', 'ewe', 'exotic', 'fakta seks', 'fase menstruasi', 'fenomena kelainan seksual', 'fetish', 'film dewasa', 'film porno', 'foreplay', 'foto berhubungan intim', 'foto intim', 'foto telanjang', 'fuck', 'gairah', 'gairah seks', 'gairah seksual', 'gangbang', 'gangguan jiwa', 'gangguan seks', 'ganguan jiwa', 'ganguan seksual', 'ganja', 'gay', 'gaya bercinta', 'gaya bercinta dalam islam', 'gaya bercinta yang disukai pria', 'gaya seks', 'gejala penyakit', 'gemar368', 'germo', 'goblok', 'gue', 'gwe', 'hardcore', 'hasrat seksual', 'henceut', 'hindu', 'hitam mafia', 'homoseks', 'horny', 'hot', 'hubungan', 'hubungan intim', 'hubungan seksual', 'ibu hamil', 'implan payudara', 'industri film porno', 'intim', 'itil', 'jancok', 'jancuk', 'jenis alat kontrasepsi', 'jerawat', 'jual beli sperma', 'kacau', 'kakek cabul', 'kamasutra', 'kanibal', 'kanibalisme', 'kanker payudara', 'kapalan', 'kasus asusila', 'kebencian', 'kecanduan seks', 'kehidupan seks', 'kekerasan seksual', 'kelainan seks', 'kelamin', 'kelamin wanita', 'kemaluan', 'kemaluan wanita', 'kencing', 'keperawanan', 'keriting', 'kesehatan kulit dan kelamin', 'kesehatan payudara', 'kesehatan penis', 'kesehatan reproduksi', 'kesehatan wanita', 'khusus deewasa', 'kimpet', 'kisah perselingkuhan', 'kiss', 'klitoris', 'komunitas swinger', 'kondom', 'kondom pria', 'kontol', 'kontolnya', 'kontrasepsi', 'kontroversi hukuman mati', 'kontroversi lgbt', 'kotor', 'kotoran', 'kristen', 'kumuh', 'kursi tantra seks', 'legalisasi ganja', 'lemari es', 'lendir', 'lesbian', 'lgbt', 'libido', 'lingerie', 'lolita', 'lonte', 'm3m3k', 'mabuk', 'mahasiswi', 'mainan dewasa', 'mainan perangsang gairah', 'makanan berbahaya', 'makanan sehat', 'masa subur pria', 'masturbasi', 'matcont', 'mature', 'meki', 'melakukan hubungan intim', 'memek', 'memerkosa', 'mencukur bulu kemaluan', 'menggairahkan', 'menggoda', 'mengupas', 'menstruasi', 'menyiangi', 'meraba-raba', 'mesra', 'mesum', 'mimpi seks', 'mimpi telanjang', 'miss-v', 'mitos seks', 'model hot', 'model seksi', 'monyet', 'mr-p', 'mucikari siswi smp', 'nakal', 'naked', 'naughty', 'ngentot', 'ngewe', 'nipple', 'nipples', 'nonok', 'nude', 'obat ejakulasi dini', 'obat kuat', 'obat pembesar', 'obat pembesar penis terbaik', 'onani', 'oral', 'oral seks', 'organ', 'organ intim wanita', 'orgasme', 'orgasme wanita', 'overdose', 'overdosis', 'paha', 'pakistan', 'pamer', 'pantat', 'panties', 'payudara', 'payudara kecil', 'payudara wanita', 'pelacur', 'pelecehan', 'pelecehan seksual', 'pembesar penis', 'pembunuh', 'pembunuhan', 'pemerkosaan', 'pemerkosaan anak', 'pemuda', 'pencabulan', 'penetrasi', 'penetratif', 'pengetahuan seks', 'pengobatan alternatif', 'penis', 'penis bengkok', 'penis besar', 'penis kecil', 'penis pria', 'penyakit sipilis', 'penyakit vagina', 'penyimpangan seks', 'perawan', 'perawatan vagina', 'perbudakan', 'perek', 'perguruan tinggi', 'perkosa', 'perkosaan', 'permen', 'perselingkuhan', 'piss', 'play boy', 'pole', 'porn', 'porno', 'pornoaksi', 'pornografi', 'posisi bercinta', 'posisi hubungan intim suami istri menurut islam', 'posisi seks', 'posisi seksual', 'pria dewasa', 'pria idaman', 'prostitusi', 'provokatif', 'pukang', 'puki', 'puting', 'puting payudara', 'putting', 'radikal', 'raksasa', 'rangsang payudara', 'ranjang', 'rasis', 'rasisme', 'razia pasangan mesum', 'rokok', 'rudapaksa', 'rumah bordil', 'sbobet', 'seks', 'seks bebas', 'seks dalam islam', 'seks dan agama', 'seks dan kriminal', 'seks dan pasutri', 'seks oral', 'seks pria dan wanita', 'seks toy', 'seksi', 'seksual', 'seksual lelaki dan perempuan', 'seksualitas', 'seksualitas pria', 'seksualitas wanita', 'semen', 'sensual', 'seronok', 'sex', 'sex toy', 'sexy', 'shit', 'siklus menstruasi', 'situs poker terpercaya', 'situs porno', 'skandal', 'sperma', 'stres dan depresi', 'strip', 'striptease', 'striptis', 'suicide', 'sundulan', 'swinger', 'syur', 'tai', 'taik', 'tamparan', 'tante seksi', 'taruhan online', 'telanjang', 'telentang', 'terangsang', 'teroris', 'terorisme', 'tes keperawanan', 'test pack', 'testis', 'tiduri', 'tips bercinta', 'tips seks', 'titik rangsang', 'titit', 'toket', 'tolol', 'topless', 'toys', 'ujian', 'ukuran normal penis', 'ukuran penis', 'ukuran penis normal', 'ukuran penis orang indonesia', 'ukuran vagina', 'vagina', 'vagina gatal', 'vagina wanita', 'vakum pembesar penis', 'viagra', 'vibrator', 'video bercinta dengan pasangan', 'video porno', 'video seks', 'virus corona', 'vital', 'wanita telanjang', 'waria', 'woman on top', 'xxx', 'xxxx online'],
						'war_politics': ['ahed tamimi', 'ahok gugat cerai veronica tan', 'aliran sesat', 'anarkis', 'anarkisme suporter sepakbola', 'begal motor', 'bentrok suporter', 'bentrokan', 'bentrokan warga', 'berita hoax', 'capres jokowi', 'capres prabowo', 'fanatik', 'ferdy sambo', 'fpi', 'g30s', 'invasi rusia', 'jemaah ansharut daulah', 'kebohongan ratna sarumpaet', 'kediktatoran arab saudi', 'kekerasan pada wartawan', 'killing', 'kisah mualaf', 'koalisi jokowi', 'koalisi pilpres 2019', 'koalisi prabowo', 'konflik palestina israel', 'konflik palestina-israel', 'konflik rusia ukraina', 'konflik suriah', 'lia eden', 'luwu timur', 'nato', 'penembakan', 'penganiayaan', 'pengawal', 'pengeroyokan', 'penistaan agama', 'perang', 'perang di ukraina', 'perang dunia', 'perang dunia 3', 'perang rusia', 'peristiwa', 'pilpres 2019', 'polisi', 'prabowo subianto', 'prabowo-sandiaga', 'presiden rusia', 'presiden ukraina', 'propaganda rusia', 'ratna sarumpaet', 'rokok elektrik', 'rusia', 'rusia dan ukraina', 'rusia serang ukraina', 'senjata rusia', 'serang ukraina', 'serangan', 'suporter tewas', 'taliban', 'tentara', 'ternyata hoax', 'ujaran kebencian', 'ukraina', 'vladimir putin','tni','jenderal','korupsi','politik','politikus','kpk','kkb','penjajah','berduka'],
						'drugs_tobacco_alcohol': ['adiktif', 'akibat merokok', 'alcohol', 'alkohol', 'artis narkoba', 'asap rokok', 'bahaya berhenti merokok', 'bahaya merokok', 'bahaya narkoba', 'bahaya rokok', 'bahaya rokok elektrik', 'berhenti merokok', 'bnn', 'cancer', 'candy', 'cara berhenti merokok', 'cbd', 'ciri ciri pengguna narkoba', 'dampak merokok', 'djarum', 'drugs', 'efek berhenti merokok', 'ganja', 'hash', 'impotensi', 'jantung', 'jenis alkohol', 'jenis alkohol dalam minuman keras', 'jenis jenis narkoba', 'jenis narkotika', 'kanker', 'kartel narkoa', 'kasus narkoba', 'kecanduan', 'kesehatan paru', 'larangan merokok', 'mafia narkoba', 'manfaat berhenti merokok', 'merokok', 'minuman beralkohol', 'minuman keras', 'narkoba', 'narkoba artis', 'obat psikotropika', 'overdosis', 'pelanggaran', 'penyalahgunaan narkoba', 'penyeludupan narkoba', 'perokok', 'pot', 'pppa', 'rehabilitasi narkoba', 'remaja narkoba', 'rokok', 'rokok elektrik', 'ruu minuman beralkohol', 'sabu', 'selebriti narkoba', 'sidang narkoba', 'stroke', 'tablet', 'tembakau', 'tips berhenti merokok'],
						'disaster': ['10 macam pencemaran lingkungan', 'autopsi', 'bahaya pencemaran udara', 'bahaya polusi', 'belasungkawa', 'bencana', 'bencana besar', 'bola', 'bom', 'bom atom', 'bom bali', 'bom bunuh diri', 'bom gereja', 'bom meledak', 'bom nuklir', 'bom panci', 'bom sarinah', 'bom seks', 'bunuh orang', 'cara mencegah global warming', 'cara mencegah pemanasan global', 'cara mengatasi pemanasan global', 'cara mengatasi pemanasan global sebagai pelajar', 'cara mengatasi pencemaran udara', 'climate change', 'contoh pencemaran lingkungan', 'dampak pencemaran lingkungan', 'dampak pencemaran udara', 'darurat bencana', 'dilaporkan tewas', 'dimakamkan', 'dinyatakan meninggal', 'dipastikan tewas', 'ditemukan mati', 'ditemukan tewas', 'efek rumah kaca', 'efek rumah kaca adalah', 'fenomena alam', 'gas', 'gas rumah kaca', 'gempa donggala', 'gempa palu', 'gempa sulawesi tengah', 'global warming', 'global warming adalah', 'hilangkan nyawa', 'hilangnya nyawa', 'identitas korban', 'inalillahi', 'isis', 'jasad', 'jasad korban', 'jasadnya', 'jenasah wanita', 'jenazah', 'jenazah pria', 'jenazah teridentifikasi', 'jenis pencemaran lingkungan', 'kapal tenggelam', 'kapal tenggelam di danau toba', 'kasus penebangan pohon', 'kasus tabrak lari', 'keadaan kritis', 'kecelakaan', 'kecelakaan bus', 'kehilangan darah', 'kehilangan hidupnya', 'kehilangan nyawa', 'kehilangan nyawanya', 'kematian', 'korban', 'korban jiwa', 'korban meninggal', 'korban tewas', 'kota paling berpolusi', 'kota paling berpolusi didunia', 'krisis iklim', 'kualitas udara', 'ledakan bom', 'liga', 'limbah', 'limbah pabrik', 'lion air hilang kontak', 'lion air jatuh', 'lion air jatuh di karawang', 'macam pencemaran lingkungan', 'mati', 'mayat', 'mayat korban', 'meledak', 'memakan nyawa', 'membakar', 'membunuh', 'membunuh istrinya', 'membunuh mereka', 'membunuh suaminya', 'menelan nyawa', 'menemui ajal', 'menewaskan', 'menewaskan orang', 'mengalami koma', 'mengamuk', 'mengancam nyawa', 'menghembuskan nafas terakhir', 'menimbulkan korban', 'meninggal', 'meninggal akibat sakit', 'meninggal dunia', 'menyebabkan kematian', 'meregang nyawa', 'meregggut nyawa', 'merenggut jiwa', 'merenggut nyawa', 'modar', 'nyawa hilang', 'nyawa melayang', 'nyawa tak tertolong', 'orang mati', 'orang tewas', 'pelayat', 'pemakaman', 'pemanasan global', 'pemanasan global adalah', 'pembunuhan', 'pembunuhan sadis', 'pencemaran', 'pencemaran air', 'pencemaran air bersih', 'pencemaran air laut', 'pencemaran limbah', 'pencemaran lingkungan', 'pencemaran minyak', 'pencemaran sungai', 'pencemaran sungai brantas', 'pencemaran udara', 'penemuan mayat', 'pengertian efek rumah kaca', 'pengertian efek rumah kaca menurut para ahli', 'pengertian pemanasan global', 'penyakit polusi udara', 'penyakit yang disebabkan oleh polusi udara', 'penyebab efek rumah kaca', 'penyebab global warming', 'penyebab kematian', 'penyebab kerusakan lingkungan', 'penyebab pemanasan global', 'penyebab pemanasan global akibat aktivitas manusia', 'penyebab pencemaran air', 'penyebab pencemaran udara', 'penyebab perubahan iklim', 'penyebab perubahan iklim global', 'penyebab polusi udara', 'penyebab terjadinya efek rumah kaca', 'penyebab terjadinya pemanasan global', 'penyebab terjadinya pemanasan global dan efek rumah kaca', 'permintaan maaf', 'pertandingan', 'perubahan iklim', 'perubahan iklim global', 'pesawat hilang kontak', 'pesawat jatuh', 'petugas penyelamat', 'piala dunia', 'pollution', 'polusi', 'polusi jakarta', 'polusi udara', 'polusi udara di jakarta', 'polutan', 'renggut nyawa', 'sampah plastik', 'sepak', 'stadion', 'tak bernyawa', 'tak sadarkan diri', 'telah meninggal', 'telan nyawa', 'terbunuh', 'terkapar', 'teror bom', 'tewas', 'tewaskan', 'tidak bernyawa', 'timnas', 'tim penyelamat', 'trauma', 'tsunami palu', 'tutup usia', 'udara bersih', 'udara jakarta', 'wafat', 'wanita meninggal', 'won'],
						'epidemic_desease': ['corona', 'corona di indonesia', 'covid', 'covid 19', 'covid-19', 'doctor', 'dokter', 'health', 'healthy', 'hospital', 'infeksi saluran kencing', 'insomnia dan tidur', 'kematian', 'kematian virus', 'kematian wabah', 'kesehatan', 'korban terinfeksi', 'korona', 'obesitas', 'odp', 'osteoporosis', 'pdp', 'penyakit', 'positif korona', 'rsud', 'rumah sakit', 'sakit pernapasan', 'sedih', 'sehat', 'sesak', 'terinfeksi virus corona', 'terjangkit covid-19', 'terkena', 'virus', 'virus corona', 'virus korona', 'virus menyerang', 'virus-corona', 'wabah', 'wabah corona'],
						'religion': ['15lam', 'abu bakar al-baghdadi', 'al quran', 'al-quran', 'buda', 'budha', 'ibrahim al-hashimi al-qurayshi,', 'injil', 'isl4m', 'islam', 'ismi aisyah', 'jimat', 'kafir', 'katolik', 'muh4mmad', 'muhammad', 'muhammad saw', 'nabi', 'yesus'],
						'gambling': ['agen poker', 'agen sbobet', 'bonus deposit', 'bonus refferal', 'bonus rollingan', 'cashtree', 'game', 'judi', 'minimal deposit', 'poker', 'poker online'],
						'parenting': ['anak', 'anak artis', 'anak cerdas', 'anak dan balita', 'anak mandiri', 'anak selebritis', 'anak selebritis indonesia', 'arti nama anak', 'arti nama bayi', 'artis bercerai', 'artis hamil', 'asi anak', 'ayah', 'baby', 'baby ameena', 'baby arsy', 'baby bump', 'baby bump artis', 'baby dan balita', 'baby face', 'baby gempi', 'baby leslar', 'baby shower', 'baby shower selebritis', 'baby sitter', 'baby spa', 'baby walker', 'babymoon', 'babymoon artis', 'babyologist', 'baru lahir', 'bayi', 'bayi 6 bulan', 'bayi artis', 'bayi dan anak', 'bayi kembar', 'bayi muntah', 'bayi pilek', 'bayi seleb', 'bayi selebritis', 'bayi selebritis indonesia', 'bayi tabung', 'camilan bayi', 'cara mengeluarkan dahak pada bayi', 'child', 'children', 'family', 'father', 'gaya baby', 'ibu', 'ibu anak', 'induk', 'jadwal makan bayi', 'jam tidur bayi', 'kehamilan', 'keibuan', 'kelahiran anak', 'kelahiran bayi', 'keluarga', 'keluarga artis', 'keluarga bahagia', 'keluarga dan anak', 'keluarga harmonis', 'keluarga penjabat', 'keluarga seleb', 'kesehatan bayi', 'kesehatan bayi dan balita', 'kesehatan keluarga', 'kid', 'masalah anak', 'mendidik anak', 'menyusui', 'mother', 'mpasi', 'nama anak', 'nama anak islam', 'nama anak kristen', 'nama anak laki laki', 'nama anak perempuan', 'nama anak sansekerta', 'nama bayi', 'nama bayi islam', 'nama bayi kristen', 'nama bayi laki laki', 'nama bayi laki laki unik', 'nama bayi perempuan', 'nama bayi perempuan unik', 'nama bayi sansekerta', 'newborn', 'orang tua', 'parent', 'parenting', 'pendidikan', 'penyakit bayi', 'penyebab bayi muntah', 'perawatan bayi', 'perceraian artis', 'perkembangan janin', 'perlengkapan bayi', 'pertumbuhan anak', 'pijat bayi', 'remaja', 'resep mpasi', 'rumah tangga', 'school', 'sekolah', 'spa baby', 'tips parenting', 'ucapan kelahiran', 'youth']
					};

					/*change this acording to the site page layout*/
					var siteContentObject = document.getElementsByClassName("main-content");
					var siteContentText = "";

					if (siteContentObject.length) {
						siteContentText = siteContentObject[0].innerText;

						/*removing BACA JUGA box since it unrelated with main content*/
						/*change this acording to the site page layout*/
						var baca_juga_elements = siteContentObject[0].getElementsByClassName("detail-box");
						for (var i in baca_juga_elements) {
							bacajuga = baca_juga_elements[i].innerText;
							siteContentText = siteContentText.replace(bacajuga, '');
						}
					}
					siteContentText = dfp_keyword.concat(dfp_titles, dfp_desc, tagForAds, siteContentText); //.filter(item => item !== undefined);

					/*Iterate for all keyword list category to find match word*/
					for (var bsKey in bsKeywordList) {
						var subKeywordList = bsKeywordList[bsKey];
						if (subKeywordList.length > 0) {
							if (matchString = new RegExp("\\b(" + subKeywordList.join("|") + ")\\b", "ig").exec(siteContentText)) {
								bsKeyword.push(bsKey);
							}
						}
					}

					if (bsKeyword.length > 0) {
						googletag.pubads().setTargeting("bsKeyword", bsKeyword);
						/*Temporary preserve the previous brand safety targeting*/
						googletag.pubads().setTargeting("isMatcont", isMatcont);
						googletag.pubads().setTargeting("brandsafety", isViolateBrandSafety);
					}
				},
				lazzyLoadingAdunit: function() {
					const _noIntersectionMethod = !window.IntersectionObserver;
					var __lazzYSetting__ = {
						"div-gpt-ad-desktop-youtubeMiddleArticle": {
							"type": "oop",
							"adunit": this.gamYoutubeMidArticle,
							"generated": 0,
						},
					}

					document.addEventListener('DOMContentLoaded', function() {
						let _options = {
							root: null,
							rootMargin: "0px",
							threshold: 0.25
						};
						let _observer = null;
						if (_noIntersectionMethod) {
							window.addEventListener("scroll", renderAdunit);
						} else {
							console.log("OBSERVER RUN");
							_observer = new IntersectionObserver(_entries => {
								_entries.forEach(entry => {
									if (entry.isIntersecting) {
										console.log("Intersecting : ", entry.isIntersecting);
										value = __lazzYSetting__[entry.target.id];
										if (!value.generated) {
											if (value.type == "oop") {
												_defineSlot_ = googletag.defineOutOfPageSlot(value.adunit, entry.target.id).addService(googletag.pubads());
											} else {
												_defineSlot_ = googletag.defineSlot(value.adunit, value.size, entry.target.id).addService(googletag.pubads());
											}
											googletag.display(_defineSlot_);
											googletag.pubads().refresh([_defineSlot_]);
											value.generated = 1;
										}
									}
								});
							}, _options);
							for (const [key, value] of Object.entries(__lazzYSetting__)) {
								let _adunitElement = document.querySelector(`#${key}`);
								// Tweak for Homepage if tag from var __lazzYSetting__ is not found
								if (_adunitElement) {
									_observer.observe(_adunitElement);
								}
							};
						}

						function renderAdunit() {
							var _generatedCount_ = 0;
							var _itemCount_ = 0;

							for (const [key, value] of Object.entries(__lazzYSetting__)) {
								console.log(`${key}: ${value}`);
								_itemCount_++;
								var _defineSlot_ = null;
								let _adunitElement = document.querySelector(`#${key}`);

								// Tweak for Homepage if tag from var __lazzYSetting__ is not found
								if (_adunitElement) {
									console.log("viewport --", elementInViewport(document.getElementById(key)), null);

									if (!value.generated && elementInViewport(document.getElementById(key))) {

										if (value.type == "oop") {
											_defineSlot_ = googletag.defineOutOfPageSlot(value.adunit, key).addService(googletag.pubads());
										} else {
											_defineSlot_ = googletag.defineSlot(value.adunit, value.size, key).addService(googletag.pubads());
										}

										googletag.display(_defineSlot_);
										googletag.pubads().refresh([_defineSlot_]);
										value.generated = 1;

									}
								}

								if (_generatedCount_ == _itemCount_) {
									window.removeEventListener('scroll', renderAdunit);
								}
							}

						}

						function elementInViewport(el) {
							let rect = el.getBoundingClientRect()
							return (
								rect.top >= 0 && rect.left >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
							)
						}
					});
				}
			};
			/** GAM LIBRARY - END */

			window.GAMLibrary.lazzyLoadingAdunit();

			googletag.cmd.push(function() {
				var tagForAds = (typeof window.kly !== 'undefined') ? kly.gtm.tag.klyFiltering("|") : [];
				urlPath = document.URL;

				/*SET NEW BRAND SAFETY LOGIC*/
				GAMLibrary.brandSafetyChecker();

				googletag.defineSlot(GAMLibrary.gamLeaderboard, [
					[970, 90],
					[728, 90]
				], 'div-gpt-ad-desktop-lb').addService(googletag.pubads());
				googletag.defineSlot(GAMLibrary.gamHalfPage, [300, 600], 'div-gpt-ad-desktop-halfpage').addService(googletag.pubads());
				googletag.defineSlot(GAMLibrary.gamShowcase1, [300, 250], 'div-gpt-ad-desktop-sc').addService(googletag.pubads());
				googletag.defineSlot(GAMLibrary.gamShowcase2, [300, 250], 'div-gpt-ad-desktop-sc2').addService(googletag.pubads());
				googletag.defineSlot(GAMLibrary.gamShowcase3, [300, 250], 'div-gpt-ad-desktop-sc3').addService(googletag.pubads());
				googletag.defineSlot(GAMLibrary.gamMidDetailArticle, [300, 250], 'div-gpt-ad-desktop-middleDetailArticle').addService(googletag.pubads());
				googletag.defineSlot(GAMLibrary.gamBottomfrm, [970, 90], 'div-gpt-ad-desktop-bottomfrm').addService(googletag.pubads());
				googletag.defineOutOfPageSlot(GAMLibrary.gamPopup, 'div-gpt-ad-desktop-pop').addService(googletag.pubads())
				googletag.defineOutOfPageSlot(GAMLibrary.gamMasthead, 'div-gpt-ad-desktop-masthead').addService(googletag.pubads());
				googletag.defineOutOfPageSlot(GAMLibrary.gamInterscroller, 'div-gpt-ad-desktop-interscroller').addService(googletag.pubads());
				googletag.defineOutOfPageSlot(GAMLibrary.gamDetailRecomm, 'div-gpt-ad-desktop-detail-recomm').addService(googletag.pubads());
				googletag.defineOutOfPageSlot(GAMLibrary.gamMidWidget, 'div-gpt-ad-desktop-middle-widget').addService(googletag.pubads());
				googletag.defineOutOfPageSlot(GAMLibrary.gamNativeout1, 'div-gpt-ad-desktop-nativeout1').addService(googletag.pubads());
				googletag.defineOutOfPageSlot(GAMLibrary.gamNativeout2, 'div-gpt-ad-desktop-nativeout2').addService(googletag.pubads());
				googletag.defineOutOfPageSlot(GAMLibrary.gamNativeout3, 'div-gpt-ad-desktop-nativeout3').addService(googletag.pubads());
				googletag.defineOutOfPageSlot(GAMLibrary.gamCard, 'div-gpt-ad-desktop-card').addService(googletag.pubads());
				googletag.defineOutOfPageSlot(GAMLibrary.gamWhatsHot, 'div-gpt-ad-desktop-whatsHot').addService(googletag.pubads());

				/*  START TARGETING BLOCK   */
				googletag.pubads().setTargeting("tags", tagForAds);
				googletag.pubads().setTargeting("currentUrl", urlPath);
				googletag.pubads().setTargeting("platform", kly.platform);
				googletag.pubads().setTargeting("type", kly.gtm.type);
				googletag.pubads().setTargeting("pageType", kly.pageType);
				googletag.pubads().setTargeting("channel", kly.gtm.subCategory);
				googletag.pubads().setTargeting("audience", typeof(audience = kly.gtm.audience && kly.gtm.audience.split("|")) === "undefined" ? "false" : audience);
				googletag.pubads().setTargeting("isAdvertorial", typeof(isAdvertorial = kly.article && kly.article.isAdvertorial.toString()) === "undefined" ? "false" : isAdvertorial);
				googletag.pubads().setTargeting("isMultipage", typeof(isMultipage = kly.article && kly.article.isMultipage.toString()) === "undefined" ? "false" : isMultipage);
				googletag.pubads().setTargeting("articleId", kly.gtm.articleId.toString());
				googletag.pubads().setTargeting("pagingNum", typeof(pageParam = kly.gtm.pageParam && kly.gtm.pageParam.toString()) === "undefined" ? "false" : pageParam);
				googletag.pubads().setTargeting("newExp", typeof(newExp = kly.gtm.new_exp) === "undefined" ? "false" : kly.gtm.new_exp.toString());
				googletag.pubads().setTargeting("site", kly.site);
				googletag.pubads().setTargeting("age", typeof(age = kly.gtm.age) === "undefined" ? "false" : kly.gtm.age.toString());
				googletag.pubads().setTargeting("gender", typeof(gender = kly.gtm.gender) === "undefined" ? "false" : kly.gtm.gender.toString());
				/*  END TARGETING BLOCK   */

				googletag.pubads().setCentering(true);
				googletag.pubads().enableSingleRequest();
				googletag.pubads().collapseEmptyDivs();
				googletag.enableServices();

			});