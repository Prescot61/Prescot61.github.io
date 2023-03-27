function loadFile(event) {
    let input = event.target;
    let reader = new FileReader();
    reader.onload = function(){
      let data = new Uint8Array(reader.result);
      let workbook = XLSX.read(data, {type: 'array'});
      let sheetNameList = workbook.SheetNames;
      console.log('sheetNameList:', sheetNameList); // Agrega esta línea para imprimir sheetNameList en la consola
      let listBox = document.getElementById("listbox");
      listBox.innerHTML = "";
      sheetNameList.forEach(function(name) {
        let option = document.createElement("option");
        option.value = name;
        option.text = name;
        listBox.add(option);
      });
    };
    reader.readAsArrayBuffer(input.files[0]);
  }
  

