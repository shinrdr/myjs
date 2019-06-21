let count = 0;
function colorChange() {

    let a = document.getElementById('a')
    let b = document.getElementById('b')
    let c = document.getElementById('c')
    let d = document.getElementById('d')
    let e = document.getElementById('e')
    let f = document.getElementById('f')
    let g = document.getElementById('g')
    let h = document.getElementById('h')
    let i = document.getElementById('i')
    let j = document.getElementById('j')
    let k = document.getElementById('k')
    let l = document.getElementById('l')
    let m = document.getElementById('m')
    let n = document.getElementById('n')
    let o = document.getElementById('o')
    let p = document.getElementById('p')
    let q = document.getElementById('q')
    let r = document.getElementById('r')
    let s = document.getElementById('s')
    let t = document.getElementById('t')
    let u = document.getElementById('u')
    let v = document.getElementById('v')

    const ans = parseInt(Math.random()*21)
    let arr = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v]
    if (count >= arr.length) {
        arr[21].removeAttribute('bgcolor')
        count = 0

    }

    arr[count].setAttribute('bgcolor', 'gray')
    if (count > 0) {
        arr[count - 1].removeAttribute('bgcolor')

    }
    
    count++;

}

var a = setInterval(colorChange,100)

