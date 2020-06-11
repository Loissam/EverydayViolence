import React, { useState } from 'react'

import { Col } from 'reactstrap'

import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faVimeoSquare, faAmilia } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ArtWork = ({artwork, artist, setVideo}) => {
    let artDisplay = null;
    let url = "";
    if (artwork.image) {
        if (artwork.image.match(/^http/) !== null) {
            url = artwork.image;
        } else {
            url = `/artworks/${artwork.image}`;
        }
        artDisplay = <img src={url} alt={artwork.title} />;
    }

    const [ isHover, setHover ] = useState(artwork.forceHover);

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
                if (!artwork.forceHover) {
                    setHover(false);
                }
            }}
            onTouchStart={(evt) => {
                const control = evt.target.closest('a, button');
                if (!control) {
                    evt.preventDefault();
                    if (!artwork.forceHover) {
                        setHover(!isHover);
                    }
                }
            }}
        >
            <div className={`artwork ${artwork.forceHover ? "artwork-stuck" : ""}`}>
                {
                    artDisplay
                }
                {
                    isHover
                    ?
                        <div 
                            className="artist-overlay"
                        >
                            <div className="artist-overlay-content">
                                <h1>{artwork.title}</h1>
                                <span className="artist-name">
                                    {artist.name}
                                </span>
                                <div>
                                    <button
                                        className="btn btn-secondary artwork-link" 
                                        onClick={evt => {
                                            evt.preventDefault();
                                            setVideo(artwork);
                                            setHover(false);
                                        }}
                                    >
                                        Enter the 360 experience
                                    </button>
                                    <div>
                                        {
                                            artist.accessWeb
                                            ?
                                                <a href={artist.accessWeb} className="pr-2">
                                                    <FontAwesomeIcon size="lg" icon={faAmilia} />
                                                </a>
                                            :
                                                <></>
                                        }
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
                                                    <FontAwesomeIcon size="lg" icon={faGlobe} />
                                                </a>
                                            :
                                                <></>
                                        }
                                    </div>
                                </div>
                                <div className="artist-statement">
                                    {artist.statement}
                                </div>
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
