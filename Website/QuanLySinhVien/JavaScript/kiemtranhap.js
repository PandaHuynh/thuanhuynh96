function ktHopLe(){
//em sua lai doan nay cho no kiem tra lan luot het cac form luon nha
      if(ktHoten())
       {
      }

      if(ktCmnd())
       {
      }

      if(ktEmail())
       {
      }

       if(ktSdt())
       {
      }

      if(ktHoten()==true &&ktCmnd()==true && ktEmail()==true && ktSdt()==true)
        {
          Modiv();
        swal(
          'Good job!',
          'Vui lòng nhập điểm sinh viên',
          'success'
        );
        }
        else {
        var modiv = document.getElementById("themdiem");
        modiv.style.display = "none";
        swal(
          'Oops...',
          'Vui lòng nhập lại dữ liệu',
          'error'
        );
      }
}


function Modiv(){
  var modiv = document.getElementById("themdiem");
  modiv.style.display = "block";
}


function ktDiem(){

  if(ktToan())
  {

  }
  if(ktLy())
  {

  }

  if(ktHoa())
  {

  }

  if(ktToan()==true && ktLy()==true && ktHoa() == true)
        {
        MoDs();
        swal({
  title: 'Nhập thành công!',
  showCancelButton: true,
  type: 'success',
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Nhập tiếp',
  cancelButtonText: 'Xem bảng điểm',
}).then((result) => {
    if (result.dismiss === 'cancel') {
      DiChuyenFoot();
  } else if (result.value) {
    DongDs();
  }
})
        ThemSinhVien();
        var btn_xuat = document.getElementById("btn_xuat");
        btn_xuat.style.display = "none";   
  }

        else 
        {
        // var moDS = document.getElementById("foot");
        // moDS.style.display = "none";
        swal(
          'Oops...',
          'Vui lòng nhập lại dữ liệu',
          'error'
        );
        var btn_xuat = document.getElementById("btn_xuat");
        btn_xuat.style.display = "block";
      }
}

function NhapDiem()
{
  ResetForm();
  var btn_xuat = document.getElementById("btn_xuat");
  btn_xuat.style.display = "block";
}

function DiChuyenFoot(){
  document.getElementById("foot").scrollIntoView();
}

function DiChuyenAll(){
  document.getElementById("tab_2").scrollIntoView();
}

function MoDs(){
  var moDs = document.getElementById("foot");
  moDs.style.display = "block";
}

function DongDs(){
  var moDs = document.getElementById("foot");
  moDs.style.display = "none";
  ResetForm();
  var btn_xuat = document.getElementById("btn_xuat");
  btn_xuat.style.display = "block";
}

// Kiem tra Ho ten
function ktHoten(){ 
var letters = /^[A-Za-z]+$/;
var input_hoten = document.getElementById("hoten"); 
var div_hoten = document.getElementById("p_hoten");
var hoten_len = input_hoten.value; 
if(form.hoten.value.trim() == "" || input_hoten.value.match(letters))
{  
      form.hoten.style.border = "solid 2px red";
      div_hoten.style.display = "block";
      div_hoten.innerHTML = "Vui lòng nhập họ tên.";
      return false;
}
else if(hoten_len.length > 30)
{  
      form.hoten.style.border = "solid 2px red";
      div_hoten.style.display = "block";
      div_hoten.innerHTML = "Họ tên quá dài. Vui lòng nhập họ tên hợp lệ.";
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
if(cmnd_len.length == 9 && cmnd_len.match(numbers))
{ 
      div_cmnd.style.display = "none";
      form.cmnd.style.border = "solid 2px green";
      return true;
}
else
{ 
      form.cmnd.style.border = "solid 2px red";
      div_cmnd.style.display = "block";
      div_cmnd.innerHTML = "Vui lòng nhập 9 số CMND của bạn.";
      return false;
}
}


//Kiem tra email
function ktEmail() {
      var input_email = document.getElementById("email");
      var email_len = input_email.value; 
      var div_email = document.getElementById("p_email");      
      var email = /^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
            if(input_email.value.match(email) && email_len.length < 30)
            {
                  div_email.style.display ="none";
                  form.email.style.border = "solid 2px green";
                  return true; 
            } else{
                  div_email.style.display = "block";
                  div_email.innerHTML ="Vui lòng nhập Email hợp lệ.";
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
  if(sdt_len.length == 10 || sdt_len.length == 11)
  {
      div_sdt.style.display = "none";
      form.sdt.style.border = "solid 2px green";
      return true;
  }
  else
  { 
      form.sdt.style.border = "solid 2px red";
      div_sdt.style.display = "block";
      div_sdt.innerHTML = "Vui lòng nhập vào đủ các số.";
      return false;
  }
}
else{
  form.sdt.style.border = "solid 2px red";
  div_sdt.style.display = "block";
  div_sdt.innerHTML = "Vui lòng nhập vào các số.";
  return false;
}
}

function ktToan(){ 
var numbers = /^[0-9]+$/;
var input_toan = document.getElementById("toan");
var toan_len = input_toan.value; 
var div_toan = document.getElementById("p_toan");
if(toan_len <=10 && toan_len >=0 && toan_len.match(numbers))
{ 
      div_toan.style.display = "none";
      form.toan.style.border = "solid 2px green";
      return true;
}
else
{ 
      form.toan.style.border = "solid 2px red";
      div_toan.style.display = "block";
      div_toan.innerHTML = "Điểm không hợp lệ.";
      return false;
}
}

function ktLy(){ 
var numbers = /^[0-9]+$/;
var input_ly = document.getElementById("ly");
var ly_len = input_ly.value; 
var div_ly = document.getElementById("p_ly");
if(ly_len <=10 && ly_len >=0 && ly_len.match(numbers))
{ 
      div_ly.style.display = "none";
      form.ly.style.border = "solid 2px green";
      return true;
}
else
{ 
      form.ly.style.border = "solid 2px red";
      div_ly.style.display = "block";
      div_ly.innerHTML = "Điểm không hợp lệ.";
      return false;
}
}

function ktHoa(){ 
var numbers = /^[0-9]+$/;
var input_hoa = document.getElementById("hoa");
var hoa_len = input_hoa.value; 
var div_hoa = document.getElementById("p_hoa");
if(hoa_len <=10 && hoa_len >=0 &&  hoa_len.match(numbers))
{ 
      div_hoa.style.display = "none";
      form.hoa.style.border = "solid 2px green";
      return true;
}
else
{ 
      form.hoa.style.border = "solid 2px red";
      div_hoa.style.display = "block";
      div_hoa.innerHTML = "Điểm không hợp lệ.";
      return false;
}
}













