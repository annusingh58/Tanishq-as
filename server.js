function signup(event){
   event.preventDefault();
   alert("working");


   var name =document.getElementById("name").value;
   var email =document.getElementById("email").value;
   var password=document.getElementById("password").value;
   var confimpassword=document.getElementById("confimpassword").value;

   if( name && email && password && confimpassword){
    if(password.length>=8 && confimpassword.length>=8){
        if(password==confimpassword){

           
                var tanishq= JSON.parse(localStorage.getItem("tanishqUserData")) || []   
                var flag=false;
                for(i=0;i<tanishq.length;i++){
                    if(tanishq[i].uemail==email){
                        flag=true;
                    }

                }
                if(flag==false){
                var tdata ={uname :name,uemail:email,upassword:password,uconfimpassword:confimpassword}
                tanishq.push(tdata);
                console.log(tanishq);
                localStorage.setItem("tanishqUserData",JSON.stringify(tanishq))
                window.location.href="./login.html"

                }
                else{
                    alert("email already exits")
                }

            }
            else{
                console.log("password not match");
            }

        }

        else{
            console.log("password should be 8 digit");
           
        }


   }
   else{
     console.log("all field are required")
   }




}

function login(event){
    event.preventDefault();
    // alert("working");


    var lemail=document.getElementById("lemail").value;
    var lpassword=document.getElementById("lpassword").value;

    var loginuser={};
    if(lemail && lpassword){
        var tanishql=JSON.parse(localStorage.getItem("tanishqUserData"))
        var flag =false;
        for(var i=0;i<tanishql.length;i++){
            if(tanishql[i].uemail==lemail){
                flag=true;
                loginuser=tanishql[i];
            }

           
        }
             if( flag==true){
                localStorage.setItem("tanishqCurrentUser",JSON.stringify(loginuser))
                alert("login successfull")
                window.location.href="./homepage.html"
                

        }
        


        else{
            alert("caredential are match")
        }


    }
    else{
        alert("all field are required")
    }

}
