//Tạo ra biến array sinn viên để lưu trữ all thông tin siinh viên
var arrSinhVien = [];
document.querySelector('#form-SV').onsubmit = function
    (event) {
    event.preventDefault();//chặn sự kiện reload lại trang
    var sv = new sinhVien();
    sv.ma = document.querySelector('#maSinhVien').value;
    sv.ten = document.querySelector('#tenSinhVien').value;
    sv.email = document.querySelector('#email').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sv.soDienThoai = document.querySelector('#soDienThoai').value;
    sv.diemRenLuyen = + document.querySelector('#diemRenLuyen').value;
    sv.diemToan = +document.querySelector('#diemToan').value;
    sv.diemly = +document.querySelector('#diemLy').value;
    sv.diemHoa = +document.querySelector('#diemHoa').value;
    console.log(sv);
    //Đưa dữ liệu sinh viên vào array sau mỗi lần thêm dữ liệu
    arrSinhVien.push(sv);
    //gọi hàm table sinh viên = html
    renderSinhVien(arrSinhVien);
    console.log('arrSinhVien', arrSinhVien);
    saveStorage(arrSinhVien);





    //     {
    //         // //sau khi có thông tin sinh viên=> tạo ra các thẻ
    //     // var trSinhVien = document.createElement('tr');
    //     // //Tạo thẻ td chứa nội dung
    //     // var tdMaSinhVien = document.createElement('td');
    //     // tdMaSinhVien.innerHTML = sv.ma;

    //     // var tdTenSinhVien = document.createElement('td');
    //     // tdTenSinhVien.innerHTML = sv.ten;

    //     // var tdEmailSinhVien = document.createElement('td');
    //     // tdEmailSinhVien.innerHTML = sv.email;

    //     // var tdsdt = document.createElement('td');
    //     // tdsdt.innerHTML = sv.soDienThoai;

    //     // var tdDiemTrungBinh = document.createElement('td');
    //     // tdDiemTrungBinh.innerHTML = sv.tinhDiemTrungBinh();

    //     // var tdChucNang = document.createElement('td');
    //     // var btnXoa = document.createElement('button');
    //     // btnXoa.innerHTML = 'delete';
    //     // btnXoa.className = 'btn btn-danger';
    //     // btnXoa.onclick = function () {
    //     //     console.log('delete');
    //     // // parentEllement: dom đến thẻ cha của thẻ hiện tại
    //     // // tag.remove(): xóa đi tag đó khỏi dom 
    //     // // btnXoa.parentElement.parentElement.remove();
    //     // // closest(selector): dom đến selector gần nhất chứa thẻ đó
    //     // btnXoa.closest ('tr').remove();
    //     // }

    //     // tdChucNang.appendChild(btnXoa);
    //     // trSinhVien.appendChild(tdMaSinhVien);
    //     // trSinhVien.appendChild(tdTenSinhVien);
    //     // trSinhVien.appendChild(tdEmailSinhVien);
    //     // trSinhVien.appendChild(tdsdt);
    //     // trSinhVien.appendChild(tdDiemTrungBinh);
    //     // trSinhVien.appendChild(tdChucNang);


    //     // document.querySelector('#tblSinhVien').appendChild(trSinhVien);
    // }



}
/**
 * Hàm nhận vào 1 arrSinhVien
 * [
 * {maSinhVien:1, tenSinhVien:'A',....} 0
 * {maSinhVien:2, tenSinhVien:'B',....} 1
 * {maSinhVien:3, tenSinhVien:'C',....} 2
 * ] và trả vể htmlString
 * <tr>
 * <td>1</td>
 * <td>A</td>
 * ...
* @param {*} arrSV là mảng [
     {maSinhVien:1, tenSinhVien:'A',....} 0
     {maSinhVien:2, tenSinhVien:'B',....} 1
     {maSinhVien:3, tenSinhVien:'C',....} 2
] 
 */
function renderSinhVien(arrSV) {
    let htmlContent = '';
    for (var i = 0; i < arrSV.length; i++) {
        var svNew = new sinhVien();
        var sv = arrSV[i];
        Object.assign(svNew, sv);
        htmlContent += `
        <tr>
              <td>${svNew.ma}</td>
              <td>${svNew.ten}</td>
              <td>${svNew.email}</td>
              <td>${svNew.soDienThoai}</td>
              <td>${svNew.tinhDiemTrungBinh()}</td>
              <td>
               <button class="btn btn-danger" onclick = "xoaSinhVien('${i}')"> Xóa</button>
              </td>
              <td>
              <button class="btn btn-danger" onclick = "xoaSinhVienTheoMa('${svNew.ma}')"> Xóa</button>
             </td>
             <td>
             <button class="btn btn-success" onclick = "suaSinhVien('${svNew.ma}')"> chỉnh sửa </button>
            </td>
        </tr>
        `
            ;
    }

    document.querySelector('#tblSinhVien').innerHTML = htmlContent;
    return htmlContent;
}
function suaSinhVien(maSinhVienClick) {
    // console.log(maSinhVienClick);

    for (var index = 0; index < arrSinhVien.length; index++) {
        var indexEdit = -1;
        if (maSinhVienClick === arrSinhVien[index].ma) {
            indexEdit = index;
            break;
        }
    }
    //tìm thấy sinh viên object trong mảng ở vị trí edit => load lên input form
    if (indexEdit !== -1) {
        document.querySelector('#maSinhVien').value = arrSinhVien[indexEdit].ma;

        document.querySelector('#tenSinhVien').value = arrSinhVien[indexEdit].ten;

        document.querySelector('#email').value = arrSinhVien[indexEdit].email;

        document.querySelector('#loaiSinhVien').value = arrSinhVien[indexEdit].loaiSinhVien;

        document.querySelector('#soDienThoai').value = arrSinhVien[indexEdit].soDienThoai;

        document.querySelector('#diemRenLuyen').value = arrSinhVien[indexEdit].diemRenLuyen;

        document.querySelector('#diemToan').value = arrSinhVien[indexEdit].diemToan;

        document.querySelector('#diemLy').value = arrSinhVien[indexEdit].diemly;

        document.querySelector('#diemHoa').value = arrSinhVien[indexEdit].diemHoa;
        document.querySelector('#maSinhVien').disabled = true;
        document.querySelector('#btnThemSinhVien').disabled = true;
    }
}


