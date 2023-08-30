import People from "./People.js";
class Student extends People {
    constructor(){
        super();
        this.inputMath = document.getElementById('inputMath').value;
        this.inputPhysics = document.getElementById('inputPhysics').value;
        this.inputChemistry = document.getElementById('inputChemistry').value;
    }
    getEvalute = () => (this.inputMath*1 + this.inputPhysics*1 + this.inputChemistry*1)/3;
}
export default Student;