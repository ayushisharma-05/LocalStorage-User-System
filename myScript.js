var arr=[];
function getData(){
    var username = document.getElementById("username");
    if(username.value.trim()==""){
        alert("UserName Required");
        return false;
    }

    var email = document.getElementById("email");
    if(email.value.trim()==""){
        alert("Email Required");
        return false;
    }

    var password = document.getElementById("password");
    if(password.value.trim()==""){
        alert("password Required");
        return false;
    }

    var services = document.getElementById("services")
    if(services.selectedIndex==0){
        alert("Faculty Required");
        return false;
    }

    var dob = document.getElementById("dob");
    if(dob.value.trim()==""){
        alert("Date of Birth Required");
        return false;
    }

    var contact = document.getElementById("contact");
    if(contact.value.trim()==""){
        alert("contact Required");
        return false;
    }

    var gender =""
    var male = document.getElementById("male");
    var female= document.getElementById("female");
    if(male.checked==false&& female.checked==false){
        alert(" Gender Required");
        return false;
    }
    male.checked ? gender = male.value : "";
    female.checked ? gender = female.value : "";
   
    var course=""
    var java = document.getElementById("java");
    var C = document.getElementById("C"); 
    var JavaScript = document.getElementById("JavaScript");
    var MERN = document.getElementById("MERN");
    var DSA = document.getElementById("DSA");
    if (java.checked == false && C.checked == false && JavaScript.checked == false && MERN.checked == false && DSA.checked == false) {
        alert("Course Required");
        return false;
    }
    java.checked ? course+="java " : " ";
    C.checked ? course+="C " : " ";
    JavaScript.checked ? course+="JavaScript " : " ";
    MERN.checked ? course+="MERN " : " ";
    DSA.checked ? course+="DSA " : " ";

    var address = document.getElementById("address");
    if(address.value.trim()==""){
        alert("Address Required");
        return false;
    }
    var obj = {
        username : username.value,
        email : email.value,
        password:password.value,
        services:services.value,
        dob : dob.value,
        gender: gender,
        course: course,
        address:address.value
    }
    // // console.log("Recieved Object + "+obj)
    // arr = localStorage.getItem("entries");
    // //javascrpit javascipt ka object banega phle
    // arr =[...JSON.parse(arr),obj]//clone create krega arr ke andar obj add kardega
    // localStorage.setItem("entries",JSON.stringify(arr));

    var data = JSON.parse(localStorage.getItem("entries"));
    if (data){
        var flag =false;
        for (index in data ){
            if (data[index].email==obj.email){
                alert("Email id exists")
                flag=true;
                break;
            }
            
        }
        if(!flag){
                arr=[...data,obj];
                localStorage.setItem("entries", JSON.stringify(arr));
                alert("Data Inserted Sucessfully")
            }
    }else{
        arr.push(obj);
        localStorage.setItem("entries", JSON.stringify(arr));
        alert("Data Inserted Sucessfully")
    }

}
function checkLogin(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    alert(email.value+" "+password.value);
    var data = JSON.parse(localStorage.getItem("entries"));// array of object aajayega
    // var obj = data.find((obj)=> (obj.email == email.value && obj.password == password.value));
    var flag = false;
    for(var index in data){
        if (data[index].email==email.value && data[index].password==password.value){
            alert("condition checked");
            alert("Email : "+email.value);
            alert("Password : "+password.value); // , nhi lagana 
            flag = true;
            break;
        }
    }
    alert("Email : "+obj.email);
    alert("Password : "+obj.password);
    if(flag){
        return true;
    }
    else{
        alert("EmailId or password is incorrect!");
        return false;
    }
}