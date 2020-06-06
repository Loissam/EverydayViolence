import React, { useState } from 'react'

import data from '../../data/artworks.json'
import artistData from '../../data/artists.json'

import ArtWork from '../ArtWork'
import Vimeo from '@u-wave/react-vimeo';

import { Alert, Row, Modal, ModalBody, ModalHeader } from 'reactstrap'

const Artworks = () => {
    const [ video, setVideo ] = useState(null);

    const { artworks } = data;
    const { artists } = artistData;

    return (
        <>
            <Alert
                className="manifesto"
            >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum blanditiis, non repellendus temporibus quidem fuga, placeat beatae aspernatur pariatur error rem tempore eos? Rerum culpa necessitatibus laboriosam unde ratione. Itaque.
                Explicabo reiciendis laborum sapiente earum atque beatae reprehenderit alias maxime voluptatibus quos nesciunt eius doloremque, itaque eos aspernatur, repellat ratione vitae? Reiciendis, eligendi quidem! Fuga suscipit aperiam totam maxime qui?
                Dolor quas perferendis molestias enim doloremque praesentium aspernatur! Laborum nostrum numquam labore maxime magnam eaque alias officiis obcaecati reiciendis possimus inventore, fugiat molestiae incidunt itaque sequi repudiandae id nisi officia?
                Doloribus quia eveniet, nam aspernatur natus incidunt pariatur porro veniam magnam iusto itaque fugit culpa ipsa, sunt quibusdam quas non tempora perferendis id amet molestias sequi? Deserunt qui quam illo!
                Aut illo dolor officia ex ducimus illum, quibusdam quas aliquid eum consectetur est? Iure temporibus libero earum eum molestias ipsam suscipit vel. Quisquam eum quo culpa, delectus unde quasi ipsum!
                Amet explicabo reprehenderit ex iste expedita dolorem, dolore aliquam, nobis voluptate recusandae voluptas quos rerum corrupti assumenda dicta labore, sequi et impedit voluptates nesciunt enim incidunt? Aliquam nam unde debitis?
                Explicabo amet similique ea id autem ut dolorem illo suscipit ad maiores, rerum placeat asperiores iste voluptates repellat nostrum enim unde dolorum maxime distinctio aut incidunt harum quisquam. Suscipit, maiores!
                Aliquam nesciunt neque repudiandae totam dolore suscipit aperiam ratione labore enim ut libero dignissimos, eius nihil modi odit ullam, assumenda dicta nemo, magnam esse? Debitis id necessitatibus est numquam neque?
                Sunt totam officiis voluptatum! Porro, ipsam. Minima, quaerat. Ex voluptas, magnam consectetur animi dolorem voluptatum voluptates ad corrupti, reiciendis sint obcaecati inventore commodi sunt quod dolores aperiam, in cum nesciunt?
                Similique aperiam mollitia quisquam quod, nam praesentium doloribus quibusdam magnam. Quibusdam illum iusto beatae eaque expedita, adipisci, amet reiciendis totam repellendus nesciunt exercitationem itaque, veniam deserunt vero. Doloremque, libero odio.
            </Alert>
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
