import logo from './logo.svg';
import './home.css';
import { Item } from 'react';
import "@fontsource/jetbrains-mono";



function Home() {
  let list = [];
  for (let i = 0; i < 5; i++) {
    list.push(
      <div className="Item">
        <div className='Name'>Very Awesome Restaurant</div>
        <div className="Distance">3.2 miles away - Open until 9 PM</div>
        <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg"></img>
      </div>
    )
  }
  return (
    <div className="Home">
      <div className="Map">

      </div>
      <div className="Restaurants">
        <p>Restaurants Near You</p>
        {list}
      </div>
    </div>
  );
}

export default Home;