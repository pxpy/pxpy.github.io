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
    "revision": "50c2d3e01a6dd6c74db8abe5206de4e7"
  },
  {
    "url": "1.html",
    "revision": "eda75c7f4af4f3e227425dcf28b8fe65"
  },
  {
    "url": "2.html",
    "revision": "1f97ac1f2a374439ff424f318f134629"
  },
  {
    "url": "2015-10-27cad-lianxi.html",
    "revision": "cf1957872c02be7317c8153b84f3d4bd"
  },
  {
    "url": "3.html",
    "revision": "420eb5cf43c55065db5667cc571283bd"
  },
  {
    "url": "4.html",
    "revision": "468c54fa238d6f1db94dea8c80354c97"
  },
  {
    "url": "42com.html",
    "revision": "cbf0d252963b1eef33a753cc7ab81387"
  },
  {
    "url": "5.html",
    "revision": "484e624ff51964a6a7f336f0edd8f633"
  },
  {
    "url": "6.html",
    "revision": "a4c394f4c387a1372ffe554cfee5d591"
  },
  {
    "url": "7.html",
    "revision": "07dae5a81825f019797b92ac144348b5"
  },
  {
    "url": "74.html",
    "revision": "2ad7737b78db7073a4ae963386ed3071"
  },
  {
    "url": "8.html",
    "revision": "22ce60e8e8eca59a8fa8d96919185847"
  },
  {
    "url": "about.html",
    "revision": "76be093816ed5aa825390e1027f3103b"
  },
  {
    "url": "absorbed.html",
    "revision": "4f9008bef9b8bdf302f1635ed1139097"
  },
  {
    "url": "academician.html",
    "revision": "1bd899901373023c8dd275399127461f"
  },
  {
    "url": "alifree.html",
    "revision": "7968d7a7f56313bbc06278b69ed93993"
  },
  {
    "url": "antd.html",
    "revision": "de9a101397fb26d68a9faec47d621f84"
  },
  {
    "url": "antdpro.html",
    "revision": "d87905befd00db3e476ae63cd40c3c0c"
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
    "url": "assets/js/100.10ced075.js",
    "revision": "35444e071a6aa3e4f41218cbbb529610"
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
    "url": "assets/js/106.6e6773c0.js",
    "revision": "05d8795bb5e858d120baf9cca1f003b5"
  },
  {
    "url": "assets/js/107.0009d22e.js",
    "revision": "42e532bf4054203ef75e926046335775"
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
    "url": "assets/js/113.7d121a3d.js",
    "revision": "71b7f52b1a8273c949c441c26050840e"
  },
  {
    "url": "assets/js/114.cbcacd01.js",
    "revision": "cf6fc2a5a58d735ef43e8986fe977b25"
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
    "url": "assets/js/118.23e597f9.js",
    "revision": "2c8a46d2267f68de6a55fdcbb0f55d22"
  },
  {
    "url": "assets/js/119.0ecfd7d4.js",
    "revision": "061aa5583592778d97794d417faa9451"
  },
  {
    "url": "assets/js/12.0d3e575a.js",
    "revision": "8504289c9270ef358b5fba161294d43e"
  },
  {
    "url": "assets/js/120.1d4d4724.js",
    "revision": "c0175fbde86f40c01f637e5a420e8e1e"
  },
  {
    "url": "assets/js/121.c32c8053.js",
    "revision": "349ceb55bfd097d0f20cb61d460572fe"
  },
  {
    "url": "assets/js/122.b180c5be.js",
    "revision": "62828505a0f2544999f83198ee1ac8fa"
  },
  {
    "url": "assets/js/123.98816414.js",
    "revision": "a477e05db38771edbc26ee125630d6ce"
  },
  {
    "url": "assets/js/124.deea2206.js",
    "revision": "1611cb7cf23def8911322152bd8b33f2"
  },
  {
    "url": "assets/js/125.8e389817.js",
    "revision": "4d61ca6aa44b8efb7fe831b2bd1c79ed"
  },
  {
    "url": "assets/js/126.e1f43bb3.js",
    "revision": "986dc4e43fc23916c16fa2cd8dccf001"
  },
  {
    "url": "assets/js/127.4fba7054.js",
    "revision": "592f5c753673fd78a60069543427a89f"
  },
  {
    "url": "assets/js/128.d734ad3a.js",
    "revision": "5f0e875688eb3594d76eace53990c4ec"
  },
  {
    "url": "assets/js/129.f723ee3b.js",
    "revision": "b971dbe73339215e19a37d5bb6aa38c7"
  },
  {
    "url": "assets/js/13.965081fe.js",
    "revision": "2e4de9e359412b4bb9b9816b597aad4f"
  },
  {
    "url": "assets/js/130.878b8ea3.js",
    "revision": "1b1895ae30dd40e9c9d635931189f4d7"
  },
  {
    "url": "assets/js/131.a6e40172.js",
    "revision": "bf685a80679667f1d2f652f93da16b0f"
  },
  {
    "url": "assets/js/132.04ef03bc.js",
    "revision": "d45fa4be7df045bfdfcf162f9e4e53ea"
  },
  {
    "url": "assets/js/133.b761cfba.js",
    "revision": "af554b1f454e28a8aeece6225817122a"
  },
  {
    "url": "assets/js/134.d2e48287.js",
    "revision": "8e270aed90f597bb0ed1c8f6985ba0b3"
  },
  {
    "url": "assets/js/135.1df32898.js",
    "revision": "ee286129926b4bd62ffdb340a57e027c"
  },
  {
    "url": "assets/js/136.784b6295.js",
    "revision": "6af4db49013bf8254df2b6fb7b7ad12f"
  },
  {
    "url": "assets/js/137.65ea3f7b.js",
    "revision": "756e31bd973351f48a682d2a92484b9d"
  },
  {
    "url": "assets/js/138.893a670a.js",
    "revision": "a138bd86b8bc32d944a56e465aa91989"
  },
  {
    "url": "assets/js/139.0b925017.js",
    "revision": "9af370e2a7609053c4f967c08c2bd71f"
  },
  {
    "url": "assets/js/14.fc183d43.js",
    "revision": "2b9b970ec65624c4b77ceb7642def55b"
  },
  {
    "url": "assets/js/140.c3650efd.js",
    "revision": "80c58b817817afa616241cefb27427a0"
  },
  {
    "url": "assets/js/141.8b0a07b0.js",
    "revision": "99b6c79ddd8ad40ebae56a8e39cf0052"
  },
  {
    "url": "assets/js/142.d569b181.js",
    "revision": "ac59372b494fa713f03df1fa9579a1f5"
  },
  {
    "url": "assets/js/143.f2e6f950.js",
    "revision": "b8dc0bac5f9f0e850d1fbcd75cb87c6f"
  },
  {
    "url": "assets/js/144.6d2eeafc.js",
    "revision": "2ce43221fc0557aa477de18777a8057d"
  },
  {
    "url": "assets/js/145.29384ed1.js",
    "revision": "e79d08b1eb77235fe4c61202fabfb1c9"
  },
  {
    "url": "assets/js/15.4ecb07a8.js",
    "revision": "cd50451bcebc463365eb2f4ac44afcc4"
  },
  {
    "url": "assets/js/16.a4d8b71f.js",
    "revision": "29daae1efdf8f989177080f2b50e38e5"
  },
  {
    "url": "assets/js/17.788db0cf.js",
    "revision": "e6319465d9f7292e9abec097bb864116"
  },
  {
    "url": "assets/js/18.19898ee8.js",
    "revision": "825406db393718a061ebb06215995dfc"
  },
  {
    "url": "assets/js/19.8c4ac333.js",
    "revision": "586aeb0a56bee1d49242f10b3a7feb25"
  },
  {
    "url": "assets/js/20.db80005c.js",
    "revision": "16405602b08b2f3114ff3511bdeb84f8"
  },
  {
    "url": "assets/js/21.3a1d359a.js",
    "revision": "31a811f64523f1e2b0ae10b48256c517"
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
    "url": "assets/js/37.c3487198.js",
    "revision": "ec9eac093aed27dd32f989b591363dd1"
  },
  {
    "url": "assets/js/38.6f02a0f1.js",
    "revision": "0388520beec13bfe8a7253042bb79e09"
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
    "url": "assets/js/45.22c08249.js",
    "revision": "b2926ca93fe78da0877f5333da3f7f90"
  },
  {
    "url": "assets/js/46.3add696b.js",
    "revision": "9fed7ba98d17c97428dd59eb944e0621"
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
    "url": "assets/js/52.bbb3967c.js",
    "revision": "3192f3a81123121e8ae0174deb6a9c45"
  },
  {
    "url": "assets/js/53.34b33732.js",
    "revision": "6e94c714a6c5a670192750ae879c5b3a"
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
    "url": "assets/js/62.9e4a5b37.js",
    "revision": "b630290d50cf2cb17ed52bb8532e7182"
  },
  {
    "url": "assets/js/63.a40789c6.js",
    "revision": "cef10b89e2e292623fe8c1b45fdb2af8"
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
    "url": "assets/js/72.5d4c9b69.js",
    "revision": "18657433caa896f29195884332cdfb72"
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
    "url": "assets/js/92.1d18518f.js",
    "revision": "321a109c07a9660d37889f8d83a099c5"
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
    "url": "assets/js/app.787c4387.js",
    "revision": "b7f0794eb20a39f98074c881077f288a"
  },
  {
    "url": "baiduindex.html",
    "revision": "7739f1148946552b95b84d01e2993623"
  },
  {
    "url": "cadexam.html",
    "revision": "fb82059e5d763c358cd7aec24fa81f45"
  },
  {
    "url": "cadlx1.html",
    "revision": "b5985b9dd3a5d512f61bece4d5bc65d5"
  },
  {
    "url": "camtasia.html",
    "revision": "72dca751322053da50d5025272ef9eac"
  },
  {
    "url": "captcha.html",
    "revision": "09b09b6f16fad751212296f2dce581e6"
  },
  {
    "url": "categories/index.html",
    "revision": "9cc40d776c04bd66c95a96e2c8e58821"
  },
  {
    "url": "categories/research,科研做图/index.html",
    "revision": "cd95ff8ee02af8c6132b7671cf44e414"
  },
  {
    "url": "categories/uncategorized/index.html",
    "revision": "052f5b7b725c84f9b92da15bc9abd5d1"
  },
  {
    "url": "categories/与我相关/index.html",
    "revision": "494d5a29d51d29cfd4c61e6fa427579e"
  },
  {
    "url": "categories/今日观点/index.html",
    "revision": "2e366cc6eac03d47cd4f0a7da251fde2"
  },
  {
    "url": "categories/办公/index.html",
    "revision": "0cbb7a2f35b2a3604605da0e7f17fd25"
  },
  {
    "url": "categories/好文好书/index.html",
    "revision": "a4d5e27c18f635738f937b24bc47baf4"
  },
  {
    "url": "categories/学习资料/index.html",
    "revision": "c9f89c5d37cbdf0989d842a587fca918"
  },
  {
    "url": "categories/手机/index.html",
    "revision": "26af8271b2b59d1e0ee30104d04dd492"
  },
  {
    "url": "categories/福利/index.html",
    "revision": "353843fd7cd444f1722084d716011e0d"
  },
  {
    "url": "categories/科研/index.html",
    "revision": "0c2b337e86c37f72afc0e24c8af21063"
  },
  {
    "url": "categories/笑一笑/index.html",
    "revision": "33f33f7b61ec0fd4b24591a771cae00a"
  },
  {
    "url": "categories/系统/index.html",
    "revision": "a215e57ba710b0092685e161766254c4"
  },
  {
    "url": "categories/编程/index.html",
    "revision": "dad94bb166d2a3644c1b9f68c83542c1"
  },
  {
    "url": "categories/网站公告/index.html",
    "revision": "96447ac9380cb4682044d8b31235c4ed"
  },
  {
    "url": "categories/网站建设/index.html",
    "revision": "59f1a53acd20f4f2ab509c2adbc69a4e"
  },
  {
    "url": "categories/考研/index.html",
    "revision": "80f5555a31e7681e046307c44ee08ea9"
  },
  {
    "url": "categories/软件/index.html",
    "revision": "120b10c7466d7a3b6c6d6450edc15c52"
  },
  {
    "url": "categories/酷/index.html",
    "revision": "c825125f100a088b436a9faa8086e5fb"
  },
  {
    "url": "ccp-and-hcp.html",
    "revision": "4623f67599f93a7c5ddb2454901dae38"
  },
  {
    "url": "chongzhuagnxitong.html",
    "revision": "f059ae204cab9e9b3e09603ffbb84863"
  },
  {
    "url": "chooseoffice2016.html",
    "revision": "97b625b4f1c826e5cc2825071084b41f"
  },
  {
    "url": "chuangkit.html",
    "revision": "68e63e78431f7daffe2f352cecd9842f"
  },
  {
    "url": "chuzhongbiye.html",
    "revision": "0c9f23c4d028ad571b2d67ba00d9ffa1"
  },
  {
    "url": "cnki中国知网硕博论文pdf全文下载器-和caj说拜拜.html",
    "revision": "ec553a00d961d7f2675c586a13d2573e"
  },
  {
    "url": "cnki中国知网硕博论文pdf全文下载器使用姿势纠正及更.html",
    "revision": "434c2d4ca2063337f01c8e23c0df8ae6"
  },
  {
    "url": "cpuz.html",
    "revision": "16aab3c278d5c6d7593f51628b7f4392"
  },
  {
    "url": "cryptography.html",
    "revision": "71b601144f36605e882fb46c03a347d4"
  },
  {
    "url": "dianying-banben.html",
    "revision": "3e996e8f07c51a7b8d116ec13da19cc9"
  },
  {
    "url": "download-and-office.html",
    "revision": "a0f2df67a88709b80e56c4e456867da2"
  },
  {
    "url": "elaticsearch.html",
    "revision": "a5b1bb7dafce6aac98b588cb0c09b078"
  },
  {
    "url": "es6.html",
    "revision": "14f840be5d1bf8be7c579b616e277903"
  },
  {
    "url": "everything-急速搜索本地文件.html",
    "revision": "89ec6637667573919a80e787f118bef7"
  },
  {
    "url": "evian.html",
    "revision": "1c7b4433c22facae02a0a19049f070ba"
  },
  {
    "url": "exceljiqiaogif.html",
    "revision": "55a0774bc20df4c1ed817dc903795f0e"
  },
  {
    "url": "fileanalysis.html",
    "revision": "bdedf0a09c3c2b3673bf68342ab7fa2a"
  },
  {
    "url": "fileskills.html",
    "revision": "50f7468ac56982bcebaf10210c22689f"
  },
  {
    "url": "five-dwarfs.html",
    "revision": "ed8219f51751ec8e9ba22716a6273587"
  },
  {
    "url": "gaoxueli.html",
    "revision": "fbb85f1eabf36708c6bbd7913d33ce74"
  },
  {
    "url": "git.html",
    "revision": "2f0acfa2ec28d805f986f9d623ad231c"
  },
  {
    "url": "gopro2015.html",
    "revision": "5248e678bf5b77b82022074ba3f761d0"
  },
  {
    "url": "guanbiwin10tixing.html",
    "revision": "90318628b54435882a2f6860de8fdcbb"
  },
  {
    "url": "hengxian.html",
    "revision": "3c900e24b9ebbfe564dc2ae41955986c"
  },
  {
    "url": "iems.html",
    "revision": "ad00d80df92c37073a1b91a58e601cb4"
  },
  {
    "url": "index.html",
    "revision": "1b91afba226868e17322965dece379b8"
  },
  {
    "url": "insert.html",
    "revision": "e63c62a17565342bedf91217d6cfcd7b"
  },
  {
    "url": "jiazhao.html",
    "revision": "6e64e517af09b2814877510888965d89"
  },
  {
    "url": "jmeter.html",
    "revision": "6020a1d78af3293f5b3c1cad1148d4d2"
  },
  {
    "url": "jscalculator.html",
    "revision": "33c8a6aed060db0e30e6b168d12ae4f4"
  },
  {
    "url": "juisreader.html",
    "revision": "b46120fd99533be055715b4cd25c697d"
  },
  {
    "url": "jwt.html",
    "revision": "181c5b4b37871918cafa6276d4b9abd6"
  },
  {
    "url": "koalastothemax.html",
    "revision": "a28e33da65308bee6629b1205c066b11"
  },
  {
    "url": "linux.html",
    "revision": "c74152698735ed4e500471d56a1351e8"
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
    "revision": "8f7a3be330514a9c69a6b57db8df8ee8"
  },
  {
    "url": "meihuaupan.html",
    "revision": "f712456c8514d062acef8728102c2889"
  },
  {
    "url": "mydream.html",
    "revision": "431401114a4521f8ae60db478d9bdbd6"
  },
  {
    "url": "mysql-install.html",
    "revision": "e04788e3bca5b35fa9885a45432fc88b"
  },
  {
    "url": "ncre3net.html",
    "revision": "b472ad0f78a720c3eb2a8ae31070978a"
  },
  {
    "url": "nginx.html",
    "revision": "277dc3c3f4b884cff318e79ee82207af"
  },
  {
    "url": "office-365变形切换功能.html",
    "revision": "c82bec10909bc58bbb52b2555ab1fb84"
  },
  {
    "url": "office2016.html",
    "revision": "46fe32774dca1d2bd5a247d4bf584ce8"
  },
  {
    "url": "officeplus微软office官方在线模板网站.html",
    "revision": "76bbdc44b3c72de3d574d754a2abc3dc"
  },
  {
    "url": "officepublishwordpressposts.html",
    "revision": "d4c1791ca0bc986b0722120bc82e7658"
  },
  {
    "url": "papers.html",
    "revision": "b7caadb09a8ec03859cdfc0d1bee3b21"
  },
  {
    "url": "picpick-printscreen-soft.html",
    "revision": "2562ca38fc0808903189fb39c05a8c97"
  },
  {
    "url": "pojiepixiangmima.html",
    "revision": "6ba6a2e03ff57b7d58407aba864babac"
  },
  {
    "url": "powershell-2.html",
    "revision": "2087fa3e9917cde6008e8ae55712e8fe"
  },
  {
    "url": "powershell.html",
    "revision": "5eb62b7ac4ae537d2efc7c39128b02fe"
  },
  {
    "url": "ppt-eyeful.html",
    "revision": "8d9178399cbb1a6ed7d00310739af648"
  },
  {
    "url": "ppt-picture.html",
    "revision": "128bd65aaaf85621c59dab2730a02df1"
  },
  {
    "url": "printskill.html",
    "revision": "83e05d6fb5323abd7e8ec5e9b716743e"
  },
  {
    "url": "pwa.html",
    "revision": "8b70f1938ad2604adbbec839af09477e"
  },
  {
    "url": "qcloudschool.html",
    "revision": "eaf7de7164d69ee006c6a3c1b16be525"
  },
  {
    "url": "qqconnect.html",
    "revision": "d26fd7c75baef51ec30d718deefa7bb0"
  },
  {
    "url": "react-router.html",
    "revision": "8fd4abedcb6227c10aadfb36f00370a4"
  },
  {
    "url": "react.html",
    "revision": "b2ebc45a6d034ba5297bd0c5b9b137c1"
  },
  {
    "url": "redis-config.html",
    "revision": "9db00b0d3ecc2eb83a81caf245afca91"
  },
  {
    "url": "redux.html",
    "revision": "d8e9d48ef6edccb676842f160bf05b46"
  },
  {
    "url": "remove-the-ads-of-youdao-dict.html",
    "revision": "9e27b7ac47419a3c086e1007e728df8c"
  },
  {
    "url": "rk.html",
    "revision": "0e77e24c81dfad5f9523e620e09416fe"
  },
  {
    "url": "rmfcd.html",
    "revision": "c27fdf4ae5cf6d4c5037d384f3386989"
  },
  {
    "url": "ruoyi.html",
    "revision": "c954fa4ed7ea2b8ad018671c9e64a17b"
  },
  {
    "url": "sdmzh-map.html",
    "revision": "3590d4cb04d33c02e811c07ad138c857"
  },
  {
    "url": "search-skills.html",
    "revision": "f6b9e493d81cd4c30a5eb4102aad3a3e"
  },
  {
    "url": "setup-cad2008-2.html",
    "revision": "c833818fb45a755f2c8f2950991f203b"
  },
  {
    "url": "solr.html",
    "revision": "78ec15443b561034541bd83e0ea5e64f"
  },
  {
    "url": "sponsor.html",
    "revision": "f26dc906a08f5d8834d4b568388bae09"
  },
  {
    "url": "stitch-soft.html",
    "revision": "9a73b32fdefd105fc862055404071790"
  },
  {
    "url": "swagger.html",
    "revision": "2da4e75a0e5838e1b97d760f60edbf91"
  },
  {
    "url": "system-32-or-64-panxin.html",
    "revision": "c4c493b287543a05f5e8677777e127f6"
  },
  {
    "url": "tag/antd/index.html",
    "revision": "15ddcb3d51d5c2e124c8b69087b40abe"
  },
  {
    "url": "tag/CAD/index.html",
    "revision": "403e6346c61bed83b5d171ad4f4e74d3"
  },
  {
    "url": "tag/CNKI/index.html",
    "revision": "e89b7cef00567b183693f222075f5473"
  },
  {
    "url": "tag/code/index.html",
    "revision": "604477cad93043e3670b3175198cd2ec"
  },
  {
    "url": "tag/CPU/index.html",
    "revision": "bea7b452e4ac4671410b8513194b072a"
  },
  {
    "url": "tag/excel/index.html",
    "revision": "2ff001c821c4820fea8afd877dadd7b3"
  },
  {
    "url": "tag/html/index.html",
    "revision": "938402326f1ecde4ad299531d9abeb22"
  },
  {
    "url": "tag/hutool/index.html",
    "revision": "204ef35c8958a3cbc8f4eb68ef309e30"
  },
  {
    "url": "tag/index.html",
    "revision": "b51e017de9f5c995d1032ae1f8d2c5c1"
  },
  {
    "url": "tag/java/index.html",
    "revision": "cc27e6d3adf18c85261aa215ae527bce"
  },
  {
    "url": "tag/js/index.html",
    "revision": "9338dab3bd91b6b254e6d728f333105e"
  },
  {
    "url": "tag/jwt/index.html",
    "revision": "baa00a1d0fbef4ee705c4ae7cf94f86f"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "b6a1c0ac54267c9638d59bebc40b49a9"
  },
  {
    "url": "tag/mathtype/index.html",
    "revision": "5e8311d60d789a491c3991af5cd07c6b"
  },
  {
    "url": "tag/Mybatis/index.html",
    "revision": "d269ea4a52b974c80e415ea66b0762c6"
  },
  {
    "url": "tag/mysql/index.html",
    "revision": "f629f80cde5b7aeaa788c8ad095b75c9"
  },
  {
    "url": "tag/office/index.html",
    "revision": "cac57b56b80f3292159a6d119b9232a1"
  },
  {
    "url": "tag/pdf/index.html",
    "revision": "e31de43de631295fc6cae1d3b40c1261"
  },
  {
    "url": "tag/ppt/index.html",
    "revision": "6f60393f54dcfd05aebd7a4ccb5e76a2"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "660647d68be70cad6f58c4e0f20aebf8"
  },
  {
    "url": "tag/python/index.html",
    "revision": "925682cb3ec5bbfe29b4c0199f3dd233"
  },
  {
    "url": "tag/qq/index.html",
    "revision": "0a598a86c228027a5c96ec05176594de"
  },
  {
    "url": "tag/react/index.html",
    "revision": "800a296a2fff2b9137650afa56614366"
  },
  {
    "url": "tag/redis/index.html",
    "revision": "f5bbdab91c074c37593922bd714e1677"
  },
  {
    "url": "tag/Solr/index.html",
    "revision": "471c0bb810faee1ce6110f0cd7138f94"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "c2afd5a2045b76af45d72b79a736a6c2"
  },
  {
    "url": "tag/sql/index.html",
    "revision": "1f33145ea30db720426f3842927d51b1"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "a4dbe28ad9aadc6f93b01c12a8e8f25d"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "9580e3e58d39f5d8ec330b1c4c6f1525"
  },
  {
    "url": "tag/umi/index.html",
    "revision": "85906c1d65d8e3347361bbaa21c01b40"
  },
  {
    "url": "tag/U盘/index.html",
    "revision": "2413571c6e03b19aaba815df3d508b85"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "73c923d2da9852004d8607a4ea76be2d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "9fc31e1f210fe8f9c3931d7597b62d54"
  },
  {
    "url": "tag/word/index.html",
    "revision": "f7e90e69cff8388b01a5325c5514b220"
  },
  {
    "url": "tag/WordPress/index.html",
    "revision": "3f655c2385ff411157433d1055ae5337"
  },
  {
    "url": "tag/xrd/index.html",
    "revision": "1508d3391b330ed239f4de913b637fad"
  },
  {
    "url": "tag/上网/index.html",
    "revision": "f9e808074940442a16d7d2d76bd7746f"
  },
  {
    "url": "tag/下载/index.html",
    "revision": "8feb3817b9bbe7cd2ddae2c2340e13ce"
  },
  {
    "url": "tag/中国知网/index.html",
    "revision": "515355cf0d98af0774296bf02cc64894"
  },
  {
    "url": "tag/乌米/index.html",
    "revision": "c7d61f144bddc912d4ddcda803ba85b8"
  },
  {
    "url": "tag/刷机/index.html",
    "revision": "fee9e583d9422e5888222ca3720a4246"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "940adde2dd2ac9e21a9f01b1f71716ae"
  },
  {
    "url": "tag/办公/index.html",
    "revision": "2fc5c3ba2247216a677c23a1f273d4d5"
  },
  {
    "url": "tag/动画/index.html",
    "revision": "7c3a4d586939a4c983f147d9239b7e11"
  },
  {
    "url": "tag/十字绣/index.html",
    "revision": "24192886941bec6110ad8e22fd721cd0"
  },
  {
    "url": "tag/去广告/index.html",
    "revision": "903a5d00366a94c6ef0ccac559f15098"
  },
  {
    "url": "tag/后端/index.html",
    "revision": "f435f27e4b51425862758ddfed859a83"
  },
  {
    "url": "tag/四大名著/index.html",
    "revision": "f84ee0300c08b8854a2555d795213177"
  },
  {
    "url": "tag/图表/index.html",
    "revision": "65f55ed4e2eff7c03ac49983bf5bbd6d"
  },
  {
    "url": "tag/实用技巧/index.html",
    "revision": "57d116187f279ddb2ebffc9652f0cdd5"
  },
  {
    "url": "tag/密码/index.html",
    "revision": "2de8f538ee62e38c5585ad4d70e85cbf"
  },
  {
    "url": "tag/小米/index.html",
    "revision": "b11c24c4d01888ba2ff4a3c4da8ce8eb"
  },
  {
    "url": "tag/小说阅读/index.html",
    "revision": "4b1022258d699030b4340a5c24a2a46f"
  },
  {
    "url": "tag/截图/index.html",
    "revision": "9a9652c0875c56233e180d0adbe3330c"
  },
  {
    "url": "tag/手机/index.html",
    "revision": "376057d4d235211846bd55900e014a0e"
  },
  {
    "url": "tag/报告/index.html",
    "revision": "04f0c6c38a1501a739cec68e4dc63f8c"
  },
  {
    "url": "tag/文献/index.html",
    "revision": "d8645a6b9a60bd3f7e33b7baac4548f7"
  },
  {
    "url": "tag/新大/index.html",
    "revision": "8e89514ef06e7049f3409e1ddcda6d95"
  },
  {
    "url": "tag/格式/index.html",
    "revision": "451f9969df43352647538469d25b5fac"
  },
  {
    "url": "tag/梦想/index.html",
    "revision": "a3f1e1d16c6448a4f143a44f4d17a208"
  },
  {
    "url": "tag/模板/index.html",
    "revision": "97cdca0c2f7d7fe89c43dc07b8702a6b"
  },
  {
    "url": "tag/电影/index.html",
    "revision": "413495d4a2543882d6f92da92851b170"
  },
  {
    "url": "tag/电脑/index.html",
    "revision": "5507c5482351e69e0b041c6b5f9acc0f"
  },
  {
    "url": "tag/百度/index.html",
    "revision": "c8f68549d56871b043001dd1ee48cab9"
  },
  {
    "url": "tag/视频/index.html",
    "revision": "1243f94ff1de999487bd470895b52020"
  },
  {
    "url": "tag/福利/index.html",
    "revision": "ceaaaa71b33ebc17e3d894d387b8d40d"
  },
  {
    "url": "tag/系统/index.html",
    "revision": "289d16567892fe8213eefadda3dc9b95"
  },
  {
    "url": "tag/编程/index.html",
    "revision": "ba7d33170d6909bba9f48832520ba285"
  },
  {
    "url": "tag/考试/index.html",
    "revision": "b14e58d6b6a9bebb30ae79a70195a734"
  },
  {
    "url": "tag/虚拟拨号/index.html",
    "revision": "39a34d8a132ba019df376fe07a71cfb2"
  },
  {
    "url": "tag/软件/index.html",
    "revision": "b0f485d75f00dc2567aefc2ec98a5e2f"
  },
  {
    "url": "tag/页码/index.html",
    "revision": "91455f5f6feb1db3972f07ce48f3a8d4"
  },
  {
    "url": "timeline/index.html",
    "revision": "e343f24b5c000ba9ac11f18947c33348"
  },
  {
    "url": "ts.html",
    "revision": "03a2f444c46c9a0ac1a519c1963aa3fc"
  },
  {
    "url": "tushuo.html",
    "revision": "a89daa80b72cfbb66f9280744e94973a"
  },
  {
    "url": "ueditor.html",
    "revision": "5e7a971cef1d590f2c4ad0c5b366a69a"
  },
  {
    "url": "ultraiso-9.html",
    "revision": "a21901c86e5fe947484abf7f38ef3d7b"
  },
  {
    "url": "umi.html",
    "revision": "0fbd9bab123292c8c69070397bbbfa0b"
  },
  {
    "url": "vultr.html",
    "revision": "0727ed2a22fdb81a46f8db7f1ba791dc"
  },
  {
    "url": "web-of-science-ppt.html",
    "revision": "ac33dfbc152ac7805ab321e64c0608fe"
  },
  {
    "url": "web-of-science.html",
    "revision": "5dbfe9f0815595b1aa039c40254425df"
  },
  {
    "url": "weipu.html",
    "revision": "83cfa6041d28127cfed6aa9b96a6e03d"
  },
  {
    "url": "weixintupian.html",
    "revision": "95175a3208f85ec68b45ff16d2ced076"
  },
  {
    "url": "welcom.html",
    "revision": "b571ec94e75f70ea511a607078accc9f"
  },
  {
    "url": "windows-kuaijiejian.html",
    "revision": "5fc6c348730eba6c2505c098e5c35a28"
  },
  {
    "url": "windows-live-writer.html",
    "revision": "e1025e834ac0851b090ee7191fb834ca"
  },
  {
    "url": "windows-pe1-0.html",
    "revision": "7bc0f88767f9ac0db946adc0c72a0d6c"
  },
  {
    "url": "wordpress-cannot-comments.html",
    "revision": "b19fad5f15ebe386624d52f728967950"
  },
  {
    "url": "wordpress-rss.html",
    "revision": "3b069898a4c10862ca681d64c25a9d68"
  },
  {
    "url": "wordpressfooter.html",
    "revision": "641f944922d092f9899747288517c7b5"
  },
  {
    "url": "wordyema.html",
    "revision": "d7983c897d3066c7e2dd42a885aca71e"
  },
  {
    "url": "wordyema2.html",
    "revision": "222a1ce037a13736aba15fc66696021e"
  },
  {
    "url": "word文档尾部空格没有下划线.html",
    "revision": "e17b7f0f13186ae786e60684f52f5c6e"
  },
  {
    "url": "wpsandoffice.html",
    "revision": "2cc60c7ca547c16019fb7f2ac9ac81e0"
  },
  {
    "url": "xdadsl.html",
    "revision": "43d2df9a2f45538a3bf98bda2fbf632b"
  },
  {
    "url": "xiaomi2s-huifu-miuiv5.html",
    "revision": "0b2c17aa867d2512f45713fc53a3ace7"
  },
  {
    "url": "xrdnacl.html",
    "revision": "e2b022efa3fbac2db321afddbc0e4f58"
  },
  {
    "url": "xuvsruan.html",
    "revision": "eb2d95e0e329f6b42872601497e5c25b"
  },
  {
    "url": "yujia.html",
    "revision": "3a3632e369dd339873c8964cd8cf7651"
  },
  {
    "url": "zhangboalbum.html",
    "revision": "02fd578d649e7091c6d11b0a36e00e56"
  },
  {
    "url": "zoomit.html",
    "revision": "3945440b5861a2a7e2c56bb797684042"
  },
  {
    "url": "下载google-play上的apk安装包.html",
    "revision": "3142a3057b5367ab247e4f37171f0a46"
  },
  {
    "url": "人体地图.html",
    "revision": "45f6bab2447555e8e5e1c50bf6c8df64"
  },
  {
    "url": "奇怪的直线-怎么也删除不掉.html",
    "revision": "991adfa350f06f964b29e4ce4f512d9d"
  },
  {
    "url": "小白秒变大牛-一图看懂笔记本配置在讲啥.html",
    "revision": "a8da3d5d670c1ec8d06e1c2db27264bc"
  },
  {
    "url": "波兰艺术家igor-morski的超现实主义世界.html",
    "revision": "c298cb61e109543935628e868d4ec771"
  },
  {
    "url": "注册了微信公众号-sciarts-发布科研绘图教程.html",
    "revision": "7bb064d8eaf8717ce4257e4b2baf3b6e"
  },
  {
    "url": "海绵示意图.html",
    "revision": "c36780745568a4ffa84d7d644567a8bd"
  },
  {
    "url": "玩转camtasia-studio.html",
    "revision": "7b0d20da775fdffe981a3c2c6c701033"
  },
  {
    "url": "瞬间就能让你充分理解云计算的方式.html",
    "revision": "4ce09f30a5abf5038ad983bb790695ec"
  },
  {
    "url": "红米note3刷cm14-1.html",
    "revision": "d4ea8bbdef29e649bfd71381fabeabd9"
  },
  {
    "url": "莆田系医院检索webios.html",
    "revision": "bfcbe8225e257a0e44270d77d45b7856"
  },
  {
    "url": "计算机三级网络技术视频.html",
    "revision": "251359499658fd1d9761f9f3ecc68353"
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
