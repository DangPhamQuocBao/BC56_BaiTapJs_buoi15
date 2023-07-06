console.log("ASddf");

//baitap1:quan ly tuyen sinh

function quanLyTuyenSinh() {
  var khuVuc = document.getElementById("chonKhuVuc").value;
  if (khuVuc == "a") {
    khuVuc = 2;
  } else if (khuVuc == "b") {
    khuVuc = 1;
  } else if (khuVuc == "c") {
    khuVuc = 0.5;
  }
  var doiTuong = document.getElementById("chonDoiTuong").value * 1;
  if (doiTuong == 1) {
    doiTuong = 2.5;
  } else if (doiTuong == 2) {
    doiTuong = 1.5;
  } else if (doiTuong == 3) {
    var doiTuong = 1;
  }
  console.log(khuVuc);
  console.log(doiTuong);
  var diemChuan = document.getElementById("diemTieuChuan").value * 1;
  var diemMon1 = document.getElementById("mon1").value * 1;
  var diemMon2 = document.getElementById("mon2").value * 1;
  var diemMon3 = document.getElementById("mon3").value * 1;
  var diemTong = diemMon1 + diemMon2 + diemMon3;
console.log(diemTong)
  var diemUuTien = (khuVuc + doiTuong)*1;
  console.log(diemUuTien)
  var tongKet = diemTong + diemUuTien;
  if (tongKet >= diemChuan && diemMon1 >0 && diemMon2 >0 && diemMon3 >0 ) {
    document.querySelector("#hienThiKetQua").innerHTML =
      "bạn đã đậu ; " + "so diem: " + tongKet;
  } else {
    document.querySelector("#hienThiKetQua").innerHTML =
      "bạn đã rớt ; " + "so diem: " + tongKet;
  }
  // return tongKet;
}

//bai tap 2 : tinh tien dien

function tienDien() {
  var hoTen = document.getElementById("nhapHoTen").value;
  var soKw = document.getElementById("nhapSoKw").value * 1;
  if (soKw <= 50) {
    var tinhTien = soKw * 500;
  } else if (50 < soKw <= 100) {
    var tinhTien = 50 * 500 + (soKw - 50) * 650;
  } else if (100 < soKw <= 200) {
    var tinhTien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (200 < soKw <= 350) {
    var tinhTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else if (soKw > 350) {
    var tinhTien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  }
  console.log(hoTen);
  console.log(tinhTien);
  document.querySelector("#hienThiTien").innerHTML = "Họ tên : " + hoTen + " " + " Tiền điện phải trả : "  + tinhTien + " VND";
}
document.querySelector("#tinhTienDien").onclick = tienDien;

//baitap3: tinh thue thu nhap ca nhan

function tienThue() {
  var nhapTen = document.getElementById("nhapVaoTen").value;
  var tienThuNhap = document.getElementById("thuNhap").value * 1;
  console.log(tienThuNhap);
  var nguoiPhuThuoc = document.getElementById("soNguoi").value * 1;
  var thuNhapChiuThue = tienThuNhap - 4e6 - 16e5 * nguoiPhuThuoc;

  if (thuNhapChiuThue <= 6e7) {
    var thueThuNhap = (thuNhapChiuThue * 5) / 100;
  } else if ( thuNhapChiuThue  <= 12e7) {
    var thueThuNhap = thuNhapChiuThue *10 / 100;
  } else if (thuNhapChiuThue <= 21e7) {
    var thueThuNhap =
     thuNhapChiuThue * 15 / 100;
  } else if (thuNhapChiuThue <= 384e6) {
    var thueThuNhap =
      thuNhapChiuThue *20 / 100;
  } else if (thuNhapChiuThue <= 624e6) {
    var thueThuNhap =
     thuNhapChiuThue* 25 / 100;
  } else if (thuNhapChiuThue <= 96e7) {
    var thueThuNhap =
      thuNhapChiuThue *30 / 100;
  } else {
    var thueThuNhap =
     thuNhapChiuThue * 35 / 100;
  }
  document.getElementById("hienThiThue").innerHTML =
    "Họ tên : " +
    nhapTen + " ;       Số người phụ thuộc : " + nguoiPhuThuoc +
    " ;       Tiền thuế thu nhập cá nhân :  " +
    thueThuNhap +
    " VND";
}
document.querySelector("#tinhTienThue").onclick = tienThue;

//baitap4

function tinhTienCap() {
  var maKh = document.getElementById("maKH").value;
  var soKenh = document.getElementById("soKenh").value * 1;
  var chonKH = document.getElementById("chonKhach").value;
  var soKetNoi = document.getElementById("soKetNoi").value * 1;
  if (chonKH == "doanhNghiep" && soKetNoi <= 10) {
    var tienCap = 15 + 7.5*soKetNoi + 50 * soKenh;
  } else if (chonKH == "doanhNghiep" && soKetNoi > 10) {
    var tienCap = 15 + 75 + (soKetNoi-10) * 5 + 50 * soKenh;
  } else if (chonKH == "nhaDan") {
    var tienCap = 4.5 + 20.5 + soKenh * 7.5;
  }
  document.querySelector("#hienThiTienCap").innerHTML =
    " Mã khách hàng : " + maKh + ", Tiền cáp : " + "$" + tienCap;
}
function doanhNghiep() {
  var chonKH = document.getElementById("chonKhach").value;
  if (chonKH == "doanhNghiep") {
    console.log("chonKH");
    document.getElementById("soKetNoi").style.display = `block`;
  } else if (chonKH == "nhaDan") {
    document.getElementById("soKetNoi").style.display = `none`;
  }
}
