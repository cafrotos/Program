const OPEN = false;
const CLOSE = true;

var SttDoor = num => {
    let door = [];
    let stringResulr = "";
    
    for(let i = 1; i <= 100; i++){
        door[i] = CLOSE;
    }

    for(let i = 1; i <= num; i++){
        for(let j = i; j <= num; j = j + i){
            door[j] = !door[j];
        }
    }

    for(let i = 1; i <= num; i++){
        if(door[i]) stringResulr = stringResulr + "close ";
        else stringResulr = stringResulr + "open ";
    }
    return stringResulr;
}

module.exports.SttDoor = SttDoor;
