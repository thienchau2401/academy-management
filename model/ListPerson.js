import Student from "../model/Student.js";
import People from "../model/People.js";
import Employee from "../model/Employee.js";
import Customer from "../model/Customer.js";
import { helper } from "../controller/helper.js";
class ListPerson {
    arrPerson = [];
    arrFilter = [];
    arrSearch = [];
    getLength = () => this.arrPerson.length;
    insertPerson = (person) =>{
        this.arrPerson.push(person);
        this.saveLocalStorage();
        this.renderList();
    } 
    // Render method
    renderList = (arr = this.arrPerson) =>{
        let content = '';
        for (let person of arr) {
            let newPerson = eval("new "+ person.inputType);
            newPerson = Object.assign(newPerson,person);
            //console.log(newPerson);
            content+=`
        <tr>
            <td>${newPerson.inputId}</td>
            <td>${newPerson.inputName}</td>
            <td>${newPerson.inputEmail}</td>
            <td>${newPerson.inputAddress}</td>
            <td>${newPerson.inputType}</td>
            <td>${newPerson.getEvalute()}</td>
            <td>
                <button class="btn btn-danger" onclick=removePeople('${newPerson.inputId}')>Remove</button>
                <button class="btn btn-warning" data-bs-toggle="modal"
                data-bs-target="#exampleModal" onclick=getInfo('${newPerson.inputId}')>Edit</button>
            </td>
        </tr>
            `;
        }
        document.getElementById('tableList').innerHTML = content;
    }
    saveLocalStorage() {
        localStorage.setItem('list', JSON.stringify(this.arrPerson));
    }
    loadLocalStorage() {
        var arr = localStorage.getItem('list');
        if (arr != null) {
            var newArr = JSON.parse(arr);
            this.arrPerson = newArr;
            this.renderList();
        }
    }
    removePeople = (id) => {
        let index = this.arrPerson.findIndex((item) => item.inputId === id);
        if (index != -1) {
            this.arrPerson.splice(index,1);
            this.saveLocalStorage();
            this.renderList();
        };
    }
    getInfo = (id) => {
        let person = this.arrPerson.find((item) => item.inputId === id);
        if(person) {
            for(let key in person) {
                //console.log(key);
                document.getElementById(key).value = person[key];
            }
            switch(person.inputType) {
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
            document.getElementById('inputId').disabled = true;
            document.getElementById('inputType').disabled = true;
            document.getElementById('btnAdd').style.display = 'none';
            document.getElementById('btnEdit').style.display = 'inline-block';
        }
    }
    editPerson = (newPerson) => {
        let index = this.arrPerson.findIndex((item) => newPerson.inputId === item.inputId);
        if(index != -1) {
            this.arrPerson[index] = newPerson;
            this.saveLocalStorage();
            this.renderList();
        };

    }
    filterType = (type) => {
        this.arrFilter = this.arrPerson;
        if (type != 'All') {
            this.arrFilter = this.arrFilter.filter((item) => item.inputType == type);
            //console.log(this.arrFilter);
        } else {
            this.arrFilter = this.arrPerson;
        }
        if(document.getElementById('searchName').value == ''){
            this.renderList(this.arrFilter);
        } else {
            this.renderList(helper.commonValue(this.arrFilter,this.arrSearch));
        }
    }
    search = (input) => {
        this.arrSearch = this.arrPerson;
        //console.log(arr);
        let newInput = helper.removeVietnameseTones(input.toLowerCase().trim());
        let result = [];
        for (let person of this.arrSearch) {
            let newName = helper.removeVietnameseTones(person.inputName.toLowerCase().trim());
            if(newName.includes(newInput)) {
                result.push(person);
            }
        }
        this.arrSearch = result;
        if(document.getElementById('filter').value == 'All'){
            this.renderList(this.arrSearch);
        } else {
            this.renderList(helper.commonValue(this.arrFilter,this.arrSearch));
        }
    }
    sortAscending = () => {
        this.arrPerson.sort((person1,person2) => {
            let a = person1.inputName.toLowerCase();
            let b = person2.inputName.toLowerCase();
            return a === b ? 0 : a < b ? 1 : -1;
        })
        this.renderList();
    }
    sortDescending = () => {
        this.arrPerson.sort((person1,person2) => {
            let a = person1.inputName.toLowerCase();
            let b = person2.inputName.toLowerCase();
            return a === b ? 0 : a > b ? 1 : -1;
        })
        this.renderList();
    }
}
export default ListPerson;