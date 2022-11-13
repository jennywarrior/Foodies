import NavBar from './../components/NavBar';
import './profile.css';

function Profile() {
    return (
      <div>
        <NavBar/>
        <h1>Hi Blah Blah!</h1>
        <p>email: blah@gamil.com</p>
        <div className='prefBtns'>
                <p className="prefs">hi</p>
                <p className="prefs">hi</p>
                <p className="prefs">hi</p>
                <p className="prefs">hi</p>
            </div>
            <div className='prefBtns'>
                <p className="prefs">hi</p>
                <p className="prefs">hi</p>
                <p className="prefs">hi</p>
                <p className="prefs">hi</p>
            </div>
        <p>change dietary preferences</p>
        
      </div>
      
    );
  }
  
  export default Profile;
  