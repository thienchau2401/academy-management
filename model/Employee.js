import People from "./People.js";
class Employee extends People { 
    constructor(){
        super();
        this.inputWage = document.getElementById('inputWage').value;
        this.inputDays = document.getElementById('inputDays').value;
    }
    getEvalute = () => this.inputDays * 1 * this.inputWage;
}
export default Employee;