document.querySelector('#btnLuu').onclick = function () {
    var sinhVienEdit = new sinhVien;
    sinhVienEdit.ma = document.querySelector('#maSinhVien').value;
    sinhVienEdit.ten = document.querySelector('#tenSinhVien').value;
    sinhVienEdit.email = document.querySelector('#email').value;
    sinhVienEdit.soDienThoai = document.querySelector('#soDienThoai').value;
    sinhVienEdit.diemToan = document.querySelector('#diemToan').value;
    sinhVienEdit.diemly = document.querySelector('#diemLy').value;
    sinhVienEdit.diemHoa = document.querySelector('#diemHoa').value;
    sinhVienEdit.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    sinhVienEdit.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    console.log('sinhvienedit', sinhVienEdit);

    for (var index = 0; index < arrSinhVien.length; index++) {
        if (arrSinhVien[index].ma === sinhVienEdit.ma) {
            var svMang = arrSinhVien[index];
            svMang.ten = sinhVienEdit.ten;
            svMang.email = sinhVienEdit.email;

            svMang.soDienThoai = sinhVienEdit.soDienThoai;

            svMang.diemToan = sinhVienEdit.diemToan;

            svMang.diemHoa = sinhVienEdit.diemHoa;

            svMang.diemly = sinhVienEdit.diemly;
            svMang.loaiSinhVien = sinhVienEdit.loaiSinhVien;
            break;

        }
    }


    renderSinhVien(arrSinhVien);
    saveStorage();
    //mở lại control btnluu và masinhvien
    document.querySelector('#maSinhVien').disabled = false;
    document.querySelector('#btnThemSinhVien').disabled = false;
    //reset tất cả input của thẻ form
    document.querySelector('form').reset();


}






function xoaSinhVien(iXoa) {
    console.log(iXoa);
    //Xóa object trog mảng dựa vào index
    arrSinhVien.splice(iXoa, 1);
    // Gọi hàm logic renderSinhVien với mảng sai khi xóa
    renderSinhVien(arrSinhVien);
}




//cách xóa dựa vào mã(các thứ khác) mà không cần dựa vào index trong mảng.
function xoaSinhVienTheoMa(maSinhVienClick) {
    alert(maSinhVienClick);
    var indexDel = -1;
    for (var index = 0; index < arrSinhVien.length; index++) {
        var sinhVien = arrSinhVien[index];
        if (sinhVien.ma === maSinhVienClick) {
            indexDel = index;
            break;
        }
    }
    if (indexDel !== -1) {
        arrSinhVien.splice(indexDel, 1);
        renderSinhVien(arrSinhVien);
    }
}
function saveStorage(arrSinhVien) {
    //B1:xđ được dũ liệu cần lưu là arr, object hay string, bool, number
    var sArrSinhVien = JSON.stringify(arrSinhVien);
    // Biến đổi arrSinhVien => chuỗi
    console.log(sArrSinhVien);
    // B2: đem string arrSinhVien vào local  storage  lưu trữ
    localStorage.setItem('arrSinhVien', sArrSinhVien);
    //lưu dữ liệu vào cookie
    setCookie('arrSInhVien', sArrSinhVien, 30);

}
function getStorage() {
    if (localStorage.getItem('arrSinhVien')) {
        //lấy chuỗi đã lưu trong localStarage gán cho biến stringArrSinhVien
        var stringArrSinhVien = localStorage.getItem('arrSinhVien');
        //chuyển đổi stringArrSinhVien thành object và gán vào arrSinhVien
        arrSinhVien = JSON.parse(stringArrSinhVien);
        console.log(arrSinhVien);
    }
}
//goi ham khi trinh duyet load xong
getStorage();
//gọi hàm render từ hàm dã load
renderSinhVien(arrSinhVien);

/*  */



document.querySelector('#txtTuKhoa').oninput = function () {
    var tuKhoa = document.querySelector('#txtTuKhoa').value.trim();

    tuKhoa = stringToSlug(tuKhoa); //Nguyễn Văn A => nguyen-van-a
    console.log('Từ khoá',tuKhoa);
    var arrSinhVienTK = [];
    for (var index = 0; index < arrSinhVien.length; index++) {
        //Mỗi lần duyệt lấy ra 1 sinh viên
        var sv = arrSinhVien[index];

        if(stringToSlug(sv.ten.trim()).search(tuKhoa) !== -1){
            //Tìm ra tenSinhVien nào chứa từ khoá thì đưa object sinh vien đó vào mảng tìm kiếm
            arrSinhVienTK.push(sv);
        }
    }
    renderSinhVien(arrSinhVienTK);
}