class Form{
    constructor(){
      this.title=createElement('h2')
      this.input=createInput('enter your name')
      this. button=createButton('play')
      this. greeting=createElement('h3')
    }
    hide(){
      this.greeting.hide()
      this.input.hide()
      this.button.hide()
    }
    display(){
      
      this.title.html("carRacingGame")
      this.title.position(130,0)
     
      this.input.position(130,60)
      
      this.button.position(250,200)
      this.button.mousePressed(()=>{//lamda operator , arrow function
          this.input.hide();
         this. button.hide();
          player.name=this.input.value();
          playerCount+=1
          player.index = playerCount;
          console.log(playerCount)
          player.update()
          player.updateCount(playerCount)
     
     this.greeting.html("hello "+player.name)
     this.greeting.position(130,160)
      })

    }

}