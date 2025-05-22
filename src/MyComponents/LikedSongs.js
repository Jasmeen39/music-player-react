import React from 'react'

export const LikedSongs = ({likedsongs,handleSelectedSong,toggleLike}) => {
  return (
    <div className="Container my-3">
      <h3>Liked songs</h3>
      {likedsongs.length === 0 ? (
        <p>No liked songs yet</p>
      ) : (
        likedsongs.map((song, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span onClick={() => handleSelectedSong(song)} style={{ cursor: "pointer" }}>
              {index + 1}. {song.title} — {song.artist}
            </span>
            <button onClick={() => toggleLike(song)}>💔</button>
          </div>
        ))
      )}
    </div>
  )
}
