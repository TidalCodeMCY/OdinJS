import image from './imgs/hawaii.jpg';

export function homePage(){
    const reset = document.getElementById('mainReset');
    if(reset.hasChildNodes()){
        reset.removeChild(reset.firstChild);
        recreateHome();
    }else{
        recreateHome();
    };
    
    function recreateHome(){
        const mainHome = document.getElementById('mainReset');
        const mainDiv = document.createElement('div');
        mainDiv.id = "content";
        mainHome.appendChild(mainDiv);
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
    };
};