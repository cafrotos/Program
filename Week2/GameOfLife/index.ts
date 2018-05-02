import {GameBoard} from "./GameBoard";
import {Cell} from "./Cell";
import {Randomize} from "../../libs/Randomize";
import {CELL_STATE} from "./constants";


var GamePlay = new GameBoard(10, 10);


GamePlay.getStateCell(4, 4, CELL_STATE.ALIVE)
GamePlay.getStateCell(4, 5, CELL_STATE.ALIVE)
GamePlay.getStateCell(4, 6, CELL_STATE.ALIVE)
GamePlay.run(4);