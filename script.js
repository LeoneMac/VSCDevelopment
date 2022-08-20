{
    function censorSwearing(){
        // Here we call the text area implemented that will receive the user input
        const textInput = document.getElementById('censorshipBox');
        // With / we can start the regular expression, separating our prohibited words with | and ending
        // the list with / again, '\b' tells that swears are only the whole words, the 'gi' flags tell that
        // our list is global and case insensitive, so ass and Ass are both censored
        let swears = /\bass\b|\bshit\b|\bjerk\b|\bfuck\b|\bfaggot\b|\bcorinthians\b/gi;
        // Declaring the variable that get the textarea value 
        let userInput = textInput.value;
        // Declaring the variable that search for any bad words in our regex and replace them with "****"
        let userCensoredOutput = userInput.replace(swears, "****");
        // Here we get the textarea again and implement the previous variable
        document.getElementById('censorshipBox').value = userCensoredOutput;
    }
}

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