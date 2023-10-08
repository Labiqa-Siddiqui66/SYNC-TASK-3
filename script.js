var Is_Playing=true;
const play_music = document.querySelector("audio") //query selector allow us to hold the class music
const play = document.getElementById("play"); //it holds play icon now
//-----Play function -----//
const playmusic = () => { //whenever someone click the play that is convered to "play" by javascript Id seletor so the function call
    Is_Playing=false;
    play_music.play(); 
    //then play_music which contain our music through query selector is play by te built in play function of html 
    play.classList.replace('fa-play', 'fa-pause');
    const select_img = document.querySelector("img"); //query selector return the first child element that matches and that is an image 
    select_img.classList.add("anime");// then we add anime class to the image through select_img
}
// -------Pause function ----//
const pausemusic = () => { //whenever someone click the play that is convered to "play" by javascript Id seletor so the function call
    Is_Playing=true;
    play_music.pause(); 
    //then play_music which contain our music through query selector is play by te built in play function of html 
    play.classList.replace('fa-pause', 'fa-play');
    const select_img = document.querySelector("img"); //query selector return the first child element that matches and that is an image 
    select_img.classList.remove("anime");// then we add anime class to the image through select_img
}
play.addEventListener("click", () => {
    if(Is_Playing){
        playmusic();
    }
    else{
        pausemusic();
    }
})
//now changing the name ,artist, image and song//
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const identity = document.getElementById("name");
const artist = document.getElementById("artist");
const select_img = document.querySelector("img");

// now we are making an array of an object to store all the information
const song_array =[
{
    song:"resource_1",
    title:"BEGGAR",
    artist: "ZITAO",
  
},

{
    song:"resource_2",
    title:"It's you",
    artist: "ALI GATIE",
},
{
    song:"resource_3",
    title:"WAKA WAKA",
    artist: "SHAKIRA",
},
{
    song:"resource_4",
    title:"BABY BABY",
    artist: "JUSTIN BIEBER",
},
{
    
    song:"resource_5",
    title:"TITANIC",
    artist: "CELINE DION"
    
}
]
const displaysongs =(song_array)=>{
    identity.textContent=song_array.title;
    artist.textContent=song_array.artist;
    play_music.src=`${song_array.song}.mp3`;
    select_img.src=`${song_array.song}.jpg`;

}
array_index=0;
const nextSong =()=>{
    array_index=(array_index+1)%song_array.length; //for infinite playing
    displaysongs(song_array[array_index]);//calling the function contain the song object with the current array index 
    playmusic() //for automatically play the music when click
}
const previousSong=()=>{
array_index=(array_index-1 + song_array.length)%song_array.length; //decrement
displaysongs(song_array[array_index]);
playmusic();//for automatically play the music when click

}
next.addEventListener("click", nextSong ); //event listener for next button
previous.addEventListener("click", previousSong );//event listener for previous sont
