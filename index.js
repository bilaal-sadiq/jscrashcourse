for (let i = 1; i <= 20; ++1) {
    console.log(i)
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} -> Frontend Simplefied`)
    }
    else if (i % 3 === 0) {
        console.log(`${i} -> Frontend`)
    }
    else if (i % 5 === 0) {
        console.log(`${i} -> Simplefied`)
    }
    else {
        console.log(`${i} -> ${i}`)
    }
}