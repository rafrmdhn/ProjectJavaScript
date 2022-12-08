// Class Map
class Map {
    constructor(width, height) {
      this.width = width;
      this.height = height;

    }
  
    init() {

    }

    #move(){

    }
  }

// Class Level
  class Level {

    constructor(currentLevel, latestLevel, maxLevel) {
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
//Class Entity
class Entity{
    Constructor(height, width, x,y){
        this.width= width;
        this.height=height;
        this.x=x;
        this.y=y;     
    }
    //Method untuk menyerang
    attack(){
    }
    //Method untuk nergerak ke kanan
    moveRight(){
    }
    //Method untuk bergerak ke kiri
    moveLeft()[
    }
    //Method untuk bergerak ke bawah
    moveDown(){
    }
    //Method untuk bergerak ke atas
    moveUp(){
    }        
}
 
  //Class Monster
  class Monster extends Entity{
    constructor(life, color,effect,type){
        this.life=life;
        this.color=color;
        this.effect=effect;
        this.type=type;
    }
    //Methode untuk bergerak acak
     moveRandom(){
     }
    //Method untuk menyimpan skor
      saveScore(){
      }   
  }     

 // Class Hero
  class Hero {
    constructor(life, score) {
      this.life = life;
      this.score = score;
    }
  
    // Method untuk penambahan skor
    increaseScore() {

    }

    // Method untuk menghitung darah
    calculateLife(){

    }

    // Method untuk menyimpan skor
    saveScore(){

    }
  }
