function SinhVien(a, b, c, d)
{
	this.HoTen = a;
	this.Email = b;
	this.CMND = c;
	this.SoDT = d;
	
	
}
SinhVien.prototype.MaSV = '';
SinhVien.prototype.DiemToan = '';
SinhVien.prototype.DiemLy = '';
SinhVien.prototype.DiemHoa = '';

SinhVien.prototype.XepLoai = '';



SinhVien.prototype.tinhDTB = function() {
	return (parseFloat(this.DiemHoa) + parseFloat(this.DiemToan) + parseFloat(this.DiemLy))/3;
};







