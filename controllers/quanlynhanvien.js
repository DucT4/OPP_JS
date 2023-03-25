var nhanVien = new NhanVien(); //new
console.log('Nhan vien',NhanVien);
var nhanVien2 = new NhanVien();//new
console.log('Nhan vien 2', nhanVien); 
    

document.querySelector('#btnHienThi').onclick = function () {
    quanLyNhanVien.maNV = document.querySelector('#maNhanVien').value;
    quanLyNhanVien.tenNV = document.querySelector('#tenNhanVien').value;
    quanLyNhanVien.heSoLuong = document.querySelector('#chucvu').value;
    quanLyNhanVien.luongBasic = document.querySelector('#luongCoBan').value;
    quanLyNhanVien.soGioLam = document.querySelector('#soGioLam').value;
    //Hướng dẫn lấy innerHtml của thẻ select chứa option được chọn
    var slChucVu = document.querySelector('#chucvu');
    //.selectedIndex: lấy ra vị trí của option đc chọn
    var vitriOption = slChucVu.selectedIndex;
    quanLyNhanVien.chucVu = slChucVu[vitriOption].innerHTML;
    document.querySelector('#txt_maNhanVien').innerHTML = quanLyNhanVien.maNV;
    document.querySelector('#txt_tenNhanVien').innerHTML = quanLyNhanVien.tenNV;
    document.querySelector('#txt_chucVu').innerHTML = quanLyNhanVien.chucVu;
    document.querySelector('#txt_tongluong').innerHTML = quanLyNhanVien.tinhLuong();
    document.querySelector('#txt_heNhanVien').innerHTML = quanLyNhanVien.heSoLuong;





}