/* --------------- Bài 1 --------------- */
/* Ngày trước ngày nhập */
/*
    Tìm ngày trước ngày vừa nhập giả sử nhập đúng (không cần kiểm tra hợp lệ)
    Bước 1: Đầu vào
        Ngày vừa nhập: day
        Tháng vừa nhập: month
        Năm vừa nhập: year
    Bước 2: Xử lý
        Xử lý switch của month
            case 1:
                nếu ngày lơn hơn 1 -> day = day - 1
                ngược lại -> sẽ là ngày 31 tháng 12 của năm trước đó
            case 3:
                nếu ngày lơn hơn 1 -> day = day - 1
                ngược lại
                    nếu là năm nhuận -> day = 29; month -= 1; (ngày 29 tháng 2) 
                    không phải năm nhuận -> day = 28; month -= 1; (ngày 28 tháng 2)
            case 8: 
                nếu ngày lơn hơn 1 -> day = day - 1
                ngược lại -> day = 31; month -= 1; (ngày 31 tháng 7)
            case 5,7,10,12:
                nếu ngày lơn hơn 1 -> day = day - 1
                ngược lại -> day = 30; month -= 1; (ngày 30 của tháng trước đó)
            case 2,4,6,9,11:
                nếu ngày lơn hơn 1 -> day = day - 1
                ngược lại -> day = 31; month -= 1; (ngày 31 của tháng trước đó)
    Bước 3: kết quả
        In kết quả ngày tháng năm của ngày trước đó

*/
document.getElementById("dayBefore").onclick = function () {
    var day = +document.getElementById("day").value;
    var month = +document.getElementById("month").value;
    var year = +document.getElementById("year").value;
    switch (month) {
        case 1:
            if (day >= 2) {
                day -= 1;
            }
            else {
                day = 31;
                month = 12;
                year -= 1;
            }
            break;
        case 3:
            if (day >= 2) {
                day -= 1;
            }
            else {
                if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
                    day = 29;
                    month -= 1;
                }
                else {
                    day = 28;
                    month -= 1;
                }
            }
            break;
        case 8:
            if (day >= 2) {
                day -= 1;
            }
            else {
                day = 31;
                month -= 1;
            }
            break;
        case 5:
        case 7:
        case 10:
        case 12:
            if (day >= 2) {
                day -= 1;
            }
            else {
                day = 30;
                month -= 1;
            }
            break;
        case 2:
        case 4:
        case 6:
        case 9:
        case 11:
            if (day >= 2) {
                day -= 1;
            }
            else {
                day = 31;
                month -= 1;
            }
            break;
        default:
            break;

    }
    document.getElementById("result__bai1").innerHTML = `ngày: ${day} - tháng: ${month} - năm: ${year}`;
}

/* Ngày sau ngày nhập */
/*
    Tìm ngày sau ngày vừa nhập giả sử nhập đúng (không cần kiểm tra hợp lệ)
    Bước 1: Đầu vào
        Ngày vừa nhập: day
        Tháng vừa nhập: month
        Năm vừa nhập: year
    Bước 2: Xử lý
        Xử lý switch của month
            case 1,3,5,7,8,10:
                nếu ngày nhỏ hơn hoặc bằng 30 -> day = day + 1 (ngày tiếp theo)
                ngược lại -> day = 1; month -= 1; (ngày 1 của tháng sau)
            case 12:
                nếu ngày nhỏ hơn hoặc bằng 30 -> day = day + 1 (ngày tiếp theo)
                ngược lại -> day = 1; month = 1; year += 1 (ngày 1 tháng 1 của năm sau)
            case 4,6,9,11:
                nếu ngày nhỏ hơn hoặc bằng 29 -> day = day + 1 (ngày tiếp theo)
                ngược lại -> day = 1; month += 1; (ngày 1 của tháng sau)
            case 2:
                nếu là năm nhuận
                    nếu ngày nhỏ hơn hoặc bằng 28 -> day = day + 1 (ngày tiếp theo)
                    ngược lại -> day = 1; month += 1; (ngày 1 của tháng tiếp theo)
                ngược lại không phải là năm nhuận
                    nếu ngày nhỏ hơn hoặc bằng 27 -> day = day + 1 (ngày tiếp theo)
                    ngược lại -> day = 1; month += 1; (ngày 1 của tháng tiếp theo)

    Bước 3: kết quả
        In kết quả ngày tháng năm của ngày sau đó

*/
document.getElementById("dayAfter").onclick = function () {
    var day = +document.getElementById("day").value;
    var month = +document.getElementById("month").value;
    var year = +document.getElementById("year").value;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
            if (day <= 30) {
                day += 1;
            }
            else {
                day = 1;
                month += 1;
            }
            break;
        case 12:
            if (day <= 30) {
                day += 1;
            }
            else {
                day = 1;
                month = 1;
                year += 1;
            }
            break
        case 4:
        case 6:
        case 9:
        case 11:
            if (day <= 29) {
                day += 1;
            }
            else {
                day = 1;
                month += 1;
            }
            document.getElementById("result__bai1").innerHTML = `ngày: ${day} - tháng: ${month} - năm: ${year}`;
            break;
        case 2:
            if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
                if (day <= 28) {
                    day += 1;
                }
                else {
                    day = 1;
                    month += 1;
                }
            }
            else {
                if (day <= 27) {
                    day += 1;
                }
                else {
                    day = 1;
                    month += 1;
                }
            }
            break;
        default:
            break;
    }
    document.getElementById("result__bai1").innerHTML = `ngày: ${day} - tháng: ${month} - năm: ${year}`;

}

