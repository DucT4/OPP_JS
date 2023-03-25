//prototype: dùng để tạo ra format cho nhiều object (class- lớp đối tượng)
function NhanVien() {
    this.maNhanVien = '';
    this.tenNhanVien = '';
    this.chucVu = '';
    this.heSoluong = 0;
    this.luongCoBan = 0;
    this.soGioLam = 0;
    this.tinhLuong = function () {
        var luong = this.luongCoBan * this.heSoluong * this.soGioLam;
        return luong;
    }
}