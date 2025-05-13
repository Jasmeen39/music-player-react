import React from 'react'

export const AudioPlayer = (currentSong,onNext,onPrev) => {
  return (
    <div clasName="Audio Player">

        <div className="Player Button">
        <button onClick={onNext}>Next</button>    
        <button onClick={onPrev}>Prev</button>
        </div>


    </div>

  )
}
