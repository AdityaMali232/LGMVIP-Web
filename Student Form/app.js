let selectRow = null;

function onFormSubmit() 
{
  let formData = readFormData();
  if (selectRow == null) 
  insertNewRecord(formData);
  else updateRecord(formData);
  resetForm();
}

function readFormData() 
{
  var formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["phone"] = document.getElementById("phone").value;
  formData["email"] = document.getElementById("email").value;
  formData["website"] = document.getElementById("website").value;
  formData["gender"] = document.getElementById("gender").value;
  formData["skills"] = document.getElementById("skills").value;


  return formData;
}


function insertNewRecord(data) 
{
    let table = document.getElementById("table2").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.phone;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.website;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.gender;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.skills;

    
}


function resetForm() 
{
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("website").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("skills").value = "";
  selectRow = null;
}



function updateRecord(formData) 
{
  selectRow.cells[0].innerHTML = formData.name;
  selectRow.cells[1].innerHTML = formData.phone;
  selectRow.cells[2].innerHTML = formData.email;
  selectRow.cells[3].innerHTML = formData.website;
  selectRow.cells[4].innerHTML = formData.gender;
  selectRow.cells[5].innerHTML = formData.skills;
}

function myFunction() 
{

  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table2");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) 
  {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) 
    {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) 
        tr[i].style.display = "";
      else 
        tr[i].style.display = "none";
    }       
  }
}