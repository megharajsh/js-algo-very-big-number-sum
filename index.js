// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Algorithms - A Very Big Numbers Sum</h1><hr>`;

var bigNumbers = ['157623456789098765432123456789012343212', '987123456789098765432123456789012343212', '987123456789098765432112123456789012343212', '95433123456789098765432123456789012343212', '908123456789098765432123456789012343212']
appDiv.innerHTML+= `<br>A Very Big Numbers Input<br>`;
appDiv.innerHTML+= `A. ${bigNumbers[0]}<br>B. ${bigNumbers[1]}<br>C. ${bigNumbers[2]}<br>D. ${bigNumbers[3]}<br>E. ${bigNumbers[4]}<br>`

function aVeryBigSum(ar) {
    let sumStr = '0';
    for(let count=0; count< ar.length; count++) {
        console.log(`Item ${count+1}: ${ar[count]}`);
        console.log(`Sum: ${sumStr}`);
        let itemStr = ar[count].split('').reverse();
        sumStr = sumStr.split('').reverse();
        let maxStrLength = sumStr.length > itemStr.length ? sumStr.length : itemStr.length;

        let resultArr = [];
        let carry = 0;
        let sumNum = 0, numRem = 0;
        for (let count=0; count<maxStrLength; count++) {
            const numA = itemStr.length > count ? parseInt(itemStr[count]) : 0;
            const numB = sumStr.length > count ? parseInt(sumStr[count]) : 0;
            sumNum = carry + numA + numB;
            numRem = (sumNum)%10;
            carry = (sumNum) > 9 ? 1 : 0;
            resultArr.push(numRem.toString());

            if (count === maxStrLength-1 && sumNum > 9) {
              resultArr.push('1');
            } 
        }
        sumStr = resultArr.reverse().join('')
    }
    return sumStr;
}

appDiv.innerHTML+= `<br>Result: ${aVeryBigSum(bigNumbers)} `;