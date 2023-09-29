
export function contactLoad(){
    const reset = document.getElementById('mainReset');
    if(reset.hasChildNodes()){
        reset.removeChild(reset.firstChild);
        createContact();
    }else{
        createContact();
    };

    function createContact(){
        const mainHome = document.getElementById('mainReset');
        const mainDiv = document.createElement('div');
        mainDiv.id = "contentthree";
        mainHome.appendChild(mainDiv);
        const intro = document.createElement('p');
        intro.textContent = 'Find our location below!';
        intro.id = 'Contactintro';
        mainDiv.appendChild(intro);
        const mapContainer = document.createElement('div');
        mapContainer.id = 'Map';
        mainDiv.appendChild(mapContainer);
        const map = document.createElement('div');
        map.textContent = 'MAP PLACEHOLDER';
        map.id = 'MAP';
        mapContainer.appendChild(map);
        const contactList = document.createElement('ul');
        contactList.id = 'Contactlist';
        mainDiv.appendChild(contactList);
        const litem1 = document.createElement('li');
        litem1.id = 'Listitemone';
        litem1.textContent = 'Address : 1234 bubla ln';
        contactList.appendChild(litem1);
        const litem2 = document.createElement('li');
        litem2.id = 'Listitemtwo';
        litem2.textContent = 'Phone Number : 456-667-8909';
        contactList.appendChild(litem2);
    };
};