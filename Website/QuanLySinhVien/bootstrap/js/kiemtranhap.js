function ktHopLe(){
      if (ktMssv())
       {
      }

      if(ktHoten())
       {
      }


      if(ktCmnd())
       {
      }

      if(ktEmail("email"))
       {
      }


       if(ktSdt())
       {
      }

}

// Kiem tra MSSV
function ktMssv(){ 
var div_mssv = document.getElementById("p_mssv");
if (form.mssv.value == "") {
      form.mssv.style.border = "solid 2px red";
      div_mssv.style.display = "block";
      div_mssv.innerHTML ="Bạn chưa nhập MSSV.";
      return false;
}
 else{ 
      div_mssv.style.display = "none";
      form.mssv.style.border = "solid 2px green";
      return true;
      }
}

// Kiem tra Ho ten
function ktHoten(){ 
var letters = /^[A-Za-z]+$/;
var input_hoten = document.getElementById("hoten"); 
var div_hoten = document.getElementById("p_hoten");
if(input_hoten.value.match(letters))
{  
      form.hoten.style.border = "solid 2px red";
      div_hoten.style.display = "block";
      div_hoten.innerHTML = "Hay nhập tất cả là ký tự.";
      return false;
}
else{ 
      div_hoten.style.display = "none";
      form.hoten.style.border = "solid 2px green";
      return true;
    }
}

//Kiem tra CMND
function ktCmnd(){ 
var numbers = /^[0-9]+$/;
var input_cmnd = document.getElementById("cmnd");
var cmnd_len = input_cmnd.value; 
var div_cmnd = document.getElementById("p_cmnd");
if(cmnd_len.length = 9 && cmnd_len.match(numbers))
{ 
      div_cmnd.style.display = "none";
      form.cmnd.style.border = "solid 2px green";
      return true;
}
else
{ 
      form.cmnd.style.border = "solid 2px red";
      div_cmnd.style.display = "block";
      div_cmnd.innerHTML = "Hay nhap vào số.";
      return false;
}
}


//Kiem tra email
function ktEmail(idTag) {
      var input_email = document.getElementById(idTag);
      var div_email = document.getElementById("p_email");      
      var email = /^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
            if(input_email.value.match(email))
            {
                  div_email.style.display ="none";
                  form.email.style.border = "solid 2px green";
                  return true; 
            } else{
                  div_email.style.display = "block";
                  div_email.innerHTML ="HÃY NHẬP EMAIL HỢP LỆ ";
                  form.email.style.border = "solid 2px red";
                  return false;
            }

}

//Kiem tra sdt
function ktSdt(){ 
var numbers = /^[0-9]+$/;
var input_sdt = document.getElementById("sdt");
var sdt_len = input_sdt.value; 
var div_sdt = document.getElementById("p_sdt");
if(input_sdt.value.match(numbers))
{ 
      div_sdt.style.display = "none";
      form.sdt.style.border = "solid 2px green";
      return true;
}
else
{ 
      form.sdt.style.border = "solid 2px red";
      div_sdt.style.display = "block";
      div_sdt.innerHTML = "Hãy nhập vào các số.";
      return false;
}
}














