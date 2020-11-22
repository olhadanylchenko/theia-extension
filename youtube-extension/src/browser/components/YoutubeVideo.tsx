import * as React from 'react'

export default function YoutubeVideo() {
    return (
        //styles from https://embedresponsively.com/
        <div style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            maxWidth: "100%",
        }}>
            <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                className="youtube-video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
            />
        </div>
    )
}
