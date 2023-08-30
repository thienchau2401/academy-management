import Student from "../model/Student.js";
import People from "../model/People.js";
import Employee from "../model/Employee.js";
import Customer from "../model/Customer.js";
import ListPerson from "../model/ListPerson.js";

let list = new ListPerson();
list.loadLocalStorage();

window.removePeople = (id) => {
  list.removePeople(id);
};

window.getInfo = (id) => {
  list.getInfo(id);
};

document.getElementById("btnAdd").onclick = () => {
  let value = document.getElementById("inputType").value;
  switch (value) {
    case "Student":
      let student = new Student();
      //console.log(student);
      if (validPeople(student)) {
        list.insertPerson(student);
        list.renderList();
        document.getElementById("btnClose").click();
      }
      break;
    case "Employee":
      let employee = new Employee();
      //console.log(employee);
      if (validPeople(employee)) {
        list.insertPerson(employee);
        list.renderList();
        document.getElementById("btnClose").click();
      }
      break;
    case "Customer":
      let customer = new Customer();
      //console.log(customer);
      if (validPeople(customer)) {
        list.insertPerson(customer);
        list.renderList();
        document.getElementById("btnClose").click();
      }
      break;
    default:
      let people = new People();
      validPeople(people);
    //console.log(people);
  }
  //document.getElementById("btnClose").click();
};

document.getElementById("btnClose").onclick = () => {
  document.getElementById("studentForm").style.display = "none";
  document.getElementById("employeeForm").style.display = "none";
  document.getElementById("customerForm").style.display = "none";
  document.getElementById("inputId").disabled = false;
  document.getElementById("inputType").disabled = false;
  document.getElementById("btnAdd").style.display = "inline-block";
  document.getElementById("btnEdit").style.display = "none";
  let validArr = document.querySelectorAll('.valid-text');
  for (let field of validArr) {
    field.style.display = "none";
  }
};

document.getElementById("btnEdit").onclick = () => {
  let value = document.getElementById("inputType").value;
  switch (value) {
    case "Student":
      let student = new Student();
      //console.log(student);

      list.editPerson(student);
      break;
    case "Employee":
      let employee = new Employee();
      //console.log(employee);
      list.editPerson(employee);
      break;
    case "Customer":
      let customer = new Customer();
      //console.log(customer);
      list.editPerson(customer);
      break;
    default:
      let people = new People();
    //console.log(people);
  }
  document.getElementById("btnClose").click();
};
document.getElementById("filter").onchange = () => {
  let { value } = event.target;
  list.filterType(value);
};
document.getElementById("searchName").oninput = () => {
  list.search(event.target.value);
};
document.getElementById("ascending").onclick = () => {
  list.sortAscending();
  document.getElementById("ascending").style.display = "none";
  document.getElementById("descending").style.display = "inline";
};
document.getElementById("descending").onclick = () => {
  list.sortDescending();
  document.getElementById("ascending").style.display = "inline";
  document.getElementById("descending").style.display = "none";
};
