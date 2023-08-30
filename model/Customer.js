import People from "./People.js";
class Customer extends People {
    constructor(){
        super();
        this.inputCompany = document.getElementById('inputCompany').value;
        this.inputInvoice = document.getElementById('inputInvoice').value;
        this.inputEvalute = document.getElementById('inputEvalute').value;
    }
    getEvalute = () => this.inputEvalute;
}
export default Customer;