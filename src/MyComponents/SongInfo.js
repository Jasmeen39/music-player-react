import React from 'react'

export const SongInfo = ({song}) => {
    if (!song) {
        return (
          <div className="SongInfo">
            <strong>Now Playing:</strong>
            <p>No song selected.</p>
          </div>
        );
      }
  return (
    <div className="SongInfo">
     <strong >Now Playing:</strong>
     <p>Song: {song.title}</p>
     <p>Artist: {song.artist}</p>
    </div>
  )
}
