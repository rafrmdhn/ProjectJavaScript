let hero, globe;
let layar = 0;
let counter = setInterval(timer, 1000)

function setup(){
    hero = new Hero(245,500,50,50);
    globe = new Map(550, 600);
    globe.init();
}

function draw(){
    if(layar === 0){
        background(220);
        fill('#111');
        text('Click to Start!', 245, 300 );
        hero.life = 15;

    }else if(layar === 1){
        background(220);
        hero.show();
        
        fill('#000');
        text(`Score: ${hero.getScore()}`, 10, 570);
        
        if(hero.life > 0){
            fill('#000')
            text(hero.life + " seconds", 10, 590);
            if(globe.monsters.length === 0){
                fill('#000')
                text("You Won", 10, 590);  
            }
            layar = 1;
        }else if (hero.life >= 15){
            layar = 0;
        }

        for(let plr of hero.bullet){ // Looping untuk Peluru
            plr.show();
        }

        for(let mon of globe.monsters){
            mon.show();
            for(let pler of hero.bullet){
                if(dist(mon.x, mon.y, pler.x, pler.y) < 20){ // Mengecek apakah Posisi Hero dan Monster < dari 20
                    globe.monsters.splice(globe.monsters.indexOf(mon), 1);
                    hero.bullet.splice(hero.bullet.indexOf(pler), 1);
                    hero.increaseScore(); 
                    if(hero.getScore() % 3 == 0){
                        globe.init();
                    }
                }
            }
        }

        
        if (keyIsDown(UP_ARROW)) { 
            hero.moveUp();

        }else if (keyIsDown(DOWN_ARROW)) { 
            hero.moveDown();

        }else if (keyIsDown(LEFT_ARROW)) { 
            hero.moveLeft();

        }else if (keyIsDown(RIGHT_ARROW)) { 
            hero.moveRight();
        }
    }
    else{
        layar = 2;
    }
}

//Class Entity
class Entity{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.bullet = [];
    }

    //Method untuk menyerang
    attack(){
        let blt = new Bullet(hero.x + 25, hero.y)
        this.bullet.push(blt);
    }

    //Method untuk nergerak ke kanan
    moveRight(){ 
        if(this.x < 600){    
            this.x += 5;
