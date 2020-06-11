import React, { useState } from 'react'

import data from '../../data/artworks.json'
import artistData from '../../data/artists.json'

import ArtWork from '../ArtWork'
import ExplanationBox from '../ExplanationBox'
import Vimeo from '@u-wave/react-vimeo';

import { Alert, Row, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Artworks = () => {
    const [ video, setVideo ] = useState(null);

    const { artworks } = data;
    const { artists } = artistData;

    return (
        <>
            <Alert
                className="manifesto"
            >
                <NavLink to="/"><img src="/title.png" alt="Home Page" /></NavLink>
            </Alert>
            <ExplanationBox />
            <Row className="m-0 artwork-container">
                {
                    artworks.map((artwork, index) => 
                        <ArtWork 
                            artwork={artwork} 
                            artist={artists.find(artist => 
                                artist.id === artwork.by
                            )} 
                            key={index}
                            setVideo={setVideo}
                        />
                    )
                }
            </Row>
            <Alert
              className="bottom-statement statement"
            
            >
                Following the closure of the campus back in March, final year fine art students were disheartened to discover that their degree show would no longer be going ahead. When students returned home, they began to find alternative way to showcase their work in isolation. The 360 camera provided the ability for students to create a personal response and relationship with the viewer. Through clicking each 360 video the viewer can immerse themselves in each of the artists surroundings.   You may not be able to physically see the work, but you can view the artists response in a way that has never been done before. 
                
                <div className="and-repose">
                    <NavLink to="/"><img src="/repose.png" alt="Home Page" /></NavLink>
                </div>
            </Alert>
            {
                video
                ?
                    <Modal
                        isOpen={!!video}
                        toggle={() => {
                            setVideo(null);
                        }}
                        className="full-screen-modal"
                    >
                        <ModalHeader
                            toggle={() => {
                                setVideo(null);
                            }}
                        >
                            {video.title}
                        </ModalHeader>
                        <ModalBody>
                            <Vimeo
                                video={video.vimeo}
                                responsive={true}
                                autoplay={true}
                                onEnd={() => {
                                    setVideo(null);
                                }}
                            />
                        </ModalBody>
                    </Modal>
                :
                    <></>
            }
        </>
    )
}

export default Artworks
