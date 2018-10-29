var mangSV = new DanhSachSinhVien();


function ThemSinhVien()
{
	var HoTen = document.getElementById('hoten').value;	
	var CMND = document.getElementById('cmnd').value;
	var Email = document.getElementById('email').value;
	var SDT = document.getElementById('sdt').value;
	var DiemToan = document.getElementById('toan').value;
	var DiemLy = document.getElementById('ly').value;
	var DiemHoa = document.getElementById('hoa').value;

	
	var sinhVienThem = new SinhVien(HoTen,Email,CMND,SDT);	
	sinhVienThem.DiemToan = DiemToan;
	sinhVienThem.DiemLy = DiemLy;
	sinhVienThem.DiemHoa = DiemHoa;
	
	mangSV.ThemSV(sinhVienThem);
	for (var i = 0; i < mangSV.DSSV.length; i++){
		if (i < 9) {
			mangSV.DSSV[i].MaSV = "SV" + "00" + (i+1); 
	}
		if (i>=9&&i<99) {
			mangSV.DSSV[i].MaSV = "SV" + "0" + (i+1); 
		}
		if (i>=99 && i < 998){
			mangSV.DSSV[i].MaSV = "SV" + "0" + (i+1); 
		}

	}
CapNhatDanhSachSinhVien();
}





function CapNhatDanhSachSinhVien()
{
		var tbodySinhVien = document.getElementById('appendVaotbody');
		tbodySinhVien.innerHTML='';
		for(var i = 0; i < mangSV.DSSV.length; i++)
		{
			//Lấy đối tượng sinh viên từ mảng DSSV
			var sv = mangSV.DSSV[i];
			//Tạo thẻ tr
			var trSinhVien = document.createElement('tr');
			var ckbSV = document.createElement('input');
			ckbSV.setAttribute('type','checkbox');
			ckbSV.value=sv.MaSV;
			ckbSV.className = 'ckbSV';
			ckbSV.id = sv.MaSV; //mới chèn vào
			//Tạo cột checkbox 
			var tdCheckBox = document.createElement('td');
			tdCheckBox.appendChild(ckbSV);
			trSinhVien.appendChild(tdCheckBox);
			//Tạo các td thuộc tính
			var tdMaSV = TaoTD('MaSV','');
			var taolabel = document.createElement('label');
			taolabel.htmlFor = sv.MaSV;
			taolabel.innerHTML = sv.MaSV;
			tdMaSV.appendChild(taolabel);
			var tdHoTen = TaoTD('HoTen',''); // mới sửa
			var taolabel = document.createElement('label');
			taolabel.htmlFor = sv.MaSV;
			taolabel.innerHTML = sv.HoTen;
			tdHoTen.appendChild(taolabel);
			var tdDiemToan = TaoTD('Diem','');
			var taolabel = document.createElement('label');
			taolabel.htmlFor = sv.MaSV;
			taolabel.innerHTML = sv.DiemToan;
			tdDiemToan.appendChild(taolabel);
			var tdDiemLy = TaoTD('Diem','');
			var taolabel = document.createElement('label');
			taolabel.htmlFor = sv.MaSV;
			taolabel.innerHTML = sv.DiemLy;
			tdDiemLy.appendChild(taolabel);
			var tdDiemHoa = TaoTD('Diem','');
			var taolabel = document.createElement('label');
			taolabel.htmlFor = sv.MaSV;
			taolabel.innerHTML = sv.DiemHoa;
			tdDiemHoa.appendChild(taolabel);
			var tdEmail = TaoTD('Email','');
			var taolabel = document.createElement('label');
			taolabel.htmlFor = sv.MaSV;
			taolabel.innerHTML = sv.Email;
			tdEmail.appendChild(taolabel);
			var tdCMND = TaoTD('CMND','');
			var taolabel = document.createElement('label');
			taolabel.htmlFor = sv.MaSV;
			taolabel.innerHTML = sv.CMND;
			tdCMND.appendChild(taolabel);
			var tdSDT = TaoTD('SDT','');
			var taolabel = document.createElement('label');
			taolabel.htmlFor = sv.MaSV;
			taolabel.innerHTML = sv.SoDT;
			tdSDT.appendChild(taolabel);
			trSinhVien.appendChild(tdMaSV);
			trSinhVien.appendChild(tdHoTen);
			
			trSinhVien.appendChild(tdCMND);
			trSinhVien.appendChild(tdEmail);
			trSinhVien.appendChild(tdSDT);
			trSinhVien.appendChild(tdDiemToan);
			trSinhVien.appendChild(tdDiemLy);
			trSinhVien.appendChild(tdDiemHoa);

			tbodySinhVien.appendChild(trSinhVien);
		}
}

