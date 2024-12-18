const header = document.querySelector('header');
header.innerHTML += `
<div class="wrapper">
            <div class="header__bar">
                <div class="header__navigation">
                    <div class="header__navigation-left">
                        <img class="header__logo" src="../../share/img/header/Frame.png" alt="Logo">
                        <nav class="header__nav">
                            <ul class="header__nav-list">
                                <li class="header__nav-item"><a href="#">Trang chủ</a></li>
                                <li class="header__nav-item"><a href="#">Danh mục</a></li>
                                <li class="header__nav-item"><a href="#">Giới thiệu</a></li>
                                <li class="header__nav-item"><a href="#">Liên hệ</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="header__navigation-right">
                        <div class="header__search-box">
                            <button class="header__search-button">
                                <img class="header__search-icon" src="../../share/img/header/u_search.png" alt="Search Icon">
                            </button>
                            <input type="text" class="header__search-input" placeholder="Nhập từ khoá...">
                        </div>
                        <button class="header__join-button">Tham Gia Cộng Đồng</button>
                    </div>
                </div>
            </div>
        </div>
`
