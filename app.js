
let search= document.querySelector("#search");
search.addEventListener("change",()=>{
let searchedText=search.value;
console.log(searchedText);
if(searchedText!==""){
getGame(searchedText);
}
});






let loader= document.querySelector(".loader");
loader.style.display = "none";
let bgimg=document.querySelector(".bgimg");
let gameDesc=document.querySelector(".game-desc");
gameDesc.style.display="none";
if(bgimg.hasChildNodes()){
  console.log("yes it  does");
}










async function getGame(userInputId) {
  gameDesc.style.display="none";

  let newImage=document.createElement("img");
  let newDesc=document.createElement("p");
  loader.style.display="block";
  
  // bgimg.removeChild();
  
if(bgimg.hasChildNodes()){
  console.log("yes it  does");
  bgimg.removeChild(bgimg.childNodes[0]);
}
if(gameDesc.hasChildNodes()){
  console.log("yes it  does");
  gameDesc.removeChild(gameDesc.childNodes[0]);
}

  
  let appropriateId= userInputId.replace(/\s+/g, ' ').trim().replaceAll(" ","").toLowerCase();
  console.log(appropriateId);
  let newvar=`https://api.rawg.io/api/games/${appropriateId}?key=a3b24be3d7b44831aabc8d4ce1d805cc`;
  let newvar2 = await axios.get(newvar);
  console.log(newvar2);  
  if(newvar2.data.redirect==true)
  {
    console.log("damn man");
    let trueName=newvar2.data.slug;
    getGame(trueName);
  }
  else{

  
  newImage.src=newvar2.data.background_image;
  bgimg.appendChild(newImage);

  newDesc.innerHTML=newvar2.data.description;
  gameDesc.appendChild(newDesc);
  loader.style.display = "none";
  gameDesc.style.display="flex";
  }
};



