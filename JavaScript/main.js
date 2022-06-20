function download(text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', 'name_your_file');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function save() {
    var code = document.getElementById("save_area").value;
    download(code);
}

function load() {
    var input = document.createElement('input');
    input.type = 'file';
    input.onchange = e => { 
       var file = e.target.files[0]; 
       var reader = new FileReader();
       reader.readAsText(file,'UTF-8');
       reader.onload = readerEvent => {
          var content = readerEvent.target.result;
          document.querySelector('#save_area').value = content;
       }
    
    }
    
    input.click();
}