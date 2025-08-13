const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('YOUR FAKE DATA HERE');
            }
            reject('Request Error!');
        }, 1000)
    })
}

fakeRequest('/dogs/1')
    .then((data) => {
        console.log("DONE WITH REQUEST!")
        console.log('data is:', data)
    })
    .catch((err) => {
        console.log("OH NO!", err)
    })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))

// =====================

const sing = async () => {
    throw "OH NO, PROBLEM!"
    return 'LA LA LA LA'
}

sing()
    .then(data => {
        console.log("PROMISE RESOLVED WITH:", data)
    })
    .catch(err => {
        console.log("OH NO, PROMISE REJECTED!")
        console.log(err)
    })

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'corgifeetarecute') return 'WELCOME!'
    throw 'Invalid Password'
}

login('todd', 'corgifeetarecute')
    .then(msg => {
        console.log("LOGGED IN!")
        console.log(msg)
    })
    .catch(err => {
        console.log("ERROR!")
        console.log(err)
    })

const delayedColorChange2 = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

async function rainbow() {
    await delayedColorChange2('red', 1000)
    await delayedColorChange2('orange', 1000)
    await delayedColorChange2('yellow', 1000)
    await delayedColorChange2('green', 1000)
    await delayedColorChange2('blue', 1000)
    await delayedColorChange2('indigo', 1000)
    await delayedColorChange2('violet', 1000)
    return "ALL DONE!"
}

async function printRainbow() {
    await rainbow();
    console.log("END OF RAINBOW!")
}

printRainbow();

const fakeRequest2 = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 2000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest2('/page1');
        console.log(data1);
        let data2 = await fakeRequest2('/page2');
        console.log(data2);
    } catch (e) {
        console.log("CAUGHT AN ERROR!")
        console.log("error is:", e)
    }
}

// =====================

const delayedColorChange3 = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

delayedColorChange3('red', 1000, () => {
    delayedColorChange3('orange', 1000, () => {
        delayedColorChange3('yellow', 1000, () => {
            delayedColorChange3('green', 1000, () => {
                delayedColorChange3('blue', 1000, () => {

                })
            })
        })
    })
});

// =====================

console.log("Sending request to server!")
setTimeout(() => {
    console.log("Here is your data from the server...")
}, 3000)
console.log("I AM AT THE END OF THE FILE!")

// =====================

const multiply = (x, y) => x * y;
const square = x => multiply(x, x);
const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
)
console.log("BEFORE")
isRightTriangle(3, 4, 5)
console.log("DONEEEE!")