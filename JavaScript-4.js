document.getElementById('findNamota').addEventListener('click', function () {
    const getInput = document.getElementById('namota-input-field').value;
    const resultShow = document.getElementById('showNamota');
    // convert string to number
    const number = parseInt(getInput);
    // make condition

    for (let i = 0; i <= number; i++) {
        resultShow.innerText += i + ' x ' + number + ' = ' + i * number + '\n';
    }

})