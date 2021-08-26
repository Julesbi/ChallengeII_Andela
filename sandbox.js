function validateForm(){
    let x= document.forms["myForm"]["fname"].value;
    if(x==""){
        alert("Please provide a valid email address");
        return false;

    }
}
const 