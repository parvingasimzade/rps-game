let game=['r','p','s']
let win=0
let loss=0

document.onkeyup=function(e){
    let comp_choice=game[Math.floor(Math.random()*game.length)]
    let your_choice=e.key;
    your_choice=your_choice.toLowerCase();
    if(your_choice=="p" && comp_choice=="r"){
        win++;
        document.querySelector(".Result").innerHTML="You win"
        
    }
    else if(your_choice=="r" && comp_choice=="p"){
        loss++;
        document.querySelector(".Result").innerHTML="You lose"

    }
    else if(your_choice=="p" && comp_choice=="s"){
        loss++;
        document.querySelector(".Result").innerHTML="You lose"

    }
    else if(your_choice=="s" && comp_choice=="p"){
        win++;
        document.querySelector(".Result").innerHTML="You win"
    }
    else if(your_choice=="s" && comp_choice=="r"){
        loss++;
        document.querySelector(".Result").innerHTML="You lose"

    }
    else if(your_choice=="r" && comp_choice=="s"){
        win++;
        document.querySelector(".Result").innerHTML="You win"

    }
    else{
        document.querySelector(".Result").innerHTML="Please only: 'r', 'p', 's'"

    }
    document.querySelector(".win").innerHTML=win
    document.querySelector(".lose").innerHTML=loss
    document.querySelector(".user").innerHTML=your_choice
    document.querySelector(".comp").innerHTML=comp_choice

}
