let buttons = document.querySelectorAll('.move');
buttons.forEach(function(button){
    button.onclick = function(){
        let move = button.innerText;
        let cmove;
        let num = Math.random();
        if(0<= num && num<0.33){
            cmove = 'Stone';
        }else if(0.33<= num && num < 0.66){
            cmove = 'Paper';
        }else if(0.66<= num && num <=0.99){
            cmove = 'Scissor';
        }
        
        if(move == cmove){
            alert(`Tie You Choosed ${move} : Computer Choosed ${cmove} `);
        }else if(move == 'Stone' && cmove == 'Paper'){
            alert(`You Lost You Choosed ${move} : Computer Choosed ${cmove} `);
        }else if(move == 'Stone' && cmove == 'Scissor'){
            alert(`You Won You Choosed ${move} : Computer Choosed ${cmove} `);
        }else if(move == 'Paper' && cmove == 'Stone'){
            alert(`You Won You Choosed ${move} : Computer Choosed ${cmove} `);
        }else if(move == 'Paper' && cmove == 'Scissor'){
            alert(`You Lost You Choosed ${move} : Computer Choosed ${cmove} `);
        }else if(move == 'Scissor' && cmove == 'Stone'){
            alert(`You Lost You Choosed ${move} : Computer Choosed ${cmove} `);
        }else if(move == 'Scissor' && cmove == 'Paper'){
            alert(`You Won You Choosed ${move} : Computer Choosed ${cmove} `);
        }

    };
});