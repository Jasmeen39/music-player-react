
import './App.css';
import { useState } from "react";
import { Header } from "./MyComponents/Header";
import { Home } from "./Pages/Home";
import { Library } from "./Pages/Library";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  const [songs, setSongs]  = useState([
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
  const [likedsongs, setlikedsongs] = useState([]);

  const handlenext = () => {
    SetCurrentSongIndex((CurrentSongIndex + 1) % songs.length)
  }

  const handleprev = () => {
    SetCurrentSongIndex((CurrentSongIndex - 1 + songs.length) % songs.length)
  }

  const handleSelectedSong = (selectedsong) => {
    const index = songs.findIndex(
      (s) => s.title.trim().toLowerCase() === selectedsong.title.trim().toLowerCase() && s.artist.trim().toLowerCase() === selectedsong.artist.trim().toLowerCase()
    )
    if (index !== -1) {
      SetCurrentSongIndex(index);
    }
    else {
      alert("Song not found.");
    }
  };

  const addToPlaylist = (song) => {
    if (!playlist.some((s) => s.title === song.title)) {
      setplaylist([...playlist, song]);
    }
    else {
      alert("Song is already in the playlist");
    }
  };

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


  const toggleLike = (song) => {
    if (likedsongs.some((s) => s.title === song.title && s.artist === song.artist)) {
      setlikedsongs(likedsongs.filter((s) => s.title !== song.title || s.artist !== song.artist))
    }
    else {
      setlikedsongs([...likedsongs, song])
    }
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <Home
            songs={songs}
            CurrentSongIndex={CurrentSongIndex}
            handlenext={handlenext}
            handleprev={handleprev}
            handleSelectedSong={handleSelectedSong}
            addToPlaylist={addToPlaylist}
            toggleLike={toggleLike}
            likedsongs={likedsongs}
          />
        }
        />

        <Route path="/library" element={
          <Library
          songs={songs}
          CurrentSongIndex={CurrentSongIndex}
          handlenext={handlenext}
          handleprev={handleprev}
            playlist={playlist}
            removeFromPlaylist={removeFromPlaylist}
            handleSelectedSong={handleSelectedSong}
            likedsongs={likedsongs}
            toggleLike={toggleLike}
            addSongByName={addSongByName}
          />
        }

        />

      </Routes>
    </Router>
  );
}

export default App;

