import { TetrisShape } from './tetris-shape';
import { TetrisBlock } from '../tetris-utils';

const SHAPE_COLOR = 'cyan';

export class IShape extends TetrisShape {

    constructor(blocks?: TetrisBlock[]) {
        super();
        if (blocks) {
            this._blocks = blocks;
        } else {
            this._blocks.push(
                { xPos: 5, yPos: -4, color: SHAPE_COLOR },
                { xPos: 5, yPos: -3, color: SHAPE_COLOR },
                { xPos: 5, yPos: -2, color: SHAPE_COLOR },
                { xPos: 5, yPos: -1, color: SHAPE_COLOR }
            );
        }
    }

    private static rotateShape(shape: TetrisShape) {
        switch (shape.rotatePosition) {
            case 0:
                shape.blocks[ 0 ].xPos -= 2;
                shape.blocks[ 0 ].yPos += 2;

                shape.blocks[ 1 ].xPos -= 1;
                shape.blocks[ 1 ].yPos += 1;

                shape.blocks[ 3 ].xPos += 1;
                shape.blocks[ 3 ].yPos -= 1;
                break;
            case 1:
                shape.blocks[ 0 ].xPos += 2;
                shape.blocks[ 0 ].yPos -= 2;

                shape.blocks[ 1 ].xPos += 1;
                shape.blocks[ 1 ].yPos -= 1;

                shape.blocks[ 3 ].xPos -= 1;
                shape.blocks[ 3 ].yPos += 1;
                break;
        }
    }

    public rotate(shape: TetrisShape): void {
        IShape.rotateShape(shape);
        shape.rotatePosition = (shape.rotatePosition + 1) % 2;
    }

    public cloneOfShape(): TetrisShape {
        const shape = new IShape(this.cloneOfBlocks);
        shape.rotatePosition = this.rotatePosition;
        return shape;
    }
}
