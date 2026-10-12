/**
 * 建築学生サーバー - 共通UIレイアウト生成・制御スクリプト
 * 上部告知バー、ヘッダー、ドロワーメニュー、フッター、トースト通知を全ページへ自動挿入します。
 */

// 共通トースト通知関数（グローバルに公開）
let toastTimer;
window.showToast = function(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
};

(function() {
  // 現在開いているファイル名を判定（index.html, features.html, commands.html, contact.html）
  const path = window.location.pathname;
  let currentPage = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
  if (currentPage === '') currentPage = 'index.html';

  // 1. 上部告知バー・ドロワー・ヘッダーのHTMLテンプレート
  const headerLayoutHTML = `
    <!-- 上部告知バー (右から左へのテロップスライド) -->
    <div class="announcement-bar">
      <div class="container announcement-viewport" id="announcementViewport"></div>
    </div>

    <!-- ドロワーオーバーレイ -->
    <div class="drawer-overlay" id="drawerOverlay"></div>

    <!-- 左スライドイン・ドロワーメニュー -->
    <aside class="drawer" id="drawer">
      <div class="drawer-header">
        <a href="index.html" class="brand">
          <img src="logo.png" alt="建築学生サーバー" class="brand-logo-img" onload="this.style.display='block'; var fb=this.nextElementSibling; if(fb) fb.style.display='none';" onerror="this.style.display='none';">
          <div class="brand-fallback-wrap">
            <div class="brand-symbol">
              <img src="icon.png" alt="アイコン" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
              <span style="display: none;">G</span>
            </div>
            <div class="brand-text">
              <span class="brand-sub">MENU</span>
              <span class="brand-title">建築学生サーバー</span>
            </div>
          </div>
        </a>
        <button class="drawer-close" id="drawerClose" aria-label="メニューを閉じる">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
      <ul class="drawer-nav">
        <li><a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">ホーム・最新情報</a></li>
        <li><a href="features.html" class="${currentPage === 'features.html' ? 'active' : ''}">独自システム・機能解説</a></li>
        <li><a href="commands.html" class="${currentPage === 'commands.html' ? 'active' : ''}">コマンド一覧</a></li>
        <li><a href="contact.html" class="${currentPage === 'contact.html' ? 'active' : ''}">お問い合わせ</a></li>
        <li><a href="index.html#sec-guide">ワールド作成手順</a></li>
        <li><a href="index.html#sec-specs">推奨スペック</a></li>
        <li>
          <a href="https://discord.gg/9Ex2hYVqra" target="_blank" rel="noopener noreferrer">
            Discordコミュニティ
            <svg class="icon-ext" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square"><path d="M7 17L17 7M17 7H9M17 7V15"/></svg>
          </a>
        </li>
        <li>
          <a href="https://youtube.com/live/8ce26zLTYpM" target="_blank" rel="noopener noreferrer">
            YouTube公式配信
            <svg class="icon-ext" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square"><path d="M7 17L17 7M17 7H9M17 7V15"/></svg>
          </a>
        </li>
      </ul>
      <div class="drawer-footer">
        <p>GAKUSEI Architecture Server</p>
        <p>Season 2 Active</p>
      </div>
    </aside>

    <!-- ヘッダー -->
    <header class="header">
      <div class="container header-container">
        <div class="header-left">
          <button class="menu-toggle" id="menuToggle" aria-label="ナビゲーションを開く">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a href="index.html" class="brand">
            <img src="logo.png" alt="建築学生サーバー" class="brand-logo-img" onload="this.style.display='block'; var fb=this.nextElementSibling; if(fb) fb.style.display='none';" onerror="this.style.display='none';">
            <div class="brand-fallback-wrap">
              <div class="brand-symbol">
                <img src="icon.png" alt="アイコン" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <span style="display: none;">G</span>
              </div>
              <div class="brand-text">
                <span class="brand-sub">MINECRAFT SERVER</span>
                <span class="brand-title">建築学生サーバー</span>
              </div>
            </div>
          </a>
        </div>

        <nav>
          <ul class="desktop-nav">
            <li><a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">ホーム</a></li>
            <li><a href="features.html" class="${currentPage === 'features.html' ? 'active' : ''}">独自機能</a></li>
            <li><a href="commands.html" class="${currentPage === 'commands.html' ? 'active' : ''}">コマンド</a></li>
            <li><a href="contact.html" class="${currentPage === 'contact.html' ? 'active' : ''}">お問い合わせ</a></li>
            <li>
              <a href="https://discord.gg/9Ex2hYVqra" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-header">
                Discord参加
                <svg class="icon-ext" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square"><path d="M7 17L17 7M17 7H9M17 7V15"/></svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  `;

  // 2. フッター・トースト通知のHTMLテンプレート
  const footerLayoutHTML = `
    <!-- コピートースト通知 -->
    <div class="toast" id="toast">コピーしました</div>

    <!-- フッター -->
    <footer class="footer">
      <div class="container footer-content">
        <div>
          <span class="footer-title">GAKUSEI：建築学生サーバー</span>
          <p class="footer-copy">© 2026 GAKUSEI Architecture Server. 非公式Minecraftコミュニティサーバー。</p>
        </div>
        <div class="footer-links">
          <a href="index.html">ホーム</a>
          <a href="features.html">独自機能</a>
          <a href="commands.html">コマンド</a>
          <a href="contact.html">お問い合わせ</a>
          <a href="https://discord.gg/9Ex2hYVqra" target="_blank" rel="noopener noreferrer">
            Discord
            <svg class="icon-ext" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square"><path d="M7 17L17 7M17 7H9M17 7V15"/></svg>
          </a>
          <a href="https://youtube.com/live/8ce26zLTYpM" target="_blank" rel="noopener noreferrer">
            YouTube配信
            <svg class="icon-ext" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square"><path d="M7 17L17 7M17 7H9M17 7V15"/></svg>
          </a>
        </div>
      </div>
    </footer>
  `;

  // ページの読み込み完了時に共通DOMを一括注入・初期化
  document.addEventListener('DOMContentLoaded', () => {
    // 画面上部へヘッダー一式を挿入
    document.body.insertAdjacentHTML('afterbegin', headerLayoutHTML);
    // 画面下部へフッター一式を挿入
    document.body.insertAdjacentHTML('beforeend', footerLayoutHTML);

    // ドロワーメニュー制御
    const menuToggle = document.getElementById('menuToggle');
    const drawer = document.getElementById('drawer');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const drawerClose = document.getElementById('drawerClose');

    if (menuToggle && drawer && drawerOverlay) {
      menuToggle.addEventListener('click', () => {
        drawer.classList.add('open');
        drawerOverlay.classList.add('open');
      });

      function closeDrawer() {
        drawer.classList.remove('open');
        drawerOverlay.classList.remove('open');
      }

      if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
      drawerOverlay.addEventListener('click', closeDrawer);
    }

    // 上部告知テロップの自動同期スライド制御（10秒間隔）
    if (typeof announcementsData !== 'undefined' && announcementsData.length > 0) {
      const viewport = document.getElementById('announcementViewport');
      const total = announcementsData.length;
      if (viewport) {
        let currentSlide = Math.floor(Date.now() / 10000) % total;

        viewport.innerHTML = announcementsData.map((item, idx) => `
          <div class="announcement-slide ${idx === currentSlide ? 'active' : ''}">
            <span class="live-badge">${item.badge}</span>
            <p class="announcement-text">${item.text}</p>
            <a href="${item.linkUrl}" ${item.isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''} class="announcement-link">
              ${item.linkText}
              ${item.isExternal ? '<svg class="icon-ext" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square"><path d="M7 17L17 7M17 7H9M17 7V15"/></svg>' : ''}
            </a>
            <span class="announcement-counter">(${idx + 1}/${total})</span>
          </div>
        `).join('');

        const slides = viewport.querySelectorAll('.announcement-slide');
        const initialDelay = 10000 - (Date.now() % 10000);

        function advanceSlide() {
          slides[currentSlide].classList.remove('active');
          slides[currentSlide].classList.add('prev');
          const prevIndex = currentSlide;
          currentSlide = (currentSlide + 1) % total;
          slides[currentSlide].classList.remove('prev');
          slides[currentSlide].classList.add('active');
          setTimeout(() => {
            slides[prevIndex].classList.remove('prev');
          }, 600);
        }

        setTimeout(() => {
          advanceSlide();
          setInterval(advanceSlide, 10000);
        }, initialDelay);
      }
    }
  });
})();