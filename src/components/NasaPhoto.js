import React from 'react';
import { useEffect, useState } from 'react';

export default function NasaPhoto () {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                'https://api.nasa.gov/planetary/apod?api_key=EQZrBcint3ZYc3SMEUIYhIu22KTHeFCmDFVaktIU'
            );
            const data = await res.json();
            setPhotoData(data);
            console.log(data);
        }
    }, []);

    if (!photoData) return <div />;

    return (
        <div>
            <img
                src={photoData.url}
                alt={photoData.title}
                />
            <div>
                <h1>{photoData.title}</h1>
                <p>{photoData.date}</p>
                <p>{photoData.explanation}</p>
            </div>
        </div>
    )
}