import React from 'react'

export const SongList = ({songs,onSelectSong,onAddToPlaylist}) => {
  return (
    <div className="Container">
        <h3>Song List</h3>
        
        {songs.length===0? "No Songs Available":
         songs.map((song,index)=>(
            <div key={index}
             style={{display:"flex",
                justifyContent:"space-between", 
                cursor:"pointer",
                marginBottom:"5px"}}
            >
                <span onClick={()=>onSelectSong(index)}>
                {index+1}.{song.title}-{song.artist}
                </span>

                <button onClick={()=>onAddToPlaylist(song)}>+</button>
            </div>
         ))
        }
    </div>
  )
}
