const App = document.querySelector("#App");
let BookAdd,
  BookDel,
  NoteAdd,
  NoteDel,
  Search,
  download,
  upload,
  Config,
  Theme,
  Users;

function Init() {
  App.innerHTML += `

`;
  BookAdd = document.querySelector("#Badd");
  BookDel = document.querySelector("#Bdel");
  NoteAdd = document.querySelector("#Nadd");
  NoteDel = document.querySelector("#Ndel");
  Search = document.querySelector("#Search");
  download = document.querySelector("#DownF");
  upload = document.querySelector("#UpF");
  Config = document.querySelector("#Config");
  Theme = document.querySelector("#Theme");
  Users = document.querySelector("#User");
}

Init();
