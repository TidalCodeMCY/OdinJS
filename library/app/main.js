var myLibrary = [];

class Book{
    constructor(title,author,pages,read){
        this.Title = title;
        this.Author = author;
        this.Pages = pages;
        this.Read = read;
    };
};


(function(){
    // This accesses the button to check for it its clicked to run the modal on.
    const bookBtn = document.getElementById('addbook');
    const modal = document.getElementById('modalone');
    const close = document.getElementById('closeBtn');
    const form = document.querySelector('form');

    bookBtn.onclick = function(){
        modal.showModal();
        form.reset(); 
    };
    
    /*This submits and saves the form data to a variable then creates 
    the book with the form information. */
    form.addEventListener("submit", (e) =>{
        e.preventDefault();

        let title = document.querySelector('#title').value;
        let author = document.querySelector('#author').value;
        let pages = document.querySelector('#pages').value;
        let read = document.querySelector('#read').value;
        const formRed = document.querySelector('#read');
    
        if(read == "True" || read == "False"){
            let newBook = new Book(title,author,pages,read);
            myLibrary.push(newBook);
            createCard(newBook);
            modal.close();
        }else{
            formRed.style.border = '2px solid red';
            document.getElementById('errormsg').innerHTML = "Please enter True or False!";
            return;
        }
    });
    
    close.onclick = function(){
        modal.close();
    };

})();


function createCard(ele){
            const container = document.getElementById('main');
            const newBook = document.createElement("div");
            newBook.classList.add(`Book`);
            newBook.id = "createdbook";
        
            for(let[key, value] of 
                Object.entries(
                    ele
                )
            ){
                const element = document.createElement("p");
                element.textContent = `${key}: ${value}`;
                newBook.appendChild(element);
            }
        
            const containerTwo = document.createElement("div");
            containerTwo.id = ('containertwo');
        
            const bookDelete = document.createElement("button");
            bookDelete.classList.add('Delete');
            bookDelete.textContent = "Delete";
            containerTwo.appendChild(bookDelete);
        
            newBook.appendChild(containerTwo);
            container.appendChild(newBook);
    
            $(".Delete").on('click', function(){
                var indPosition = $(".Delete").index(this);
                myLibrary.splice(indPosition,1);
                newBook.remove();               
                refreshCard();
                
            });

            function refreshCard(){
                myLibrary.forEach((ele)=> {
                    const con = document.getElementById('main');
                    const nBook = document.createElement("div");
                    nBook.classList.add(`Book`);
                    nBook.id = "createdbook";
        
                for(let[k, v] of 
                    Object.entries(
                        ele
                    )
                ){
                    const elem = document.createElement("p");
                    elem.textContent = `${k}: ${v}`;
                    nBook.appendChild(elem);
                }
        
                    const containTwo = document.createElement("div");
                    containTwo.id = ('containertwo');
        
                    const bDelete = document.createElement("button");
                    bDelete.classList.add('Delete');
                    bDelete.textContent = "Delete";
                    containTwo.appendChild(bDelete);
        
                    nBook.appendChild(containTwo);
                    con.appendChild(nBook);

                });
                
                
            };        
    };
   


