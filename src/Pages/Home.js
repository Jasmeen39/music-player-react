import React from 'react'
import { SongList } from "../MyComponents/SongList";
import { AudioPlayer } from "../MyComponents/AudioPlayer";
import { SongInfo } from "../MyComponents/SongInfo";

export const Home = ({songs,CurrentSongIndex,handlenext,handleprev,handleSelectedSong,addToPlaylist,toggleLike,likedsongs}) => {
    const currentSong = songs[CurrentSongIndex];
    return (
        <div className="App">
            {/* this will contain song information */}
            <SongInfo song={songs[CurrentSongIndex]} />
            {/* This will handle buttons for previous and next song, additionally all the playing things. */}
            <AudioPlayer
                currentSong={songs[CurrentSongIndex]}
                handlenext={handlenext}
                handleprev={handleprev}
            />
            {/* This will contain the list of songs, songs are clickable and it will contain an add button which will directly add song to playlist */}
            <SongList
                songs={songs}
                handleSelectedSong={handleSelectedSong}
                onAddToPlaylist={addToPlaylist}
                toggleLike={toggleLike}
                likedsongs={likedsongs} />
        </div>
    )
}
