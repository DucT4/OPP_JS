// Tổ chức đối tượng object 
/**
 * object = {key: value}
 * key (tên biến): tên thuộc tính, value (giá trị) là giá trị
 */
//Khai báo đối tượng
var thongTinSV = {
  ma: 'sv0101',
  hoTen: 'Nguyen van A',
  soDienThoai: '09090909090'

}
var lopHoc = {
  ma: 'BC45',
  tenLop: 'BootCamp45',
  tinhDiemTrungBinh: function () {
    console.log('diemTb');
  }
}

/*
Truy xuất biến trong đối tượng ( Hay còn gọi là thuộc tính). Biến
(thuộc tính) trong đối tượng nào thì đối tượng đó sử dung được thôi.
  Cach1: [ten_doi_tuong].[ten_thuoc_tinh]
  Cach2: [ten_doi_tuong]["ten_thuoc_tinh"]
*/
console.log('Họ Tên', thongTinSV.hoTen);
console.log('Ma sv', thongTinSV.ma);
console.log('Ma lop', lopHoc.ma);
console.log('sdt', thongTinSV["soDienThoai"])
/*
Truy xuất hàm trog đối tương -method.
Cách 1: [ten_doi_tuong].[ten_phuong_thuc];
Cách 2: [ten_doi_tuong]["ten_phuong_thuc"]
*/
/*
 =>Khai báo theo hướng đối tượng là đưa biến và hàm về đúng
 vị trí của nó object chứa:
 +Biến: thuộc tính (property - key)
 +Hàm: Phương thức (method - key)
 Truy xuất thuộc tính và phương thức thì phải thông qua đối tượng
*/


/*
Khi giải quyết 1 task, chức năng của frontend
B1: Dàn layout(100%)
B2: xác định giao diện đó có các input nào
B3: phân tích giao diện đó có các input nào cần
lưu trữ, và output là gì => Tổ chức đối tượng cần lưu trữ
B4: xđ output
B5: xử lý sự kiện
 */

var sinhVien = {
  maSinhVien: '',
  tenSinhVien: '',
  loaiSinhVien: '',
  diemToan: 0,
  diemVan: 0,
  tinhDiemTrungBinh: function () {
    var dtb = 0;
    dtb = (this.diemToan + this.diemVan) / 2;
    return dtb;
  },
  xepLoaisv: function(){
    var xepLoai = '';
    var diemTb= this.tinhDiemTrungBinh();
    if (diemTb >= 5) {
      xepLoai= 'Đạt!';
    } else{
      xepLoai= 'Rớt111';
    }
    return xepLoai;
  }
}
//Các giá trị tính toán được sẽ không đưa vào lưu trữ
document.getElementById('btnHienThi').onclick = function () {
  sinhVien.maSinhVien = document.querySelector('#maSinhVien').value;
  sinhVien.tenSinhVien = document.querySelector('#tenSinhVien').value;
  sinhVien.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
  sinhVien.diemToan = +document.querySelector('#diemToan').value;
  sinhVien.diemVan = +document.querySelector('#diemVan').value;

  console.log('sinhVien', sinhVien);



  //
  document.querySelector('#txt_maSinhVien').innerHTML = sinhVien.maSinhVien;
  document.querySelector('#txt_tenSinhVien').innerHTML = sinhVien.tenSinhVien;
  document.querySelector('#txt_loaiSinhVien').innerHTML = sinhVien.loaiSinhVien;
  // document.querySelector('#txt_diemTb').innerHTML = sinhVien.diemTb;
  // document.querySelector('#txt_XepLoai').innerHTML = sinhVien.diemVan;
  var diemTrungBinh = sinhVien.tinhDiemTrungBinh();
  document.querySelector('#txt_diemTb').innerHTML = diemTrungBinh;
document.querySelector('#txt_XepLoai').innerHTML = sinhVien.xepLoaisv();
}

