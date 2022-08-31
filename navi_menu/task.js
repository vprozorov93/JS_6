const menu_link = document.getElementsByClassName('menu__link')
const menu_array = Array.from(menu_link)

menu_array.forEach((element) => {
    
    element.onclick = () => {
        const parent = element.closest(".menu__item")
        const sub_menu = parent.querySelector('.menu .menu_sub')

        let active_sub = document.querySelector('.menu_active')
        if (active_sub != undefined) {
            active_sub.className = "menu menu_sub"
        }

        if (sub_menu.className == "menu menu_sub") {
            sub_menu.className = "menu menu_sub menu_active"
        } else if (sub_menu.className == "menu menu_sub menu_active") {
            sub_menu.className = "menu menu_sub"
        }
        return false
    }
    
})