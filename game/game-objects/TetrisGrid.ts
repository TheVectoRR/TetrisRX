import {TetrisBlock} from "./TetrisModels";
export class TetrisGrid {

    private _blocks: TetrisBlock[] = [];

    constructor(readonly numOfBlocksWide: number,
                readonly numOfBlocksHigh: number) {
        this._blocks.push(
            {xPos: 0, yPos: 19, color: 'red'},
            {xPos: 1, yPos: 19, color: 'blue'},
            {xPos: 5, yPos: 19, color: 'red'},
            {xPos: 9, yPos: 19, color: 'red'}
        );
    }

    get blocks(): TetrisBlock[] {
        return this._blocks;
    }

    public giveBlocks(blocks: TetrisBlock[]){
        blocks.map(block=>this.blocks.push(block));
    }

    public collisionDetection(blocks: TetrisBlock[]): boolean{
        return blocks.filter((block) => this.collisionDetected(block) || block.yPos > this.numOfBlocksHigh-1).length === 0
    }

    public blockCollisionDetection(blocks: TetrisBlock[]): boolean{
        return blocks.filter(block => this.isBlockAtPosition(block.xPos, block.yPos) || block.yPos > this.numOfBlocksHigh-1).length > 0;
    }

    private collisionDetected(block: TetrisBlock): boolean {
        return block.xPos < 0 || block.xPos > this.numOfBlocksWide-1 || block.yPos > this.numOfBlocksHigh-1 ||
         this.isBlockAtPosition(block.xPos, block.yPos)
    }

    private isBlockAtPosition(x: number, y: number): boolean {
        for (let block of this.blocks) {
            if (block.xPos === x && block.yPos === y) {
                return true;
            }
        }
        return false;
    }
}