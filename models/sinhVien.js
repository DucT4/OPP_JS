function sinhVien() {
    this.ma = '';
    this.ten = '';
    this.email = '';
    this.loaiSinhVien = '';
    this.soDienThoai = 0;
    this.diemRenLuyen = 0;
    this.diemToan = 0;
    this.diemly = 0;
    this.diemHoa = 0;
    this.tinhDiemTrungBinh= function(){
        var dtb = (this.diemHoa+this.diemToan+this.diemly)/3;
        return dtb;
    }
}