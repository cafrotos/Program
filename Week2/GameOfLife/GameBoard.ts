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
            for (let column = 0; COL < 10; column++) {
                this.Cells[`${row}_${column}`] = new Cell(row, column, Randomize.randomInt(0, 1));
            }
        }
    }

    public getNeighborhoodOfCell(cell:Cell) {
        return cell.friend;
    }

    public calculateState(cell:Cell) {
        let neighbours = this.getNeighborhoodOfCell(cell);

        if (neighbours == TWO_NEIGHBOURS) {
            return cell.state
        } else if (neighbours == THREE_NEIGHBOURS) {
            return CELL_STATE.ALIVE;
        } else {
            return CELL_STATE.DEAD;
        }
    }

    public countFriendCell(cell:Cell){
        let friend = 0;

        for(let x = cell.row - 1; x <= cell.row + 1; x++){
            for(let y = cell.column - 1; y <= cell.column + 1; y++){

                if(x >= 0 && y >= 0 && x!= cell.row && y != cell.column && x < this.ROW && y < this.COL){
                    if(cell[`${x}_${y}`].state == CELL_STATE.ALIVE) friend++;
                
                }
            }
        }
        cell.setFriend(friend);
    }

    public countFriend(){
        for(let index in this.Cells){
            this.Cells[index].friend = this.countFriendCell(this.Cells[index]);
        }
    }

    public nextGenerationGrid() {
        let stateAfterNext = {};

        for (let index in this.Cells) {
            stateAfterNext[index] = this.calculateState(this.Cells[index]);
        }

        for (let index in this.Cells) {
            this.Cells[index].setState(stateAfterNext[index]);
        }
    }

    public run() {
        this.nextGenerationGrid();
    }
}