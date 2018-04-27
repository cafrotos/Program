import {CELL_STATE} from "./constants";
export class Cell{
    public row;
    public column;
    public state;

    public constructor(row, column, state = CELL_STATE.DEAD) {
        this.row = row;
        this.column = column;
        this.state = state;
    }

    public setState(state) {
        this.state = state;
    }
}