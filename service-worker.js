/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_404.html",
    "revision": "c59abc65313e99716468cabf6917165d"
  },
  {
    "url": "1.html",
    "revision": "5f0a8801a485b4ef16784779e776fb9d"
  },
  {
    "url": "2.html",
    "revision": "46d2034ee57476ee4aecb324dee478db"
  },
  {
    "url": "2015-10-27cad-lianxi.html",
    "revision": "fa4fbaa4c00c0079dedbdcfe36b2bcb2"
  },
  {
    "url": "3.html",
    "revision": "4de3c9eef14b9c01a6656066d6a3b816"
  },
  {
    "url": "4.html",
    "revision": "4cf59044b86bf7e77fcb3421241fb86d"
  },
  {
    "url": "42com.html",
    "revision": "e94f3303ed27acfcaf7f3ec0b7e52955"
  },
  {
    "url": "5.html",
    "revision": "3dcc7a5a4161d891461c61bdfc149c74"
  },
  {
    "url": "6.html",
    "revision": "472259ac7fd2241d1b177029f3d5eb8f"
  },
  {
    "url": "7.html",
    "revision": "03a243d1a209b0be7eea381444573ba3"
  },
  {
    "url": "74.html",
    "revision": "26172a9876c32d4231bf31dd70e79b11"
  },
  {
    "url": "8.html",
    "revision": "ad1c853970cf7565dd0f67890ac6a2df"
  },
  {
    "url": "about.html",
    "revision": "3ac76537ecb79c9bdc70b99af413e6da"
  },
  {
    "url": "absorbed.html",
    "revision": "f1b226e55bb5666acece1fbf7798103d"
  },
  {
    "url": "academician.html",
    "revision": "32f563e31a3bb2cd75d1819c3442030e"
  },
  {
    "url": "alifree.html",
    "revision": "05a37c415c1d24717df8af7001667090"
  },
  {
    "url": "antd.html",
    "revision": "af5d075ff933a74829f5f2ec3a58c852"
  },
  {
    "url": "antdpro.html",
    "revision": "bc671fb57839d66052428cf0bfcd67ef"
  },
  {
    "url": "assets/css/0.styles.f490574f.css",
    "revision": "e3137ad3fabbfd9b5b2ca9155cef6c2f"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.1f6fb7b3.js",
    "revision": "8dd6632bd2204c79e73e795ff3090b59"
  },
  {
    "url": "assets/js/10.40d4b183.js",
    "revision": "969adc7c928ecf58af6cfcd19347f06a"
  },
  {
    "url": "assets/js/100.6ea0f1b6.js",
    "revision": "17a5954da3e171da8fe54c3942ad5795"
  },
  {
    "url": "assets/js/101.6237d70e.js",
    "revision": "ef1a3a506f2e32bb16bf12d656b90047"
  },
  {
    "url": "assets/js/102.e2c04742.js",
    "revision": "a6b2222325094599da708db88a4c52fa"
  },
  {
    "url": "assets/js/103.f7a674d3.js",
    "revision": "e02b41b9178c4214d62fe20abc821f1c"
  },
  {
    "url": "assets/js/104.27d2fb5a.js",
    "revision": "f707dcdb8493ab4bc06e4358d5608b26"
  },
  {
    "url": "assets/js/105.3ff74ed5.js",
    "revision": "bc77bdab9d6f61fe7628d729dfecf2ee"
  },
  {
    "url": "assets/js/106.b452b823.js",
    "revision": "fcd05125d4f91cd6bae7ce955b5b7ff8"
  },
  {
    "url": "assets/js/107.0eddd5a8.js",
    "revision": "45923082894709843b0ea841409fe33b"
  },
  {
    "url": "assets/js/108.5963b600.js",
    "revision": "fdf09435132deadf2147ce8005ad0c63"
  },
  {
    "url": "assets/js/109.7e5351ac.js",
    "revision": "f9363e57dedc4c394a765526df82458f"
  },
  {
    "url": "assets/js/11.adfbccf0.js",
    "revision": "f6c8d7bf1fd5ba16c784a8e3a845813b"
  },
  {
    "url": "assets/js/110.92e5c87a.js",
    "revision": "a390e3656716ad8f656459eccda6fc9c"
  },
  {
    "url": "assets/js/111.ee2da407.js",
    "revision": "0aff3b81df30307271292ad5ea406cb9"
  },
  {
    "url": "assets/js/112.b47dcd29.js",
    "revision": "edecf9caaa3e1be7f8cac53b05e02cb1"
  },
  {
    "url": "assets/js/113.7779f275.js",
    "revision": "f12f1ea5227f2bfcb63e2e8a42075a94"
  },
  {
    "url": "assets/js/114.ed6dd22c.js",
    "revision": "eb10e0b3e2c630f608021ebfca949dd4"
  },
  {
    "url": "assets/js/115.e00260a5.js",
    "revision": "88e39c334ba37aa6d370355474e1bfb2"
  },
  {
    "url": "assets/js/116.761b3691.js",
    "revision": "03a5223f0eb3f4941ca96a431e861804"
  },
  {
    "url": "assets/js/117.718d2138.js",
    "revision": "7bba8de47ce9fa6a58907e07488e4db1"
  },
  {
    "url": "assets/js/118.c9df1865.js",
    "revision": "b4349c3bf62a80cdc641795cb3cdda2f"
  },
  {
    "url": "assets/js/119.b2be6ec6.js",
    "revision": "a21db59d8b46d6bebd116278173ccdf8"
  },
  {
    "url": "assets/js/12.fe94295c.js",
    "revision": "35b71ae2a9a2c6a4642b7a1d21345be3"
  },
  {
    "url": "assets/js/120.1905d3d0.js",
    "revision": "0c87c9194509fb95d622619798384b2a"
  },
  {
    "url": "assets/js/121.c32c8053.js",
    "revision": "349ceb55bfd097d0f20cb61d460572fe"
  },
  {
    "url": "assets/js/122.54f13836.js",
    "revision": "0e6aca64fcaa8aa2c83b02b8379764ce"
  },
  {
    "url": "assets/js/123.e0cc0db6.js",
    "revision": "e72b0f213dc89cfc7c424d8afafca0c7"
  },
  {
    "url": "assets/js/124.a96f25e4.js",
    "revision": "82682eb4b6e8bcae8eba82ee1d0e529a"
  },
  {
    "url": "assets/js/125.8e389817.js",
    "revision": "4d61ca6aa44b8efb7fe831b2bd1c79ed"
  },
  {
    "url": "assets/js/126.b996d9b9.js",
    "revision": "344d86432622546f91be9fc829546d40"
  },
  {
    "url": "assets/js/127.439b46f7.js",
    "revision": "aa18a2d76c46fa7757487e8e50ee91b0"
  },
  {
    "url": "assets/js/128.baeec768.js",
    "revision": "e43c385704d99753486ae7d1c514d424"
  },
  {
    "url": "assets/js/129.9d472a06.js",
    "revision": "77c4d20f60106018a3414cafec46a382"
  },
  {
    "url": "assets/js/13.275aca95.js",
    "revision": "d12beecf80a4ff390178d8b9e5b5c7ac"
  },
  {
    "url": "assets/js/130.d412a613.js",
    "revision": "325f9f5ccb127bf8442d63d55386ef6f"
  },
  {
    "url": "assets/js/131.a03a7e7c.js",
    "revision": "5283bc1bd153ac8839cb2c5456ea3108"
  },
  {
    "url": "assets/js/132.a1593d96.js",
    "revision": "e04d75adfb991ad8028d86ac252567c4"
  },
  {
    "url": "assets/js/133.22cc267c.js",
    "revision": "2cabdb114359206095be247aed8e4b27"
  },
  {
    "url": "assets/js/134.4a4090ed.js",
    "revision": "093f3c3fa383a657e30ffe7a6c3b446c"
  },
  {
    "url": "assets/js/135.2dde152a.js",
    "revision": "dbd546e54dd01c27bc3ff6ec750b1f13"
  },
  {
    "url": "assets/js/136.90d92a3f.js",
    "revision": "957f4474b5f04398efae3681cfe1e88e"
  },
  {
    "url": "assets/js/137.6b3736bf.js",
    "revision": "c8994324e964f0cfa4ddc452f63869b3"
  },
  {
    "url": "assets/js/138.5fb6f119.js",
    "revision": "41177ea859c40379f4a4ac1a32c6c6df"
  },
  {
    "url": "assets/js/139.0ab04ebb.js",
    "revision": "ef56f2c62556c44d81776e669a87e0e9"
  },
  {
    "url": "assets/js/14.6a67296a.js",
    "revision": "a30dedd818dbd6b29dec9a4471def087"
  },
  {
    "url": "assets/js/140.f3dbed65.js",
    "revision": "dd4c9a27c90b73421e90c2afceb646dc"
  },
  {
    "url": "assets/js/141.a20d5e47.js",
    "revision": "c060153c89dad8fd9b17e42939d80d55"
  },
  {
    "url": "assets/js/142.5c7564e0.js",
    "revision": "0134a14508d7b0a9d0d5954f1f41563f"
  },
  {
    "url": "assets/js/143.2e0fe488.js",
    "revision": "9aebbe0ff9990f309d777f5102325984"
  },
  {
    "url": "assets/js/144.784ed14f.js",
    "revision": "a5262002162f31222b1e129b8fbf3823"
  },
  {
    "url": "assets/js/145.29384ed1.js",
    "revision": "e79d08b1eb77235fe4c61202fabfb1c9"
  },
  {
    "url": "assets/js/15.55fcbee8.js",
    "revision": "9ed3edb3d70617e6a79971bbcc404e4a"
  },
  {
    "url": "assets/js/16.3a3ca1f6.js",
    "revision": "b5ed72643ab2fe10875121b5aef19650"
  },
  {
    "url": "assets/js/17.1945719c.js",
    "revision": "eeb663144100b3d866f4f03a3aa91b20"
  },
  {
    "url": "assets/js/18.19898ee8.js",
    "revision": "825406db393718a061ebb06215995dfc"
  },
  {
    "url": "assets/js/19.9840fc7d.js",
    "revision": "18635f9370f38e983661d5a2cff7d5f6"
  },
  {
    "url": "assets/js/20.ef8d7a24.js",
    "revision": "67e23fb6367673639fae6ad02b7b0385"
  },
  {
    "url": "assets/js/21.d387ad57.js",
    "revision": "8524079da40d0e9b91c7aac77c4fa8c8"
  },
  {
    "url": "assets/js/22.f6a4e82d.js",
    "revision": "edbbcb5d68924f8b868294a090021460"
  },
  {
    "url": "assets/js/23.41b5a8a9.js",
    "revision": "51d2a2ae8202c158590bd2ce40f4f7fe"
  },
  {
    "url": "assets/js/24.ee4f4de7.js",
    "revision": "cb58b9ac7e5a8c0f352dde22bd9a6039"
  },
  {
    "url": "assets/js/25.07821508.js",
    "revision": "75438892ec08364a333cb62914a84f6f"
  },
  {
    "url": "assets/js/26.9f7acef8.js",
    "revision": "d29d560d0b4f2cdf4502c38657935f73"
  },
  {
    "url": "assets/js/27.04867438.js",
    "revision": "42f177ead98065967daf332807c453c1"
  },
  {
    "url": "assets/js/28.92fac1b5.js",
    "revision": "5386bed183b733d7623a74b9675bde35"
  },
  {
    "url": "assets/js/29.9a86a4d7.js",
    "revision": "340daf49398f91776b07227bf6b7ee58"
  },
  {
    "url": "assets/js/3.f7f64212.js",
    "revision": "cd45c88c75216952bacbc06ec441c824"
  },
  {
    "url": "assets/js/30.0f95bf5f.js",
    "revision": "f8f61b7c51850d4c226057cfef4eaec1"
  },
  {
    "url": "assets/js/31.33312509.js",
    "revision": "df656a084236285fc5b4f5c721af8114"
  },
  {
    "url": "assets/js/32.36298071.js",
    "revision": "3e493edc6d1ab2fabcb85622e73f7aa1"
  },
  {
    "url": "assets/js/33.c32b7b5f.js",
    "revision": "114b2595f3a02f0335999fb301a34046"
  },
  {
    "url": "assets/js/34.075bc063.js",
    "revision": "c3e04f437ac70ec3143f04d3f3358094"
  },
  {
    "url": "assets/js/35.eb8dcccc.js",
    "revision": "43a814c60414871166cf45ad2edeb80c"
  },
  {
    "url": "assets/js/36.18cad016.js",
    "revision": "4c90e88b6201fd1415b72747aec128d5"
  },
  {
    "url": "assets/js/37.132c1615.js",
    "revision": "23adee2464f12863fc4926e107aa2f1e"
  },
  {
    "url": "assets/js/38.fafd95b9.js",
    "revision": "9288fb36526774b43c95c68468137c83"
  },
  {
    "url": "assets/js/39.a12be6a3.js",
    "revision": "671ddafa520ce6a1a9015fc7aa91e1f7"
  },
  {
    "url": "assets/js/4.da5317d1.js",
    "revision": "bd2d87fd399dc735d57619ecc4edad89"
  },
  {
    "url": "assets/js/40.ea540a2b.js",
    "revision": "2a4b8eaaad990e2f233ccfd208dd82db"
  },
  {
    "url": "assets/js/41.1df68256.js",
    "revision": "9c9bffae012bf64718955f9627c0d056"
  },
  {
    "url": "assets/js/42.4cdf501e.js",
    "revision": "ce09726b2f26f706e3aed5acfd975d30"
  },
  {
    "url": "assets/js/43.ec887a3f.js",
    "revision": "b52b27d1fe56a1d91467c3da0e2d9eb1"
  },
  {
    "url": "assets/js/44.c1469f1b.js",
    "revision": "20ced7d1e17b3ced64da5c09775669e4"
  },
  {
    "url": "assets/js/45.e72b4319.js",
    "revision": "78ace105bfe55b7dc4559e6a1bd52e43"
  },
  {
    "url": "assets/js/46.e195ede2.js",
    "revision": "89708a267936c5acab5b1f4be3d5a3f1"
  },
  {
    "url": "assets/js/47.ccef6d30.js",
    "revision": "3b6f6f9ecb194920ccf4f828e62b2c0c"
  },
  {
    "url": "assets/js/48.8ee22393.js",
    "revision": "45e1685d3a0b95db4b6d341fff364209"
  },
  {
    "url": "assets/js/49.73fc63b1.js",
    "revision": "6f0d9c5098e7bc69bb5e9a7163e03b2f"
  },
  {
    "url": "assets/js/5.80ee90d8.js",
    "revision": "4a8be84cd2af1d6a77b61e1fe698e6f3"
  },
  {
    "url": "assets/js/50.25628943.js",
    "revision": "a47ebfc632d7dceab8017cbf15a3ed57"
  },
  {
    "url": "assets/js/51.5beaf0d4.js",
    "revision": "73125d4a362b53e19ccbc6cee2a23673"
  },
  {
    "url": "assets/js/52.5fcf0f79.js",
    "revision": "462ba12fd31f75be8344dea29db1500f"
  },
  {
    "url": "assets/js/53.094c81a2.js",
    "revision": "f96cda7f60413175de3abe42435a2dfe"
  },
  {
    "url": "assets/js/54.3534ba1b.js",
    "revision": "d7d01f00a0b0007ad1e8f4f7498b1fde"
  },
  {
    "url": "assets/js/55.28334385.js",
    "revision": "01ce9f2f1df26c7fb8e142e43dc4d190"
  },
  {
    "url": "assets/js/56.c7137a51.js",
    "revision": "1ebc612d251c392a37f5d099bb5a464a"
  },
  {
    "url": "assets/js/57.80443675.js",
    "revision": "59f817afbc19c253c2e1939a80e85940"
  },
  {
    "url": "assets/js/58.f303d736.js",
    "revision": "ac10a058158e18a148352eaa53e00a8c"
  },
  {
    "url": "assets/js/59.33f5bdd8.js",
    "revision": "c40220b727e4017fd743fa303bd94853"
  },
  {
    "url": "assets/js/6.a3e119af.js",
    "revision": "f5c18fd7f0d52460c4509b61c2c472fd"
  },
  {
    "url": "assets/js/60.e81dde92.js",
    "revision": "d61bdb923985de2a310cf64a2f80384b"
  },
  {
    "url": "assets/js/61.2d72190a.js",
    "revision": "0958185c98c55c0152e9ea764ef7b06b"
  },
  {
    "url": "assets/js/62.bd66a843.js",
    "revision": "cb4d1caf90005bc9ac6f7f155ac9b6dd"
  },
  {
    "url": "assets/js/63.b4d29a00.js",
    "revision": "d4f812714e04414a6476004173b2a308"
  },
  {
    "url": "assets/js/64.eb5c9fb6.js",
    "revision": "9c1f2ccb7b83c7bbd320ba9e6ec65a95"
  },
  {
    "url": "assets/js/65.042b1d84.js",
    "revision": "5dc6e82fb7c0ab68abae8f08e1c1800e"
  },
  {
    "url": "assets/js/66.d2be6ae5.js",
    "revision": "0196d7d353a657b1a124bd5c2e8ec4c2"
  },
  {
    "url": "assets/js/67.ee5dba04.js",
    "revision": "dfd788866edf03336a03e9c8207eac20"
  },
  {
    "url": "assets/js/68.e1ac8128.js",
    "revision": "a7c7c0e012e4501a03bae44eaa8e0b10"
  },
  {
    "url": "assets/js/69.6f82a0d5.js",
    "revision": "13d51685b47a2c9ba1c06b135bc6261c"
  },
  {
    "url": "assets/js/7.e26b8177.js",
    "revision": "f8e20f9a0b8f19b7cee50bdb5035d1c9"
  },
  {
    "url": "assets/js/70.cc9860ec.js",
    "revision": "46638442d22101715f5160e61899ff03"
  },
  {
    "url": "assets/js/71.3062a3a4.js",
    "revision": "cb4019e47cbb4689e09ad380803105ac"
  },
  {
    "url": "assets/js/72.917c9454.js",
    "revision": "c3975c573fbf7d36dd23f25fa63678ae"
  },
  {
    "url": "assets/js/73.cfec1eaf.js",
    "revision": "8d0746f4ef9b98f92dc45a3a939f7aea"
  },
  {
    "url": "assets/js/74.5178189f.js",
    "revision": "6ac39edf52a812393695cc6f1bec4390"
  },
  {
    "url": "assets/js/75.e3db4fdb.js",
    "revision": "7133572b25d15cd7d1ec2d28f1a6a6aa"
  },
  {
    "url": "assets/js/76.ea60f097.js",
    "revision": "e7064b4dfdbdd33a472bddb0d37dcc30"
  },
  {
    "url": "assets/js/77.98ce69b4.js",
    "revision": "6be8aa2170f2656415aac1c6cedc6906"
  },
  {
    "url": "assets/js/78.8bc610f9.js",
    "revision": "07c476f7fb93a876a6979876bcd00e0f"
  },
  {
    "url": "assets/js/79.40631ef2.js",
    "revision": "c95480fafed9b0f702077ef5b95c98df"
  },
  {
    "url": "assets/js/8.7d5f6f07.js",
    "revision": "b6828edfaa4f537632d21a66463c72de"
  },
  {
    "url": "assets/js/80.d8ddf659.js",
    "revision": "ae6eede491717bcbdf9c8be3b74b16eb"
  },
  {
    "url": "assets/js/81.6229c665.js",
    "revision": "3c72aa20ba7ab1b800fe28dc3ed99855"
  },
  {
    "url": "assets/js/82.9f1b3d56.js",
    "revision": "3432d82f9406d925a9aa1017de5881ea"
  },
  {
    "url": "assets/js/83.937a85cd.js",
    "revision": "e3ad566d272598006d77762c37758c7d"
  },
  {
    "url": "assets/js/84.0cbff34c.js",
    "revision": "d4cefbcd0ec26eb2fd9e581dae7a72a0"
  },
  {
    "url": "assets/js/85.891dd7ae.js",
    "revision": "9b1ceabb68dc966f3cdee10191753d0e"
  },
  {
    "url": "assets/js/86.74af0382.js",
    "revision": "f23765a951a87ef24a45165f779c0499"
  },
  {
    "url": "assets/js/87.b98554e1.js",
    "revision": "168a984a4d78a370c265e9ee7c164d9b"
  },
  {
    "url": "assets/js/88.0a4f501b.js",
    "revision": "76354888f5e1e9fc24c59277bc5dad7d"
  },
  {
    "url": "assets/js/89.813dcec9.js",
    "revision": "2d57976789de65dec2f8bd8a89a1a94d"
  },
  {
    "url": "assets/js/9.bb4d4833.js",
    "revision": "c1829493f2a2bf9798737241bcf184c9"
  },
  {
    "url": "assets/js/90.150adffd.js",
    "revision": "67d6514b249c4889d95099247a183a48"
  },
  {
    "url": "assets/js/91.7da9f49f.js",
    "revision": "db069d08ee5a104dd8cc5308f4d6ddf9"
  },
  {
    "url": "assets/js/92.043c4e15.js",
    "revision": "c0ef49cdc36857093bf53b353bf2b096"
  },
  {
    "url": "assets/js/93.ea71e81c.js",
    "revision": "67c3a01b7f7c5d1e702cdb9616b10308"
  },
  {
    "url": "assets/js/94.ac883f03.js",
    "revision": "f0648225220140253de022bd36394275"
  },
  {
    "url": "assets/js/95.58540f00.js",
    "revision": "0ff7487f27725a18d673cd32071f54f4"
  },
  {
    "url": "assets/js/96.32dc5506.js",
    "revision": "fdcd84819860d6ad6cd428bc3b440c29"
  },
  {
    "url": "assets/js/97.74a48e7f.js",
    "revision": "3662ade22032d1b29376be91b9392cb4"
  },
  {
    "url": "assets/js/98.1630ca21.js",
    "revision": "1a917ef73984f0f118fb8871f1100daf"
  },
  {
    "url": "assets/js/99.3201c7b3.js",
    "revision": "c57c0e1b8620aa1debb25fafba33feb1"
  },
  {
    "url": "assets/js/app.28cb689d.js",
    "revision": "2c0b9e4fce366d5c65067756b6474d5a"
  },
  {
    "url": "baiduindex.html",
    "revision": "3ef71b0a1f493fc922a373f5a71344af"
  },
  {
    "url": "cadexam.html",
    "revision": "26c8c636ca3fd3475c7c5a2de72a00ba"
  },
  {
    "url": "cadlx1.html",
    "revision": "05033bc48474cbff8ee9e37907344f00"
  },
  {
    "url": "camtasia.html",
    "revision": "f66a59366913543796723d6a61aac0ef"
  },
  {
    "url": "captcha.html",
    "revision": "77b8c2d325ae9f1980efdc55b83543f7"
  },
  {
    "url": "categories/index.html",
    "revision": "df62a098be994c7cab42a5d5784e79ce"
  },
  {
    "url": "categories/research,科研做图/index.html",
    "revision": "cfe5d46d85eff44c2afa271d8c15132f"
  },
  {
    "url": "categories/uncategorized/index.html",
    "revision": "6147cb99c3141b553e6214683a307ca3"
  },
  {
    "url": "categories/与我相关/index.html",
    "revision": "9b82ec24343bb207ca7cf4b7e1f113a4"
  },
  {
    "url": "categories/今日观点/index.html",
    "revision": "229a9c009ca37cc1ba14bf6cbff3abb0"
  },
  {
    "url": "categories/办公/index.html",
    "revision": "bbcc7205250f96e58d6e13ca3d45c896"
  },
  {
    "url": "categories/好文好书/index.html",
    "revision": "d12b0c12ffdc12ac20f810d97363dcc7"
  },
  {
    "url": "categories/学习资料/index.html",
    "revision": "753d2de14194d20001d1dfa54f2dba1f"
  },
  {
    "url": "categories/手机/index.html",
    "revision": "b5727e4204515e9a3e75ce5be3ffe3ed"
  },
  {
    "url": "categories/福利/index.html",
    "revision": "55222b5c5bb0ef0d294b2a4a1f1d2c31"
  },
  {
    "url": "categories/科研/index.html",
    "revision": "712e1a3e1d62322bc15927766bfb1ea8"
  },
  {
    "url": "categories/笑一笑/index.html",
    "revision": "7fe258cc5d62d497148cea3cfce4530d"
  },
  {
    "url": "categories/系统/index.html",
    "revision": "a23a51e0bc5ba4efd45f469c0822fbd3"
  },
  {
    "url": "categories/编程/index.html",
    "revision": "ffd6caece55996d66fbf902bba0cc33b"
  },
  {
    "url": "categories/网站公告/index.html",
    "revision": "1778c75374893b1f351e9a8f42e569a7"
  },
  {
    "url": "categories/网站建设/index.html",
    "revision": "dfb1affe901763b96ce624d0a6c332d3"
  },
  {
    "url": "categories/考研/index.html",
    "revision": "e7817c820d1ba19b5afe49ff1556dfb8"
  },
  {
    "url": "categories/软件/index.html",
    "revision": "cd222caac034727172507a4def84ebec"
  },
  {
    "url": "categories/酷/index.html",
    "revision": "851132993bce9e7c09b73a4e59fd4b2b"
  },
  {
    "url": "ccp-and-hcp.html",
    "revision": "1e3a0ff6edd51e0b993068f0bbd44634"
  },
  {
    "url": "chongzhuagnxitong.html",
    "revision": "62707235a68ff0f3ec60ab2880b3339b"
  },
  {
    "url": "chooseoffice2016.html",
    "revision": "45fb734d3f157e564212d72eca7821a9"
  },
  {
    "url": "chuangkit.html",
    "revision": "197bb922135a1a3acf621b2e53165ee8"
  },
  {
    "url": "chuzhongbiye.html",
    "revision": "bf94a771df659900b6979d10ffe51d3c"
  },
  {
    "url": "cnki中国知网硕博论文pdf全文下载器-和caj说拜拜.html",
    "revision": "0f464bd72078ead0e95f1fffaef027ef"
  },
  {
    "url": "cnki中国知网硕博论文pdf全文下载器使用姿势纠正及更.html",
    "revision": "91b68d60707ce4dfd6608606ceb1f5cc"
  },
  {
    "url": "cpuz.html",
    "revision": "9b230e2f4a2c08b8a2f4b89a090e3906"
  },
  {
    "url": "cryptography.html",
    "revision": "4bcd153321f6d6e85a650ad508bc0d41"
  },
  {
    "url": "dianying-banben.html",
    "revision": "c5727b67cbd7f7f6fe9dfc384bc4f101"
  },
  {
    "url": "download-and-office.html",
    "revision": "d9cf673b6e4a76cd42c4ca5de401b7d4"
  },
  {
    "url": "elaticsearch.html",
    "revision": "df290723d50aaef4609d83ceb331a577"
  },
  {
    "url": "es6.html",
    "revision": "d9df3f0fc5f3c393c461a8df5d51a0af"
  },
  {
    "url": "everything-急速搜索本地文件.html",
    "revision": "a434399c145367bf4fc3880a462ace6d"
  },
  {
    "url": "evian.html",
    "revision": "73130e84681c0d0f75b02be7e465a064"
  },
  {
    "url": "exceljiqiaogif.html",
    "revision": "c389e77cc1d1e45715e94e1dabdcc264"
  },
  {
    "url": "fileanalysis.html",
    "revision": "30e6429e82c2864992dd9953a4ce4e48"
  },
  {
    "url": "fileskills.html",
    "revision": "e432ffd9711ca9d9e7d56a0843a0f34c"
  },
  {
    "url": "five-dwarfs.html",
    "revision": "171797ac495d3c705fb42b40ae99431c"
  },
  {
    "url": "gaoxueli.html",
    "revision": "07082e27ab0ced6d803c4cbf9939453d"
  },
  {
    "url": "git.html",
    "revision": "f428451195a100c04fa1c720d291acd5"
  },
  {
    "url": "gopro2015.html",
    "revision": "59f5a679569081cfef00faa82934efa7"
  },
  {
    "url": "guanbiwin10tixing.html",
    "revision": "3ebc6927bc4f16bf14c37f5af5f7948d"
  },
  {
    "url": "hengxian.html",
    "revision": "8e318ff3daa66cc1c42a2c3a4027cedd"
  },
  {
    "url": "iems.html",
    "revision": "3aeedb31e8db43a4cfa3c7fd318bd934"
  },
  {
    "url": "index.html",
    "revision": "c61317b678fb3a6019197ab120c80cc3"
  },
  {
    "url": "insert.html",
    "revision": "5ee12678bb955f1b5aed3e3754546fe2"
  },
  {
    "url": "jiazhao.html",
    "revision": "0881649240bb83ad09d600dcc4cf9357"
  },
  {
    "url": "jmeter.html",
    "revision": "42a76524279f4ebdcdadc420fe2e02af"
  },
  {
    "url": "jscalculator.html",
    "revision": "32a2a2f8b98a5718932242f905d14c21"
  },
  {
    "url": "juisreader.html",
    "revision": "ca8d9a04f500cb5379e0e07233bf16b7"
  },
  {
    "url": "jwt.html",
    "revision": "427da3c62e74ee43a7f3fb839b2f37e5"
  },
  {
    "url": "koalastothemax.html",
    "revision": "4e21761bb75e8d267f2238b4c8926c85"
  },
  {
    "url": "linux.html",
    "revision": "3faa93415412ab73c0795c9f13a19a87"
  },
  {
    "url": "logo.png",
    "revision": "8dc1d67e7e719e57801b8b4c83fa452e"
  },
  {
    "url": "logo288.png",
    "revision": "e8e41cd4dec1320921a5435a1ef3cec1"
  },
  {
    "url": "logo52.png",
    "revision": "df9d2415fb2f237440cf5c88f454d605"
  },
  {
    "url": "lookupoffice32or64.html",
    "revision": "b321bde37d1c9ca5bec7bb37277cab7c"
  },
  {
    "url": "meihuaupan.html",
    "revision": "f3ebd6c325bb9c6334da79420f51373b"
  },
  {
    "url": "mydream.html",
    "revision": "de9ff5a3cb1aab142483d1c5c2918850"
  },
  {
    "url": "mysql-install.html",
    "revision": "2ba4319679c0b0f34e32bd64abf9f0bb"
  },
  {
    "url": "ncre3net.html",
    "revision": "d6292e027216138a36a3624f862ae7fb"
  },
  {
    "url": "nginx.html",
    "revision": "f9394482b3562ed4b21b556ed0710492"
  },
  {
    "url": "office-365变形切换功能.html",
    "revision": "94ad47fc343fe6f5a43a6dcef8d5ff45"
  },
  {
    "url": "office2016.html",
    "revision": "ea2d02e9dbdc02588142373a108b411e"
  },
  {
    "url": "officeplus微软office官方在线模板网站.html",
    "revision": "04e105f3da2b1dfec4e809b533336d68"
  },
  {
    "url": "officepublishwordpressposts.html",
    "revision": "cd8ea24a9109dd4ac7980d2f89ae7075"
  },
  {
    "url": "papers.html",
    "revision": "50a9a725860740e2b2640787beea5c31"
  },
  {
    "url": "picpick-printscreen-soft.html",
    "revision": "0e6b10938e84e402fd8094f0a0f55929"
  },
  {
    "url": "pojiepixiangmima.html",
    "revision": "b135963ee6881bf91bbf6670a6c025ec"
  },
  {
    "url": "powershell-2.html",
    "revision": "5b38bfb199ea2c73f8e72bc749a2152c"
  },
  {
    "url": "powershell.html",
    "revision": "9e97e8917563875e38a52e0ba357600c"
  },
  {
    "url": "ppt-eyeful.html",
    "revision": "58c6b40e246efaa8081d2b1538f7de91"
  },
  {
    "url": "ppt-picture.html",
    "revision": "6ddc632b55b191bd6d84febee9d55230"
  },
  {
    "url": "printskill.html",
    "revision": "71b6f7cd662e154210ce738e32075083"
  },
  {
    "url": "pwa.html",
    "revision": "8b3007a4077d69e9d46547ffc1a06add"
  },
  {
    "url": "qcloudschool.html",
    "revision": "39ba11990d89c5ce5058f327a6869f24"
  },
  {
    "url": "qqconnect.html",
    "revision": "44c4a5fcfa5d4c4f478ef522978d86b5"
  },
  {
    "url": "react-router.html",
    "revision": "e121d1e9a443d00eecff1124eefefdd7"
  },
  {
    "url": "react.html",
    "revision": "65bb665ff6efdb59a38c6d2955aa4ee8"
  },
  {
    "url": "redis-config.html",
    "revision": "848777f80cbfcb60f8fe72f6e821dbf7"
  },
  {
    "url": "redux.html",
    "revision": "7ebdeb79cd483977973b236f4933fd6f"
  },
  {
    "url": "remove-the-ads-of-youdao-dict.html",
    "revision": "a6d284155270891f2606d1b6b652d849"
  },
  {
    "url": "rk.html",
    "revision": "b4534eaacd344817ba211b9e05d218ae"
  },
  {
    "url": "rmfcd.html",
    "revision": "d61f5444293e354277ce67ee10e6e8f3"
  },
  {
    "url": "ruoyi.html",
    "revision": "86a3bd0bcd4fdd23a01f0331aaf937d1"
  },
  {
    "url": "sdmzh-map.html",
    "revision": "d189c6ac4bb27753311dceaa914e35ee"
  },
  {
    "url": "search-skills.html",
    "revision": "2da696d0ec9060b453edae0a28c0776e"
  },
  {
    "url": "setup-cad2008-2.html",
    "revision": "65efaf15f47b1e5e4924e3ada6f6744d"
  },
  {
    "url": "solr.html",
    "revision": "54f12fa053f273a230acba0b7ce98096"
  },
  {
    "url": "sponsor.html",
    "revision": "527b6c24d8f82e69e77b244b217afb5e"
  },
  {
    "url": "stitch-soft.html",
    "revision": "379fefa00744dad0fcfebc9bf498a76b"
  },
  {
    "url": "swagger.html",
    "revision": "67af57988cbd8ca040e9cd26e60b1a85"
  },
  {
    "url": "system-32-or-64-panxin.html",
    "revision": "d546b59c05133b68ea8a989fc56bf42f"
  },
  {
    "url": "tag/antd/index.html",
    "revision": "02f0a6111725057c07e43ffc190c610d"
  },
  {
    "url": "tag/CAD/index.html",
    "revision": "6766b08ed232c3018e26bced7de6e904"
  },
  {
    "url": "tag/CNKI/index.html",
    "revision": "47dd70aab79e5802813e5008168a021e"
  },
  {
    "url": "tag/code/index.html",
    "revision": "4cd17ca3d9075dd6a7ea7843f13a5858"
  },
  {
    "url": "tag/CPU/index.html",
    "revision": "3a7773e8524f0ece9f96a7134234dbd7"
  },
  {
    "url": "tag/excel/index.html",
    "revision": "491b51686db74dfc4ea7ab0ac4e04340"
  },
  {
    "url": "tag/html/index.html",
    "revision": "831fbaf657cfc2f21f1c848d7c68ac19"
  },
  {
    "url": "tag/hutool/index.html",
    "revision": "968ee0d06b9f8a6785153497bead63ef"
  },
  {
    "url": "tag/index.html",
    "revision": "dc5eea98898cca354e37b3369146718a"
  },
  {
    "url": "tag/java/index.html",
    "revision": "2bc38e0bd6bbea1d6e9522fbdb4aa694"
  },
  {
    "url": "tag/js/index.html",
    "revision": "7910addf95a6617652588336a3efd39c"
  },
  {
    "url": "tag/jwt/index.html",
    "revision": "11b0f27d7130d29fdb10c81444680057"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "29babf6eaabc9f3a5b265fb43071d3e3"
  },
  {
    "url": "tag/mathtype/index.html",
    "revision": "630c3da36bd74590f4e18f64e96812a0"
  },
  {
    "url": "tag/Mybatis/index.html",
    "revision": "f56023fa2c05aaf43dcbbfdcbaf414ff"
  },
  {
    "url": "tag/mysql/index.html",
    "revision": "a68818cbde2275884a810b4d4f704259"
  },
  {
    "url": "tag/office/index.html",
    "revision": "c0d10cd89dbc529346b6304c8b66daa9"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "2a54e55998762a91ce6529d15e33f97a"
  },
  {
    "url": "tag/ppt/index.html",
    "revision": "c8d2a7e4d445f36477f75285d50ab272"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "d8e0ffcffeef0837a6cc5723f2a99250"
  },
  {
    "url": "tag/python/index.html",
    "revision": "b6d6c07a5c94d542128f545d92e48b95"
  },
  {
    "url": "tag/qq/index.html",
    "revision": "c2b134baaf4951d51c2ad75b4adf0b26"
  },
  {
    "url": "tag/react/index.html",
    "revision": "25aa45634386b491dccb33906679a26f"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "2acfab38b531e905547c5cb24cf24d1f"
  },
  {
    "url": "tag/Solr/index.html",
    "revision": "ff94a565faef11e8dcf371866feb73ee"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "d1ca73f338ba970d55d3e58740620557"
  },
  {
    "url": "tag/sql/index.html",
    "revision": "40eddb787ec0db6a7f9fe272c5dd77f9"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "f81702ebc7d861d100d2dc9c13892377"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "2dc17dd1edf83e75c933f045efae7248"
  },
  {
    "url": "tag/umi/index.html",
    "revision": "83d7bd5afc68d854b7f952de069ae71d"
  },
  {
    "url": "tag/U盘/index.html",
    "revision": "374c72c3c788925ddd9c23b82526e6ee"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "d61beb0701d782c20870d2b38b9d77cd"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "870c7713a07e09683b719664cba40756"
  },
  {
    "url": "tag/word/index.html",
    "revision": "e364d9a50a7f48c160685ce2f25f2612"
  },
  {
    "url": "tag/WordPress/index.html",
    "revision": "2fe01edd9112d30197a5a8283cb092c2"
  },
  {
    "url": "tag/xrd/index.html",
    "revision": "afabda0c400189cf9798672f3d91c998"
  },
  {
    "url": "tag/上网/index.html",
    "revision": "6adf45a86ce298ce02f54c2106fa39a5"
  },
  {
    "url": "tag/下载/index.html",
    "revision": "e78a5bcbd3f1c2479a9e634bfbb7f918"
  },
  {
    "url": "tag/中国知网/index.html",
    "revision": "eecf9ce6447a6643e00b8b087853583b"
  },
  {
    "url": "tag/乌米/index.html",
    "revision": "f5f28a3ce55f502f760298a99074b2ba"
  },
  {
    "url": "tag/刷机/index.html",
    "revision": "890bdadda5c8f716a7adb72a68f2fabd"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "49347b76c1548ff000c74e9169540eb6"
  },
  {
    "url": "tag/办公/index.html",
    "revision": "c73418bd62b7468dfb4d857be9584991"
  },
  {
    "url": "tag/动画/index.html",
    "revision": "19e9f3020b74d59607101537a04334c1"
  },
  {
    "url": "tag/十字绣/index.html",
    "revision": "e8bdfcba6708b267ad819f031618923d"
  },
  {
    "url": "tag/去广告/index.html",
    "revision": "42373a905a07c746469a3854f24344d8"
  },
  {
    "url": "tag/后端/index.html",
    "revision": "0f3e372e0a3bc85d82109df02a7d3ff9"
  },
  {
    "url": "tag/四大名著/index.html",
    "revision": "56f31e52ddf020ec3f2b3589791b7953"
  },
  {
    "url": "tag/图表/index.html",
    "revision": "2c7b51a50169366eff0e3ad64c33f1ee"
  },
  {
    "url": "tag/实用技巧/index.html",
    "revision": "7363f5feb9a35189998703e29a156e7d"
  },
  {
    "url": "tag/密码/index.html",
    "revision": "8bad65ae92426550bf498b9227530072"
  },
  {
    "url": "tag/小米/index.html",
    "revision": "c480bab5b63f29bbd5d4b37d6aff753d"
  },
  {
    "url": "tag/小说阅读/index.html",
    "revision": "542a21e5223b78286c2c1f4da29bbe3b"
  },
  {
    "url": "tag/截图/index.html",
    "revision": "f831a061f9f74801b0b7af05436fc079"
  },
  {
    "url": "tag/手机/index.html",
    "revision": "68ea026cc590c121856981d11709cf68"
  },
  {
    "url": "tag/报告/index.html",
    "revision": "f4d24179f8e31ed2f6732a392a527d13"
  },
  {
    "url": "tag/文献/index.html",
    "revision": "67c50aff64a381a68dcfdc4c0b65df32"
  },
  {
    "url": "tag/新大/index.html",
    "revision": "cf6141bfdec6ada3beee83cf4fdc200a"
  },
  {
    "url": "tag/格式/index.html",
    "revision": "81570470b4b92381ca895e794e434da2"
  },
  {
    "url": "tag/梦想/index.html",
    "revision": "2830efaa9b9996d558662644b0cd15d1"
  },
  {
    "url": "tag/模板/index.html",
    "revision": "ded4016ef3fe02bca428f14a33729ead"
  },
  {
    "url": "tag/电影/index.html",
    "revision": "8201fa09944a265e28221f35d275fc9c"
  },
  {
    "url": "tag/电脑/index.html",
    "revision": "365d61c59d66c90a85cacccd91ab91be"
  },
  {
    "url": "tag/百度/index.html",
    "revision": "ad303d1b2d5eb808990a03a8e22c3a13"
  },
  {
    "url": "tag/视频/index.html",
    "revision": "278e80db5b9b58ee9fd3e6d0a116154e"
  },
  {
    "url": "tag/福利/index.html",
    "revision": "362e30f92e57dd5660767839f91461e4"
  },
  {
    "url": "tag/系统/index.html",
    "revision": "463801e00034a24d8a96e90511853ded"
  },
  {
    "url": "tag/编程/index.html",
    "revision": "665596a7add77191faf12d6fa95e3370"
  },
  {
    "url": "tag/考试/index.html",
    "revision": "ebafd71279918eec9afdd2ba336f4478"
  },
  {
    "url": "tag/虚拟拨号/index.html",
    "revision": "75a2561fbcaa271996a3a1545a8386ad"
  },
  {
    "url": "tag/软件/index.html",
    "revision": "c2870f606f522c43022c2edeaddfc54c"
  },
  {
    "url": "tag/页码/index.html",
    "revision": "4ec7bec80d9c8699eb93870d62c8d08d"
  },
  {
    "url": "timeline/index.html",
    "revision": "3e5bbeda74709074e4be8b30de2ad71a"
  },
  {
    "url": "ts.html",
    "revision": "505c8dc730fb206c64eeccf6498e5e4c"
  },
  {
    "url": "tushuo.html",
    "revision": "b0b32412d832b019322a54a9b47273e9"
  },
  {
    "url": "ueditor.html",
    "revision": "955278a329fb9c2fbdee38260c870278"
  },
  {
    "url": "ultraiso-9.html",
    "revision": "9c70d9c0214f2079c5f3f4a92fc73334"
  },
  {
    "url": "umi.html",
    "revision": "99b1b286606b5389f71af49525079b6a"
  },
  {
    "url": "vultr.html",
    "revision": "fd2b633ff53e5bcf7c00ebcafd3a9dcc"
  },
  {
    "url": "web-of-science-ppt.html",
    "revision": "a36b8ed059f0a2dcc13aab563dd31fe8"
  },
  {
    "url": "web-of-science.html",
    "revision": "05b04683fc21ee5837177d62308bdea9"
  },
  {
    "url": "weipu.html",
    "revision": "bf0c583af3c204b42069414aa135c940"
  },
  {
    "url": "weixintupian.html",
    "revision": "5a948501304982c2c751ef4cd67856ef"
  },
  {
    "url": "welcom.html",
    "revision": "4219949376513c38151406158aa41220"
  },
  {
    "url": "windows-kuaijiejian.html",
    "revision": "9d84f87993e79f0abff5fb55d897b12c"
  },
  {
    "url": "windows-live-writer.html",
    "revision": "e37a711d7028c95fd3491171c723e864"
  },
  {
    "url": "windows-pe1-0.html",
    "revision": "82edf6e1ad30d206869257235c00234b"
  },
  {
    "url": "wordpress-cannot-comments.html",
    "revision": "f253788ac32d9d47dc5f1d1300550b95"
  },
  {
    "url": "wordpress-rss.html",
    "revision": "5b14bd18ef91d448315a2212394ff9d0"
  },
  {
    "url": "wordpressfooter.html",
    "revision": "faa2216206cdd3c4c1867babea7db3c0"
  },
  {
    "url": "wordyema.html",
    "revision": "0753232915ccefdeddfaec06cfd62808"
  },
  {
    "url": "wordyema2.html",
    "revision": "9f35e0765ecc5991270b8fbe92064006"
  },
  {
    "url": "word文档尾部空格没有下划线.html",
    "revision": "db8106983489723b952c3758c52998ec"
  },
  {
    "url": "wpsandoffice.html",
    "revision": "267271519bb5516e0100a719de80745f"
  },
  {
    "url": "xdadsl.html",
    "revision": "c68ee730a38b9765971ca3ad9cacc5b9"
  },
  {
    "url": "xiaomi2s-huifu-miuiv5.html",
    "revision": "52c6b402e03fbaa3b9ece68ba29fd49f"
  },
  {
    "url": "xrdnacl.html",
    "revision": "a163953069b1c23d9b625767c59b2220"
  },
  {
    "url": "xuvsruan.html",
    "revision": "d48458e1d5c7bc1fea9af2998a01ea59"
  },
  {
    "url": "yujia.html",
    "revision": "70fd92722ca0e492bd580a8ebf480e73"
  },
  {
    "url": "zhangboalbum.html",
    "revision": "e17601f42e57460e9dcdcf506d7eb588"
  },
  {
    "url": "zoomit.html",
    "revision": "da83f8c9b0f43b7ead680f20e2c224b3"
  },
  {
    "url": "下载google-play上的apk安装包.html",
    "revision": "244872d9b512a2693975087a5e2c8931"
  },
  {
    "url": "人体地图.html",
    "revision": "e5bddab7dcd6089ef164b2895ac07cc3"
  },
  {
    "url": "奇怪的直线-怎么也删除不掉.html",
    "revision": "c9630a3457fab206dcb7157fecd3d4ea"
  },
  {
    "url": "小白秒变大牛-一图看懂笔记本配置在讲啥.html",
    "revision": "aa20cde8311a036a37f4e9fc5f394ec4"
  },
  {
    "url": "波兰艺术家igor-morski的超现实主义世界.html",
    "revision": "95eb9f0531b13a189cf20c233cae791a"
  },
  {
    "url": "注册了微信公众号-sciarts-发布科研绘图教程.html",
    "revision": "d46803864b8cabc282e7ad47b56ebad3"
  },
  {
    "url": "海绵示意图.html",
    "revision": "9577674ac86567b69bf2d09ed80be31d"
  },
  {
    "url": "玩转camtasia-studio.html",
    "revision": "63ac649300ed5ad2afb40fda76cf5bea"
  },
  {
    "url": "瞬间就能让你充分理解云计算的方式.html",
    "revision": "d81fba3d81bfbeefbb790e71a43f4a01"
  },
  {
    "url": "红米note3刷cm14-1.html",
    "revision": "bf2344ab4d7fa55677a8c32560647f47"
  },
  {
    "url": "莆田系医院检索webios.html",
    "revision": "7668a1f4019b0992a451380cb5eac054"
  },
  {
    "url": "计算机三级网络技术视频.html",
    "revision": "ca78891870f990fdd97a3b191503cc8d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
