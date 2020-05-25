import React from 'react'

import data from '../../data/artists.json'

import ArtistRow from '../ArtistRow'

const Artists = () => {
    const { artists } = data;
    return (
        <ul className="artist-list p-0 m-0">
            {
                artists.map((artist, index) =>
                    <ArtistRow key={index} artist={artist} />
                )
            }
        </ul>
    )
}

export default Artists
