var bingoList = [];
bingoList[1] = [ 
{ name: "バクダン屋の進入1回のみ", en: 'Enter bomb shop only once', types: ["restrict", "bomb"] },
{ name: "空き瓶1つのみ(増殖は可)", en: 'obtain only one bottle(allow dupe)', types: ["restrict", "bottle"] },
{ name: "Bボタン禁止", en: 'Restrict "B button"', types: ["restrict", "bb"] },
{ name: "勇者の弓を取らずに属性矢1種", en: 'one element arow w/o bow', types: ["restrict", "bow"] },
{ name: "ゾーラかゴロン未取得", en: 'never get either zora or goron mask', types: ["restrict", "goron", "zora"] },
{ name: "銀行を使わない", en: 'never use bank', types: ["restrict", "bank"] }
];
bingoList[2] = [
{ name: "勇者の弓を取らずに属性矢2種", en: 'two element arows w/o bow', types: ["restrict", "bow"] },
{ name: "魔力バーを青くする", en: 'blue magic bar', types: ["fin", "bottle"] },
{ name: "サコンを爆破する", en: 'explosive sakon', types: ["restrict", "sakon"] },
{ name: "やぶさめで丁度40秒代(00:40.XX)", en: 'get 00:40.XX in epona archery', types: ["epona", "bow","bb"] },
{ name: "クロックタウン北でハートのかけら2つ", en: 'Two HPs in North clock town', types: ["heart", "mask"] },
{ name: "ゴロンシティのシャンデリアに火をつける", en: ' Light fire in goron city of the chandelier', types: ["bow"] },
{ name: "温泉の水(増殖瓶でない)", en: 'Hot spring in real bottle', types: ["bottle","fin"] }
 
];
bingoList[3] = [
{ name: "沼の射的場で2550点以上", en: 'get over 2550 score in swamp bow minigame', types: ["bow","bb"] },
{ name: "キータ隊長を倒す", en: 'defeat keeta', types: ["grave"] },
{ name: "イカーナ古城のBGMを鳴るようにする", en: 'ring ikana castle BGM', types: ["ikana"] },
{ name: "ゴロンのララバイ", en: 'Lullaby of Goron', types: ["song", "goron"] },
{ name: "ソフトロック（クラッシュではない）", en: 'softlock(not clash)', types: ["fin"] },
{ name: "ドッグレースで合計250ルピー負ける", en: 'Lose total 250 rupees in dog race', types: ["a"] }

];
bingoList[4] = [
{ name: "手帳の写真を全て埋める", en: 'All pictures in notebook', types: ["notebook"] },
{ name: "手帳にお面のマーク10個", en: '10 mask marks in notebook', types: ["notebook","mask"] },
{ name: "墓地の下の宝箱2つ開ける", en: 'Open 2 chests under the grave', types: ["grave"] }

];
bingoList[5] = [
{ name: "大バクダン", en: 'Power keg', types: ["goron"] },
{ name: "Cアイテム画面を横に6つ揃える", en: 'Row 6 C-items', types: ["item", "ivent"] },
{ name: "潮騒のボサノバ", en: 'New Wave Bossa Nova', types: ["song", "zora"] },
{ name: "誓いの号令", en: 'Oath of order', types: ["song", "heart"] },
{ name: "イベントアイテム2種", en: '2 ivent items', types: ["item", "ivent"] }

];
bingoList[6] = [
{ name: "コッコの写真", en: 'Take kokko picture', types: ["pic"] },
{ name: "エバンのハートのかけら", en: 'Evan’s HP', types: ["heart"] },
{ name: "石ころのお面かギブドのお面", en: 'Either Stone mask or Gibdo mask (both allowed)', types: ["ikana"] },
{ name: "デクの実の入った宝箱を開ける", en: 'Open deku nut chest', types: [""] }
];
bingoList[7] = [
{ name: "ハート5つ", en: '5 Hearts', types: ["heart"] },
{ name: "100ルピーの入った宝箱を4つ開ける", en: 'Open 4 chests into 100 rupees', types: ["field", "chest"] },
{ name: "沼の射的場で2600点以上", en: 'get over 2600 score in swamp bow minigame', types: ["bow","bb"] },
{ name: "フェザーソードを100回使ってコキリの剣に戻す", en: 'Use razor sword 100 times', types: ["sword","bb"] },
{ name: "ゾーラの卵4つ", en: '4 zora eggs', types: ["bottle", "song", "zora"] }
];
bingoList[8] = [
{ name: "ハーフミルク", en: 'Harf milk', types: ["bottle"] },
{ name: "デクの棒10本とデクの実20個", en: '10 deku stick and 20 deku nut', types: ["item", "fin"] },
{ name: "宝箱屋のハートのかけらと50ルピー", en: 'Chest minigame HP and 50 rupees', types: ["heart", "chest", "goron"] },
{ name: "タルミナ平原のシーカーストーンの洞窟のハートのかけら", en: 'Gossips of grotto HP', types: ["field", "heart"] },
{ name: "チュチュが6匹写った写真", en: 'Take picture of 6 Chuchus', types: ["pic"] },
{ name: "ウッドフォールの神殿の鉄格子を8つ開ける", en: 'Unbar 8 doors in WFT', types: ["wft"] }
];
bingoList[9] = [
{ name: "ウッドフォールの神殿のマップとコンパス", en: 'WFT compass and map', types: ["wft", "compass", "map"] },
{ name: "ロックビルの神殿のマップとコンパス", en: 'STT compass and map', types: ["stt", "compass", "map"] },
{ name: "ミラーシールドとフェザーソード", en: 'Mirror shield and Razor sword', types: ["sword", "well"] },
{ name: "Cアイテム画面に灰色の0を6つ", en: '6 gray ”0”s on C-item screen', types: ["fin", "bow"] },
{ name: "ウッドフォールの神殿のはぐれ妖精14匹", en: '14 stray fairies in WFT', types: ["wft", "fairy"] },
{ name: "穴の洞窟の20ルピーの入った宝箱4つ開ける", en: 'Open 4 chests into 20 rupees in grotto', types: ["chest", "field"] }
];
bingoList[10] = [
{ name: "手帳に終了証を6つ", en: '6 ribbons(right col) in notebook', types: ["notebook", "mask", "heart"] },
{ name: "イベントアイテム3種", en: '3 ivent items', types: ["item", "ivent"] },
{ name: "手帳にエクスクラメーションマーク6つ", en: '6 exclamation marks in notebook', types: ["notebook"] },
{ name: "水に浮いた看板の写真(上部全体)", en: 'Take picture of sign floating in the water (entire upper part)', types: ["pic"] },
{ name: "手帳にリボンを7つ(真ん中のもの)", en: '7 center zone ribbons', types: ["notebook", "heart"] }
];
bingoList[11] = [
{ name: "ポストから合計で20ルピー取得する", en: 'Get total 20 rupees from post', types: ["mask"] },
{ name: "ポストマンの10秒ミニゲームのハートのかけら", en: 'Postman minigame HP', types: ["heart"] },
{ name: "神殿のボス鍵を2つ", en: '2 boss keys', types: ["key"] },
{ name: "神殿の中ボスを3体倒す(BGMの変わるもの)", en: 'Defeat 3 minibosses in temple', types: ["mboss"] },
{ name: "オドルワのハートの器", en: 'Odolwa’s Heart of Container', types: ["wft", "heart"] },
{ name: "スノーベッドの神殿のマップとコンパス", en: 'SHT compass and map', types: ["sht", "compass", "map"] }
];
bingoList[12] = [
{ name: "井戸の下の妖精の泉に入る(前の鉄格子を開ける)", en: 'Enter fairy spring in the well', types: ["well"] },
{ name: "Cアイテム画面に1を9つ(11は2つと数える)", en: '9 ”1”s on C-item screen(eleven counted two)', types: ["fin", "bow"] },
{ name: "サイフにぴったり334ルピー", en: 'Just 334 rupees in wallet', types: ["fin", "wallet","bank"] },
{ name: "50ルピーの入った宝箱を4つ開ける(別の場所で)", en: 'Open 4 chests into 50 rupees(chest minigame is onece only)', types: ["field", "chest"] },
{ name: "コウメから青のクスリを貰う", en: 'Get blue potion from koume', types: ["bottle"] },
{ name: "ロマーニのお面かブーさんのお面", en: 'Either Romani mask or Mask of scents (both allowed)', types: ["song"] }
];
bingoList[13] = [
{ name: "大きな矢立と大きなボム袋と大人のサイフ", en: 'Bigger quiver, Bigger bomb bug and Adalt wallet', types: ["bank", "bow", "bomb","bb"] },
{ name: "ハニーとダーリンのミニゲームのハートのかけら", en: 'Honey and Darling minigame HP', types: ["heart","bb"] },
{ name: "ボムチュウの入った宝箱5つ開ける", en: 'Open 5 chests into bombchu', types: ["field", "bow","chest"] },
{ name: "案山子の歌を10箇所使う", en: 'Use 10 Scarecrow’s song different place', types: ["field"] }
];
bingoList[14] = [
{ name: "大妖精を2人助ける", en: 'Save 2 great fairies', types: ["fairy"] },
{ name: "スタルチュラの魂合計で40個", en: 'Total 40 gold skulltula spirits', types: ["wallet", "spider"] },
{ name: "Cアイテム画面に灰色の0を8つ", en: '8 gray ”0”s on C-item screen', types: ["fin", "bow"] },
{ name: "街の射的場から200ルピー", en: '200 rupees from town shooting gallery', types: ["bow", "heart","bb"] }
];
bingoList[15] = [
{ name: "神殿の中ボスを5体倒す(BGMの変わるもの)", en: 'Defeat 5 minibosses in temple', types: ["mboss"] },
{ name: "スノーベッドの神殿の鍵を4つ全て使う(ボス鍵を含む)", en: 'Use all 4 keys in SHT(include boss key)', types: ["sht", "key"] },
{ name: "グレートベイの神殿のはぐれ妖精1匹", en: '1 stray fairy in GBT', types: ["gbt", "fairy"] },
{ name: "グレートベイの神殿のマップとコンパス", en: 'GBT compass and map', types: ["gbt", "compass", "map"] },
{ name: "グヨーグのハートの器", en: 'Gyorg’s Heart of Container', types: ["gbt", "heart"] }
];
bingoList[16] = [
{ name: "ロックビルのはぐれ妖精10匹", en: '10 stray fairies in STT', types: ["stt", "fairy"] },
{ name: "イカーナ川を復活させる", en: 'Restore ikana river', types: ["grave"] },
{ name: "沼のクモ館内でフックショットとゾーラを使わずにまことのお面", en: 'Trueth mask w/o hookshot and zora(only in swamp spider house)', types: ["spider"] },
{ name: "手帳にリボンを10つ(真ん中のもの)", en: '10 center zone ribbons', types: ["notebook", "heart"] },
{ name: "夜更かしのお面とポストハット", en: 'All-night mask and Post hat', types: ["fin", "sakon", "spider"] }
];
bingoList[17] = [
{ name: "氷の矢", en: 'Ice arrow', types: ["zora"] },
{ name: "Cアイテム画面を縦に4つ2列揃える", en: '2 Collums on C-item screen(2 Longitudinals)', types: ["item", "bottle"] },
{ name: "歌7つ", en: '7 songs', types: ["song"] },
{ name: "各神殿のはぐれ妖精1匹", en: 'Every temple one stray fairy', types: ["fairy"] }
];
bingoList[18] = [
{ name: "属性矢2種", en: '2 element arows', types: ["item", "bow"] },
{ name: "空き瓶3つ", en: '3 bottles(no dupe)', types: ["item", "bottle"] },
{ name: "ロックビルの太陽ブロックを7つ消す", en: 'Extinguish 7 sun blocks in STT', types: ["stt", "bow"] },
{ name: "スノーベッドの神殿のはぐれ妖精14匹", en: '14 stray fairies in SHT', types: ["sht", "fairy"] }
];
bingoList[19] = [
{ name: "ゴートの亡骸", en: 'Goat’s remain', types: ["sht"] },
{ name: "グレートベイの神殿のはぐれ妖精10匹", en: '10 stray fairies in GBT', types: ["gbt", "fairy"] },
{ name: "神殿のマップかコンパスを合計で5つ", en: 'Total 5 compasses or maps', types: ["compass", "map"] },
{ name: "魔法の豆を9箇所植える", en: 'Plant 9 magic beens(not grow)', types: ["field", "bottle"] },
{ name: "ぬけがらのエレジー", en: 'Elegy of Emptiness', types: ["song", "ikana", "bow"] },
{ name: "最下列のお面5つ(鬼神以外)", en: 'Buttom 5 masks in mask screen(except Fierce deity’s mask)', types: ["mask", "bow"] }
];
bingoList[20] = [
{ name: "キータンとゲーロのお面とうさみみずきんとブレーメン", en: 'Keaton mask, Gero mask, Bunny hood and Bremen mask', types: ["mask","bb"] },
{ name: "お面を斜めに4つを2列(交差可)", en: '2 diagonals on mask screen(allow cross)', types: ["mask"] },
{ name: "お面画面に空き瓶の中身6種類", en: '6 type bottle contents on mask screen', types: ["bottle", "mask"] },
{ name: "手帳にお面のマーク20個", en: '20 Mask marks in notebook', types: ["notebook","mask"] },
{ name: "ゴメスを倒す", en: 'Defeat Gomes', types: ["stt","bow", "mboss"] }
];
bingoList[21] = [
{ name: "ぬけがらが4種類写った写真", en: 'Take picture of 4 type link’s emptinesses', types: ["song", "ikana", "pic", "bow"] },
{ name: "ロックビルの神殿のアイゴールを2体倒す", en: 'Defeat 2 Eyegores in STT', types: ["stt", "bow"] },
{ name: "手帳に終了証を8つ", en: '8 ribbons(right col) in notebook', types: ["notebook", "mask", "heart"] }
];
bingoList[22] = [
{ name: "井戸の下の宝箱3つ開ける", en: 'Open 3 chests in the well', types: ["well"] },
{ name: "サカナ10匹と虫10匹", en: '10 fishes and 10 bugs', types: ["bottle"] },
{ name: "墓を3つあばく", en: 'Destroy 3 graves', types: ["grave"] },
{ name: "ポウとビッグポウ", en: 'Poe and Big poe', types: ["bottle","bow"] }
];
bingoList[23] = [
{ name: "Cアイテム画面に空き瓶10つ", en: '10 bottles on C-item screen', types: ["item", "bottle"] },
{ name: "ハート10つ(増殖可)", en: '10 hearts(allow dupe)', types: ["heart"] },
{ name: "神殿のマップかコンパスを合計で6つ", en: 'Total 6 compasses or maps', types: ["compass", "map"] },
{ name: "漁師のミニゲームのハートのかけら", en: 'Fisherman HP', types: ["gbt", "heart"] }
];
bingoList[24] = [
{ name: "ツインモルドのハートの器", en: 'Twinmold’s Heart of Container', types: ["stt", "heart"] },
{ name: "滝の下の洞窟の宝箱を2つ開ける", en: 'Open 2 chests in secret shrine', types: ["ikana", "bow"] },
{ name: "岩肉を墓地に運ぶ", en: 'Bring rock sirloin to graveyard', types: ["fin"] },
{ name: "空き瓶4つ", en: '4 bottles (no dupe)', types: ["item", "bottle"] },
{ name: "ハートの器3つ", en: '3 Heart of Contains', types: ["heart"] }
];
bingoList[25] = [
{ name: "銀行に3340ルピー", en: 'Just 3340 rupees in bank', types: ["spider", "bank"] },
{ name: "巨人のサイフと最大の矢立と最大のボム袋", en: 'Giant wallet, Biggest quiver and Biggest bomb bag', types: ["goron", "spider", "bow","bb","bank"] },
{ name: "シャトー・ロマーニ2つ", en: '2 Chateau romanies', types: ["bottle", "notebook", "bow","bb"] },
{ name: "デク姫とタツノオトシゴとゾーラの卵と砂金", en: 'Deku princess, Sea horse, Zora eggs and Gold dust', types: ["bottle", "zora", "goron"] },
{ name: "大妖精の剣", en: 'Great fairy sword', types: ["stt", "fairy"] },
{ name: "大妖精を3人助ける", en: 'Save 3 great fairies', types: ["fairy"] }
];
$(function() { srl.bingo(bingoList, 5); });