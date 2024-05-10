import Phaser from "phaser"



const config: Phaser.Types.Core.GameConfig = {

    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: '',
    scene: {


        preload: preload,
        create: create,
        update: update

    }
};





const game = new Phaser.Game(config);

class SlotMachineGame extends Phaser.Scene {
    private cherries: Phaser.GameObjects.Image;
    private watermelon: Phaser.GameObjects.Image;
    private lemon: Phaser.GameObjects.Image;
    private plum: Phaser.GameObjects.Image;
    private slotmachine: Phaser.GameObjects.Image;


    private spinReel:Phaser.GameObjects.Image;
    private spinReelS:Phaser.GameObjects.Image;
//

    private spinButton:Phaser.GameObjects.Image;

    constructor() {
        super({ key: "SlotMachineGame"})

    }

    


}


function preload ()
{
    this.load.image('cherries', 'assets/cherries.png'); 
    this.load.image('watermelon', 'assets/watermelon.png');
    this.load.image('lemon', 'assets/lemon.png');
    this.load.image('plum', 'assets/plum.png');
    this.load.image('slotmachine', 'assets/slotmachine.png');
    // 
    this.load.image('spinButton', 'assets/spinButton.png');
 

}

function create ()
{
    this.cherries = this.add.image(100,200,"cherries");
    this.watermelon = this.add.image(200,200,"watermelon");
    this.lemon = this.add.image(300,200,"lemon");
    this.plum = this.add.image(400,200,"plum");
    this.slotmachine = this.add.image(500,200,"slotmachine");


    // 

    this.spinButton = this.add.image(400,400, "spinButton,",);
    this.spinButton.setInteractive();
    this.spinButton.on("pointerdown", this.spinReels, this);

    
}



function update ()
{

}

function spinReel (reel: Phaser.GameObjects.Image,duration:number){
    
    this.tweens.add({
        targets: reel,
        y: reel.y + 100,
        duration:duration,
        ease: "Cubic",
        yoyo:true,
        onComplete:() => {

        }

    })
        
    
}
function spinReels () {

    const reelSpinduration = 5000;
    
    this.spinReel(this.cherries, reelSpinduration);
    this.spinReel(this.watermelon, reelSpinduration);
    this.spinReel(this.lemon, reelSpinduration);
    this.spinReel(this.plum, reelSpinduration);
    this.spinReel(this.slotmachine, reelSpinduration);

}


