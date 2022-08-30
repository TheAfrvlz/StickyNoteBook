const App = document.querySelector('#App');

function Init(){
    App.innerHTML += `
    <h1 class=" FF-O Text-Centered Es-Fs3"> Your Notebook</h1>
    
    <div class="ContainerP Ees-flex M-Cl Ees-Rw">
    <div class="ContainerC ">
      <div class="Menu M-flex M-gp2 M-f-Center">
        <div class="Menu-Comp M-flex M-gp0 M-f-Center M-Cl" id="addN">
          <h1 class="Menu-Ti FF-O Es-Fs1 ">Notebook</h1>
          <div class="Menu-It M-flex M-gp1 M-f-Center">
            <i class="bi bi-plus Ees-Fs1"></i>
            <i class="bi bi-trash3-fill Ees-Fs1"></i>
          </div>
        </div>
  
        <div class="Menu-Comp M-flex M-gp0 M-f-Center M-Cl" id="addN">
          <h1 class="Menu-Ti FF-O Es-Fs1 ">Note</h1>
          <div class="Menu-It M-flex M-gp1 M-f-Center">
            <i class="bi bi-plus Ees-Fs1"></i>
            <i class="bi bi-trash3-fill Ees-Fs1"></i>
          </div>
        </div>
  
        <div class="Menu-Comp M-flex M-gp0 M-f-Center M-Cl">
          <h1 class="Menu-Ti FF-O Es-Fs1">Search</h1>
          <div class="Menu-It M-flex M-gp1 M-f-Center">
            <i class="bi bi-search Ees-Fs1"></i>
          </div>
        </div>
  
        <div class="Menu-Comp M-flex M-gp0 M-f-Center M-Cl">
          <h1 class="Menu-Ti FF-O Es-Fs1">File</h1>
          <div class="Menu-It M-flex M-gp1 M-f-Center">
            <i class="bi bi-download Ees-Fs1"></i>
            <i class="bi bi-upload Ees-Fs1"></i>
          </div>
        </div>
        <div class="Menu-Comp M-flex M-gp0 M-f-Center M-Cl">
          <h1 class="Menu-Ti FF-O Es-Fs1">Config</h1>
          <div class="Menu-It M-flex M-gp1 M-f-Center">
            <i class="bi bi-gear-fill Ees-Fs1"></i>
            <i class="bi bi-moon-fill Ees-Fs1"></i>
            <i class="bi bi-person-fill Ees-Fs1"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="ContainerC">
      
    </div>
  </div>
`;
}

Init();