function sumAB() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let sum = 0;
    if(a>=b){
        //Tạo thông báo nếu a lớn hơn hoặc bằng b
        alert("Số a không được lớn hơn số b, xin vui lòng nhập lại");
    }else {
    
        for (let i = a; i <= b; i++) {
            if (isNum(i)) {
                sum += i;
            }
        }
        document.getElementById("result").innerHTML = `Tổng các số nguyên tố ${a} và ${b} sẽ là ${sum}`
    }
}

function isNum(x) {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    var flag = true;
    // x mà bé hơn 2 nghĩa là nó không phải số nguyên tố
    if (x < 2) {
        flag = false;
    }
    else {
        // lặp tiếp từ 2 tới x-1
        for (var i = 2; i < x - 1; i++) {
            if (x % i == 0) {
                flag = false;
            }
        }
    }
    if (flag == true) {
        document.getElementById("checkAB").innerHTML = `${a} và ${b} là số nguyên tố`
    }
    else {
        document.getElementById("checkAB").innerHTML = `${a} và ${b} là số nguyên tố`
    }
    return flag;
}