/* --------------- Bài 2 --------------- */
/* 
    Bước 1: Đầu vào
        Tháng : thang
        Năm : nam

    Bước 2: Xử lý
        Khởi tạo Switch Case
        các tháng có 31 ngày là 1 3 5 6 8 10 12 => các case tương ứng cũng có 31 ngày
        các tháng có 30 ngày là 4 6 9 11 => các case tương ứng cũng có 30 ngày
        Với tháng 2 
            nêu là năm nhuận thì có 29 ngày (số năm phải chia hết cho 4 và không chia hết cho 100) hoặc (số năm chia hết cho 400)
            Ngược lại không phải năm nhuận thì tháng 2 có 28 ngày 
*/
document.getElementById("btnBai2").onclick = function () {
    var thang = +document.getElementById("thang").value;
    var nam = +document.getElementById("nam").value;
    switch (thang) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("result__bai2").innerHTML = "Có 31 ngày";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("result__bai2").innerHTML = "Có 30 ngày";
            break;
        case 2:
            if ((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0) {
                document.getElementById("result__bai2").innerHTML = "Có 29 ngày";
            }
            else {
                document.getElementById("result__bai2").innerHTML = "Có 28 ngày";
            }
            break;
        default:
            break;
    }
}

/* --------------- Bài 3 --------------- */
/* 
    Bước 1: Đầu vào
        Số tự nhiên có 3 chữ số : number
        Hàng trăm : hangTram
        Hàng chục : hangChuc
        Hàng đơn vị : hangDonVi
        Kết quả đọc chuỗi số : stringNumber
    Bước 2: Xử lý
        Hàng trăm = Math.floor(number / 100);  (Chuỗi số nguyên chia 100)
        Hàng chục = (Math.floor(number / 10)) % 10; (chuỗi số nguyên chia 10, sau đó chia lấy dư cho 10 )
        Hàng đơn vị = number % 10; (chuỗi số nguyên chia lấy dư cho 10)

        +) Xử lý switch hàng trăm
            case = 1,2,3,...9 -> thêm: một trăm, hai trăm, ..... chín trăm; vào chuỗi stringNumber  
        +) Xử lý switch hàng chục
            case = 1,2,3,...9 -> thêm: mười, hai mươi, ba mươi, .... chín mươi; vào chuỗi stringNumber
            case = 0
                nếu hangTram == 0 -> không cần thêm gì vào stringNumber hoặc thêm một chuỗi trống
                ngược lại thêm: "lẻ"; vào stringNumber
        +) Xử lý switch hàng đơn vị
            case = 2,3,4,5,6,7,8,9 -> thêm: hai, ba, bốn, .... tám, chín; vào chuỗi stringNumber
            case = 1
                nếu (hangChuc == 0 hoặc hangChuc == 1)  -> thêm: "một"; vào chuỗi stringNumber
                ngược lại  -> thêm "mốt" vào stringNumber
            case = 0
                nếu (hangTram == 0 và hangChuc == 0) -> gán stringNumber = "không";
                ngược lại -> bỏ chữ "lẻ"; ra khỏi stringNumebr (do không có lẻ không)
    Bước 3: kết quả
        Một chuỗi stringNumber in cách đọc của số tự nhiên vừa nhập

*/
document.getElementById("btnBai3").onclick = function () {
    var number = +document.getElementById("number").value;
    var hangDonVi = number % 10;
    var hangChuc = (Math.floor(number / 10)) % 10;
    var hangTram = Math.floor(number / 100);
    var stringNumber = "";
    switch (hangTram) {
        case 0:
            stringNumber += "";
            break;
        case 1:
            stringNumber += "Một trăm ";
            break;
        case 2:
            stringNumber += "Hai trăm ";
            break;
        case 3:
            stringNumber += "Ba trăm ";
            break;
        case 4:
            stringNumber += "Bốn trăm ";
            break;
        case 5:
            stringNumber += "Năm trăm ";
            break;
        case 6:
            stringNumber += "Sáu trăm ";
            break;
        case 7:
            stringNumber += "Bảy trăm ";
            break;
        case 8:
            stringNumber += "Tám trăm ";
            break;
        case 9:
            stringNumber += "Chín trăm ";
            break;
        default:
            break;
    }
    switch (hangChuc) {
        case 0:
            if (hangTram == 0) {
                stringNumber += "";
            }
            else {
                stringNumber += "lẻ ";
            }
            break;
        case 1:
            stringNumber += "mười ";
            break;
        case 2:
            stringNumber += "hai mươi ";
            break;
        case 3:
            stringNumber += "ba mươi ";
            break;
        case 4:
            stringNumber += "bốn mươi ";
            break;
        case 5:
            stringNumber += "năm mươi ";
            break;
        case 6:
            stringNumber += "sáu mươi ";
            break;
        case 7:
            stringNumber += "bảy mươi ";
            break;
        case 8:
            stringNumber += "tám mươi ";
            break;
        case 9:
            stringNumber += "chín mươi ";
            break;
        default:
            break;
    }
    switch (hangDonVi) {
        case 0:
            if (hangChuc == 0 && hangTram == 0) {
                stringNumber = "không";
            }
            else {
                stringNumber = stringNumber.replace(/\s*lẻ\s*/g, '');
            }
            break;
        case 1:
            if (hangChuc == 0 || hangChuc == 1) {
                stringNumber += "một";
            }
            else {
                stringNumber += "mốt";
            }
            break;
        case 2:
            stringNumber += "hai";
            break;
        case 3:
            stringNumber += "ba";
            break;
        case 4:
            stringNumber += "bốn";
            break;
        case 5:
            if (hangChuc == 0) {
                stringNumber += "năm";
            }
            else {
                stringNumber += "lăm";
            }
            break;
        case 6:
            stringNumber += "sáu";
            break;
        case 7:
            stringNumber += "bảy";
            break;
        case 8:
            stringNumber += "tám";
            break;
        case 9:
            stringNumber += "chín";
            break;
        default:
            break;
    }
    document.getElementById("result__bai3").innerHTML = stringNumber
}

