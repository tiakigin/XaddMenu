/**
 * X.COMのメニューを追加する
 * 
 * Google Chrome 拡張機能「User JavaScript and CSS」使用
 * @author tia_kigin
 */

/**
 * メインから呼ばれる処理
 */
//
function addMainMenu(stText, stUrl, stImg, target) {
	//console.log('動作テスト用');
	
	//現状の取得
	let nav = document.querySelector('nav[aria-label*="メインメニュー"]');

	// 新しいHTML要素を作成
	let nico = document.createElement('a');
	nico.setAttribute('href', stUrl);
	nico.setAttribute('class', 'css-175oi2r r-6koalj r-eqz5dr r-16y2uox r-1habvwh r-cnw61z r-13qz1uu r-1ny4l3l r-1loqt21');
	nico.setAttribute('role', 'link');
	if (target == true){
		nico.setAttribute('target', '_blank');
	}
	
	// 指定した要素の中の末尾に挿入
	nav.appendChild(nico);
	
	// div親
	let nico_div = document.createElement('div');
	nico_div.setAttribute('class', 'css-175oi2r r-sdzlij r-dnmrzs r-1awozwy r-18u37iz r-1777fci r-xyw6el r-o7ynqc r-6416eg');
	nico.appendChild(nico_div);
	
	// div子アイコン 新しいHTML要素を作成
	let div_icon = document.createElement('div');
	div_icon.setAttribute('class', 'r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-vlxjld r-lwhw9o r-cnnz9e');
	div_icon.setAttribute('data-testid', 'UserAvatar-Container-sinonomenico');
	div_icon.setAttribute('style', 'width: 26.25px; height: 26.25px;');
	
	let nico_image = document.createElement('img');
	nico_image.setAttribute('src', stImg);
	nico_image.setAttribute('style', 'width: 26.25px; height: 26.25px;');
	div_icon.appendChild(nico_image);
	
	// div子リンク文字列 新しいHTML要素を作成
	let div_word = document.createElement('div');
	div_word.textContent = stText;
	div_word.setAttribute('class', 'css-146c3p1 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc r-adyw6z r-135wba7 r-16dba41 r-dlybji r-nazi8o');
	div_word.setAttribute('style','color : rgb(247, 249, 249)');

	// 指定した要素の中の末尾に挿入
	nico_div.appendChild(div_icon);
	nico_div.appendChild(div_word);

	//console.log(nav);
	
}

/*
SelectBoxを追加する
*/
function addSelectBox(select, stText, stValue) {
	
	// optionタグを作成する
  var option = document.createElement("option");
  // optionタグのテキストを4に設定する
  option.text = stText;
  // optionタグのvalueを4に設定する
  option.value = stValue;
  // selectタグの子要素にoptionタグを追加する
  select.appendChild(option);
  
  return select;
	
}

/*
Synthmaniacs SelectBoxを表示する
*/
function dispSelectBox() {
	
	//現状の取得
	let nav = document.querySelector('nav[aria-label*="メインメニュー"]');
	
	// 新しいHTML要素を作成
	let select = document.createElement('select');
	select.setAttribute('class', 'css-175oi2r r-6koalj r-eqz5dr r-16y2uox r-1habvwh r-cnw61z r-13qz1uu r-1ny4l3l r-1loqt21');
	select.setAttribute('style', 'font-size:19px;background-color: rgb(21, 32, 43);margin:10px 0px 10px 0px;');
	select.setAttribute('id', 'Synthmaniacs');
	
  //空項目の追加
  select = addSelectBox(select, "-----Synthmaniacs Menu-----", "");
	select = addSelectBox(select, "譜束 ぴあの", "https://www.youtube.com/@FutabaPiano");
	select = addSelectBox(select, "譜束 いおり", "https://www.youtube.com/@FutabaIori");
	select = addSelectBox(select, "刻美 りずむ", "https://www.youtube.com/@KizamiRizumu");
	select = addSelectBox(select, "波導 らいざ", "https://www.youtube.com/@NamidoRaiza");
	select = addSelectBox(select, "符洛院 カナデ", "https://www.youtube.com/@PuraguinKanade");
	select = addSelectBox(select, "天空乃 ヒビキ", "https://www.youtube.com/@TechnoHibiki");
	
  // 指定した要素の中の末尾に挿入
	nav.appendChild(select);
}

/*
メインとなる関数
*/
function addMain() {

//にこちYoutube追加
addMainMenu('にこちYoutube',
					'https://www.youtube.com/@user-sinonome/streams',
					'https://pbs.twimg.com/profile_images/1934996148537937920/DzYYl_sc_normal.jpg',
					true);
addMainMenu('にこちX',
					'https://x.com/sinonomenico',
					'https://pbs.twimg.com/profile_images/1934996148537937920/DzYYl_sc_normal.jpg',
					false);
//シンセマニアクスメンバーの追加
dispSelectBox();
}

/*
//チェンジイベント
*/
function changedSelectBox(){
	
	const selectElement = document.querySelector('#Synthmaniacs');
	
	//イベントを組み込む
  selectElement.addEventListener('change', (event) => {
  // const result = document.querySelector('.output');
  // classがoutputのtextContentに選択された項目のvalue要素を代入。
  // console.log("チェンジイベント:" + event.target.value);
  
  	if (event.target.value!=""){
  		// 新しいページを開く
  		let newwin = window.open(event.target.value);
  	}
  });
}

//要素を読み込んだ後に実行
window.setTimeout(addMain, 1000);
//チェンジイベントの組み込み
window.setTimeout(changedSelectBox, 1000);
