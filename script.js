function insert_Row() {
  let table = document.getElementById("sampleTable");
  let newRow = table.insertRow(0);
  let cell1 = newRow.insertCell(0).innerHTML = "New Cell1";
  let cell2 = newRow.insertCell(1).innerHTML = "New Cell2";
}
