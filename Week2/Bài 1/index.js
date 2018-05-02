"use strict";

const alive = 1;
const dead = 0;
const dead_aaa = "BBB";

class neiber{
    constructor(stt){
        this.friend;
        this.stt = stt;
    }

    updateStatus(STT){
        this.stt = STT;
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


class village{
    constructor(House){
        this.House = [House];
    }

    God_of_alive(){
        for (let x = 0; x < this.House.length; x++) {
            this.House[x] = [this.House.length];
            for (let y = 0; y < this.House[x].length; y++) {
                this.House[x].push([new neiber(dead)]);
            }
        }
    }

    LiveorDead(neiberX, neiberY, STT){
        this.House[neiberX][neiberY].updateStatus(STT);
    }

    cout_Friend(x, y){
        let friend = 0;
        for(let i = x - 1; i <= x + 1; i++){
            for(let j = y - 1; j <= y + 1; i++){
                if(x >= 0 && x < this.House.length && y >= 0 && y < this.House.length){
                    if(this.House[i][j].stt == alive) friend++;
                    if(this.House[x][y].stt == alive) friend--;
                }
            }
        }
        return friend;
    }

    Friend_Having(){
        for (let x = 0; x < this.House.length; x++) {
            for (let y = 0; y < this.House[x].length; y++) {
                let friend = this.cout_Friend(x, y)
                addFriend(friend);
            }
        }
    }

    village_nextGenernation(){
        for(let x = 0; x < this.House.length; x++){
            for(let y = 0; y < this.House.length; y++){
                this.House[x][y].Next_generation();
            }
        }
    }

    Print_Village(){
        for(let x = 0; x < this.House.length; x++){
            let stringStt;
            for(let y = 0; y < this.House.length; y++){
                stringStt = StringStt + this.House[x][y].printf_Stt_Neiber();
            }
            console.log(stringStt);
        }
    }
}


var Village = new village(4);
Village.God_of_alive();
Village.Print_Village();
