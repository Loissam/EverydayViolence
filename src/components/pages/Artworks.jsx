import React, { useState } from 'react'

import data from '../../data/artworks.json'
import artistData from '../../data/artists.json'

import ArtWork from '../ArtWork'
import Vimeo from '@u-wave/react-vimeo';

import { Row, Modal, ModalBody, ModalHeader } from 'reactstrap'

const Artworks = () => {
    const [ video, setVideo ] = useState(null);

    const { artworks } = data;
    const { artists } = artistData;

    return (
        <>
            <Row className="m-0">
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