function TaoTD(className, Value)
{
	var td = document.createElement('td');
	td.className = className;
	td.innerHTML = Value;
	return td;
}


function XoaSinhVien()
{
	var arrSVDuocChon = [];
	var lstSinhVien = document.getElementsByClassName('ckbSV');
	for(var i = 0; i<lstSinhVien.length;i++)
	{
		if(lstSinhVien[i].checked)
		{
			var MaSV = lstSinhVien[i].value;
			arrSVDuocChon.push(MaSV);
		}
	}
		if(arrSVDuocChon.length ==0)
		{
			swal(
          'Oops...',
          'Vui lòng chọn sinh viên cần xoá.',
          'error'
        	);
		}
			else{
			swal({
				title: 'Bạn có muốn xoá?',
				text: "Dữ liệu đã xoá không thể khôi phục.",
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Xoá đi!',
				cancelButtonText: 'Huỷ',
			}).then((result) => {
				if (result.value) {
					mangSV.XoaSV(arrSVDuocChon);
					CapNhatDanhSachSinhVien();
					swal(
						'Xoá thành công!',
						'Sinh viên không còn tồn tại trong danh sách.',
						'success'
						)
				}
			})	
		}
		
	}
	




function SetStorage()
{	
	
	//Convert danh sách sinh viên thành json 
	var jsonDSSV = JSON.stringify(mangSV.DSSV);
	localStorage.setItem("DanhSachSinhVien", jsonDSSV);
	swal({
  title: 'Lưu thành công!',
  showCancelButton: true,
  type: 'success',
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Nhập tiếp',
  cancelButtonText: 'Huỷ',
}).then((result) => {
    if (result.value) {
      DongDs();
  } 
})
}



function GetStorage()
{
    mangSV.DSSV = JSON.parse(localStorage.getItem("DanhSachSinhVien"));
	CapNhatDanhSachSinhVien();
	MoDs();
}




function CapNhatVaoAll()
{
		// GetStorage();
		var tbodySinhVien = document.getElementById('appendVaoAll');
		tbodySinhVien.innerHTML='';
		for(var i = 0; i < mangSV.DSSV.length; i++)
		{
			//Lấy đối tượng sinh viên từ mảng DSSV
			var sv = mangSV.DSSV[i];
			//Tạo thẻ tr
			var trSinhVien = document.createElement('tr');
			
			
			//Tạo các td thuộc tính
			var tdSTT = TaoTD('STT',(i+1));
			var tdMaSV = TaoTD('MaSV',sv.MaSV);
			var tdHoTen = TaoTD('HoTen',sv.HoTen);

			//bo sung lay 2 chu so thap phan
			var diemtb = sv.tinhDTB().toFixed(1);
			var tdDiemTB = TaoTD('Diem', diemtb);
			
			
			if (diemtb <= 10 && diemtb >= 9){
				sv.Xeploai = "Xuất sắc";

			}
			else if (diemtb < 9 && diemtb >= 8){
				sv.Xeploai = "Giỏi";
			}
			else if (diemtb < 8 && diemtb >= 7){
				sv.Xeploai = "Khá";
			}
			else if (diemtb < 7 && diemtb >= 5){
				sv.Xeploai = "Trung Bình";
			}
			else {
				sv.Xeploai = "Yếu";
			}
			var tdXepLoai = TaoTD('Xeploai',sv.Xeploai);
			 
			
			trSinhVien.appendChild(tdSTT);
			trSinhVien.appendChild(tdMaSV);
			trSinhVien.appendChild(tdHoTen);
			
			trSinhVien.appendChild(tdDiemTB); 
			trSinhVien.appendChild(tdXepLoai);
		
			tbodySinhVien.appendChild(trSinhVien);
			}

			var btn_search = document.getElementById("btn_search");
  			btn_search.style.display = "block";

  			var ThongBao = document.getElementById("ThongBao");
  			ThongBao.style.display = "none";

  			var TableAll = document.getElementById("TableAll");
  			TableAll.style.display = "block";

  			var TableSearch = document.getElementById("TableSearch");
  			TableSearch.style.display = "none";
		}


