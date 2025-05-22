import React from 'react'
import { Playlist } from "../MyComponents/Playlist";
import { LikedSongs } from '../MyComponents/LikedSongs';
import { AudioPlayer } from "../MyComponents/AudioPlayer";
import { SongInfo } from "../MyComponents/SongInfo";

export const Library = ({songs,CurrentSongIndex,handlenext,handleprev,playlist,removeFromPlaylist,handleSelectedSong,likedsongs,toggleLike,addSongByName}) => {
    return (
        <div>
            {/* this will contain song information */}
                        <SongInfo song={songs[CurrentSongIndex]} />
            {/* This will handle buttons for previous and next song, additionally all the playing things. */}
                        <AudioPlayer
                            currentSong={songs[CurrentSongIndex]}
                            handlenext={handlenext}
                            handleprev={handleprev}
                        />
            {/* To add songs in the playlist,display playlist and remove songs from playlist */}
            <Playlist
                addSongByName={addSongByName}
                playlist={playlist}
                removeFromPlaylist={removeFromPlaylist}
                handleSelectedSong={handleSelectedSong}
                toggleLike={toggleLike}
                likedsongs={likedsongs} />
            {/* This will handle liked songs. */}
            <LikedSongs
                likedsongs={likedsongs}
                handleSelectedSong={handleSelectedSong}
                toggleLike={toggleLike}
            />
        </div>
    )
}