/* --------------- Bài 4 --------------- */
/*
    Bước 1: Đầu vào
        Tọa độ nhà của sinh viên 1: x1, y1
        Tọa độ nhà của sinh viên 2: x2, y2
        Tọa độ nhà của sinh viên 3: x3, y3
        Tọa độ trường: xt, yt
        Khoảng cách từ nhà sinh viên 1 tới trường: khoangCachSv1Truong
        Khoảng cách từ nhà sinh viên 2 tới trường: khoangCachSv2Truong
        Khoảng cách từ nhà sinh viên 3 tới trường: khoangCachSv3Truong
        Khoảng cách lớn nhất từ nhà tới trường của 3 sinh viên: khoangCachMax
    Bước 2: Xử lý
        Tính khoảng cách từ nhà tới trường của 3 sinh viên dùng công thức  √(x2^2 - x1^2) + √(y2^2 - y1^2) 
            khoangCachSv1Truong = Math.sqrt(Math.pow(xt, 2) - Math.pow(x1, 2) + Math.pow(yt, 2) - Math.pow(y1, 2));
            khoangCachSv2Truong = Math.sqrt(Math.pow(xt, 2) - Math.pow(x2, 2) + Math.pow(yt, 2) - Math.pow(y2, 2));
            khoangCachSv3Truong = Math.sqrt(Math.pow(xt, 2) - Math.pow(x3, 2) + Math.pow(yt, 2) - Math.pow(y3, 2));
        Tính khoảng cách lớn nhất của 3 khoảng cách trên
            gán khoangCachMax = khoangCachSv1Truong
            if (khoangCachSv2Truong > khoangCachMax ){
                khoangCachMax = khoangCachSv2Truong 
            }
            else if (khoangCachSv3Truong > khoangCachMax){
                khoangCachMax = khoangCachSv3Truong
            }
    Bước 3: Kết quả
        Khoảng cách lớn nhất trong 3 sinh viên tới trường: khoangCachMax
*/
document.getElementById("btnBai4").onclick = function () {
    var x1 = +document.getElementById("x1").value;
    var y1 = +document.getElementById("y1").value;
    var x2 = +document.getElementById("x2").value;
    var y2 = +document.getElementById("y2").value;
    var x3 = +document.getElementById("x3").value;
    var y3 = +document.getElementById("y3").value;
    var xt = +document.getElementById("xt").value;
    var yt = +document.getElementById("yt").value;
    var khoangCachSv1Truong = Math.sqrt(Math.pow(xt, 2) - Math.pow(x1, 2) + Math.pow(yt, 2) - Math.pow(y1, 2));
    var khoangCachSv2Truong = Math.sqrt(Math.pow(xt, 2) - Math.pow(x2, 2) + Math.pow(yt, 2) - Math.pow(y2, 2));
    var khoangCachSv3Truong = Math.sqrt(Math.pow(xt, 2) - Math.pow(x3, 2) + Math.pow(yt, 2) - Math.pow(y3, 2));
    var khoangCachMax;
    var svXaNhat = "Sinh viên 1";
    khoangCachMax = khoangCachSv1Truong;
    if (khoangCachSv2Truong > khoangCachMax) {
        khoangCachMax = khoangCachSv2Truong;
        svXaNhat = "Sinh viên 2";
    }
    else if (khoangCachSv3Truong > khoangCachMax) {
        khoangCachMax = khoangCachSv3Truong;
        svXaNhat = "Sinh viên 3";
    }
    document.getElementById("result__bai4").innerHTML = "Sinh viên ở xa trường nhất là: " + svXaNhat;
}