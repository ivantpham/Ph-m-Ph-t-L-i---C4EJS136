function numberOneTriangle() {
    let number = document.getElementById('input').value
    let myArray = '';
    if(number > 10) {
        alert("Chỉ nhập số trong khoảng 1 đến 10");
    } else {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    for (let i = 0; i < number; i++) {
        myArray += '*';
        let newDiv = document.createElement('div');
        newDiv.innerHTML = myArray;
        resultDiv.appendChild(newDiv);
    }
    if(number <1 && number > 10) {
        alert("Chỉ nhập số trong khoảng 1 đến 10");
    }
    }
}