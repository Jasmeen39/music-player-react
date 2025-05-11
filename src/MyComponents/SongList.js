import React from 'react'

export const SongList = (props) => {
  return (
    <div className="Container">
        <h3>Song List</h3>
        {props.songs.length===0? "No Songs Available":
         props.songs.map((song,index)=>(
            <div key={index}>
                {index+1}.{song.title} By {song.artist}
            </div>
         ))
        }
    </div>
  )
}
