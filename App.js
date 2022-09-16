

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
  Users,
  Container;

function Init() {
  App.innerHTML += `
  <div class="ContainerP Ees-flex Ees-AC Ees-SA">
  <div class="ContainerC Ees-flex Ees-f-Center">
    <div class="Menu M-flex M-Cl">

      <div class="Menu-Comp M-flex M-gp0 M-f-Center M-Cl">
        <h1 class="Menu-Ti FF-O Ees-Fs01">Notebook</h1>
        <div class="Menu-It M-flex M-Cl M-gp0 M-f-Center">
          <i class="bi bi-plus " id="Badd"></i>
          <i class="bi bi-trash3-fill" id="Bdel"></i>
        </div>
      </div>

      <div class="Menu-Comp M-flex M-gp0 M-f-Center M-Cl" >
        <h1 class="Menu-Ti FF-O Ees-Fs01">Note</h1>
        <div class="Menu-It M-flex M-Cl M-gp0 M-f-Center">
          <i class="bi bi-plus" id="NAdd"></i>
          <i class="bi bi-trash3-fill" id="Ndel"></i>
        </div>
      </div>

      <div class="Menu-Comp M-flex M-gp0 M-f-Center M-Cl">
        <h1 class="Menu-Ti FF-O Ees-Fs01">Search</h1>
        <div class="Menu-It M-flex M-Cl M-gp0M-f-Center">
          <i class="bi bi-search " id="Search"></i>
        </div>
      </div>

      <div class="Menu-Comp M-flex M-gp0 M-f-Center M-Cl">
        <h1 class="Menu-Ti FF-O Ees-Fs01">File</h1>
        <div class="Menu-It M-flex M-Cl M-gp0 M-f-Center">
          <i class="bi bi-download " id="DownF"></i>
          <i class="bi bi-upload " id="UpF"></i>
        </div>
      </div>
      <div class="Menu-Comp M-flex M-gp0 M-f-Center M-Cl">
        <h1 class="Menu-Ti FF-O Ees-Fs01">Config</h1>
        <div class="Menu-It M-flex M-Cl M-gp0 M-f-Center">
          <i class="bi bi-gear-fill " id="Config"></i>
          <i class="bi bi-moon-fill " id="Theme"></i>
          <i class="bi bi-person-fill " id="User"></i>
          <i class="bi bi-share-fill" id="Share"></i>
          <i class="bi bi-translate" id="Translate"></i>
        </div>
      </div>
    </div>
  </div>
</div>
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
  Container = document.querySelector("#BookContainer");
}

Init();

const StickyAPP =  new Book(Container);
