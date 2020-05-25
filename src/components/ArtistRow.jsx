import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ArtistRow = ({artist}) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const setOpen = (isOpen) => {
        setIsOpen(isOpen);
    };

    return (
        <>
            <li
                onMouseEnter={() => {
                    setOpen(true);
                }}
                onMouseLeave={() => {
                    setOpen(false)
                }}
                className={`${isOpen ? "border open-artist" : ""}`}
            >
                {
                    isOpen
                    ?
                        <img
                            alt={artist.name}
                            src={`/artists/${artist.image}`}
                        />
                    :
                        <></>
                }
                <span className="artist-name">
                    {artist.name}
                </span>

                {
                    isOpen
                    ?
                        <div>
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
                    :
                        <></>
                }
            </li>
        </>
    )
}

export default ArtistRow
