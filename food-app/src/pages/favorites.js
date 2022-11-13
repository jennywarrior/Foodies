import NavBar from './../components/NavBar';

function Profile() {
  let list = [];
  for (let i = 0; i < 5; i++) {
    list.push(
      <div className="Item">
        <div className='Name'>Very Awesome Restaurant</div>
        <div className="Distance">3.2 miles away - Open until 9 PM</div>
        <img alt="" src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg"/>
      </div>
    )
  }
    return (
      <div>
        <NavBar/>
        <p>Favs</p>
        <div className="Restaurants">
          {list}
        </div>
      </div>
    );
  }
  
  export default Profile;
    