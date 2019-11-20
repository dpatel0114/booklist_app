// Book constructor 
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


// UI constructor 
function UI(){

}

// Add book to List 
UI.prototype.addBookToList = function(book){
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

UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = ''

}


// Event Listner 
document.getElementById('book-form').addEventListener('submit', function (e){

    // Get from values 
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value

    // Instantiate Book 
    const book = new Book(title, author, isbn)

    // Instantiate UI
    const ui = new UI()
    
    //Add book to list 
    ui.addBookToList(book)

    //Clear fields
    ui.clearFields()

    console.log(ui)

    e.preventDefault()    
})