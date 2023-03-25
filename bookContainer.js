let Library = [];

class Book
{
    constructor(title, author, status)
    {
        this.title = title;
        this.author = author;
        this.status = status;
    }
}
let i=0;

let mainBooksContainer = document.querySelector("#books-container-main-content")

const addButton = document.querySelector("#add-book-button")

addButton.addEventListener("click",()=>{

  

    let titleInput = document.querySelector("#title").value
    let authorInput = document.querySelector("#author").value
    let statusInput = document.querySelector("#choosen").innerHTML
 
  if(statusInput==" Status ")
  {
    statusInput="Read"
  }

    Library.push(new Book(titleInput, authorInput, statusInput))
    
    let article = document.createElement('article');

    let title = document.createElement('p');
    let author = document.createElement('p');
    let statusContainer = document.createElement('section');
    let status = document.createElement('button');
    let del = document.createElement('button');


    article.classList.add('single-book')
    title.classList.add('title')
    author.classList.add('author')
    statusContainer.classList.add('statusContainer')
    status.classList.add('status')
    status.setAttribute("id", i)
    del.classList.add('delete')


    title.textContent = titleInput
    author.textContent = authorInput
    status.textContent = statusInput
    del.textContent = "Delete"

    mainBooksContainer.appendChild(article)
    
    article.appendChild(title)
    article.appendChild(author)
    article.appendChild(statusContainer)
    statusContainer.appendChild(status)

    article.appendChild(del)

    i++
}
)
  

mainBooksContainer.addEventListener("click",(event)=>{

    let bookID= event.target.id

    if(event.target.innerHTML=="Read")
    {
        event.target.innerHTML="Not read"
       Library[bookID].status = "Not read"
    }
    else if(event.target.innerHTML=="Not read")
    {
        event.target.innerHTML="Read"
        Library[bookID].status = "Read"
    }
})

document.addEventListener('click', (remove) => {
    const target = remove.target.closest('.delete');
    if (target) {
      const index = Array.prototype.indexOf.call(
        target.parentElement.parentElement.children,
        target.parentElement
      );
      Library.splice(index, 1);
      target.parentElement.remove();
    }
  });