function validate() {
    var name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let adl1 = document.getElementById('addressl1').value
    let adl2 = document.getElementById('addressl2').value
    let city = document.getElementById('city').value
    let state = document.getElementById('state').value
    let zipvalue = document.getElementById('zipcode').value
    let phnum = document.getElementById('phonenumber').value
    let altpnum = document.getElementById('altnumber').value
    let password = document.getElementById('pssword').value
    let repassword = document.getElementById('rpssword').value


    let nameerror = document.getElementById('nameError')
    let emailerror = document.getElementById('emailError')
    let adl1error = document.getElementById('al1Error')
    let adl2error = document.getElementById('al2Error')
    let cityerror = document.getElementById('cityError')
    let staterror = document.getElementById('stateError')
    let ziperror = document.getElementById('zipError')
    let phonerror = document.getElementById('numberError')
    let alterror = document.getElementById('altError')
    let pwerror = document.getElementById('passworderror')
    let rpwerror = document.getElementById('repassworderror')

    // name validation
    if (nname(name)) {
        nameerror.innerHTML = "";
    }
    else {
        nameerror.innerHTML = "Please Enter Valid Name"
    }
    // email validation
    if (eemail(email)) {
        emailerror.innerHTML = "";
    }
    else {
        emailerror.innerHTML = "Please Enter Valid Email ID"
    }
    // address validation
    if (addl1error(adl1)) {
        adl1error.innerHTML = "";
    }
    else {
        adl1error.innerHTML = "Please enter your address";
    }
    if (addl2error(adl2)) {
        adl2error.innerHTML = "";
    }
    else {
        adl2error.innerHTML = "Please enter your address";
    }
    // city /state error
    if (cityy(city)) {
        cityerror.innerHTML = "";
    }
    else {
        cityerror.innerHTML = "Please enter your District";
    }
    if (statee(state)) {
        ststerror.innerHTML = "";
    }
    else {
        staterror.innerHTML = "Please enter your State";
    }
    // Zip error
    if (zipcodee(zipvalue)) {
        ziperror.innerHTML = "";
    }
    else {
        ziperror.innerHTML = "Please enter your pincode";
    }

    // phone number error
    if (phone(phnum)) {
        phonerror.innerHTML = "";
    }
    else {
        phonerror.innerHTML = "Please enter your phone number";
    }

    if (aphone(altpnum)) {
        alterror.innerHTML = "";
    }
    else {
        alterror.innerHTML = "Please enter your phone number";
    }


    if (pword(password)) {
        pwerror.innerHTML = "";
    }
    else {
        pwerror.innerHTML = "Password must contain a capital letter, a small letter, a number, a special charecter(min length=6, maxlength=16)"

    }

    if (repassword === password) {
        rpwerror.innerHTML = "";
    }
    else {
        rpwerror.innerHTML = "password and re password must be same"
    }

    // gender error

    let gender = document.getElementsByName('gender')
    let gerror = document.getElementById('genderError')
    // console.log(gender);
    let count = 0
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            count++
        }
    }
    if (count == 0) {
        gerror.innerHTML = "Please select gender"
    }
    else {
        gerror.innerHTML = ""
    }

    // country error
    let cerror = document.getElementById('countryError')
    let drop = document.querySelector('option')
    output = drop.value

    if(output == "-option-"){
        cerror.innerHTML = "plese select your country"
    }
    else{
        cerror.innerHTML = "";
    }
   

    // file upload

    let file = document.getElementById('formFile').value
    let filerror = document.getElementById('fileError')
    var allowed = /(\.jpg|\.jpeg)$/i;
    if (!allowed.exec(file)){
        filerror.innerHTML = "Select jpg or jpeg format files"
    }
    else{
        filerror.innerHTML = ""
    }

    // question 
    let firstcheck = document.querySelectorAll('input[type="checkbox"]')
    let fcerror = document.getElementById('check1Error')
    outques = firstcheck.value
    if(outques>0){
        fcerror.innerHTML = "";
    }
    else{
        fcerror.innerHTML = "Please select one value"
    }

    // question 2
    let secondcheck = document.querySelectorAll('input[type="checkbox"]')
    let scerror = document.getElementById('check2Error')
    outques = firstcheck.value
    if(outques>0){
        scerrorcerror.innerHTML = "";
    }
    else{
        scerror.innerHTML = "Please select one value"
    }

    // toggle switch
    let toggle = document.getElementById('flexSwitchCheckDefault');
    if (toggle.checked == false) {
        document.getElementById('switchError').innerHTML = "Accept Membership"
    }
    else {
        document.getElementById('switchError').innerHTML = ""
    }

    // agree check box

    let check = document.getElementById('flexCheck');
    if (check.checked == false) {
        document.getElementById('agreeError').innerHTML = "Please agree the terms and conditions"
    }
    else {
        document.getElementById('agreeError').innerHTML = ""
    }
}

function nname(rname) {
    const npattern = /^[A-Za-z]{3,15}$/;
    if (!npattern.test(rname)) {
        return false;
    }
    else {
        return true;
    }
}

function eemail(remail) {
    const epattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!epattern.test(remail)) {
        return false;
    }
    else {
        return true;
    }
}

function addl1error(addl1) {
    const adpattern = /^[a-zA-Z0-9]+$/;
    if (!adpattern.test(addl1)) {
        return false;
    }
    else {
        return true;
    }
}

function addl2error(addl2) {
    const adpattern = /^[a-zA-Z0-9]+$/;
    if (!adpattern.test(addl2)) {
        return false;
    }
    else {
        return true;
    }
}

function cityy(city) {
    const adpattern = /^[a-zA-Z0-9]+$/;
    if (!adpattern.test(city)) {
        return false;
    }
    else {
        return true;
    }
}

function statee(state) {
    const adpattern = /^[a-zA-Z0-9]+$/;
    if (!adpattern.test(state)) {
        return false;
    }
    else {
        return true;
    }
}

function zipcodee(zipp) {
    const zipatern = /^[0-9]+$/;
    if (!zipatern.test(zipp)) {
        return false;
    }
    else {
        return true;
    }
}

function phone(pnum) {
    const zipatern = /^[0-9]+$/;
    if (!zipatern.test(pnum)) {
        return false;
    }
    else {
        return true;
    }
}

function aphone(apnum) {
    const zipatern = /^[0-9]+$/;
    if (!zipatern.test(apnum)) {
        return false;
    }
    else {
        return true;
    }
}

function pword(pw) {
    const patern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var maxlength = 15;
    var minlength = 8;
    if (pw.length < minlength || pw.length > maxlength) {
        return false;
    }
    if (!patern.test(pw)) {
        return false;
    }
    else {
        return true;
    }
}

