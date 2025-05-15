
import './App.css';
import { useState } from "react";
import { SongList } from "./MyComponents/SongList";
import { AudioPlayer } from "./MyComponents/AudioPlayer";
import { SongInfo } from "./MyComponents/SongInfo";
import { Playlist } from "./MyComponents/Playlist";

function App() {
  const [songs, setSongs] = useState([
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
  ]);

  const [CurrentSongIndex, SetCurrentSongIndex] = useState(0);

  const [playlist, setplaylist] = useState([]);

  const handlenext = () => {
    SetCurrentSongIndex((CurrentSongIndex + 1) % songs.length)
  }

  const handleprev = () => {
    SetCurrentSongIndex((CurrentSongIndex - 1 + songs.length) % songs.length)
  }

  const addToPlaylist = (song) => {
    if (!playlist.some((s) => s.title === song.title)) {
      setplaylist([...playlist, song]);
    }
    else {
      alert("Song is already in the playlist");
    }
  }

  const addSongByName = (title) => {
    const trimmedTitle = title.trim();
    const song = songs.find((s) => s.title.trim().toLowerCase() === title.toLowerCase());
    if (song) {
      addToPlaylist(song);
    }
    else {
      alert("Song is not available!!");
      console.log("User typed:", `"${trimmedTitle}"`);
      console.log("Available songs:", songs.map((s) => `"${s.title}"`));
    }
  }

  const removeFromPlaylist = (songToRemove) => {
    setplaylist(playlist.filter(song => song.title !== songToRemove.title));
  };


  return (
    <div className="App">
      <h1>Music App</h1>
      {/* this will contain song information */}
      <SongInfo song={songs[CurrentSongIndex]} />
      {/* This will handle buttons for previous and next song, additionally all the playing things. */}
      <AudioPlayer
        currentSong={songs[CurrentSongIndex]}
        onNext={handlenext}
        onPrev={handleprev}
      />
      {/* This will contain the list of songs, songs are clickable and it will contain an add button which will directly add song to playlist */}
      <SongList songs={songs} onSelectSong={SetCurrentSongIndex} onAddToPlaylist={addToPlaylist} />
      {/* To add songs in the playlist,display playlist and remove songs from playlist */}
      <Playlist addSongByName={addSongByName}
        playlist={playlist}
        removeFromPlaylist={removeFromPlaylist}
        onSelectSong={SetCurrentSongIndex} />

    </div>
  );
}

export default App;
