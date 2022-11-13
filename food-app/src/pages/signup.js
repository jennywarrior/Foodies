import './signup.css';
import React from 'react';

function SignUp() {
  return (
    <div>
      <header>
        <p>foodies</p>
        <form>
            <div>
                <label>
                    <input type="text" placeholder="email" />
                </label>
            </div>
            <div>
                <label>
                    <input type="text" placeholder="password" />
                </label>
            </div>
            <div>
                <label>
                    <input type="text" placeholder="full name"/>
                </label>
            </div>
            <div className='prefBtns2'>
                <p className="prefs">hi</p>
                <p className="prefs">hi</p>
                <p className="prefs">hi</p>
                <p className="prefs">hi</p>
            </div>
            <div className='prefBtns2'>
                <p className="prefs">hi</p>
                <p className="prefs">hi</p>
                <p className="prefs">hi</p>
                <p className="prefs">hi</p>
            </div>
            <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default SignUp;
