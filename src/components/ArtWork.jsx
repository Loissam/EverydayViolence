import React, { useState } from 'react'

import { Col } from 'reactstrap'

import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faVimeoSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ArtWork = ({artwork, artist, setVideo}) => {

    let artDisplay = null;
    if (artwork.image) {
        let url = "";
        if (artwork.image.match(/^http/) !== null) {
            url = artwork.image;
        } else {
            url = `/artworks/${artwork.image}`;
        }
        artDisplay = <img src={url} alt={artwork.title} />;
    }

    const [ isHover, setHover ] = useState(false);

    return (
        <Col 
            xs="12" 
            md="6"
            lg="4" 
            className="border art-work"
            onMouseEnter={() => {
                setHover(true);
            }}
            onMouseLeave={() => {
                setHover(false);
            }}
            onTouchEnd={(evt) => {
                const control = evt.target.closest('a, button');
                if (!control) {
                    evt.preventDefault();
                    setHover(!isHover);
                }
            }}
        >
            <div className="artwork">
                {
                    artDisplay
                }
                {
                    isHover
                    ?
                        <div 
                            className="artist-overlay"
                        >
                            <h1>{artwork.title}</h1>
                            <span className="artist-name">
                                {artist.name}
                            </span>
                            <div>
                                <button 
                                    className="btn btn-link artwork-link" 
                                    onClick={evt => {
                                        evt.preventDefault();
                                        setVideo(artwork);
                                        setHover(false);
                                    }}
                                >
                                    <FontAwesomeIcon size="lg" icon={faVimeoSquare} />
                                </button>
                                {
                                    artist.instagram
                                    ?
                                        <a href={artist.instagram} className="pr-2">
                                            <FontAwesomeIcon size="lg" icon={faInstagram} />
                                        </a>
                                    :
                                        <></>
                                }
                                {
                                    artist.facebook
                                    ?
                                        <a href={artist.facebook} className="pr-2">
                                            <FontAwesomeIcon size="lg" icon={faFacebookF} />
                                        </a>
                                    :
                                        <></>
                                }
                                {
                                    artist.link
                                    ?
                                        <a href={artist.link} className="pr-2">
                                            <FontAwesomeIcon size="lg" icon={faExternalLinkSquareAlt} />
                                        </a>
                                    :
                                        <></>
                                }
                            </div>
                            <div className="artist-statement">
                                {artist.statement}
                            </div>
                        </div>
                    :
                        <></>
                }
            </div>
        </Col>
    )
}

export default ArtWork
