import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colors";
import { Cell } from "../Cell";
import blackLogo from '../../assets/black-king.svg';
import whiteLogo from '../../assets/white-king.svg';

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false;
        
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                if (target.y === this.cell.y + i && target.x === this.cell.x + j) return true;
            }
        }
        return false;
    }
}