function chackAll() {

    // window alert("helllo");

    let uname = document.myform.fname.value;
    let regname = "^[a-zA-Z ]{3,20}$"    
    let email = document.myform.fmail.value;
    let ucontact = document.myform.fcontact.value;
    let regcontact = "^[0-9]{10}$"
    let upass = document.myform.fpass.value;
    let regpass = "@"
    let uedu = document.myform.fedu.value;

    if(uname == ""){
        window.alert("fullname is required");
        document.myform.fname.focus();
        return false
    }

    if (!uname.match(regname)) {
        window.alert("fullname must contain min-3 and max-20 character not digit");
        document.myform.fname.focus();
        return false
    }
     if(email == ""){
        window.alert("email is required");
        document.myform.fmail.focus();
        return false
    }
    if(ucontact == ""){
        window.alert("Enter no");
        document.myform.fcontact.focus();
        return false
    }
    if (!ucontact.match(regcontact)) {
        window.alert("Enter 10 digit no");
        document.myform.fcontact.focus();
        return false
    }
    if(upass == ""){
        window.alert("enter password");
        document.myform.fpass.focus();
        return false
    }
    if (!upass.match(regpass)) {
        window.alert("Enter valid password");
        document.myform.fpass.focus();
        return false
    }
    if(uedu == ""){
        window.alert("education required to eligibility");
        document.myform.fedu.focus();
        return false
    }
    return true;
}