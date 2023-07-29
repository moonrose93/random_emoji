const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");


const emoji = [];//first is empty and then we gonna fill it with the fetched data;

async function getEmoji(){
 let response = await fetch("https://emoji-api.com/emojis?access_key=099df1184ab3c5ed1d47f9681a7824360f42e3de");
 let data = await response.json() //convert response to json
 
for(let i=0; i < 1500; i++)//start from 0 to 1500
  emoji.push({//from the loop we want in the emoji array to be pushed this elements:
    emojiCharacter: data[i].character,
    emojiName: data[i].unicodeName,

  })
}
console.log(emoji);

getEmoji();// when we refersh the page we going to call this function again

btnEl.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random()*emoji.length); //we want to get random number between 0 and 1500,thats why we multily it with the emoji length.
    console.log(randomNum);
    btnEl.innerText = emoji[randomNum].emojiCharacter;//btn innertext will be changed with the emoji character
    emojiNameEl.innerText = emoji[randomNum].emojiName;
})

/*First we fetched the data in the function getEmoji then we created a for loop to decide from where to where we 
want emojis and then and then we pushed the data from 0 to 1500 to the emoji array with the created object for the
character(emojiCharacter) and unicodeName for the emojiName- we pushed just these 2 things in the array emoji from the feched api.
After that on the clicked event function we create a randomNum variable where we will get random emojis from the data all that we do with math floor
and math random and all of that multiplyed by the emoji.length.
Then we manipulate the inner HTML for the btnel and we want on thet place to be showned the emoji random so we call emoji[randomNum].emojiCharacter object we created from the fectched data.
same for the emojNameEl.*/
