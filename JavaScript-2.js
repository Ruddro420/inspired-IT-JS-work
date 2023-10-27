document.getElementById('checkEvenOdd').addEventListener('click', function () {
    const getInput = document.getElementById('input-field').value;
    const resultShow = document.getElementById('showResult');
    // convert string to number
    const number = parseInt(getInput);
    if (number % 2 === 0) {
        resultShow.innerText = 'Even';
    } else {
        resultShow.innerText = 'Odd';
    }
})