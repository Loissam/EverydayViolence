import React from 'react'

import data from '../../data/artworks.json'
import artistData from '../../data/artists.json'

import ArtWork from '../ArtWork'

import { Row } from 'reactstrap'

const Artworks = () => {
    const { artworks } = data;
    const { artists } = artistData;

    return (
        <Row className="m-0">
            {
                artworks.map((artwork, index) => 
                    <ArtWork 
                        artwork={artwork} 
                        artist={artists.find(artist => 
                            artist.id === artwork.by
                        )} 
                        key={index} 
                    />
                )
            }
        </Row>
    )
}

export default Artworks