function ResetForm() {
    document.getElementById("form").reset();
    var modiv = document.getElementById("themdiem");
    modiv.style.display = "none";
}

function TimKiemSinhVien()
{
	var tukhoa = document.getElementById("tukhoa").value;
	var dsSinhVien = mangSV.TimSinhVien(tukhoa);
	var ThongBao = document.getElementById("ThongBao");
  	ThongBao.style.display = "block";
	if(dsSinhVien.DSSV.length == 0 )
	{
		document.getElementById("ThongBao").innerHTML = 'Không tìm thấy sinh viên!'; 
	}
	else
	{
		document.getElementById("ThongBao").innerHTML = 'Tìm thấy ' + dsSinhVien.DSSV.length + ' sinh viên!'; 
		CapNhatSinhVien(dsSinhVien);
	}
	var TableAll = document.getElementById("TableAll");
  	TableAll.style.display = "none";

  	var TableSearch = document.getElementById("TableSearch");
  	TableSearch.style.display = "block";
}



function CapNhatSinhVien(dsSinhVien)
{
		var tSearch = document.getElementById('tSearch');
		tSearch.innerHTML='';
		for(var i = 0; i < dsSinhVien.DSSV.length; i++)
		{
			//Lấy đối tượng sinh viên từ mảng DSSV
			var sv = dsSinhVien.DSSV[i];
			//Tạo thẻ tr
			var trSinhVien = document.createElement('tr');
			
			
			//Tạo các td thuộc tính
			var tdSTT = TaoTD('STT',(i+1));
			var tdMaSV = TaoTD('MaSV',sv.MaSV);
			var tdHoTen = TaoTD('HoTen',sv.HoTen);

			//bo sung lay 2 chu so thap phan
			var diemtb = sv.tinhDTB().toFixed(1);
			var tdDiemTB = TaoTD('Diem', diemtb);
			
			
			if (diemtb <= 10 && diemtb >= 9){
				sv.Xeploai = "Xuất sắc";

			}
			else if (diemtb < 9 && diemtb >= 8){
				sv.Xeploai = "Giỏi";
			}
			else if (diemtb < 8 && diemtb >= 7){
				sv.Xeploai = "Khá";
			}
			else if (diemtb < 7 && diemtb >= 5){
				sv.Xeploai = "Trung Bình";
			}
			else {
				sv.Xeploai = "Yếu";
			}
			var tdXepLoai = TaoTD('Xeploai',sv.Xeploai);
			 
			
			trSinhVien.appendChild(tdSTT);
			trSinhVien.appendChild(tdMaSV);
			trSinhVien.appendChild(tdHoTen);
			
			trSinhVien.appendChild(tdDiemTB); 
			trSinhVien.appendChild(tdXepLoai);
			

			tSearch.appendChild(trSinhVien);
			}

			
}

function Top1(){
	var DSTop1 = new DanhSachSinhVien();
	var mangSVCopy = new DanhSachSinhVien();
	mangSVCopy = Copy(mangSV);
	var max = TimDiemMax(mangSVCopy);
	var tDSTop1 = document.getElementById('appendVaoTop1');
		tDSTop1.innerHTML='';
		var trSinhVien = document.createElement('tr');
		
		
		//Tạo các td thuộc tính
		var tdMaSV = TaoTD('MaSV',max.MaSV);
		var tdHoTen = TaoTD('HoTen',max.HoTen);

		//bo sung lay 2 chu so thap phan
		var diemtb = max.tinhDTB().toFixed(1);
		var tdDiemTB = TaoTD('Diem', diemtb);
		
		
		if (diemtb <= 10 && diemtb >= 9){
			max.Xeploai = "Xuất sắc";

		}
		else if (diemtb < 9 && diemtb >= 8){
			max.Xeploai = "Giỏi";
		}
		else if (diemtb < 8 && diemtb >= 7){
			max.Xeploai = "Khá";
		}
		else if (diemtb < 7 && diemtb >= 5){
			max.Xeploai = "Trung Bình";
		}
		else {
			max.Xeploai = "Yếu";
		}
		var tdXepLoai = TaoTD('Xeploai',max.Xeploai);
		 
		trSinhVien.appendChild(tdMaSV);
		trSinhVien.appendChild(tdHoTen);
		
		trSinhVien.appendChild(tdDiemTB); 
		trSinhVien.appendChild(tdXepLoai);
		

		tDSTop1.appendChild(trSinhVien);




	var btn_search = document.getElementById("btn_search");
  	btn_search.style.display = "none";
}

