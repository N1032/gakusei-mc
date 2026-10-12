/**
 * 建築学生サーバー - データ管理ファイル
 * このファイル内のテキストを編集・追加するだけで、各ページに自動反映されます。
 */

// ==========================================================================
// 1. 上部告知バーのテロップデータ (スライドで自動切り替え)
// ==========================================================================
const announcementsData = [
  {
    badge: "LIVE",
    text: "サーバーの様子はYouTubeにて配信中！",
    linkText: "配信を見る",
    linkUrl: "https://youtube.com/live/8ce26zLTYpM",
    isExternal: true
  },
  {
    badge: "NEWS",
    text: "最新情報：WorldEdit 範囲選択の図形拡張 ＆ ウェルカムメッセージ機能の実装",
    linkText: "詳細を見る",
    linkUrl: "index.html#sec-whats-new",
    isExternal: false
  },
];

// ==========================================================================
// 2. 最新情報・アップデートログ (index.html)
// ==========================================================================
const newsData = {
  currentTopic: {
    badge: "2026/10/12 UPDATED",
    title: "WorldEdit 範囲選択の図形拡張 ＆ ウェルカムメッセージ機能の実装",
    description: "従来の直方体選択に加え、多彩な幾何学形状での範囲指定が可能になりました。また、自ワールドへの来訪者にメッセージを自動送信できるシステムが導入されました。",
    sections: [
      {
        heading: "追加されたWorldEdit範囲選択モード",
        items: [
          "<code>//sel poly</code> : 多角形選択（左クリックで開始、右クリックで頂点を追加）",
          "<code>//sel sphere</code> : 球体選択（中心と半径を指定）",
          "<code>//sel cyl</code> : 円柱選択（底面中心と半径・高さを指定）",
          "<code>//sel extend</code> : 拡張選択（右クリックしたブロックを含むよう直方体が自動拡大）",
          "<code>//sel cuboid</code> : 標準の立方体選択に戻す"
        ]
      },
      {
        heading: "新機能・改良項目",
        items: [
          "<strong>ウェルカムメッセージ</strong>: <code>/wo s msg [メッセージ]</code> で自ワールドの挨拶文を設定可能",
          "<strong>ウィンドチャージ制限</strong>: 一度に対空できる上限数を設定しサーバー負荷を軽減",
          "<strong>判定向上</strong>: ワールドメニューを開く判定ロジックを改良"
        ]
      }
    ]
  },
  timeline: [
    { date: "2026/10/10", text: "ロビーワールドの改良を実施。" },
    { date: "2026/10/06", text: "インベントリスロットが置き換わる不具合を修正。ウィンドチャージ上限設定、ワールドメニュー判定改良。" },
    { date: "2026/10/05", text: "WorldEdit置換機能 <code>/tool repl</code> コマンドを追加。" },
    { date: "2026/10/04", text: "WorldEdit選択範囲の可視化、ペースト前プレビュー（<code>/set view</code>）、短縮コマンド（<code>/s</code>, <code>/c</code>, <code>/p</code>, <code>/d</code>）を実装。" },
    { date: "2026/10/03", text: "<span class=\"marker\">第2シーズン サービス開始</span>：ホストサーバースペックの増強、レッドストーン回路の解禁、UI改良。" },
    { date: "2026/08/31", text: "第1シーズン サービス終了（希望者へワールドデータの配布を実施）。" },
    { date: "2026/08/06", text: "クリエイティブ中にスプラッシュポーションを投げることで空中にガラス足場を生成する支援機能を実装。" },
    { date: "2026/07/27", text: "学生サーバー プロジェクト始動。" }
  ]
};

