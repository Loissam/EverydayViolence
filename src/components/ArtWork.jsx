import React from 'react'

import { Col } from 'reactstrap'

const ArtWork = ({artwork, artist}) => {
    return (
        <Col xs="12" md="4" className="border art-work" data-artist={artist ? artist.name : ""}>
            <img src={`/artworks/${artwork.image}`} alt={artwork.title} />
        </Col>
    )
}

export default ArtWork
