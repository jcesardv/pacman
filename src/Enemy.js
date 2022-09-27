export default class Enemy{
    constructor(x , y, tileSize , velocity , tilemap){
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.velocity = velocity;
        this.tilemap = tilemap;

        this.#loadImages()
    }
    draw(){}

    #loadImages(){
        this.normalGhost = new Image();
        this.normalGhost.src = "../images/ghost.png";

        this.scaredGhost = new Image();
        this.scaredGhost.src = "../images/ghost.png";

        this.scaredGhost2 = new Image();
        this.scaredGhost2.src = "../images/ghost.png";

        this.image = this.normalGhost;

     
    }

}