import './style.css';
import LandingPage from './Landing-Page/landingPage';
import Signin from './routes/authentication/signin.authentication';

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      <Signin />
    </div>
  );
}

export default App;
