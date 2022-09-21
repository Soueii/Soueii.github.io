'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d85e2aeefe324382dcbc6f7399b0af94",
"assets/assets/arrow.png": "9f5220f24aff8cbb6269f999e16b3f77",
"assets/assets/background.jpg": "0cbbe47c91a22555255b274058980e43",
"assets/assets/backgrounds/bg1.png": "360c37953e25addc0812b59328869795",
"assets/assets/backgrounds/bg2.png": "91be6f220a3592111344764ecae9bd8c",
"assets/assets/backgrounds/bg3.jpg": "8b4d84efdd7c9d40f2d3c9278fc0cbcf",
"assets/assets/backgrounds/bg4.jpg": "a9f4fedf4b987c4ddb71899d492b0f68",
"assets/assets/back_arrow.png": "da04c93d520cb14d2d8bf81487b872e9",
"assets/assets/bukvi/a.png": "88631aeb024d037dab91e5d990108299",
"assets/assets/bukvi/aa.png": "5c19af1223c424d09b11a99b67769b2a",
"assets/assets/bukvi/aa_a.png": "60f6d8ac4b2050ace657af12f5712af2",
"assets/assets/bukvi/b.png": "8247b414f0015ea43622df24357fffac",
"assets/assets/bukvi/c.png": "fbb75a3de2c1f3a1afd4251e64e1eb84",
"assets/assets/bukvi/ch.png": "2593cf899bd629ac2ee9a8aa6a6c1e08",
"assets/assets/bukvi/d.png": "bad6054b669e4946744aeac0bddcbf8a",
"assets/assets/bukvi/e.png": "da29e8e4ae088a2998d86ceacc29dc4b",
"assets/assets/bukvi/f.png": "5a586c584026ee1d0540ebb598f4d33a",
"assets/assets/bukvi/g.png": "6c81e3f29fe01242fede1152efcc2e9b",
"assets/assets/bukvi/h.png": "06119fa98f3b757ef70f0408cb921a50",
"assets/assets/bukvi/i.png": "580b89f90a4f1388f6d77ad9512088bb",
"assets/assets/bukvi/ii.png": "dbe4004e82dc2ee2c9712a3c8799390b",
"assets/assets/bukvi/jh.png": "fb2a2cdb7be7e24f01c85467f448fe31",
"assets/assets/bukvi/k.png": "2a5299b46984e8db8b27afad6595414b",
"assets/assets/bukvi/l.png": "2c5b9e12f272d458af23d0df602a7248",
"assets/assets/bukvi/m.png": "612131d8bec2cd817a2e64badd6cc167",
"assets/assets/bukvi/n.png": "a54a43883a72ec3d47cc580e592c4257",
"assets/assets/bukvi/o.png": "b9669c3cf8c6b91e4b43572b9d3d631e",
"assets/assets/bukvi/p.png": "df8d8563992a336022a652b9b0336e55",
"assets/assets/bukvi/q.png": "ed59bb689ae4257c62a4dd7aa7baf160",
"assets/assets/bukvi/r.png": "f13166d5feaaff11b3c5e036886980e7",
"assets/assets/bukvi/s.png": "974f15614f04ee010a6ff16bb44e898e",
"assets/assets/bukvi/sh.png": "f0c6f1c92dabca8fc4c1c5cc0af2bea7",
"assets/assets/bukvi/sht.png": "5c67d5211bdbfc030ae20326e8907e39",
"assets/assets/bukvi/t.png": "60d0aa5167586d9828903c45b9c9ec59",
"assets/assets/bukvi/u.png": "71a1d2da18d59d7379e10f63288dad7a",
"assets/assets/bukvi/uu.png": "5c61d6ce9167ac309cf856aaacda654e",
"assets/assets/bukvi/v.png": "20fecc8371443979523e9c88048e9467",
"assets/assets/bukvi/z.png": "13252d336b7f6ba9ec5e329059386d64",
"assets/assets/fonts/kids.ttf": "2858f88cb71b6ac1122a944e220d9940",
"assets/assets/home_icon.png": "ba0bc9c2a226c6ab9ad21e315ecd718c",
"assets/assets/predmeti/agal.jpg": "647ff3b5a2a434493687d188dd36b2ca",
"assets/assets/predmeti/agne.jpg": "72dd37b2f8d3aef84cde6cd2b777ad9c",
"assets/assets/predmeti/ananas.jpg": "2b8be0c7880495f4a0caef76ff240b7b",
"assets/assets/predmeti/angel.jpg": "1c936728f5248f2a9ac577f485248ce4",
"assets/assets/predmeti/avtobus.jpg": "2b6dce0d43e258cbaf5a66445233a9e0",
"assets/assets/predmeti/baloni.jpg": "d57f79a14a73b87ad405e9b755974094",
"assets/assets/predmeti/banan.jpg": "13117aec35584e2e8d0ab90801dc56c1",
"assets/assets/predmeti/barbaran.jpg": "e5b3c4a2604f39a2bf1087f16977566d",
"assets/assets/predmeti/biskvita.jpg": "3c9b7cd17b1ceea5a79b0db2e8ae08ed",
"assets/assets/predmeti/blizalka.jpg": "bdec4a977738fb0679dc1b8bfa341ed0",
"assets/assets/predmeti/bonbon.jpg": "0da9c2f9833d50340ef42bb0b1bae85a",
"assets/assets/predmeti/bos.jpg": "1d51b7865e9d340fd2a26ebab6160470",
"assets/assets/predmeti/car.jpg": "cdab31f45bb6d27d7e7d21c7a334a8d9",
"assets/assets/predmeti/chai.jpg": "e6157f3dff4a441ef5c0fd1318719e6b",
"assets/assets/predmeti/cheresha.jpg": "7fea1098adf7aeed0e51a8b051d83394",
"assets/assets/predmeti/chorap.jpg": "81d7066185d16f9e733caed5f3135ec0",
"assets/assets/predmeti/cigulka.jpg": "562fcc3577e14c91baf491eedf957d31",
"assets/assets/predmeti/cip.jpg": "cb1ceb479a31627c42ce519860aa55ab",
"assets/assets/predmeti/cvete.jpg": "ed57df47a043ebc69f4c3826d5ae76c8",
"assets/assets/predmeti/darvo.jpg": "78e57ad028531ed303479173bce96dc3",
"assets/assets/predmeti/delfin.jpg": "bde08047ea9a231e2608db19de62311e",
"assets/assets/predmeti/dim.jpg": "3d0a8e21ab107849c1d40a0139af3624",
"assets/assets/predmeti/dinq.jpg": "3e129dcf82049a120536a3794f9a80c7",
"assets/assets/predmeti/elen.jpg": "dfcaa98ef0139441535c164b83d55a73",
"assets/assets/predmeti/elha.jpg": "d07ff4c91daa78da912bb5963bda8cd9",
"assets/assets/predmeti/fakla.jpg": "0496e030754f7fd577c15d050753a753",
"assets/assets/predmeti/far.jpg": "a7dfc741ddad6c3702da596e3dbe5d9f",
"assets/assets/predmeti/fazan.jpg": "5acc13769deae7943bdc262c77219ba2",
"assets/assets/predmeti/gaba.jpg": "c1cb4367f347806c594fcbcdafb5c114",
"assets/assets/predmeti/galab.jpg": "65d16c39becf858b4f4fd67167336882",
"assets/assets/predmeti/garaj.jpg": "1f855677320fb566646728241fc4e486",
"assets/assets/predmeti/garderob.jpg": "eb0b6765a5084cf8e2c8bc121dc1cff9",
"assets/assets/predmeti/garvan.jpg": "c8377cf1088fa94e1da70f7dd0bf8007",
"assets/assets/predmeti/gaz.jpg": "fb5d94f70b85d98645fa67dd58dca465",
"assets/assets/predmeti/greben.jpg": "cf871db512ce65940d8179c19ea89006",
"assets/assets/predmeti/grozde.jpg": "646b73531b01dae520f408f5deb3e011",
"assets/assets/predmeti/halm.jpg": "2e038be795d00afd3c0b2ec7f6529c85",
"assets/assets/predmeti/hapche.jpg": "423e2d65fd2c03248d7585b7e330b1f0",
"assets/assets/predmeti/hlqb.jpg": "de663797a2dff306944b763bf01f63f4",
"assets/assets/predmeti/horoskop.jpg": "ebaf247fba8510145edb89f4cec2617b",
"assets/assets/predmeti/ioga.jpg": "13513eea06f613e3abd65cb69ec21204",
"assets/assets/predmeti/iskra.jpg": "04ab580bc2b3fa53c9f2b6d78cd96781",
"assets/assets/predmeti/izgrev.jpg": "f5c60b875a490bc2e60084a54d9847a7",
"assets/assets/predmeti/jaba.jpg": "a6e4a5d3c2861f464bb95c40f8e9177b",
"assets/assets/predmeti/jalto.jpg": "83bc3f3cb9ad2f5df1e50a1e01cf652c",
"assets/assets/predmeti/jele.jpg": "2d486fcbe967df87ab0eeef5ba25fe24",
"assets/assets/predmeti/jirav.jpg": "35321046206979c43f19afa2defd3970",
"assets/assets/predmeti/kalinka.jpg": "9b46efbe1ee4d34455b1e2b2baf1051e",
"assets/assets/predmeti/kalvach.jpg": "e882a26ef938c630c551e58cb6e20655",
"assets/assets/predmeti/kamak.jpg": "26abcdf64002bef7eb69a5b16f2399ba",
"assets/assets/predmeti/kartof.jpg": "eb0f6b81916ce6cdf6259dbba056ccaa",
"assets/assets/predmeti/kashta.jpg": "69b6012e44b9bf6a9034c5708be064f1",
"assets/assets/predmeti/katerica.jpg": "3c2fb9483d25d7633c6c3b00c7e19947",
"assets/assets/predmeti/kenguru.jpg": "8f0a958ec40c91dfdef6e1d0ea3f256d",
"assets/assets/predmeti/kilim.jpg": "678a1ebaaa07316cc77cbc6a8adc3520",
"assets/assets/predmeti/kitara.jpg": "4fef322bfc2525a8b4242347d5778470",
"assets/assets/predmeti/kniga.jpg": "1b16d4b9a03d02e27b80254e82cc22ff",
"assets/assets/predmeti/kofa.jpg": "383fa4737a40600a27abbd782bd3de13",
"assets/assets/predmeti/kola.jpg": "1625b8093ee3754db8bc5fd084199e2c",
"assets/assets/predmeti/kolelo.jpg": "d96a43c0779d274b4631b82bbc586cc1",
"assets/assets/predmeti/kon.jpg": "700d25fa4b2e75436f5bd1a39e19cb91",
"assets/assets/predmeti/korab.jpg": "f325b26a0994bb85350b7c9107049ffd",
"assets/assets/predmeti/kotka.jpg": "b1b35b0572cbf3d4a0c8fa08f361ae0a",
"assets/assets/predmeti/koza.jpg": "9de67a7e465735237d3eee797eb2ec9d",
"assets/assets/predmeti/kuche.jpg": "7e4124499dc904206e502702c50ed119",
"assets/assets/predmeti/kufar.jpg": "a906ff688a9d32995163385f37326aa1",
"assets/assets/predmeti/kutiq.jpg": "f38940440838b635333feee9b0dea262",
"assets/assets/predmeti/lebed.jpg": "d7a65d95c4ef37033dd1a49ff2fd2f4b",
"assets/assets/predmeti/lisica.jpg": "06b897d76c50f7e85eb91490e6f7dc24",
"assets/assets/predmeti/lopata.jpg": "243b75b0e347bec68b38736c630f1896",
"assets/assets/predmeti/lovec.jpg": "49750d9fb2f3c6b60ac6fab3023f2dd8",
"assets/assets/predmeti/luk.jpg": "c3dfe42a811aa65efb89d4d267d6c686",
"assets/assets/predmeti/luna.jpg": "37f6d173887138e7f1fbcd72da83e9fd",
"assets/assets/predmeti/maimuna.jpg": "fea83b895fe36a4c1b960e3717b24b20",
"assets/assets/predmeti/masa.jpg": "f5f8a97dfe8705a841caafbf0bedb37f",
"assets/assets/predmeti/mechka.jpg": "5caf78918107b62994476ea4dc08a07c",
"assets/assets/predmeti/midi.jpg": "3a0ed5b3e2ac4895f56b162543839ea6",
"assets/assets/predmeti/mikrovalnova.jpg": "aadca69b77b1a0f1bdb25f05cf6c2f49",
"assets/assets/predmeti/mishka.jpg": "fa22e6e9dbbe9db11cca94ef62faf264",
"assets/assets/predmeti/molivnik.jpg": "5486be46fbc2ec6ba65533288ac4871a",
"assets/assets/predmeti/muha.jpg": "2df626ef6700aa275e7ece421d4149de",
"assets/assets/predmeti/nar.jpg": "c50a349faae64e6bdfb76b0cc2edc8e1",
"assets/assets/predmeti/nojica.jpg": "e86715cd3724009bcd593973bc699a4f",
"assets/assets/predmeti/nosht.jpg": "b6015c6d72d1e38a2339a87bbef0747e",
"assets/assets/predmeti/oblak.jpg": "882bb487951b61e1cc3321b5b256cf0c",
"assets/assets/predmeti/ochila.jpg": "9fb8a529a6544c86c713ef54c2d1c46e",
"assets/assets/predmeti/ohluv.jpg": "5d12daf9379d4431453f3a837ab9b664",
"assets/assets/predmeti/oktopod.jpg": "11c20d17730d7b20a568c322e1ff9900",
"assets/assets/predmeti/orel.jpg": "8c611489da2cbed62a258f1cc691192b",
"assets/assets/predmeti/pamuk.jpg": "36f655b7fc50ac4cf993d89b534a751c",
"assets/assets/predmeti/pan.jpg": "fc6ade7c51066a2e1dac6baf9d69bb36",
"assets/assets/predmeti/pchela.jpg": "3110987a7a513a3bb336600cc8696290",
"assets/assets/predmeti/peperuda.jpg": "bb5d637300495db311d64ca69c3a052d",
"assets/assets/predmeti/pero.png": "ecde001a30adcd3b5e74c2d08f60a051",
"assets/assets/predmeti/petel.jpg": "eef924aa4e9bf61b1a421596e87aa193",
"assets/assets/predmeti/pica.jpg": "37e2116628ba6fffb132b9f825a8ea95",
"assets/assets/predmeti/pismo.jpg": "c2c9f96adb13447d986df18e852427fb",
"assets/assets/predmeti/plasht.jpg": "aef98d7ef581bb284da184f09b6c3dd8",
"assets/assets/predmeti/podarak.jpg": "dc7b35b3237f93c2794719438873a005",
"assets/assets/predmeti/pola.jpg": "301b2614c4120ad1c25425075a90f591",
"assets/assets/predmeti/ponichka.jpg": "abd017d1ffc531a3d877ff08c524fa28",
"assets/assets/predmeti/pop.jpg": "d7d9d30919360fbd8b2266bc642216e4",
"assets/assets/predmeti/portokal.jpg": "d32dab6e119a0bef0309625453af2696",
"assets/assets/predmeti/prag.jpg": "d842c1e7f49fb494bdd66defb9236f61",
"assets/assets/predmeti/prast.jpg": "d04a7b2e147a20233c971bbd63898feb",
"assets/assets/predmeti/prejda.jpg": "b921d98cde53917af7a65c70594eaed1",
"assets/assets/predmeti/qbalka.jpg": "4260084983140232d42e82a333dafc6b",
"assets/assets/predmeti/qgoda.jpg": "00700f6fd6831c4a527afe90c1e283ae",
"assets/assets/predmeti/qice.jpg": "d39c3b3072d1db06830d1d92bb56a509",
"assets/assets/predmeti/qzovech.jpg": "d589708c7422fa850b30a325aaf8f916",
"assets/assets/predmeti/rak.jpg": "7a25f140f963cdaf05b75247b8d7d1c7",
"assets/assets/predmeti/raka.jpg": "32f604d7627b055ce43e04e6329d5968",
"assets/assets/predmeti/raketa.jpg": "750bb74f1330641dc4d723653ea14407",
"assets/assets/predmeti/ranica.jpg": "14775351de9c6c22e84b45640846c8d9",
"assets/assets/predmeti/riba.jpg": "fcc155b1f589afb52057702cec8ab86e",
"assets/assets/predmeti/roza.jpg": "6fc150470de1b0b8d045eafc244e062f",
"assets/assets/predmeti/samolet.jpg": "cb5da7378e017ebe6fe372d788ef0a04",
"assets/assets/predmeti/sarf.jpg": "2acf6b73aad6eaa43380d79a4797ffd8",
"assets/assets/predmeti/shal.jpg": "43b37ee9e4d0fdc8abee946eb8f6bb98",
"assets/assets/predmeti/shapka.jpg": "64f64f7896ef033604fe4322ebfdbe37",
"assets/assets/predmeti/shisharka.jpg": "1b2ccd3afc26844d9657f56d2c83d253",
"assets/assets/predmeti/shtarkel.jpg": "cff9ab0c6122a1923958c020de4d8d51",
"assets/assets/predmeti/shtit.jpg": "0b89f46d02d31ba64c14e074f4afb7a3",
"assets/assets/predmeti/shtori.jpg": "6765108ec1cb66e140f92e6bed70c2ef",
"assets/assets/predmeti/slache.jpg": "edeef7f78f5781a9d80298d735dcfd58",
"assets/assets/predmeti/sladoled.jpg": "9ffdc8748ebd8197442c2282496be8c2",
"assets/assets/predmeti/smqh.avif": "55c12d05a284d6019a970d5087f3ef95",
"assets/assets/predmeti/sok.jpg": "45a3a96d6cce10bd46e4898cb7554f8a",
"assets/assets/predmeti/stena.jpg": "231619ff0bd561733b80ac37f4ed7d34",
"assets/assets/predmeti/strah.jpg": "02cd013d09b749a7e46156fa5de2c445",
"assets/assets/predmeti/taralej.jpg": "473323b6f2d5d10efa875bd1139de385",
"assets/assets/predmeti/teniska.jpg": "4297b17ea8ef56fa18b945f49eec8f60",
"assets/assets/predmeti/testo.jpg": "bf0c4fcd500febb2433ac32e7453058e",
"assets/assets/predmeti/tigar.jpg": "41d2f0503f1ccb49bb092486757b4b55",
"assets/assets/predmeti/tikvi.jpg": "72f083b64c507ee7a67355de7d6a94b4",
"assets/assets/predmeti/topka.jpg": "3f22a32a82129fa339d2c01f6e81a2d4",
"assets/assets/predmeti/torta.jpg": "cda9dbbdc682853f30e0ed391c69b129",
"assets/assets/predmeti/toster.jpg": "0e963db052e1cebd580408609e5d278c",
"assets/assets/predmeti/uchilishte.jpg": "21e75eb4dfcb159097cfd559a363dc16",
"assets/assets/predmeti/urgan.jpg": "b31efd4221e738ed1553eb939bb5b9ab",
"assets/assets/predmeti/usta.jpg": "48f1fffa208019483a70205ad26942ea",
"assets/assets/predmeti/utiq.jpg": "1a1d46ca90b91ee0bd778b351fd89e63",
"assets/assets/predmeti/valna.jpg": "39fe2f479694452d83bbae85bd0e9271",
"assets/assets/predmeti/voda.jpg": "a9561ee9e3a1397c52ebbeb13334d78e",
"assets/assets/predmeti/vrata.jpg": "7a5d9c82175e96b7ea5e92559f63763a",
"assets/assets/predmeti/zaek.jpg": "669facbaf22db0916f787e344ee69684",
"assets/assets/predmeti/zar.jpg": "fca08d6a60106646fe54fbdcec864d0b",
"assets/assets/predmeti/zebra.jpg": "5b4d76dfe8ca539596ec3d6192dfe23e",
"assets/assets/q/blue.png": "d1570e304e1cd53c64206ab0b05f8bbc",
"assets/assets/q/blue_2.png": "80e04ea9d1d4755300b7a714d907f215",
"assets/assets/q/red.png": "6068fbc6774c60727ced96238c813abd",
"assets/assets/q/strelka.png": "c91af489c5bd43028945dab0f9015ea7",
"assets/assets/sound/agal.mp3": "d77bd0e97db5b4a570fd196ee2871893",
"assets/assets/sound/agne.mp3": "046826af2ba130054546ad2565354019",
"assets/assets/sound/ananas.mp3": "2099945628a9da02613a3a1287346e12",
"assets/assets/sound/angel.mp3": "0fceefd4fb49337be39f0833a76611cf",
"assets/assets/sound/avtobus.mp3": "c5adb142a1b9c23f5d048dc42656045a",
"assets/assets/sound/baloni.mp3": "1c4a505c7977792ba876e6e4ada1786e",
"assets/assets/sound/banan.mp3": "43d773043f4d9c941ad1a6117371737d",
"assets/assets/sound/barbaran.mp3": "77711899814aa76e80644150e77cb1dd",
"assets/assets/sound/biskvita.mp3": "8da9a444ddf14ef574de7f1b2e524541",
"assets/assets/sound/blizalka.mp3": "a27e8683662c5142733b47de70f2cd5c",
"assets/assets/sound/bonbon.mp3": "e6bb0e026b4e6be2b366b2c5bc2c90b3",
"assets/assets/sound/bos.mp3": "699f461e787cc54b4cbaee3e7e951850",
"assets/assets/sound/car.mp3": "639f1d99408b92a1548dc3d23ce228b1",
"assets/assets/sound/chai.mp3": "6883197840a3576a34521a0f7c72cab8",
"assets/assets/sound/chalga.mp3": "abe82e7f54f47df0ed8fef9045a3f92b",
"assets/assets/sound/cheresha.mp3": "4cffa7e9465a26e7e018b21457974966",
"assets/assets/sound/chorap.mp3": "ad2c52853a05a6c9286bb8ab3d5c5311",
"assets/assets/sound/cigulka.mp3": "79886743d62cd4693d7490582c1039ce",
"assets/assets/sound/cip.mp3": "7f89bd8726dec2141ed908d550932076",
"assets/assets/sound/cvete.mp3": "7ec8358a14d4b2ad6c59bfaef5b5b95a",
"assets/assets/sound/darvo.mp3": "e45fa9259c39147eb8191d7ba7c656dc",
"assets/assets/sound/delfin.mp3": "7db17e3c3cbf481086236703e613133d",
"assets/assets/sound/dim.mp3": "0eb7a89357c9701c2435d2ae71e9b3bc",
"assets/assets/sound/dinq.mp3": "5f555c417f2b7a99822faac05b9bd925",
"assets/assets/sound/elen.mp3": "14d8bfa6691da56c3b7d80a319ecc80b",
"assets/assets/sound/elha.mp3": "05b5cd5a09ce6071f426bb2c58ad8313",
"assets/assets/sound/fakla.mp3": "8a38087d928a6956d7e35084bd73c37d",
"assets/assets/sound/far.mp3": "06e4720b80cd0cdf3e735bdf2ae4de73",
"assets/assets/sound/fazan.mp3": "ee4593472f0ae076c18529add1131208",
"assets/assets/sound/gaba.mp3": "2f9fc18b6b58684a9a7965954bbb0961",
"assets/assets/sound/galab.mp3": "7b8374ee9b6727e11dbdcdec5b25ea80",
"assets/assets/sound/garaj.mp3": "d5dad705c8b0caff2c7883b2ca223aae",
"assets/assets/sound/garderob.mp3": "6761d69a4c4375e4ba0c0e95c3021964",
"assets/assets/sound/garvan.mp3": "3ceefe2cf53ec7611134cc2874f21b68",
"assets/assets/sound/gaz.mp3": "6fe9cfb6b6fe1db2d3236eb9b32dd8fe",
"assets/assets/sound/greben.mp3": "a305afe47b5ffe8c0067a5d6c06674cc",
"assets/assets/sound/grozde.mp3": "8b2d97652a368e6067e1763d4c1ed7b1",
"assets/assets/sound/halm.mp3": "111d734d1ab5bb228ab5b72eb98d4546",
"assets/assets/sound/hapche.mp3": "3ca8d21fa066d8659cca2ec413c37fab",
"assets/assets/sound/hlqb.mp3": "e3f4f8d8b5acc3a22e09c8389642f5b2",
"assets/assets/sound/horoskop.mp3": "7d2713050b65a67902d881e563c74264",
"assets/assets/sound/ioga.mp3": "cdf5c777c7a279d636628c5c964d5354",
"assets/assets/sound/iskra.mp3": "aadd9a4c0ab98db47b3c28d7dba2da5a",
"assets/assets/sound/izgrev.mp3": "92d5de47e5ece852883ac3476a7469cf",
"assets/assets/sound/jaba.mp3": "bf940bc30aea7bdbec414c1ca4af5da9",
"assets/assets/sound/jalto.mp3": "e284752151f83a66c51fd85861daf281",
"assets/assets/sound/jele.mp3": "52c0f3e5963a55426a91abf82a4cf291",
"assets/assets/sound/jirav.mp3": "7bf3d54d629eb70fab267597786a9af1",
"assets/assets/sound/kalinka.mp3": "9bbd899f0489d1d4cbd09aa4ef91287a",
"assets/assets/sound/kalvach.mp3": "39df030274a377f8640b2b36111dc504",
"assets/assets/sound/kamak.mp3": "ab582896de418e31a3b05bf5193bba4b",
"assets/assets/sound/kartof.mp3": "c2d6de3980ab6a07d58100868c7e552b",
"assets/assets/sound/kashta.mp3": "be999debc9c7355e811aaae4c24e74a1",
"assets/assets/sound/katerica.mp3": "6a384174d4bd0363eb1487f3d9a2ca05",
"assets/assets/sound/kenguru.mp3": "5363475a78f1376ccd3da1ad8a47d2b8",
"assets/assets/sound/kilim.mp3": "7f341130f65a2e21b264d24e6cf689ca",
"assets/assets/sound/kitara.mp3": "3c4bc56b746133df1950e445070084f4",
"assets/assets/sound/kniga.mp3": "c020a97d5d478f5f1a756cd6421cadd3",
"assets/assets/sound/kofa.mp3": "426a4e3d1c2c5994a07a5baf91b7388e",
"assets/assets/sound/kola.mp3": "2ace1025251ee9c2a7987a9505819a9a",
"assets/assets/sound/kolelo.mp3": "63eb0285fc6e59e3b43958179c972a38",
"assets/assets/sound/kon.mp3": "e574cc63d2b59d2c00e798ad3fb3950f",
"assets/assets/sound/korab.mp3": "53a9b1865270da5aa5abe1a12224c204",
"assets/assets/sound/kotka.mp3": "1d51076d7da9ddd4926c10080c9fa85e",
"assets/assets/sound/koza.mp3": "5814fe1e276a02ce270914770c07d589",
"assets/assets/sound/kuche.mp3": "bde6e49d048f6de188ca7c2e23ea8061",
"assets/assets/sound/kufar.mp3": "9d827f03337ea6103ff429b5b1c518d5",
"assets/assets/sound/kutiq.mp3": "24d543b5c5b8befb02dad249c052fb7b",
"assets/assets/sound/lebed.mp3": "cd58afd62bce4994da8cd3eeff60166a",
"assets/assets/sound/lisica.mp3": "f2c7b04d079b1855945d3aa79bfaf3a7",
"assets/assets/sound/lopata.mp3": "c512a235775e48d66aba23626245c7bf",
"assets/assets/sound/lovec.mp3": "fb7fa11110f9b2985aa51392ad888a6d",
"assets/assets/sound/luk.mp3": "f7ecc926f5d1f13d918890a8adfa2039",
"assets/assets/sound/luna.mp3": "a3dc67745c42c30e9151a213a34bf9a5",
"assets/assets/sound/maimuna.mp3": "a9e5bd7134e1f3e5c5813c6cf3bcc328",
"assets/assets/sound/masa.mp3": "d75712e5ce1fa5093ec7234be2a6b7ee",
"assets/assets/sound/mechka.mp3": "28ded9ac0685ae57480478d2b4090bc1",
"assets/assets/sound/midi.mp3": "3b66ec93a4158f87cebe174b0a72b7e8",
"assets/assets/sound/mishka.mp3": "3990b22d41deb605d5371a68247c1ace",
"assets/assets/sound/molivnik.mp3": "8ca280cd17ba6392138ea859f36731f3",
"assets/assets/sound/muha.mp3": "6a0250cf215913b27fb69855fe280ba4",
"assets/assets/sound/nar.mp3": "9903695fc395dbc83257d60cc0f44648",
"assets/assets/sound/nevqrno.mp3": "66666b39f1f961fc80d459deff88fb10",
"assets/assets/sound/nojica.mp3": "cf968f29229965f85b729740de1bff71",
"assets/assets/sound/nosht.mp3": "f92f8e259af935a1ea47cda631c45bd2",
"assets/assets/sound/oblak.mp3": "69a660141815f75999cbd9bd42d78436",
"assets/assets/sound/ochila.mp3": "b72eb58cd5e816fe1bf0e29b10d79f23",
"assets/assets/sound/ohluv.mp3": "beeceaac89d3787e25f9b00b46c7665c",
"assets/assets/sound/oktopod.mp3": "55f93b5bbbe209f317e25f7d1b6e382f",
"assets/assets/sound/orel.mp3": "d3a713a59d9b911b81b172cf4a7ff16e",
"assets/assets/sound/pamuk.mp3": "d228f9aea9676a5e9738244ee56bd8de",
"assets/assets/sound/pan.mp3": "099623035df05cfbecf77da6f673fbaf",
"assets/assets/sound/pchela.mp3": "7b858602a396145b816094c92a83677f",
"assets/assets/sound/peperuda.mp3": "b888aa9213c0c0ae92bee0b689fa37aa",
"assets/assets/sound/pero.mp3": "98f81936435a8ad13b3384beadf5e03e",
"assets/assets/sound/petel.mp3": "6a8285fbf420cb9c53002e65596be670",
"assets/assets/sound/pica.mp3": "7727c785d871de600301ce4f157808ae",
"assets/assets/sound/pismo.mp3": "8723968f8066459dcb002006bda63fa0",
"assets/assets/sound/plasht.mp3": "33c1e76e3fc61f20058f9077fe54372c",
"assets/assets/sound/podarak.mp3": "de3e1c6a8651696c7ca980fadeb684ce",
"assets/assets/sound/pola.mp3": "b7ce7e511929e361a5d30305440dcf47",
"assets/assets/sound/ponichka.mp3": "8e5fb0e953d2fbd136a0fcfaf9439e21",
"assets/assets/sound/pop.mp3": "0cf9b560e2ed52688c5ca38d3ee9374c",
"assets/assets/sound/portokal.mp3": "3013b2e8875964fe63d653ce593a273c",
"assets/assets/sound/prag.mp3": "274c2ecb2fa47aea7326010c06917c80",
"assets/assets/sound/prast.mp3": "dae37cfc30411f48502b7c47c8abe52e",
"assets/assets/sound/prejda.mp3": "967f28717fcb5c96a56527771bf48b6c",
"assets/assets/sound/qbalka.mp3": "a88bf034fa228e27e0d3e74d9cc65ee2",
"assets/assets/sound/qgoda.mp3": "c70e88a3f26112462af1d42b555d48b1",
"assets/assets/sound/qice.mp3": "a69d7706bfea0515b2fa1d8813fbbe62",
"assets/assets/sound/qzovech.mp3": "0e74c0565edbbcdabae5d819097dbcd1",
"assets/assets/sound/rak.mp3": "853287c40bad24d520fab69a95aab3ce",
"assets/assets/sound/raka.mp3": "10315c32fffa874d3952f9c480ee5100",
"assets/assets/sound/raketa.mp3": "5b82b0aa9110348355973f7e64ff3d53",
"assets/assets/sound/ranica.mp3": "a819599fda4bb2123f5eed970c49920b",
"assets/assets/sound/riba.mp3": "d9b53dc2678b5c51a3ddb01cd0606c5e",
"assets/assets/sound/roza.mp3": "1f2c156f1d1f26f9e4c4e7c3436022f8",
"assets/assets/sound/samolet.mp3": "9e8e083e45bc89f69d74441498fb0c30",
"assets/assets/sound/sarf.mp3": "e69c239de855399c73be314567e76b61",
"assets/assets/sound/shal.mp3": "e2060cb526b023663d689eb7170d8541",
"assets/assets/sound/shapka.mp3": "1bc10d40130af4e6967c844f6a402d5f",
"assets/assets/sound/shisharka.mp3": "c072f1ee29bb8f13504f46a182efbcd8",
"assets/assets/sound/shtarkel.mp3": "1ad10051d30c0778acac5be2b454de26",
"assets/assets/sound/shtit.mp3": "4b802e5a26a057bcba5c0703a64dc6a5",
"assets/assets/sound/shtori.mp3": "05da98e15a1fb9c45fb4db8ed1627316",
"assets/assets/sound/slache.mp3": "13f2b093ffe330cd413b04cf9c595f37",
"assets/assets/sound/sladoled.mp3": "0ed6c64a3c6327745fbda4f4928f962e",
"assets/assets/sound/sok.mp3": "73e6c2080b1e82cdd300099ee4f53979",
"assets/assets/sound/stena.mp3": "1ca631f039396e15f8d7ed8299b84aed",
"assets/assets/sound/strah.mp3": "9dbfcb62ed6883e763d92290d59e78c5",
"assets/assets/sound/taralej.mp3": "1e9fa33130008d5024a2a07d7d4a3c52",
"assets/assets/sound/teniska.mp3": "ab7e416d3f31f57286166eba361ac8a5",
"assets/assets/sound/testchetiri.mp3": "e8f451a993b30d35916dae52b125a810",
"assets/assets/sound/testdve.mp3": "8edb3168898f091766bd6dc85c8ee317",
"assets/assets/sound/testedno.mp3": "aa35187fc7d8eacbc02e2ad1e6a39c21",
"assets/assets/sound/testo.mp3": "5cb10f21692f8261c9ef7962af90bd49",
"assets/assets/sound/testpet.mp3": "a1fca14489988fd30e85a26b087d141f",
"assets/assets/sound/testtri.mp3": "f001cc111639d4ea90aaca4f63e00e4b",
"assets/assets/sound/tigar.mp3": "7f2c15d5ab76eedda7dab839c2309f88",
"assets/assets/sound/tikvi.mp3": "b20c9a85eb916776c3d40a9405641c8a",
"assets/assets/sound/topka.mp3": "df387af03309c0b359343c8e18e6ce87",
"assets/assets/sound/torta.mp3": "e1164025ecd64858e214fa551b53bc19",
"assets/assets/sound/toster.mp3": "90a7d7d2472d90740a90e0f01c555db5",
"assets/assets/sound/uchilishte.mp3": "ae243d3456299edf7c8a43fcc9f11a63",
"assets/assets/sound/urgan.mp3": "18c0918748b705317e9db464d9621de1",
"assets/assets/sound/usta.mp3": "165bd2d9c58a81e660accc670a46ac55",
"assets/assets/sound/valna.mp3": "7da3662a64570e0375497fd283f6dadb",
"assets/assets/sound/voda.mp3": "c60833ab880072e39290da0007c4cd2c",
"assets/assets/sound/vqrno.mp3": "1fedb56870225134892d8e4879b38a7f",
"assets/assets/sound/vrata.mp3": "40d69718fdc6e38277471b535ddb7aea",
"assets/assets/sound/zaek.mp3": "f366afb8302d51eeaee8462ea8868a0d",
"assets/assets/sound/zar.mp3": "adc95ac262ece11ab816c70f4ed44cd3",
"assets/assets/sound/zebra.mp3": "f1bc23e6b96b89c2b0f0000c9f04a228",
"assets/assets/sun.png": "2339ca8e45d199acbd22b0bcd645c8b8",
"assets/assets/sun2.png": "f0051f63f6c41531d3e375d349564733",
"assets/FontManifest.json": "79a1add30ae27dbd00faed64c750c0a3",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "e393068f1db8b6f214bd063be6abaea9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "02b0db84cc4cba03b511948af9ab136d",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9993738b2838cc1205c910b23655dbc0",
"/": "9993738b2838cc1205c910b23655dbc0",
"main.dart.js": "d9b2d1944facab0fa4e7cca327eb36be",
"manifest.json": "f9c3c1f18cb94e85e3b61fe8fb5fc959",
"version.json": "927485009dfe06c7a7514bbb0bf9bc87"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
