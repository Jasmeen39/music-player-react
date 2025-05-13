import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import { SongList } from "./MyComponents/SongList";
import { AudioPlayer } from "./MyComponents/AudioPlayer";

function App() {
  const songs = [
    {
      title: "Somewhere Only We Know",
      artist: "Keane",
      source: process.env.PUBLIC_URL + "/songs/Somewhere_only_we_know.mp3"
    },
    {
      title: "Please Please Please",
      artist: "Sabrina",
      source: process.env.PUBLIC_URL + "/songs/Please Please Please.mp3"
    },
    {
      title: "No One Noticed",
      artist: "The Marías",
      source: process.env.PUBLIC_URL + "/songs/No_One_Noticed.mp3"
    }
  ];

  const [CurrentSongIndex,SetCurrentSongIndex]=useState(0);

  const handlenext = () => {
    SetCurrentSongIndex((CurrentSongIndex+1)%songs.length)
  }

  const handleprev = () => {
    SetCurrentSongIndex((CurrentSongIndex-1+songs.length)%songs.length)
  }

  return (
    <div className="App">
      <h1>Music App</h1>
      <p>
        <strong>Now Playing:</strong> {songs[CurrentSongIndex].title} by {songs[CurrentSongIndex].artist}
      </p>
      <audio controls src={songs[CurrentSongIndex].source}
        onEnded={handlenext}
        autoPlay
      ></audio>

     
      <SongList songs = {songs}/>
      <AudioPlayer 
      currentSong= {songs[CurrentSongIndex]}
      onNext={handlenext}
      onPrev={handleprev}
      />

    </div>
  );
}

export default App;
