import logo from './logo.svg';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } = useAuth0();
  if( isLoading ){
    return <div>Loading...</div>;
  }
  if( error ){
    return <div>Oops... {error.message}</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        {!isAuthenticated ? (
          <>
          {/*
          <code>(ID:testtest@teyan.de , PW:P@ssw0rd)</code>
          */}
          <hr />
          <button onClick={loginWithRedirect}>LOGIN</button>
          </>
        ) : (
          <>
          <h2>Hello {user.name}.</h2>
          <hr />
          <button onClick={() => {
            logout( { returnTo: window.location.origin + window.location.pathname } );
          }}>LOGOUT</button>
          </>
        )}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