// ==========================================================================
// 3. 独自システム・機能解説 (features.html)
// ==========================================================================
const featuresData = [
  {
    id: "feat-world-menu",
    title: "ワールドメニュー機能",
    tag: "CORE SYSTEM",
    command: "/wo（メニューを開く）/wo s（設定メニュー）/wo visit（お出かけメニュー）",
    description: "チャットコマンドを入力せずとも、視覚的なインベントリメニューからワールドを移動したり、設定を変更したりすることができます。",
    detail: "自ワールド内の<span class=\"marker\">天候固定（晴れ・雨・雷雨）や時間固定（朝・昼・夜）、初期スポーン地点の設定、PVPのON/OFF切り替え</span>が可能です。"
  },
  {
    id: "feat-build-support",
    title: "空中足場ブロック生成",
    tag: "BUILD SUPPORT",
    command: "クリエイティブモード中にスプラッシュポーションを投擲",
    description: "高所や空中など、ブロックが存在しない場所に建造物を建て始める際の足場作りを劇的に効率化する支援機能です。",
    detail: "ポーションを投げた<span class=\"marker\">プレイヤーの足元にガラスブロックが設置</span>されます。足元に既に別のブロックがある場合はガラスは設置されません。"
  },
  {
    id: "feat-world-edit",
    title: "World Edit",
    tag: "BUILD SUPPORT",
    command: "木の斧を使って左クリック（スマホの方は長押し）で開始地点、右クリック（スマホの方はタップ）で終了地点を指定し、//set [ブロックID]でブロックを設置",
    description: "ブロックの一括設置や削除、コピー・ペーストなどを行う補助ツールです。",
    detail: "上記はあくまでも一例です。その他機能はコマンド一覧表をご覧ください。"
  },
  {
    id: "feat-nametag",
    title: "称号（ネームタグ）システム",
    tag: "CUSTOMIZATION",
    command: "/nametag [設定したい称号]",
    description: "プレイヤーネームの頭上に表示される称号を、自分の好きな文字列に設定・更新できるシステムです。",
    detail: "称号を設定して他の人に自分自身をアピールしてみましょう。"
  },
  {
    id: "feat-command-sign",
    title: "コマンド看板機能",
    tag: "INTERACTIVE",
    command: "「##」から設定したいコマンドを看板に記入　（例）##wo me（自分のワールドに移動するコマンド看板）",
    description: "看板をクリック（タップ）することで、割り当てたコマンドが自動的に発動するギミック看板を設置できます。",
    detail: "ワールド内の特定エリアへのテレポート看板や、簡易アトラクションのスイッチとして応用可能です。看板文字へのカラーコード装飾にも対応しています。<span class=\"marker\">長文の場合はコマンドのスペースが入る位置で改行してください。</span>"
  },
  {
    id: "feat-sit",
    title: "着席機能",
    tag: "LIFESTYLE",
    command: "階段ブロック・ハーフブロックなど右クリック（スマホは１回タップ）で着席 / スニークで起立",
    description: "椅子として配置した階段ブロックやハーフブロック、カーペットなど右クリックすることで、その場に腰掛けることができます。",
    detail: "立ち上がる際はスニーク（しゃがみ）操作を行うだけです。内装の撮影や歓談スペースでの利用に適しています。"
  },
    {
    id: "feat-login-days",
    title: "ログイン日数トラッキング機能",
    tag: "STATISTICS",
    command: "自動集計（ログイン時に記録）",
    description: "サーバーへの累計参加日数を自動でカウント・記録します。",
    detail: "長期にわたってサーバーで活動しているプレイヤーのステータスとして機能します。"
  }
];

