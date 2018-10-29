function DanhSachSinhVien()
{
	this.DSSV = [];
	this.ThemSV = function (sinhvienthem)
	{
		this.DSSV.push(sinhvienthem);
	}
}

DanhSachSinhVien.prototype.XoaSV = function(arrSVDuocChon){
	//Duyệt mảng sinh viên được chọn với mảng danh sách sinh viên tìm ra sinh viên xóa
	for(var i=0; i < arrSVDuocChon.length; i++)
	{
		for(var j=0; j < this.DSSV.length; j++)
		{
			if(arrSVDuocChon[i] == this.DSSV[j].MaSV )
			{
				this.DSSV.splice(j,1);
			}
		}
	}
};

DanhSachSinhVien.prototype.TimSinhVien = function (tukhoa)
{
	//Tạo 1 đối tượng danh sách sinh viên mới
	var dsSVTimKiem = new DanhSachSinhVien();
	//Duyệt danh sách sinh viên
	for(var i = 0; i < mangSV.DSSV.length; i++)
	{
		var sinhvien = mangSV.DSSV[i];
		if(sinhvien.HoTen.search(tukhoa)!=-1 || sinhvien.MaSV.search(tukhoa)!=-1)
		{
			dsSVTimKiem.ThemSV(sinhvien);
		}
	}
	return dsSVTimKiem;
}






