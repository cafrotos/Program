import {CELL_STATE} from "./constants";
export class Cell{
    public row;
    public column;
    public state;
    public friend;

    public constructor(row, column, state = CELL_STATE.DEAD, friend = 0) {
        this.row = row;
        this.column = column;
        this.state = state;
        this.friend = friend;
    }

    public setState(state) {
        this.state = state;
    }

    public setFriend(friend){
        this.friend = friend;
    }

    public getState(){
        return this.state;
    }
}