// ==========================================================================
// 4. サーバーコマンド一覧 (commands.html)
// ==========================================================================
const commandsData = [
  { syntax: "/wo", desc: "ワールド管理メニュー（GUI）を開く", category: "world", categoryLabel: "ワールド基本" },
  { syntax: "/wo me", desc: "自分のワールドにテレポート移動する", category: "world", categoryLabel: "ワールド基本" },
  { syntax: "/wo [プレイヤー名]", desc: "指定したプレイヤーのワールドに移動する", category: "world", categoryLabel: "ワールド基本" },
  { syntax: "/wo gm [1-3]", desc: "ゲームモードを変更する（1:クリエイティブ / 2:アドベンチャー / 3:スペクテイター）", category: "world", categoryLabel: "ワールド基本" },
  { syntax: "/wo invite", desc: "権限メニューを開く", category: "world", categoryLabel: "ワールド基本" },
  { syntax: "/wo invite [プレイヤー名]", desc: "指定したプレイヤーに自ワールドの建築・編集権限を付与する", category: "world", categoryLabel: "ワールド基本" },
  { syntax: "/wo uninvite [プレイヤー名]", desc: "指定したプレイヤーのワールド編集権限を剥奪する", category: "world", categoryLabel: "ワールド基本" },
  { syntax: "/wo kick [プレイヤー名]", desc: "指定したプレイヤーを自ワールドからkickする", category: "world", categoryLabel: "ワールド基本" },
  { syntax: "/wo visit", desc: "お出かけリストを開く", category: "world", categoryLabel: "ワールド基本" },
  { syntax: "/wo favo", desc: "現在滞在しているワールドをお気に入りに登録する", category: "world", categoryLabel: "ワールド基本" },
  { syntax: "/wo tp [X] [Y] [Z]", desc: "そのワールド内の指定された座標へテレポートする", category: "world", categoryLabel: "ワールド基本" },

  { syntax: "/wo s", desc: "ワールド設定メニューを開く", category: "world-setting", categoryLabel: "ワールド設定" },
  { syntax: "/wo s setspawn", desc: "自分のワールドの初期スポーン地点をセット", category: "world-setting", categoryLabel: "ワールド設定" },
  { syntax: "/wo s pvp on", desc: "ワールドのPVPをONにする", category: "world-setting", categoryLabel: "ワールド設定" },
  { syntax: "/wo s pvp off", desc: "ワールドのPVPをOFFにする", category: "world-setting", categoryLabel: "ワールド設定" },
  { syntax: "/wo s settime [day/morning/night]", desc: "ワールドの時間を指定状態に設定", category: "world-setting", categoryLabel: "ワールド設定" },
  { syntax: "/wo s stoptime", desc: "ワールドの時間を固定する", category: "world-setting", categoryLabel: "ワールド設定" },
  { syntax: "/wo s restartime", desc: "ワールドの時間固定を解除する", category: "world-setting", categoryLabel: "ワールド設定" },
  { syntax: "/wo s setweather [clear/rain/thunder]", desc: "ワールドの天候を設定（晴れ/雨/雷雨）", category: "world-setting", categoryLabel: "ワールド設定" },
  { syntax: "/wo s msg [メッセージ]", desc: "ウェルカムメッセージを設定（任意の文字列 / 空欄で削除）", category: "world-setting", categoryLabel: "ワールド設定" },

  { syntax: "//wand", desc: "WorldEditに必要な「木の斧」を入手（左クリック：始点 / 右クリック：終点）", category: "worldedit", categoryLabel: "WorldEdit" },
  { syntax: "//set [ブロックID]", desc: "入力したブロックIDを設置", category: "worldedit", categoryLabel: "WorldEdit" },
  { syntax: "/s", desc: "短縮コマンド：手に持っているアイテムで //set を実行", category: "worldedit", categoryLabel: "WorldEdit" },
  { syntax: "//undo", desc: "直前の操作を取り消す", category: "worldedit", categoryLabel: "WorldEdit" },
  { syntax: "/c", desc: "短縮コマンド：//copy の短縮", category: "worldedit", categoryLabel: "WorldEdit" },
  { syntax: "/p", desc: "短縮コマンド：//paste の短縮", category: "worldedit", categoryLabel: "WorldEdit" },
  { syntax: "/d", desc: "短縮コマンド：//desel（選択解除）の短縮", category: "worldedit", categoryLabel: "WorldEdit" },
  { syntax: "/set view", desc: "ペーストのプレビュー表示の切り替え", category: "worldedit", categoryLabel: "WorldEdit" },
  { syntax: "/tool repl [ブロックID]", desc: "ブロック置換ツールコマンド", category: "worldedit", categoryLabel: "WorldEdit" },
  { syntax: "//move [距離] [方角]", desc: "指定した方向へ移動させる", category: "worldedit", categoryLabel: "WorldEdit" },
  { syntax: "//stack [回数] [方角]", desc: "ブロックを積み重ねる", category: "worldedit", categoryLabel: "WorldEdit" },
  { syntax: "//flip [方角]", desc: "コピーしたブロックを指定した方角へ向かって線対称に反転", category: "worldedit", categoryLabel: "WorldEdit" },
  { syntax: "//hcyl [ブロックID] [半径] [高さ]", desc: "中が空洞の円柱を作成", category: "worldedit", categoryLabel: "WorldEdit" },
  { syntax: "//sel poly", desc: "多角形選択（左クリックで開始、右クリックで頂点追加）", category: "worldedit", categoryLabel: "WorldEdit" },
  { syntax: "//sel sphere", desc: "球体選択（左クリックで中心、右クリックで半径）", category: "worldedit", categoryLabel: "WorldEdit" },
  { syntax: "//sel cyl", desc: "円柱選択（左クリックで底面中心、右クリックで半径と高さ）", category: "worldedit", categoryLabel: "WorldEdit" },
  { syntax: "//sel extend", desc: "拡張選択（右クリックしたブロックを含めて直方体を自動拡大）", category: "worldedit", categoryLabel: "WorldEdit" },
  { syntax: "//sel cuboid", desc: "標準の四角形（直方体）選択に戻す", category: "worldedit", categoryLabel: "WorldEdit" },

  { syntax: "/nametag [称号テキスト]", desc: "称号を任意に設定", category: "other", categoryLabel: "その他" }
];