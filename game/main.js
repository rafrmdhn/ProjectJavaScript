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
          }
    }
    
    //Method untuk bergerak ke kiri
    moveLeft(){ 
        if(this.x > 0){
            this.x -= 5;
        }
    }
    
    //Method untuk bergerak ke bawah
    moveDown(){ 
        if(this.y < 600){
            this.y += 5;
        }
    }

    //Method untuk bergerak ke atas
    moveUp(){ 
        if(this.y > 0){
            this.y -= 5;
        }
    }
}

// Fungsi menekan Spasi Untuk menembak peluru dan start
function keyPressed() {
    if (keyCode === 32) { 
        hero.attack();
    }
    
    if (keyCode === 32) {
        layar = 1;
        globe.init();
    }
}

// Fungsi timer untuk durasi game
function timer(){ 
    if (hero.life <= 0) {
        clearInterval(counter);   
    } else {
        hero.life = hero.life - 1;
    }
}

// Class Bullet
class Bullet{ 
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    // Menampilkan bentuk peluru
    show(){ 
        fill('#f00');
        ellipse(this.x, this.y, 15,  15);
        this.y -= 5;
        noFill();
    }
}

// Class Hero
class Hero extends Entity{ class 
    constructor(x, y, width, height){
        super(x, y, width, height);
        this.life = 15;
        this.score = 0;
    }

    // Method untuk menampilkan hero
    show(){
        stroke('#ff0');
        rect(this.x, this.y, this.width, this.height);
        fill('#000');
        rect(this.x, this.y, this.width, this.height);
    }

    // Method untuk penambahan skor
    increaseScore(){
        this.score++;
    }

    // Method untuk mendapatkan skor
    getScore(){
        return this.score;
    }

    // Method untuk menghitung darah
    calculateLife(){

    }
                          
    // Method untuk menyimpan skor
    saveScore(){

    }
}

//Class Monster
class Monster extends Entity{
    constructor(x, y, width, height){
        super(x, y, width, height);
        this.life = 0;
        this.color = 0;
        this.effect = 0;
        this.type = random(0,3);
    }

    // Memunculkan Monster dengan bentuk kotak dan 3 tipe warna berbeda
    show(){ 
        stroke(0);
        if(this.type > 2){
            fill('#ff0');
            rect(this.x, this.y, this.width, this.height);
            noFill()
        }else if(this.type > 1 ){
            fill('#f00')
            rect(this.x, this.y, this.width, this.height);
            noFill()
        }else{
            this.color = 1;
            fill('#0f0')
            rect(this.x, this.y, this.width, this.height);
            noFill()
        }
    }

    //Methode untuk bergerak acak
    moveRandoom(){

    }

    //Method untuk menyimpan skor
    saveScore(){

    }

}

// Class Map
class Map{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.monsters = [
            new Monster(50, 50, 50, 50),
            new Monster(150, 50, 50, 50),
            new Monster(250, 50, 50, 50),
            new Monster(350, 50, 50, 50),
            new Monster(450, 50, 50, 50),
            new Monster(50, 150, 50, 50),
            new Monster(150, 150, 50, 50),
            new Monster(250,150, 50, 50),
            new Monster(350,150, 50, 50),
            new Monster(450,150, 50, 50),
        ];
    }
    
    init(){
        createCanvas(this.width, this.height);
    }

    move(){

    }
}

// Class Level
class Level{
    constructor(currentLevel, latestLevel, maxLevel){
        this.currentLevel = currentLevel;
        this.latestLevel = latestLevel;
        this.maxLevel = maxLevel;
    }

    // Method untuk menentukan level
    setLevel() {

    }

    // Method untuk 
    getCurrentLevel() {  

    }
}
