// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

//definizione variabili e elementi DOM
const emailList = [
    'pippo@gmail.com', 
    'pluto@gmail.com', 
    'paperiiiiiiino@gmail.com',
    'riccardo@gmail.com',
    'paolo@gmail.com',
    'massimo@gmail.com',
    'alessandro@gmail.com'];
    const emailInput = document.getElementById('email-input');
    const submitBtn = document.getElementById('submit-btn');
    const emailCheck = document.getElementById('email-check');
    let emailSubmitted = '';
    let emailFound = false;
    let msg = '';
    
    submitBtn.addEventListener('click',
    function(){
        //alcuni reset nel caso in cui l'utente inserisca nuovamente altre email
        emailFound = false;
        emailCheck.innerHTML = '';
        msg = 'email non trovata!';
        //al click, recupero l'input 
        emailSubmitted = emailInput.value;
        //forzo la stringa in minuscolo per evitare typo
        emailSubmitted = emailSubmitted.toLowerCase();
        //scorro la lista per vedere se è presente
        for (let i = 0; i < emailList.length; i++){
            //piglio l'email corrente
            currentEmail = emailList[i];
            //se l'input dell'utente corrisponde all'email corrente, cambio il flag a trovato (true)
            if(emailSubmitted === currentEmail){
                emailFound = true;
                msg = `Benvenuto ${emailSubmitted}`
            }
        }
        //stampo il messaggio di benvenuto o no, in base al risultato del flag
        emailCheck.innerHTML = msg;
    });
    