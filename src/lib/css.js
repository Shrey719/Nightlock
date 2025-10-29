let _nightlockClassCache = null

function nightlockClass() {
    if (!_nightlockClassCache) {
        const alphabetLowercase = "abcdefghijklmnopqrstuvwxyz"
        _nightlockClassCache = Array.from({length: 32}, () => 
            alphabetLowercase[Math.floor(Math.random() * alphabetLowercase.length)]
        ).join('')
    }
    return _nightlockClassCache
}

export { nightlockClass }