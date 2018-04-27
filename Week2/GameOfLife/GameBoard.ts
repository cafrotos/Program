import {Cell} from "./Cell";
import {Randomize} from "../../libs/Randomize";
import {CELL_STATE, THREE_NEIGHBOURS, TWO_NEIGHBOURS} from "./constants";
export class GameBoard {
    private Cells;

    public constructor() {
        //mặc định 10x10
        this.Cells = {};

        for (let row = 0; row < 10; row++) {
            for (let column = 0; column < 10; column++) {
                this.Cells[`${row}_${column}`] = new Cell(row, column, Randomize.randomInt(0, 1));
            }
        }
    }

    public getNeighborhoodOfCell(cell:Cell) {
        return 0;
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