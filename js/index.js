function handleButtonClick() {

    document.getElementById('list').classList.toggle('list--vertical');
    document.getElementById('menu-close').classList.toggle('menu-close--open');
    document.getElementById('menu-open').classList.toggle('menu-open--close');
}

function init() {

    const menu = document.getElementById('menu');
    menu.addEventListener('click', handleButtonClick);

}

document.addEventListener("DOMContentLoaded", init);
