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
	console.log('動作テスト用');
	
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

	console.log(nav);
	
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

}

//要素を読み込んだ後に実行
window.setTimeout(addMain, 1000);
//window.onload = addMainMenu();
