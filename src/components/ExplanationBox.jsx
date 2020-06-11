import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { faBlackTie } from '@fortawesome/free-brands-svg-icons';

const ExplanationBox = ({}) => {
    const [ isExpanded, setExpanded ] = useState(false);
    return (
        <>
            <Button color="" className="btn btn-sm explain-button" onClick={(e) => setExpanded(!isExpanded)}>
               
                About these 360 experiences.
            </Button>
            <p className="explain-text" style={{ 
                display: isExpanded ? "" : "none",
                color: "yellow",
                backgroundColor: "black"            }}>
                 30 second 360 experiences created by 14 artists graduating from Swansea Fine Art Course in June 2020. 

 

Click on the links in the boxes below to start each 360 video. Then move your phone or drag your mouse pointer to explore within the spaces they've created; (compatible with Google Cardboard).
            </p>
        </>
    )
}

export default ExplanationBox