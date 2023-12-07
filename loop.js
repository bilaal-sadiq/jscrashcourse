/** Write a for-loop that loops through 1 to 20
 * if number is divisble by 3, print "Bilaal"
 * if number is divisble by 5, print "Sadiq"
 * If number is divisble by 3 and 5, print "Bilaal Sadiq"
 * 
 * @example
 * 1 -> 1
 * 2 -> 2
 * 3 -> Bilaal
 * 4 -> 4
 * 5 -> Sadiq
 * ...
 * 15 -> Bilaal Sadiq
 * ...
 * 20 -> Sadiq
 */ 

for (let i = 1; i <= 20; ++i) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} -> Bilaal Sadiq`)
       }
    else if (i % 3 === 0) {
        console.log(`${i} -> Bilaal`)
    }
    else if (i % 5 === 0) {
        console.log(`${i} -> Sadiq`)
    }
    else  {
        console.log(`${i} -> ${i}`)
    }
}

