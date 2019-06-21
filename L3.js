function cal() {
    let x = parseInt(document.getElementById('x').value)
    let y = parseInt(document.getElementById('y').value)
    let operator = document.getElementById('sel').value
    let result = document.getElementById('result')

    switch (operator) {
        case '+':
            result.innerHTML = x + y
            break;
        case '-':
            result.innerHTML = x - y
            break;
        case '*':
            result.innerHTML = x * y
            break;
        case '/':
            result.innerHTML = `${parseInt(x/y)}...${x%y}`
            break;
    }
}

// let score = parseInt(Math.random()*101)


// let result = score >= 60? "pass":"no pass"

// console.log(score)
// console.log(result)
