import React, { useState } from 'react'

export const Playlist = ({ addSongByName, playlist, removeFromPlaylist, handleSelectedSong,toggleLike,likedsongs }) => {

    const [title, setTitle] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        addSongByName(title);
        setTitle("");
    }

    return (
        <div className="container my-3">
            <h3>Add song to playlist</h3>
            <form onSubmit={submit}>
                <input
                    type="text"
                    placeholder="Enter the song name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit">Add to playlist</button>
            </form>

            <h3>Your Playlist</h3>
            {playlist.length === 0 ? (
                <p>No songs in playlist</p>
            ) : (
                playlist.map((song, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', cursor: "pointer" }}>
                        <span onClick={() => handleSelectedSong(song)}>
                            {index + 1}. {song.title} — {song.artist}
                        </span>
                        <div>
                        {removeFromPlaylist && (
                            <button onClick={() => removeFromPlaylist(song)}>Remove</button>
                        )}
                        <button onClick={() => toggleLike(song)}>
                        {likedsongs.some(s => s.title === song.title) ? "💔" : "❤️"}
                        </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}
