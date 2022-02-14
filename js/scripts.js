function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQuality = document.getElementById('serviceQuality').value;
    let people = document.getElementById('people').value;

    if (bill == '' | serviceQuality == 0) {
        alert('Por favor, preencha todos os campos.')
        return;
    }

    if (people == '' | people <= 1) {
        people = 1;
        document.getElementById('eachPeople').style.display = "none"
    } else {
        document.getElementById('eachPeople').style.display = "block"
    }
    
    let total = (bill * serviceQuality) / people;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('eachPeople').style.display = "none";

document.getElementById('formTips').addEventListener('submit', calculateTip);