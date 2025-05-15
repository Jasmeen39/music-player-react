import React from 'react'

export const SongInfo = ({song}) => {
  return (
    <div className="SongInfo">
     <strong >Now Playing:</strong>
     <p>Song:{song.title}</p>
     <p>Artist:{song.artist}</p>
    </div>
  )
}
