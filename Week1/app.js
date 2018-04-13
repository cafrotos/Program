var checkString = (num, numCheck) => {
    let stringNum = "" + num;
    let sResult = "";

    if(numCheck == 3) sResult = "fizz";
    else sResult = "buzz";

    if(num % numCheck == 0 || stringNum.search(numCheck) != -1) return sResult;
    else return "";
}

var fizzbuzz = num => {
    let stringResult = "";

    for(let i = 0; i <= num; i++){
        let stringTest = "";
        let strNumin3 = checkString(i, 3);
        let strNumin5 = checkString(i, 5);

        if(strNumin3 == "" && strNumin5 == "")
            stringTest = stringTest + i;
        else 
            stringTest = stringTest + checkString(i, 3) + checkString(i, 5);

        stringResult = stringResult + stringTest + " ";
    }
    return stringResult;

}

module.exports.func = fizzbuzz;