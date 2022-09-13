class Book{

    constructor(Container){
        this.Book =  Container;
    }
    addBook(){
        `
        <div class="ContainerC" id="BookContainer">
        <div class="Notebook-Container  M-vw8">
        <div class="Notebook-Name Ees-flex Ees-AC Ees-gp1 M-flex M-SA">
          <i class="bi bi-lock-fill "></i>
          <h1 class="NoteBookName FF-O Ees-Fs1">Lab Topics</h1>
          <i class="bi bi-arrows-angle-expand"></i>
        </div>
        <div class="Note-Container Ees-flex">
            
          
  
            
        </div>
      </div>
      </div>
      `;        
    }
    deleteBook(){
    }
    isEmpty(){

    }
    LockBook(Status){

    }
    LockNotes(status){

    }
    SetName(){

    }
    clean(){

    }
    sort(type){

    }
    Collapse(){

    }
    Expand(){

    }
}


export default Book;