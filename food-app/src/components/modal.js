import React from "react";
import './modal.css';
import "@fontsource/jetbrains-mono";
import { motion } from "framer-motion";



function Modal({closeModal}) {
    var stars = [];
    var num = 3;
    for (let i = 0; i < num; i++) {
        stars.push(
            <img className="starImg" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png" alt=""></img>
        )
    }
    for (let i = 0; i < 5-num; i++) {
        stars.push(
            <img className="greyStarImg"  src="https://purepng.com/public/uploads/large/purepng.com-grey-starstargeometricallydecagonconcavestardomclipartblackgrey-1421526502793oblca.png" alt=""></img>
           
        )
    }

    return (
        <div className="modalBackground">
            <motion.div 
            initial={{x: 200}}
            animate={{x: 0, transition: {duration: 0.15}}}
            className="modalContainer">
                <button className="x-out" onClick={() => closeModal(false)}>X</button>
                <img className="image" src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg" alt=""></img>
                <div className="title">Very Awesome Restaurant</div>
                <div className="divider"></div>
                <div className="infoContainer">
                    <div className="stars">
                        {stars}
                    </div>
                    <div className="text">1381 W Campbell Rd, Richardson, TX, 75080</div>
                    <div className="labels"></div>
                    <div>Hours:</div>
                    <div className="hours">
                        <div className="days">
                            Monday Tuesday Wednesday Thursday Friday Saturday Sunday
                        </div>
                        <div className="times">
                            7AM-7PM 7AM-7PM 7AM-7PM 7AM-7PM 7AM-7PM 7AM-7PM 7AM-7PM
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
        
    
        
    )
}

export default Modal;