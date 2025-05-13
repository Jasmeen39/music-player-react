import React from 'react'

export const AudioPlayer = ({ currentSong, onNext, onPrev }) => {
    return (
        <div className="Audio Player">

            <audio
                controls
                src={currentSong.source}
                onEnded={onNext}
                autoPlay
            ></audio>

            <div className="Player Button" style={{ marginTop: "10px" }}>
                <button onClick={onPrev}>Prev</button>
                <button onClick={onNext}>Next</button>
            </div>


        </div>

    )
}
