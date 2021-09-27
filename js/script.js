import changeColor from './modules/change-color.js';
import menuMobile from './modules/menu-mobile.js';

const menu = menuMobile('[data-menu="button"]','[data-menu="list"]','.menu-list .midia')
menu.init()

const colorCard = changeColor('.container-pictures','.card-img')
colorCard.init()




