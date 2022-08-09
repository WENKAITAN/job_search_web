import { useState } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
const Marker = ({ title, display_name, label }) => {

    const [isShown, setIsShown] = useState(false)
    return (
        <div>
            
            <FaMapMarkerAlt 
                style={{height: "25px", width: "25px"}}                 
                onMouseLeave={() => setIsShown(false)}
                onMouseEnter={() => setIsShown(true)}
                tooltip={title}
                />    
            {isShown && (<div>
                <Card style={{ width: '18rem', backgroundColor: 'white', color: "black"}}>
                    <Card.Body>
                        <Card.Title>Company name: {display_name}</Card.Title>
                        <Card.Text>
                        Job title: {title} and it is a {label}.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>)}
        </div>
    )
}
Marker.propTypes = {
    title: PropTypes.string, 
    display_name: PropTypes.string,
    label: PropTypes.string
}

export default Marker;