const overlay = document.getElementById("overlay");

/* OPEN MENU */
const openMenu = (openBtnID, menuID) => {
    const openBtn = document.getElementById(openBtnID),
    menu = document.getElementById(menuID);

    if (openBtn && menu) {
        openBtn.addEventListener("click", () => {
            menu.classList.add("open");
            overlay.classList.remove("fade-out");
            overlay.classList.add("fade-in");
        })
    }
}
openMenu("menu-open", "nav-menu");

/* CLOSE MENU */
const closeMenu = (closeBtnID, menuID) => {
    const closeBtn = document.getElementById(closeBtnID),
    menu = document.getElementById(menuID);

    if (closeBtn && menu) {
        closeBtn.addEventListener("click", () => {
            menu.classList.remove("open");
            overlay.classList.remove("fade-in");
            overlay.classList.add("fade-out");
        })
    }
}
closeMenu("menu-close", "nav-menu");