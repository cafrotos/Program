const alive = 1;
const dead = 0;

class neiber{
    constructor(stt){
        this.friend;
        this.stt = stt;
    }

    addFriend(friend){
        this.friend = friend;
    }

    Next_generation(){
        if(this.friend < 2 || this.friend > 3) this.stt = dead;
        else if(this.friend == 3 && this.stt == dead) this.stt = alive;
    }

    printf_Stt_Neiber(){
        if(this.stt == alive) return "o";
        else return ".";
    }
}

module.exports = neiber;