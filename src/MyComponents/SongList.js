import React from 'react'

export const SongList = ({songs,handleSelectedSong,onAddToPlaylist,toggleLike,likedsongs}) => {
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
                <span onClick={()=>handleSelectedSong(song)}>
                {index+1}.{song.title}-{song.artist}
                </span>
                <div>
                <button onClick={()=>onAddToPlaylist(song)}>+</button>
                <button onClick={() => toggleLike(song)}>
                {likedsongs?.some(s => s.title === song.title) ? "💔" : "❤️"}
                </button>
                </div>
            </div>
            
         ))
        }
    </div>
  )
}
