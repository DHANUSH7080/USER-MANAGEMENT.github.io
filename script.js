// to validate the given valuee
function validateForm(){
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var address=document.getElementById("address").value;
    var email=document.getElementById("email").value;

    if(name==""){
        alert("Please enter your name");
        return false;
    }

    if(age==""){
        alert("Please enter your age");
        return false;
    }
    else if(age <= 0){
        alert("Please enter a valid age");
        return false;
    }

    if(address==""){
        alert("Please enter your address");
        return false;
    }

    if(email==""){
        alert("Please enter your email");
        return false;
    }
    else if(!email.includes("@")){
        alert("Please enter a  Valid email");
        return false;
    }


    return true;
}
// func to show dataa
function showData(){
    var peopleList;
    if(localStorage.getItem("peopleList")==null){
        peopleList=[];
    }
    else{
        peopleList=JSON.parse(localStorage.getItem("peopleList"));
    }

    var html="";


    peopleList.forEach(function (element,index){
        html+="<tr>";
        html +="<td>"+element.name+"</td>";
        html +="<td>"+element.age+"</td>";
        html +="<td>"+element.address+"</td>";
        html +="<td>"+element.email+"</td>";
        html+=
        '<td><button onclick="deleteData('+
        index +
        ')" class="btn btn-danger">Delete</button><button onclick="updataData(' + index +')" class="btn btn-warning m-2">Edit</button></td>';
        html+="</tr>";

    });

    document.querySelector("#crudTable tbody").innerHTML=html;
}
//loads all the data from local storage when page  reloaded
document.onload=showData();

//func to add data to local storage
function AddData(){
    if(validateForm()==true){
        var name=document.getElementById("name").value;
        var age=document.getElementById("age").value;
        var address=document.getElementById("address").value;
        var email=document.getElementById("email").value;

        var peopleList;
        if(localStorage.getItem("peopleList")==null){
            peopleList=[];

        }else{
            peopleList=JSON.parse(localStorage.getItem("peopleList"));
        }


        peopleList.push({
            name:name,
            age:age,
            address:address,
            email:email,
        });

        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData();
        document.getElementById("name").value="";
        document.getElementById("age").value="";
        document.getElementById("address").value="";
        document.getElementById("email").value="";
    }
}

//func to delete from local storage
function deleteData(index){
    var peopleList;
    if(localStorage.getItem("peopleList")==null){
        peopleList=[];
    }
    else{
        peopleList=JSON.parse(localStorage.getItem("peopleList"));
    }

    peopleList.splice(index,1);
    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();
}

//func to update data in local storage
function updataData(index){

    //submit button will hide and update button will show
    document.getElementById("submit").style.display="none";
    document.getElementById("update").style.display="block";

    var peopleList;
    if(localStorage.getItem("peopleList")==null){
        peopleList=[];
    }
    else{
        peopleList=JSON.parse(localStorage.getItem("peopleList"));
    }

  document.getElementById("name").value=peopleList[index].name;
  document.getElementById("age").value=peopleList[index].age;
  document.getElementById("address").value=peopleList[index].address;
  document.getElementById("email").value=peopleList[index].email;

document.querySelector("#update").onclick=function(){
    if(validateForm()==true){
        peopleList[index].name=document.getElementById("name").value;
        peopleList[index].age=document.getElementById("age").value;
        peopleList[index].address=document.getElementById("address").value;
        peopleList[index].email=document.getElementById("email").value;
    


    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();

    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("address").value="";
    document.getElementById("email").value="";

    //update button 

    //update button will be hidden and submit will be shown
    document.getElementById("submit").style.display="block";
    document.getElementById("update").style.display="none";

   }
}
}

