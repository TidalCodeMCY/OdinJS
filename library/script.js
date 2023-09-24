let tit;
let auth;
let pag;
let red;
let bookNum = -1;
let tf;

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

    let formT = document.querySelector('#title').value;
    let formA = document.querySelector('#author').value;
    let formP = document.querySelector('#pages').value;
    let formR = document.querySelector('#read').value;
    const formRed = document.querySelector('#read');

    if(formR == "True" || formR == "False"){
        createBook(formT,formA,formP,formR);
        console.log(myLibrary);
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

//This function runs when you click the submit button to save the form data inputed.
function saveState(t,a,p,r){
    tit = t;
    auth = a;
    pag = p;
    red = r;
};
/* This is the library of objects of books and the process to create and 
add them to the library.*/
const myLibrary = [];
//This is the constructor to make a book and put it into the object.
function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return(title +" by " + author + ", " + pages + " pages, " + read);
    };
}

function createBook(tit,auth,pag,red){
    let book = new Book(tit,auth,pag,red);
    bookNum++;
    printBook(tit,auth,pag,red);
    addBook(book);
}

function addBook(book) {
  // do stuff here
    myLibrary.push(book);
}

function printBook(ti,au,pa,re){
    if(re == "True"){
        tf = 1;
    }else{
        tf = 2;
    };
    // Variables created to create the card for the book objects created.
    const newBook = document.createElement("div");
    newBook.classList.add(`${bookNum}`);
    newBook.id = "createdbook";

    const bookTitle = document.createElement("p");
    bookTitle.textContent = `Title: ${ti}`;
    newBook.appendChild(bookTitle);

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = `Author: ${au}`;
    newBook.appendChild(bookAuthor);

    const bookPages = document.createElement("p");
    bookPages.textContent = `Pages: ${pa}`;
    newBook.appendChild(bookPages);

    const bookRead = document.createElement("p");
    bookRead.textContent = `Read: ${re}`;
    bookRead.id = `read${bookNum}`;
    newBook.appendChild(bookRead);

    const containerTwo = document.createElement("div");
    containerTwo.id = ('containertwo');

    const bookDelete = document.createElement("button");
    bookDelete.id = `${bookNum}`;
    bookDelete.textContent = "Delete";
    containerTwo.appendChild(bookDelete);

    const bookSlide = document.createElement("input");
    bookSlide.type = "range";
    bookSlide.min = "1";
    bookSlide.max = "2";
    bookSlide.defaultValue = `${tf}`;
    bookSlide.classList.add("sliderbarz");
    bookSlide.id = `num${bookNum}`;
    containerTwo.appendChild(bookSlide);

    newBook.appendChild(containerTwo);
    //This appends the code to the page so you can see the book object
    const container = document.getElementById('main');
    container.appendChild(newBook);

    //This is the code to delete individual book objects that were created.
    const deleteBtns = document.getElementById(`${bookNum}`);
    deleteBtns.addEventListener('click', () =>{
        newBook.remove();
        myLibrary.splice(bookNum,1);
    });
    
    //This lets the bookslide change the read status
    const sliderBooks = document.getElementById(`num${bookNum}`);
    
    sliderBooks.addEventListener('click',() => {
        let news = `${bookSlide.value}`
        const docChange = document.getElementById(`read${bookNum}`);
        if(news == 2){
            docChange.textContent = "Read: False";
            myLibrary[`${bookNum}`].read = "False";
            //console.log(myLibrary);
        }else if(news == 1){
            docChange.textContent = "Read: True";
            myLibrary[`${bookNum}`].read = "True";
            //console.log(myLibrary);
        };
    });
};
 


