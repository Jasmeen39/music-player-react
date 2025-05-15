import React from 'react'

export const AudioPlayer = ({ currentSong, onNext, onPrev }) => {
    return (
        <div className="audio-player">

            <audio
                controls
                src={currentSong.source}
                onEnded={onNext}
                autoPlay
            ></audio>

            <div className="Player Button" style={{ marginTop: "10px" }}>
                <button onClick={onPrev} style={{marginRight:"10px"}}>Prev</button>
                <button onClick={onNext}>Next</button>
            </div>


        </div>

    )
}
