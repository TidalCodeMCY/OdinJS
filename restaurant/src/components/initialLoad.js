import image from '../components/imgs/hawaii.jpg';
import bodyimage from '../components/imgs/bodyBack.jpg';

export function initialLoad(){
    const body = document.body;
    body.setAttribute("background",bodyimage);

    function headerLoad(){
        const header = document.createElement('header');
        const hOne = document.createElement('h1');
        hOne.textContent = 'De\'Porrio';
        hOne.id = 'Restaurantname';
        header.appendChild(hOne);
        const btnContainer = document.createElement('div');
        btnContainer.id = 'Buttoncontainer';
        header.appendChild(btnContainer);
        const homeBtn = document.createElement('p');
        homeBtn.textContent = 'Home';
        homeBtn.id = 'Homepage';
        btnContainer.appendChild(homeBtn);
        const menuBtn = document.createElement('p');
        menuBtn.textContent = 'Menu';
        menuBtn.id = 'Menupage';
        btnContainer.appendChild(menuBtn);
        const aboutBtn = document.createElement('p');
        aboutBtn.textContent = 'About Us';
        aboutBtn.id = 'Aboutpage';
        btnContainer.appendChild(aboutBtn);
        const contactBtn = document.createElement('p');
        contactBtn.textContent = 'Contact Us';
        contactBtn.id = 'Contactpage';
        btnContainer.appendChild(contactBtn);
        body.appendChild(header);
    };
    function mainLoad(){
        const main = document.createElement('main');
        const mainDiv = document.createElement('div');
        mainDiv.id = "content";
        main.appendChild(mainDiv);
        const pOneM = document.createElement('p');
        pOneM.id = 'Bestburger';
        pOneM.textContent = 'Best burgers in town!';
        mainDiv.appendChild(pOneM);
        const imgMain = document.createElement('img');
        imgMain.src = image;
        imgMain.id = 'Homeimg';
        mainDiv.appendChild(imgMain);        
        const pTwoM = document.createElement('p');
        pTwoM.id = 'Passionmade';
        pTwoM.textContent = 'Made passionately since 1943';
        mainDiv.appendChild(pTwoM);
        const orderOnline = document.createElement('p');
        orderOnline.id = 'Onlineorder';
        orderOnline.textContent = 'Order Online Now!';
        mainDiv.appendChild(orderOnline);

        body.appendChild(main);
    };
    function footerLoad(){
        const footer = document.createElement('footer');
        const footerCtnt = document.createElement('p');
        footerCtnt.id = 'Footercontent';
        footerCtnt.textContent = 'Copyright by Mason Yates';
        footer.appendChild(footerCtnt);
        body.appendChild(footer);
    };
    headerLoad();
    mainLoad();
    footerLoad();
};