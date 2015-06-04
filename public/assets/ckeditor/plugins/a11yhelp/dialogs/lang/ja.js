/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
<<<<<<< HEAD

CKEDITOR.plugins.setLang("a11yhelp","ja",{title:"ユーザー補助の説明",contents:"ヘルプ　このダイアログを閉じるには ESCを押してください。",legend:[{name:"全般",items:[{name:"エディターツールバー",legend:"${toolbarFocus} を押すとツールバーのオン/オフ操作ができます。カーソルをツールバーのグループで移動させるにはTabかSHIFT+Tabを押します。グループ内でカーソルを移動させるには、右カーソルか左カーソルを押します。スペースキーやエンターを押すとボタンを有効/無効にすることができます。"},{name:"編集ダイアログ",legend:"ダイヤログ内では、ダイアログの次の選択肢に移動するにはTabを押します。前の選択肢に移動するには、SHIFT+Tabを押します。ダイアログを決定するには、ENTERを押します。ESCでダイアログをキャンセルできます。複数のタブがあるダイアログではタブリストを操作するにはALT+F10を押します。次のタブに移動するにはTabか右カーソル、前のタブに戻るにはSHIFT+Tabか左カーソルです。タブページを決定するにはスペースもしくは、ENTERキーを押してください。"},
{name:"エディターのメニュー",legend:"${contextMenu} キーかAPPLICATION KEYを押すとコンテキストメニューが開きます。Tabか下カーソルでメニューのオプション選択が下に移動します。戻るには、SHIFT+Tabか上カーソルです。スペースもしくはENTERキーでメニューオプションを決定できます。現在選んでいるオプションのサブメニューを開くには、スペース、もしくは右カーソルを押します。サブメニューから親メニューに戻るには、ESCか左カーソルを押してください。ESCでコンテキストメニュー自体をキャンセルできます。"},{name:"エディターリストボックス",legend:"リストボックス内で移動するには、Tabか下カーソルで次のアイテムへ移動します。SHIFT+Tabで前のアイテムに戻ります。リストのオプションを選択するには、スペースもしくは、ENTERを押してください。リストボックスを閉じるには、ESCを押してください。"},{name:"エディター要素パスバー",legend:"${elementsPathFocus} を押すとエレメントパスバーを操作出来ます。Tabか右カーソルで次のエレメントを選択できます。前のエレメントを選択するには、SHIFT+Tabか左カーソルです。スペースもしくは、ENTERでエディタ内の対象エレメントを選択出来ます。"}]},
{name:"コマンド",items:[{name:"元に戻す",legend:"${undo} をクリック"},{name:"やり直し",legend:"${redo} をクリック"},{name:"太字",legend:"${bold} をクリック"},{name:"斜体 ",legend:"${italic} をクリック"},{name:"下線",legend:"${underline} をクリック"},{name:"リンク",legend:"${link} をクリック"},{name:"ツールバーを縮める",legend:"${toolbarCollapse} をクリック"},{name:"前のカーソル移動のできないポイントへ",legend:"${accessPreviousSpace} を押すとカーソルより前にあるカーソルキーで入り込めないスペースへ移動できます。例えば、HRエレメントが2つ接している場合などです。離れた場所へは、複数回キーを押します。"},{name:"次のカーソル移動のできないポイントへ",legend:"${accessNextSpace} を押すとカーソルより後ろにあるカーソルキーで入り込めないスペースへ移動できます。例えば、HRエレメントが2つ接している場合などです。離れた場所へは、複数回キーを押します。"},
{name:"ユーザー補助ヘルプ",legend:"${a11yHelp} をクリック"}]}],backspace:"Backspace",tab:"Tab",enter:"Enter",shift:"Shift",ctrl:"Ctrl",alt:"Alt",pause:"Pause",capslock:"Caps Lock",escape:"Escape",pageUp:"Page Up",pageDown:"Page Down",end:"End",home:"Home",leftArrow:"左矢印",upArrow:"上矢印",rightArrow:"右矢印",downArrow:"下矢印",insert:"Insert","delete":"Delete",leftWindowKey:"左Windowキー",rightWindowKey:"右のWindowキー",selectKey:"Select",numpad0:"Num 0",numpad1:"Num 1",numpad2:"Num 2",numpad3:"Num 3",numpad4:"Num 4",numpad5:"Num 5",
numpad6:"Num 6",numpad7:"Num 7",numpad8:"Num 8",numpad9:"Num 9",multiply:"掛ける",add:"足す",subtract:"引く",decimalPoint:"小数点",divide:"割る",f1:"F1",f2:"F2",f3:"F3",f4:"F4",f5:"F5",f6:"F6",f7:"F7",f8:"F8",f9:"F9",f10:"F10",f11:"F11",f12:"F12",numLock:"Num Lock",scrollLock:"Scroll Lock",semiColon:"セミコロン",equalSign:"イコール記号",comma:"カンマ",dash:"ダッシュ",period:"ピリオド",forwardSlash:"フォワードスラッシュ",graveAccent:"グレイヴアクセント",openBracket:"開きカッコ",backSlash:"バックスラッシュ",closeBracket:"閉じカッコ",singleQuote:"シングルクォート"});
=======
CKEDITOR.plugins.setLang("a11yhelp","ja",{title:"\u30e6\u30fc\u30b6\u30fc\u88dc\u52a9\u306e\u8aac\u660e",contents:"\u30d8\u30eb\u30d7\u3000\u3053\u306e\u30c0\u30a4\u30a2\u30ed\u30b0\u3092\u9589\u3058\u308b\u306b\u306f ESC\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044\u3002",legend:[{name:"\u5168\u822c",items:[{name:"\u30a8\u30c7\u30a3\u30bf\u30fc\u30c4\u30fc\u30eb\u30d0\u30fc",legend:"${toolbarFocus} \u3092\u62bc\u3059\u3068\u30c4\u30fc\u30eb\u30d0\u30fc\u306e\u30aa\u30f3/\u30aa\u30d5\u64cd\u4f5c\u304c\u3067\u304d\u307e\u3059\u3002\u30ab\u30fc\u30bd\u30eb\u3092\u30c4\u30fc\u30eb\u30d0\u30fc\u306e\u30b0\u30eb\u30fc\u30d7\u3067\u79fb\u52d5\u3055\u305b\u308b\u306b\u306fTab\u304bSHIFT+Tab\u3092\u62bc\u3057\u307e\u3059\u3002\u30b0\u30eb\u30fc\u30d7\u5185\u3067\u30ab\u30fc\u30bd\u30eb\u3092\u79fb\u52d5\u3055\u305b\u308b\u306b\u306f\u3001\u53f3\u30ab\u30fc\u30bd\u30eb\u304b\u5de6\u30ab\u30fc\u30bd\u30eb\u3092\u62bc\u3057\u307e\u3059\u3002\u30b9\u30da\u30fc\u30b9\u30ad\u30fc\u3084\u30a8\u30f3\u30bf\u30fc\u3092\u62bc\u3059\u3068\u30dc\u30bf\u30f3\u3092\u6709\u52b9/\u7121\u52b9\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"},{name:"\u7de8\u96c6\u30c0\u30a4\u30a2\u30ed\u30b0",legend:"\u30c0\u30a4\u30e4\u30ed\u30b0\u5185\u3067\u306f\u3001\u30c0\u30a4\u30a2\u30ed\u30b0\u306e\u6b21\u306e\u9078\u629e\u80a2\u306b\u79fb\u52d5\u3059\u308b\u306b\u306fTab\u3092\u62bc\u3057\u307e\u3059\u3002\u524d\u306e\u9078\u629e\u80a2\u306b\u79fb\u52d5\u3059\u308b\u306b\u306f\u3001SHIFT+Tab\u3092\u62bc\u3057\u307e\u3059\u3002\u30c0\u30a4\u30a2\u30ed\u30b0\u3092\u6c7a\u5b9a\u3059\u308b\u306b\u306f\u3001ENTER\u3092\u62bc\u3057\u307e\u3059\u3002ESC\u3067\u30c0\u30a4\u30a2\u30ed\u30b0\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3067\u304d\u307e\u3059\u3002\u8907\u6570\u306e\u30bf\u30d6\u304c\u3042\u308b\u30c0\u30a4\u30a2\u30ed\u30b0\u3067\u306f\u30bf\u30d6\u30ea\u30b9\u30c8\u3092\u64cd\u4f5c\u3059\u308b\u306b\u306fALT+F10\u3092\u62bc\u3057\u307e\u3059\u3002\u6b21\u306e\u30bf\u30d6\u306b\u79fb\u52d5\u3059\u308b\u306b\u306fTab\u304b\u53f3\u30ab\u30fc\u30bd\u30eb\u3001\u524d\u306e\u30bf\u30d6\u306b\u623b\u308b\u306b\u306fSHIFT+Tab\u304b\u5de6\u30ab\u30fc\u30bd\u30eb\u3067\u3059\u3002\u30bf\u30d6\u30da\u30fc\u30b8\u3092\u6c7a\u5b9a\u3059\u308b\u306b\u306f\u30b9\u30da\u30fc\u30b9\u3082\u3057\u304f\u306f\u3001ENTER\u30ad\u30fc\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044\u3002"},{name:"\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u30e1\u30cb\u30e5\u30fc",legend:"${contextMenu} \u30ad\u30fc\u304bAPPLICATION KEY\u3092\u62bc\u3059\u3068\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30e1\u30cb\u30e5\u30fc\u304c\u958b\u304d\u307e\u3059\u3002Tab\u304b\u4e0b\u30ab\u30fc\u30bd\u30eb\u3067\u30e1\u30cb\u30e5\u30fc\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u9078\u629e\u304c\u4e0b\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002\u623b\u308b\u306b\u306f\u3001SHIFT+Tab\u304b\u4e0a\u30ab\u30fc\u30bd\u30eb\u3067\u3059\u3002\u30b9\u30da\u30fc\u30b9\u3082\u3057\u304f\u306fENTER\u30ad\u30fc\u3067\u30e1\u30cb\u30e5\u30fc\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u6c7a\u5b9a\u3067\u304d\u307e\u3059\u3002\u73fe\u5728\u9078\u3093\u3067\u3044\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u30b5\u30d6\u30e1\u30cb\u30e5\u30fc\u3092\u958b\u304f\u306b\u306f\u3001\u30b9\u30da\u30fc\u30b9\u3001\u3082\u3057\u304f\u306f\u53f3\u30ab\u30fc\u30bd\u30eb\u3092\u62bc\u3057\u307e\u3059\u3002\u30b5\u30d6\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u89aa\u30e1\u30cb\u30e5\u30fc\u306b\u623b\u308b\u306b\u306f\u3001ESC\u304b\u5de6\u30ab\u30fc\u30bd\u30eb\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044\u3002ESC\u3067\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30e1\u30cb\u30e5\u30fc\u81ea\u4f53\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3067\u304d\u307e\u3059\u3002"},{name:"\u30a8\u30c7\u30a3\u30bf\u30fc\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9",legend:"\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u5185\u3067\u79fb\u52d5\u3059\u308b\u306b\u306f\u3001Tab\u304b\u4e0b\u30ab\u30fc\u30bd\u30eb\u3067\u6b21\u306e\u30a2\u30a4\u30c6\u30e0\u3078\u79fb\u52d5\u3057\u307e\u3059\u3002SHIFT+Tab\u3067\u524d\u306e\u30a2\u30a4\u30c6\u30e0\u306b\u623b\u308a\u307e\u3059\u3002\u30ea\u30b9\u30c8\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3059\u308b\u306b\u306f\u3001\u30b9\u30da\u30fc\u30b9\u3082\u3057\u304f\u306f\u3001ENTER\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u3092\u9589\u3058\u308b\u306b\u306f\u3001ESC\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044\u3002"},{name:"\u30a8\u30c7\u30a3\u30bf\u30fc\u8981\u7d20\u30d1\u30b9\u30d0\u30fc",legend:"${elementsPathFocus} \u3092\u62bc\u3059\u3068\u30a8\u30ec\u30e1\u30f3\u30c8\u30d1\u30b9\u30d0\u30fc\u3092\u64cd\u4f5c\u51fa\u6765\u307e\u3059\u3002Tab\u304b\u53f3\u30ab\u30fc\u30bd\u30eb\u3067\u6b21\u306e\u30a8\u30ec\u30e1\u30f3\u30c8\u3092\u9078\u629e\u3067\u304d\u307e\u3059\u3002\u524d\u306e\u30a8\u30ec\u30e1\u30f3\u30c8\u3092\u9078\u629e\u3059\u308b\u306b\u306f\u3001SHIFT+Tab\u304b\u5de6\u30ab\u30fc\u30bd\u30eb\u3067\u3059\u3002\u30b9\u30da\u30fc\u30b9\u3082\u3057\u304f\u306f\u3001ENTER\u3067\u30a8\u30c7\u30a3\u30bf\u5185\u306e\u5bfe\u8c61\u30a8\u30ec\u30e1\u30f3\u30c8\u3092\u9078\u629e\u51fa\u6765\u307e\u3059\u3002"}]},{name:"\u30b3\u30de\u30f3\u30c9",items:[{name:"\u5143\u306b\u623b\u3059",legend:"${undo} \u3092\u30af\u30ea\u30c3\u30af"},{name:"\u3084\u308a\u76f4\u3057",legend:"${redo} \u3092\u30af\u30ea\u30c3\u30af"},{name:"\u592a\u5b57",legend:"${bold} \u3092\u30af\u30ea\u30c3\u30af"},{name:"\u659c\u4f53 ",legend:"${italic} \u3092\u30af\u30ea\u30c3\u30af"},{name:"\u4e0b\u7dda",legend:"${underline} \u3092\u30af\u30ea\u30c3\u30af"},{name:"\u30ea\u30f3\u30af",legend:"${link} \u3092\u30af\u30ea\u30c3\u30af"},{name:"\u30c4\u30fc\u30eb\u30d0\u30fc\u3092\u7e2e\u3081\u308b",legend:"${toolbarCollapse} \u3092\u30af\u30ea\u30c3\u30af"},{name:"\u524d\u306e\u30ab\u30fc\u30bd\u30eb\u79fb\u52d5\u306e\u3067\u304d\u306a\u3044\u30dd\u30a4\u30f3\u30c8\u3078",legend:"${accessPreviousSpace} \u3092\u62bc\u3059\u3068\u30ab\u30fc\u30bd\u30eb\u3088\u308a\u524d\u306b\u3042\u308b\u30ab\u30fc\u30bd\u30eb\u30ad\u30fc\u3067\u5165\u308a\u8fbc\u3081\u306a\u3044\u30b9\u30da\u30fc\u30b9\u3078\u79fb\u52d5\u3067\u304d\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001HR\u30a8\u30ec\u30e1\u30f3\u30c8\u304c2\u3064\u63a5\u3057\u3066\u3044\u308b\u5834\u5408\u306a\u3069\u3067\u3059\u3002\u96e2\u308c\u305f\u5834\u6240\u3078\u306f\u3001\u8907\u6570\u56de\u30ad\u30fc\u3092\u62bc\u3057\u307e\u3059\u3002"},{name:"\u6b21\u306e\u30ab\u30fc\u30bd\u30eb\u79fb\u52d5\u306e\u3067\u304d\u306a\u3044\u30dd\u30a4\u30f3\u30c8\u3078",legend:"${accessNextSpace} \u3092\u62bc\u3059\u3068\u30ab\u30fc\u30bd\u30eb\u3088\u308a\u5f8c\u308d\u306b\u3042\u308b\u30ab\u30fc\u30bd\u30eb\u30ad\u30fc\u3067\u5165\u308a\u8fbc\u3081\u306a\u3044\u30b9\u30da\u30fc\u30b9\u3078\u79fb\u52d5\u3067\u304d\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001HR\u30a8\u30ec\u30e1\u30f3\u30c8\u304c2\u3064\u63a5\u3057\u3066\u3044\u308b\u5834\u5408\u306a\u3069\u3067\u3059\u3002\u96e2\u308c\u305f\u5834\u6240\u3078\u306f\u3001\u8907\u6570\u56de\u30ad\u30fc\u3092\u62bc\u3057\u307e\u3059\u3002"},{name:"\u30e6\u30fc\u30b6\u30fc\u88dc\u52a9\u30d8\u30eb\u30d7",legend:"${a11yHelp} \u3092\u30af\u30ea\u30c3\u30af"}]}],backspace:"Backspace",tab:"Tab",enter:"Enter",shift:"Shift",ctrl:"Ctrl",alt:"Alt",pause:"Pause",capslock:"Caps Lock",escape:"Escape",pageUp:"Page Up",pageDown:"Page Down",end:"End",home:"Home",leftArrow:"\u5de6\u77e2\u5370",upArrow:"\u4e0a\u77e2\u5370",rightArrow:"\u53f3\u77e2\u5370",downArrow:"\u4e0b\u77e2\u5370",insert:"Insert","delete":"Delete",leftWindowKey:"\u5de6Window\u30ad\u30fc",rightWindowKey:"\u53f3\u306eWindow\u30ad\u30fc",selectKey:"Select",numpad0:"Num 0",numpad1:"Num 1",numpad2:"Num 2",numpad3:"Num 3",numpad4:"Num 4",numpad5:"Num 5",numpad6:"Num 6",numpad7:"Num 7",numpad8:"Num 8",numpad9:"Num 9",multiply:"\u639b\u3051\u308b",add:"\u8db3\u3059",subtract:"\u5f15\u304f",decimalPoint:"\u5c0f\u6570\u70b9",divide:"\u5272\u308b",f1:"F1",f2:"F2",f3:"F3",f4:"F4",f5:"F5",f6:"F6",f7:"F7",f8:"F8",f9:"F9",f10:"F10",f11:"F11",f12:"F12",numLock:"Num Lock",scrollLock:"Scroll Lock",semiColon:"\u30bb\u30df\u30b3\u30ed\u30f3",equalSign:"\u30a4\u30b3\u30fc\u30eb\u8a18\u53f7",comma:"\u30ab\u30f3\u30de",dash:"\u30c0\u30c3\u30b7\u30e5",period:"\u30d4\u30ea\u30aa\u30c9",forwardSlash:"\u30d5\u30a9\u30ef\u30fc\u30c9\u30b9\u30e9\u30c3\u30b7\u30e5",graveAccent:"\u30b0\u30ec\u30a4\u30f4\u30a2\u30af\u30bb\u30f3\u30c8",openBracket:"\u958b\u304d\u30ab\u30c3\u30b3",backSlash:"\u30d0\u30c3\u30af\u30b9\u30e9\u30c3\u30b7\u30e5",closeBracket:"\u9589\u3058\u30ab\u30c3\u30b3",singleQuote:"\u30b7\u30f3\u30b0\u30eb\u30af\u30a9\u30fc\u30c8"});
>>>>>>> 1df0c2cc27677cb2b125228246d2f87ee6af3d45
