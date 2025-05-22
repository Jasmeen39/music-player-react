import React from 'react'

export const AudioPlayer = ({ currentSong, handlenext, handleprev }) => {
    return (
        <div className="audio-player">

            <audio
                controls
                src={currentSong?.source || ''}
                onEnded={handlenext}
                autoPlay
            ></audio>

            <div className="Player Button" style={{ marginTop: "10px" }}>
                <button onClick={handleprev} style={{marginRight:"10px"}}>Prev</button>
                <button onClick={handlenext}>Next</button>
            </div>


        </div>

    )
}
