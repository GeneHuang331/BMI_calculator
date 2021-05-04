document.querySelector('.submit-result').addEventListener('click', calculateBMI, false);

function calculateBMI() {
    let height = document.querySelector('.height').value;
    let weight = document.querySelector('.weight').value;
    if (height == '' || weight == '') {
        alert('請勿為空');
        return;
    }
    if (isNaN(height) || isNaN(weight)) {
        alert('請輸入身高體重')
        return;
    }
    let bmi = weight / Math.pow(height, 2);
    alert(bmi);
}