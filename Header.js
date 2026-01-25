document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
    <header class="siteheader">
        <div class="headermain">
            <div class="headertitle">
                <div class="allan">
                    <a href="../index.html" target="_top">ALLAN JOHNSON</a>
                </div>
                <div class="Personal">
                    <a href="../index.html" target="_top">Personal Life Coach</a>
                </div>
            </div>
            <input type="checkbox" id="menu-toggle">
            <label for="menu-toggle" class="burger">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <nav>
                <ul class="navigacia">
                    <li><a href="../index.html#about" target="_top"><div class="navtext"><p>About</p></div></a></li>
                    <li><a href="../html/services.html" target="_top"><div class="navtext"><p>Services</p></div></a></li>
                    <li><a href="../html/plans.html" target="_top"><div class="navtext"><p>Plans</p></div></a></li>
                    <li><a href="../html/blog.html" target="_top"><div class="navtext"><p>Blog</p></div></a></li>
                    <li><a href="../html/guides.html" target="_top"><div class="navtext"><p>Guides</p></div></a></li>
                    <li><a href="../html/contact.html" target="_top"><div class="navtext"><p>Contact</p></div></a></li>
                    <li><a href="../html/members.html" target="_top"><div class="navtext"><p>Members</p></div></a></li>
                    <li><a href="../html/log-in.html" target="_top">
                        <div class="navtext">
                            <button class="loginicon">
                                <img src="../imgs/loginicone.png" alt="loginicon" width="40px">
                                <span>Log in</span>
                            </button>
                        </div>
                    </a></li>
                </ul>
            </nav>
        </div>
    </header>`;
    
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});