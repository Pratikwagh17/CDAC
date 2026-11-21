
function chackAll() {
    // window.alert("helllo");
    let uname = document.myform.fname.value;
    let regname = "^[a-zA-Z ]{3,20}$";
    let uedu = document.myform.edu;
    let ucourse = document.myform.course.value;
    if (uname == "") {
        window.alert("fullname is required");
        document.myform.fname.focus();
        return false
    }
    if (!uname.match(regname)) {
        window.alert("fullname must contain min-3 and max-20 character not digit");
        document.myform.fname.focus();
        return false
    }
    if (uedu[0].checked == false && uedu[1].checked == false && uedu[2].checked == false && uedu[3].checked == false) {
        window.alert("Select Your Qualification");
        document.myform.fname.focus();
        return false
    }
    if (ucourse == "") {
        window.alert("course is required");
        document.myform.course.focus();
        return false
    }
}