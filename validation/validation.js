const regexEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexId = /^\d{4,6}$/;
const regexName = /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\ ]+$/;
const regexNumber = /^\d+$/

let validArr = [
    {inputId:'validId'},
    {inputName:'validName'},
    {inputEmail:'validEmail'},
    {inputAddress:'validAddress'},
    {inputType:'validType'},
]
let validArrStudent = [
    {inputMath:'validMath'},
    {inputPhysics:'validPhysics'},
    {inputChemistry:'validChemistry'},
]
let validArrEmployee = [
    {inputWage:'validWage'},
    {inputDays:'validDays'},
]
let validArrCustomer = [
    {inputCompany:'validCompany'},
    {inputInvoice:'validInvoice'},
    {inputEvalute:'validEvalute'}, 
]
// 
let getValidArray = (people) => {
    switch (people.inputType) {
        case "Student":
          return [...validArr,...validArrStudent];
        case "Employee":
          return [...validArr,...validArrEmployee];
        case "Customer":
          return [...validArr,...validArrCustomer];
        default:
          return [...validArr];
      }
}

let checkValidEmpty = (people) => {
    let newArrValid = getValidArray(people);
    let valid = true;
    for(data of newArrValid) {
        let inputForm = Object.keys(data)[0];
        let notiId = data[inputForm];
        let validData = people[inputForm];
        if (validData == "") {
          valid = valid && false;
          document.getElementById(notiId).style.display = "block";
          document.getElementById(notiId).innerHTML = "Please input data!";
        } else {
          valid = valid && true;
          document.getElementById(notiId).style.display = "none";
          document.getElementById(notiId).innerHTML = "";
        }
        
    }
    return valid;
}

let checkValidEmail = (people) => {
    let valid = false;
    if (people['inputEmail'] != ''){
        if (!regexEmail.test(people['inputEmail'])){
            document.getElementById('validEmail').innerHTML = 'Please enter a valid email address';
            document.getElementById('validEmail').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('validEmail').innerHTML = '';
            document.getElementById('validEmail').style.display = 'none';
            valid = true;
        }
    }
    return valid;
}
let checkValidName = (people) => {
    let valid = false;
    if (people['inputName'] != ''){
        if (!people['inputName'].match(regexName)){
            document.getElementById('validName').innerHTML = 'Please enter a valid name! Valid name only contain characters';
            document.getElementById('validName').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('validName').innerHTML = '';
            document.getElementById('validName').style.display = 'none';
            valid = true;
        }
    }
    return valid;
}
let checkValidId = (people) => {
    let valid = false;
    if (people['inputId'] != ''){
        if (!people['inputId'].match(regexId)){
            document.getElementById('validId').innerHTML = 'Please enter a valid Id! Valid id only contain 4-6 numbers';
            document.getElementById('validId').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('validId').innerHTML = '';
            document.getElementById('validId').style.display = 'none';
            valid = true;
        }
    }
    return valid;
}
let checkValidSameId =(people, arr) =>{
    let valid = false;
    if (checkValidId(people)) {
      if (arr.some((item) => people.inputId === item.inputId)) {
        document.getElementById("validId").innerHTML =
          "Id existed! Input another Id";
        document.getElementById("validId").style.display = "block";
        valid = false;
      } else {
        document.getElementById("validId").innerHTML = "";
        document.getElementById("validId").style.display = "none";
        valid = true;
      }
    }
    return valid;
}

function checkValidMath(people) {
    var valid = false;
    if(people['inputMath'] != ''){
        if (!people['inputMath'].match(regexNumber) || people['inputMath']*1 < 0 || people['inputMath']*1 > 10){
            document.getElementById('validMath').innerHTML = 'Invalid math point! Point must be greater than 0 less than 10';
            document.getElementById('validMath').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('validMath').innerHTML = '';
            document.getElementById('validMath').style.display = 'none';
            valid = true;
        }
    }
    return valid;
}
function checkValidPhysics(people) {
    var valid = false;
    if(people['inputPhysics'] != ''){
        if (!people['inputPhysics'].match(regexNumber) || people['inputPhysics']*1 < 0 || people['inputPhysics']*1 > 10){
            document.getElementById('validPhysics').innerHTML = 'Invalid physics point! Point must be greater than 0 less than 10';
            document.getElementById('validPhysics').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('validPhysics').innerHTML = '';
            document.getElementById('validPhysics').style.display = 'none';
            valid = true;
        }
    }
    return valid;
}
function checkValidChemistry(people) {
    var valid = false;
    if(people['inputChemistry'] != ''){
        if (!people['inputChemistry'].match(regexNumber) || people['inputChemistry']*1 < 0 || people['inputChemistry']*1 > 10){
            document.getElementById('validChemistry').innerHTML = 'Invalid chemistry point ! Point must be greater than 1 less than 10';
            document.getElementById('validChemistry').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('validChemistry').innerHTML = '';
            document.getElementById('validChemistry').style.display = 'none';
            valid = true;
        }
    }
    return valid;
}
function checkValidWage(people) {
    var valid = false;
    if(people['inputWage'] != ''){
        if (!people['inputWage'].match(regexNumber) || people['inputWage']*1 < 1000 || people['inputWage']*1 > 100000){
            document.getElementById('validWage').innerHTML = 'Invalid wage! Wage must be greater than 1000 less than 100000';
            document.getElementById('validWage').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('validWage').innerHTML = '';
            document.getElementById('validWage').style.display = 'none';
            valid = true;
        }
    }
    return valid;
}
function checkValidDays(people) {
    var valid = false;
    if(people['inputDays'] != ''){
        if (!people['inputDays'].match(regexNumber) || people['inputDays']*1 < 10 || people['inputDays']*1 > 365){
            document.getElementById('validDays').innerHTML = 'Invalid working days! Working days must be greater than 10 less than 365';
            document.getElementById('validDays').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('validDays').innerHTML = '';
            document.getElementById('validDays').style.display = 'none';
            valid = true;
        }
    }
    return valid;
}

function checkValidInvoice(people) {
    var valid = false;
    if(people['inputInvoice'] != ''){
        if (!people['inputInvoice'].match(regexNumber) || people['inputInvoice']*1 < 10000 || people['inputInvoice']*1 > 1000000){
            document.getElementById('validInvoice').innerHTML = 'Invalid invoice! Invoice must be greater than 10000 less than 1000000';
            document.getElementById('validInvoice').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('validInvoice').innerHTML = '';
            document.getElementById('validInvoice').style.display = 'none';
            valid = true;
        }
    }
    return valid;
}

let validPeople = (people,arr = undefined) =>{
    let valid;
    let validJob;
    // Basic valid
    let validEmpty = checkValidEmpty(people);
    let validEmail = checkValidEmail(people);
    let validName = checkValidName(people);
    
    let validId = checkValidId(people);
    let validSameId =(arr)?checkValidSameId(people,arr):true;
    

    switch (people.inputType) {
        case "Student":
            let validMath = checkValidMath(people);
            let validPhysics = checkValidPhysics(people);
            let validChemistry = checkValidChemistry(people);
            validJob = validMath && validPhysics && validChemistry;
            break;
        case "Employee":
            let validWage = checkValidWage(people);
            let validDays = checkValidDays(people);
            validJob = validWage && validDays;
            break;
        case "Customer":
            let validInvoice = checkValidInvoice(people);
            validJob = validInvoice;
            break;
        default:
            validJob = true;
      }

    
    valid = validEmpty && validSameId && validEmail && validName && validId && validJob;
    return valid;
}
