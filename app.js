function Book(title,author,isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
}
function UI(){}
UI.prototype.addBookToList=function(Book){
    const tableBody=document.querySelector(".book-list-table");
    const tableRow=document.createElement("tr");
    tableBody.appendChild(tableRow);
    var tableData=[];
    for(var i in Book){
        tableData[i]=document.createElement("td");
        tableData[i].innerHTML=Book[i];
        tableRow.appendChild(tableData[i]);
    }
    const deleteBook=document.createElement("a");
    deleteBook.className="delete";
    deleteBook.setAttribute("href","#");
    deleteBook.innerHTML="X";
    tableRow.appendChild(deleteBook);
}
UI.prototype.clearFields=function(){
    document.querySelector("#book-title").value="";
    document.querySelector("#book-author").value="";
    document.querySelector("#book-ISBN").value="";
}
UI.prototype.showAlertEmpty=function(){
        const parent=document.querySelector(".main");
        const alert=document.createElement("div");
        alert.className="alert alert-danger";
        alert.textContent="Enter Valid Details";
        parent.insertBefore(alert,parent.childNodes[2]);
        setTimeout(function(){
            alert.style.display="none";
        },3000);
}
UI.prototype.showAlertSuccess=function(){
        const parent=document.querySelector(".main");
        const alert=document.createElement("div");
        alert.className="alert alert-primary";
        alert.textContent="Book Added Sucessfully";
        parent.insertBefore(alert,parent.childNodes[2]);
        setTimeout(function(){
            alert.style.display="none";
        },3000);
}
UI.prototype.deleteBook=function(target){
    if(target.className==="delete"){
       target.parentElement.remove();
       const parent=document.querySelector(".main");
        const alert=document.createElement("div");
        alert.className="alert alert-dark";
        alert.textContent="Book Removed Sucessfully";
        parent.insertBefore(alert,parent.childNodes[2]);
        setTimeout(function(){
            alert.style.display="none";
        },3000);
    }
}
document.querySelector(".book-submit").addEventListener("click",function(e){
    const title=document.querySelector("#book-title").value;
    const author=document.querySelector("#book-author").value;
    const isbn=document.querySelector("#book-ISBN").value;
    const book = new Book(title,author,isbn);
    const ui=new UI();
    if(title===""||author===""||isbn===""){
        ui.showAlertEmpty();
    }
    else{
        ui.addBookToList(book);
        ui.showAlertSuccess();
    }
    
    ui.clearFields();
    e.preventDefault();
});

//we have to use event delegation

document.querySelector(".book-list-table").addEventListener("click",function(e){
    ui = new UI();
    ui.deleteBook(e.target);
    e.preventDefault();
})