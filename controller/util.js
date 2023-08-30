const openNav = () => {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
  };
  
const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
};

document.getElementById('inputType').onchange = () =>{
  let value = event.target.value;
  switch(value) {
    case 'Student':
      document.getElementById('studentForm').style.display = 'block';
      document.getElementById('employeeForm').style.display = 'none';
      document.getElementById('customerForm').style.display = 'none';
      break;
    case 'Employee':
      document.getElementById('studentForm').style.display = 'none';
      document.getElementById('employeeForm').style.display = 'block';
      document.getElementById('customerForm').style.display = 'none';
      break;
    case 'Customer':
      document.getElementById('studentForm').style.display = 'none';
      document.getElementById('employeeForm').style.display = 'none';
      document.getElementById('customerForm').style.display = 'block';
      break;
    default:
      document.getElementById('studentForm').style.display = 'none';
      document.getElementById('employeeForm').style.display = 'none';
      document.getElementById('customerForm').style.display = 'none';
      break
  }
}

let addStudent = () => {
  document.getElementById('inputType').value = "Student";
  document.getElementById("studentForm").style.display = "block";
  document.getElementById("employeeForm").style.display = "none";
  document.getElementById("customerForm").style.display = "none";
};
let addEmployee = () => {
  document.getElementById('inputType').value = "Employee";
  document.getElementById("studentForm").style.display = "none";
  document.getElementById("employeeForm").style.display = "block";
  document.getElementById("customerForm").style.display = "none";
};
let addCustomer = () => {
  document.getElementById('inputType').value = "Customer";
  document.getElementById("studentForm").style.display = "none";
  document.getElementById("employeeForm").style.display = "none";
  document.getElementById("customerForm").style.display = "block";
};