function Top10(){
	var k = 0;
	var DSTop10 = new DanhSachSinhVien();
	var mangSVCopy = new DanhSachSinhVien();
	mangSVCopy = Copy(mangSV);	

	while (k < 10 ) {
		var max = TimDiemMax(mangSVCopy);
		DSTop10.DSSV[k] = max;
		k++;
		for (var j = 0; j < mangSVCopy.DSSV.length; j++){
			if (mangSVCopy.DSSV[j].MaSV == max.MaSV) {
				mangSVCopy.DSSV.splice(j,1);
			};
		};
	};
	console.log(DSTop10);

	var tDSTop10 = document.getElementById('appendVaoTop10');
		tDSTop10.innerHTML='';
		for(var i = 0; i < DSTop10.DSSV.length; i++)
		{
			//Lấy đối tượng sinh viên từ mảng DSSV
			var sv = DSTop10.DSSV[i];
			//Tạo thẻ tr
			var trSinhVien = document.createElement('tr');
			
			
			//Tạo các td thuộc tính
			var tdSTT = TaoTD('STT',(i+1));
			var tdMaSV = TaoTD('MaSV',sv.MaSV);
			var tdHoTen = TaoTD('HoTen',sv.HoTen);

			//bo sung lay 2 chu so thap phan
			var diemtb = sv.tinhDTB().toFixed(1);
			var tdDiemTB = TaoTD('Diem', diemtb);
			
			
			if (diemtb <= 10 && diemtb >= 9){
				sv.Xeploai = "Xuất sắc";

			}
			else if (diemtb < 9 && diemtb >= 8){
				sv.Xeploai = "Giỏi";
			}
			else if (diemtb < 8 && diemtb >= 7){
				sv.Xeploai = "Khá";
			}
			else if (diemtb < 7 && diemtb >= 5){
				sv.Xeploai = "Trung Bình";
			}
			else {
				sv.Xeploai = "Yếu";
			}
			var tdXepLoai = TaoTD('Xeploai',sv.Xeploai);
			 
			
			trSinhVien.appendChild(tdSTT);
			trSinhVien.appendChild(tdMaSV);
			trSinhVien.appendChild(tdHoTen);
			
			trSinhVien.appendChild(tdDiemTB); 
			trSinhVien.appendChild(tdXepLoai);
			

			tDSTop10.appendChild(trSinhVien);
			}

	var btn_search = document.getElementById("btn_search");
  	btn_search.style.display = "none";
}





function Copy(mangSV) {
	var mangSVCopy = new DanhSachSinhVien();
	for (var i = 0; i < mangSV.DSSV.length; i++) {
		mangSVCopy.DSSV[i] = mangSV.DSSV[i];
	}
	return mangSVCopy;
}
	
function TimDiemMax(mangSVCopy){
	
	var max;
	max = mangSVCopy.DSSV[0];
	for (var i = 1; i < mangSVCopy.DSSV.length; i++){
		if (mangSVCopy.DSSV[i].tinhDTB() > max.tinhDTB()) {
			max = mangSVCopy.DSSV[i];
		}
	}
	return max;
}







function TaoSample() {
	for (var j = 0; j < 20; j++){
		var sinhVienThem = new SinhVien("Sample" + (j+1),"sample@gmail.com","123123123","0123456789");	
		sinhVienThem.DiemToan = Math.floor(Math.random() * 6) + 5;
		sinhVienThem.DiemLy = Math.floor(Math.random() * 6) + 5;
		sinhVienThem.DiemHoa = Math.floor(Math.random() * 6) + 5;
		
		mangSV.ThemSV(sinhVienThem);
		for (var i = 0; i < mangSV.DSSV.length; i++){
			if (i < 9) {
				mangSV.DSSV[i].MaSV = "SV" + "00" + (i+1); 
		}
			if (i>=9&&i<99) {
				mangSV.DSSV[i].MaSV = "SV" + "0" + (i+1); 
			}
			if (i>=99 && i < 998){
				mangSV.DSSV[i].MaSV = "SV" + "0" + (i+1); 
			}

	}
	CapNhatDanhSachSinhVien();

	}
}