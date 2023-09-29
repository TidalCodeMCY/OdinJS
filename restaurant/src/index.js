import _ from 'lodash';
import './style.css';
import { initialLoad } from './components/initialLoad';
import { homePage } from './components/homepage';
import { menuLoad } from './components/menupage';
import { aboutLoad } from './components/aboutpage';
import { contactLoad } from './components/contactpage';


initialLoad();

(function(){
    const home = document.getElementById('Homepage');
    const menu = document.getElementById('Menupage');
    const about = document.getElementById('Aboutpage');
    const contact = document.getElementById('Contactpage');

    home.addEventListener('click', () => {
        homePage();
    });

    menu.addEventListener('click', () => {
        menuLoad();
    });

    about.addEventListener('click',() => {
        aboutLoad();
    });

    contact.addEventListener('click',() => {
        contactLoad();
    });

})();