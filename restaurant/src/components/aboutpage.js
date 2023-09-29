import image from '../components/imgs/hawaii.jpg';

export function aboutLoad(){
    const reset = document.getElementById('mainReset');
    if(reset.hasChildNodes()){
        reset.removeChild(reset.firstChild);
        loadAbout();
    }else {
        loadAbout();
    }

    function loadAbout(){
        const newPage = document.getElementById('mainReset');
        const mainDiv = document.createElement('div');
        mainDiv.id = "contenttwo";
        newPage.appendChild(mainDiv);
        const intro = document.createElement('p');
        intro.id = 'intro';
        intro.textContent = 'Hello we are De\'Porrio! Thanks for choosing us!'
        mainDiv.appendChild(intro);
        const container1 = document.createElement('div')
        container1.id = 'Containerone';
        mainDiv.appendChild(container1);
        const aboutUs = document.createElement('p');
        aboutUs.id = 'Aboutus';
        aboutUs.textContent = "About us info goes here XXXXXX XXXXXXX XXXXXXXXXX XXXXXXXXX XXXXXXXXXX XXXXXXXX XXXXXXX XXXXXXX XXXXXXX XXXXXXXXX XXXXXXXXX XXXXXXXXXX XXXXXXXXX XXXXXX XXXXXX XXXXXXXX XXXXX XXXX XXXXX XXXXX XXXXXXX";
        container1.appendChild(aboutUs); 
        const aboutImg = document.createElement('img');
        aboutImg.src = image;
        aboutImg.id = 'Aboutimg';
        container1.appendChild(aboutImg);
        const end = document.createElement('p');
        end.textContent = 'Contact Us';
        end.id = 'end';
        mainDiv.appendChild(end);
    }
};