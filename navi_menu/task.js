const menuLink = document.getElementsByClassName('menu__link')
const menuArray = Array.from(menuLink)

menuArray.forEach((element) => {
    
    element.onclick = () => {
        const parent = element.closest(".menu__item")
        const parentSub = element.closest(".menu_sub")
        const subMenu = parent.querySelector('.menu_sub')

        if (parentSub != undefined) {
            return true
        }
        
        let activeSub = document.querySelector('.menu_active')
        if (activeSub != undefined) {
            if (subMenu != activeSub) {
                activeSub.className = "menu menu_sub"
                return false
            }
        }

        if (subMenu.className == "menu menu_sub") {
            subMenu.className = "menu menu_sub menu_active"
        } else if (subMenu.className == "menu menu_sub menu_active") {
            subMenu.className = "menu menu_sub"
        }

        return false
    }
    
})