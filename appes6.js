class Book{

  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book){
    const list = document.getElementById('book-list')
    // Create tr element 
    const row = document.createElement('tr')
    // Insert Col 
    row.innerHTML = `
    <td> ${book.title} </td>
    <td> ${book.author} </td>
    <td> ${book.isbn} </td>
    <td> <a href= "#" class="delete"> X </a></td>
    `

    list.appendChild(row)
  }

  showAlert(message, className){
    // Create Div 
    const div = document.createElement('div')
    // Add classNane
    div.className = `alert ${className}`
    // Add text 
    div.appendChild(document.createTextNode(message))
    // Get parent
    const container = document.querySelector('.container')
    const form = document.querySelector('#book-form')
    // Insert alert
    container.insertBefore(div, form)

    // timeout after 3 sec 
    setTimeout(function(){
      document.querySelector('.alert').remove();
    },3000)

  }

  deleteBook(target){
    if(target.className === 'delete'){
      target.parentElement.parentElement.remove()
    }
  }

  clearFileds(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = ''
    // e.preventDefault()
  }
}

// Event Listner for add Book
document.getElementById('book-form').addEventListener('submit', function (e){
  e.preventDefault()  
  // Get from values 
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

  // Instantiate Book 
  const book = new Book(title, author, isbn)

  // Instantiate UI
  const ui = new UI()

// Validate 
if(title === '' || author === '' || isbn === ""){
  

  // Error Alert
  ui.showAlert('Please fill in filds', 'error')    
}else{
  //Add book to list 
  ui.addBookToList(book)

  ui.showAlert('Book Added!', 'sucess')
  
  //Clear fields
  ui.clearFields()
  // e.preventDefault()
}
  
})

// Event listener for delete
document.getElementById('book-list').addEventListener('click', function(e){

  e.preventDefault()
  // Instantiate UI
  const ui = new UI()

  // delete book
  ui.deleteBook(e.target)

  // show message
  ui.showAlert('Book Removed!', 'sucess')

  // e.preventDefault()

})