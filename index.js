// Bài 1
var tinhLuong = 0;
document.querySelector('.btn-primary').onclick = function () {
    // nơi xử lí
    var tienLuong = document.getElementById('txt-tienLuong').value;
    console.log(tienLuong);
    var soNgay = document.getElementById('txt-soNgay').value;
    console.log(soNgay);
    tinhLuong = tienLuong * soNgay;
    console.log(tinhLuong);
    document.getElementById('tinhTien').innerHTML = tinhLuong.toLocaleString ({
        style: 'currency',
        currency: 'VNĐ',
    }) + 'VNĐ';
};

// Bài 2
document.querySelector('.btnKetQuaBai2').onclick = function () {
    var soThuc = document.getElementById('txt-soThuc').value;
    console.log(soThuc);
    var hangChucNgan = Math.floor (soThuc / 10000);
    console.log(hangChucNgan);
    var hangNgan = Math.floor ((soThuc % 10000) / 1000);
    console.log(hangNgan);
    var hangTram = Math.floor ((soThuc % 1000) / 100);
    console.log(hangTram);
    var hangChuc = Math.floor ((soThuc % 100) / 10);
    console.log(hangChuc);
    var hangDonVi = Math.floor(soThuc % 10);
    console.log(hangDonVi);
    var tinhTrungBinh = (hangChucNgan+hangNgan+hangTram+hangChuc+hangDonVi) / 5;
    console.log(tinhTrungBinh);
    document.getElementById('ketQuaBai2').innerHTML = tinhTrungBinh
};

// Bài 3
const USD = 24800
var tinhTien = 0;
document.querySelector(".btnKetQuaBai3").onclick = function () {
  var soTien = document.getElementById("txt-soTien").value;
  console.log(soTien);
  tinhTien = soTien*USD
  console.log(tinhTien);
  document.getElementById('ketQuaBai3').innerHTML= tinhTien.toLocaleString({
    style: "currency",
    currency: "VND",
  }) + " VNĐ";
};

// Bài 4
document.querySelector(".btnKetQuaBai4").onclick = function () {
  var chieuRong = +document.getElementById("txt-chieuRong").value;
  console.log(chieuRong);
  var chieuDai = +document.getElementById("txt-chieuDai").value;
  console.log(chieuDai);
  var dienTich = chieuDai * chieuRong;
  console.log(dienTich);
  var chuVi = (chieuDai + chieuRong)*2;
  console.log(chuVi);
  document.getElementById('ketQuaBai4').innerHTML= `Diện tích là ${dienTich} và chu vi là ${chuVi}`
};

// Bài 5
document.querySelector(".btnKetQuaBai5").onclick = function () {
  var kySo = document.getElementById("txt-kySo").value;
  console.log(kySo);
  var hangChuc5 = Math.floor(kySo/10);
  console.log(hangChuc5);
  var hangDonVi5 = kySo % 10
  console.log(hangDonVi5);
  var tinhTong = hangChuc5+hangDonVi5
  console.log(tinhTong);
  document.getElementById('ketQuaBai5').innerHTML = tinhTong
}