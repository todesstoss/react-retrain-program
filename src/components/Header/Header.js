import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services';
import { useTMDSessionContext } from '../../context/TMDSessionContext';

function Header() {
  const [inFlight, setFlightStatus] = useState(false);
  const { isAuthenticated } = useTMDSessionContext();
  const requestToken = () => {
    setFlightStatus(true);
    api.get('/authentication/token/new').then((data) => {
      setFlightStatus(false);
      window.open(
        `https://www.themoviedb.org/authenticate/${data.request_token}?redirect_to=${window.location.protocol}//${window.location.host}/approve`,
        '_blank'
      );
    });
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {!isAuthenticated && (
            <li>
              <button
                className="waves-effect waves-light btn"
                onClick={requestToken}
                disabled={inFlight}
              >
                Login
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
