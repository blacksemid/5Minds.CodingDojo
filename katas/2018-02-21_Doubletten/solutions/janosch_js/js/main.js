document.getElementById("filepicker").addEventListener("change", function(event) {
  let doublicate = new Duplicate(event.target.files);
  const sel_mod = document.getElementById("sel_mod");
  const mod = sel_mod.options[sel_mod.selectedIndex].value;
  
  const sel_doublicate = document.getElementById("sel_doublicate");
  sel_doublicate.options.length = 0;
  sel_doublicate.innerHTML = "";
  
  console.log(doublicate.getCandidates(mod));
  const candidates = doublicate.getCandidates(mod);
  candidates.forEach((candidate, index) => {
    sel_doublicate.options[sel_doublicate.options.length] = new Option(candidate.name, index);
  });
  
  sel_doublicate.addEventListener("change", function () {
    console.log(candidates[sel_doublicate.options[sel_doublicate.selectedIndex].value]);
  }, false);
  
  document.getElementById("filepicker").value = '';
}, false);

