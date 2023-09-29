import _ from 'lodash';
import './style.css';
import { initialLoad } from './components/initialLoad';
import { homePage } from './components/homepage';
import { menuLoad } from './components/menupage';


initialLoad();

(function(){
    const home = document.getElementById('Homepage');
    const menu = document.getElementById('Menupage');

    home.addEventListener('click', () => {
        homePage();
    });

    menu.addEventListener('click', () => {
        menuLoad();
    });
})();