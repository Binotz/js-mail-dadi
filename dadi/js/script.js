// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

//definizione variabili e elementi DOM
let playerNumber = 0;
let PCNumber = 0;
let msg = '';
const playerNumberText = document.getElementById('player-number');
const pcNumberText = document.getElementById('pc-number');
const playBtn = document.getElementById('play-btn');
const result = document.getElementById('result');

playBtn.addEventListener('click',
function(){
        //al click, genero 2 numeri a caso, per il player e per il pc, tra 1 e 6 inclusi
        playerNumber = Math.floor(Math.random() * 6) + 1;
        PCNumber = Math.floor(Math.random() * 6) + 1;
        //controllo il valore del lancio per decidere il vincitore, o la parità
        if (playerNumber > PCNumber){
            msg = 'Hai vinto, il PC ha perso!';
        } else if(PCNumber > playerNumber){
            msg = 'Il PC ha vinto, hai perso!';
        } else {
            msg = 'Oh oh! Parità!'
        }
        //Mostro il numero del giocatore, del pc e il risultato
        playerNumberText.innerHTML = playerNumber;
        pcNumberText.innerHTML = PCNumber;
        result.innerHTML = msg;
    }
);
