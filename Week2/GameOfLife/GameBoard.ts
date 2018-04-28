import {Cell} from "./Cell";
import {Randomize} from "../../libs/Randomize";
import {CELL_STATE, THREE_NEIGHBOURS, TWO_NEIGHBOURS} from "./constants";
export class GameBoard {
    private Cells;
    private ROW;
    private COL;

    public constructor(ROW, COL) {
        
        this.Cells = {};
        this.ROW = ROW;
        this.COL = COL;

        for (let row = 0; row < ROW; row++) {
            for (let column = 0; column < COL; column++) {
                this.Cells[`${row}_${column}`] = new Cell(row, column);
            }
        }
    }

    public getStateCell(row, col, state){
        this.Cells[`${row}_${col}`].state = state;
    }

    private getNeighborhoodOfCell(cell:Cell) {
        return cell.friend;
    }

    private calculateState(cell:Cell) {
        let neighbours = this.getNeighborhoodOfCell(cell);

        if (neighbours == TWO_NEIGHBOURS) {
            return cell.state
        } else if (neighbours == THREE_NEIGHBOURS) {
            return CELL_STATE.ALIVE;
        } else {
            return CELL_STATE.DEAD;
        }
    }

    private countFriendCell(cell:Cell){
        let friend = 0;

        for(let x = cell.row - 1; x <= cell.row + 1; x++){
            for(let y = cell.column - 1; y <= cell.column + 1; y++){

                if(x >= 0 && y >= 0 && x!= cell.row && y != cell.column && x < this.ROW && y < this.COL){
                    if(this.Cells[`${x}_${y}`].state == CELL_STATE.ALIVE) friend++;
                
                }
            }
        }
        cell.setFriend(friend);
    }

    private countFriend(){
        for(let index in this.Cells){
            this.countFriendCell(this.Cells[index]);
        }
    }

    private nextGenerationGrid() {
        let stateAfterNext = {};

        for (let index in this.Cells) {
            stateAfterNext[index] = this.calculateState(this.Cells[index]);
        }

        for (let index in this.Cells) {
            this.Cells[index].setState(stateAfterNext[index]);
        }
    }

    private PrintGameboard(){
        for(let row = 0; row < this.ROW; row++){
            let stringResult = "";
            for(let col = 0; col < this.COL; col++){
                if(this.Cells[`${row}_${col}`].getState() == CELL_STATE.ALIVE) stringResult += "o";
                else stringResult += ".";
            }
            console.log(stringResult);
        }
    }

    public run() {
        this.PrintGameboard();
        console.log();
        this.countFriend();
        this.nextGenerationGrid();
        this.PrintGameboard();
    }
}