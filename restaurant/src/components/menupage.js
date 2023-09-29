import image from './imgs/doublebuster.jpg';
import imageTwo from './imgs/bbqburger.jpg';
import imageThree from './imgs/ultraregular.jpg'

export function menuLoad(){
    const reset = document.getElementById('mainReset');
    if(reset.hasChildNodes()){
        reset.removeChild(reset.firstChild);
        loadMenu();
    }else {
        loadMenu();
    }
    

    function loadMenu(){
        const newPage = document.getElementById('mainReset');
        const mainDiv = document.createElement('div');
        mainDiv.id = "contentone";
        newPage.appendChild(mainDiv);
        const innerDiv = document.createElement('div');
        innerDiv.id = 'Innerdiv';
        mainDiv.appendChild(innerDiv);
        const menuOne = document.createElement('p');
        menuOne.id = 'Menuone';
        menuOne.textContent = 'The Double Buster : Two patties cooked to perfection with all the fixins! YUM!';
        innerDiv.appendChild(menuOne);
        const imgOne = document.createElement('img');
        imgOne.src = image;
        imgOne.id = 'Menuitemone';
        innerDiv.appendChild(imgOne);
        const menuTwo = document.createElement('p');
        menuTwo.id = 'Menutwo';
        menuTwo.textContent = 'The BBQ Beast come get the fire taste now!';
        innerDiv.appendChild(menuTwo);
        const imgTwo = document.createElement('img');
        imgTwo.src = imageTwo;
        imgTwo.id = 'Menuitemtwo';
        innerDiv.appendChild(imgTwo);
        const menuThree = document.createElement('p');
        menuThree.id = 'Menuthree';
        menuThree.textContent = 'The Original Busta thats all you need to know.';
        innerDiv.appendChild(menuThree);
        const imgThree = document.createElement('img');
        imgThree.id = 'Menuitemthree';
        imgThree.src = imageThree;
        innerDiv.appendChild(imgThree);
        const menuFour = document.createElement('p');
        menuFour.id = 'Menufour';
        menuFour.textContent = 'tba at later date!';
        innerDiv.appendChild(menuFour);
        const imgFour = document.createElement('img');
        imgFour.id = 'Menuitemfour';
        imgFour.src = imageThree;
        innerDiv.appendChild(imgFour);
        const menuFive = document.createElement('p');
        menuFive.id = 'Menufive';
        menuFive.textContent = 'tba at later date!';
        innerDiv.appendChild(menuFive);
        const imgFive = document.createElement('img');
        imgFive.id = 'Menuitemfive';
        imgFive.src = imageThree;
        innerDiv.appendChild(imgFive);
        const menuSix = document.createElement('p');
        menuSix.id = 'Menusix';
        menuSix.textContent = 'tba at later date!';
        innerDiv.appendChild(menuSix);
        const imgSix = document.createElement('img');
        imgSix.id = 'Menuitemsix';
        imgSix.src = imageThree;
        innerDiv.appendChild(imgSix);
        const menuSeven = document.createElement('p');
        menuSeven.id = 'Menuseven';
        menuSeven.textContent = 'tba at later date!';
        innerDiv.appendChild(menuSeven);
        const imgSeven = document.createElement('img');
        imgSeven.id = 'Menuitemseven';
        imgSeven.src = imageThree;
        innerDiv.appendChild(imgSeven); 
    };
};