document.getElementById('checkGrade').addEventListener('click', function () {
    const getInput = document.getElementById('grade-input-field').value;
    const resultShow = document.getElementById('showGrade');
    // convert string to number
    const number = parseInt(getInput);
    // make condition

    if (number >= 80 && number <= 100) {
        resultShow.innerText = 'A+';
    } else if (number >= 70 && number <= 79) {
        resultShow.innerText = 'A';
    } else if (number >= 60 && number <= 69) {
        resultShow.innerText = 'B-';
    } else if (number >= 50 && number <= 59) {
        resultShow.innerText = 'B';
    } else if (number >= 40 && number <= 49) {
        resultShow.innerText = 'C';
    } else if (number >= 33 && number <= 39) {
        resultShow.innerText = 'D';
    } else if (number >= 0 && number <= 32) {
        resultShow.innerText = 'F';
    } else {
        resultShow.innerText = 'Invalid Input';
    }
})