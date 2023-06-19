const chainOfCharacters = (text) => {
    let newText = text.split(" ");
  
    console.log(`This text has ${newText.length} words`);
  
    console.log(`The first word is  ${newText[0]}`);
  
    console.log(`The last word is  ${newText[newText.length - 1]}`);
  }
  
  chainOfCharacters(text);