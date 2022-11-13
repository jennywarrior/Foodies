import React, { useState } from 'react';
import Modal from '../components/modal';

function Favs({data}) {
    const [liked, setLiked] = useState(false);
    const [show, setShow] = useState(false);  

    return (
        <div>
        {show && <Modal closeModal={setShow} data={data}/>}
        <div>
          {!liked && <div style={{color: "black", fontSize: "35px", height: "0", width: "20px", position: "relative", right: "-5px", top: "-5px"}} onClick={() => setLiked(!liked)}>&#9829;</div> }
          {liked && <div style={{color: "red", fontSize: "35px", height: "0", width: "20px", position: "relative", right: "-5px", top: "-5px"}} onClick={() => setLiked(!liked)}>&#9829;</div>}
        </div>
        <div className="Item" onClick={() => setShow(!show)}>
          <div className='Name'>{data.name}</div>
          <div className="Distance">{data.vicinity} - {data.opening_hours.open_now ? "Open" : "Closed"}</div>
          <img src={data.icon} alt='' style={{width: "60px"}}></img>
        </div>
      </div>
    );
  }
  
  export default Favs;
    