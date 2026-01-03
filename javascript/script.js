function showSidebar(){
    const sidebar = document.querySelector('.side-bar-list')
    sidebar.style.display = 'flex'

    const showButton = document.querySelector('.show-side-bar-button')
    showButton.style.display = 'none'

    const hideButton = document.querySelector('.hide-side-bar-button')
    hideButton.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.side-bar-list')
    sidebar.style.display = 'none'
    
    const showButton = document.querySelector('.show-side-bar-button')
    showButton.style.display = 'flex'

    const hideButton = document.querySelector('.hide-side-bar-button')
    hideButton.style.display = 'none'
}

function checkSize(){
    var width = window.innerWidth;
    if (width > 1140){
        expand()
    }
    else{
        hideSidebar()
    }
}

function expand(){
    const sidebar = document.querySelector('.side-bar-navigation-list')
    sidebar.style.display = 'none'
    
    const showButton = document.querySelector('.show-side-bar-button')
    showButton.style.display = 'none'

    const hideButton = document.querySelector('.hide-side-bar-button')
    hideButton.style.display = 'none'

    const menuItems = document.querySelector('.navigation-items')
    menuItems.style.display = 'inline'
}