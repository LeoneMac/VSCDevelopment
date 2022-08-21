{
    function censorSwearing(){
        const textInput = document.getElementById('censorshipBox');
        const censoredWordBackup = textInput.value;
        let swears = /\bass\b|\bshit\b|\bjerk\b|\bfuck\b|\bfaggot\b|\bcorinthians\b|\bcu\b/gi;
        let userInput = textInput.value;
        let userCensoredOutput = userInput.replace(swears, "****");
        document.getElementById('censorshipBox').value = userCensoredOutput;
        if (swears.test = false){
            let inputValue = censoredWordBackup;
            
            document.getElementById('censorshipBox').value = inputValue;
        }
    }
    
    // function atraso(){
    //     let testRegex = censorSwearing.userInput;
    //     let outputTestRegex = testRegex.value;
    //     console.log(outputTestRegex); 
    //     let delay = 2000;
    //     setTimeout(censorSwearing, delay); 
    // }
}

{
window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        dots: '#dots',
        draggable: true,
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }
      });
  })
}