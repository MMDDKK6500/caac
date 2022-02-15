const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
let num1;
let num2;
let op;

rl.question("+, -, * or / ? ", ans => {
    if(ans!=="+"&&ans!=="-"&&ans!=="*"&&ans!=="/"){
        console.log("Not an operation!")
        process.exit(1)
    }
    op = ans;
    rl.question("First number: ", fnum1 => {
        num1 = Number(fnum1);
        rl.question("Second number: ", fnum2 => {
            num2 = Number(fnum2);

            switch(op){
                case "+":
                    res = num1 + num2
                    break
                case "-":
                    res = num1 - num2
                    break
                case "*":
                    res = num1 * num2
                    break
                case "/":
                    res = num1 / num2
                    break
                default:
                    console.error("ono")
                    process.exit()
                    break
            }
            if (Number(res) == Number.NaN) process.exit(1)
            console.log(`The result is: ${res}!!!`)
            process.exit(0)
        })

    })

})


