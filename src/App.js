import './App.css';
import ethicon from './images/icon-ethereum.svg';
import clockicon from './images/icon-clock.svg';
import imgeye from './images/icon-view.svg';

function App() {
  return (
    <div className="card-container">
      <div className="img-hover">
        <img className="img-card" src={require('./images/image-equilibrium.jpg')}></img>
        <div className="eye-overlay">
          <img className="img-eye" src={imgeye}></img>
        </div>
      </div>
      <div className="text-card">
        <h1 className="title">Equilibrium #3429</h1>
        <p className="description">Our Equilibrium collection promotes balance and calm.</p>
        <ul className="eth-time">
          <li className="eth-number">
            <img className="img-eth" src={ethicon} />
            <p>0.041 ETH</p>
          </li>
          <li className="time-clock">
            <img className="img-clock" src={clockicon} />
            <p>3 days left</p>
          </li>
        </ul>
      </div>
      <div className="avatar-name">
        <img className="avatar-img" src={require('./images/image-avatar.png')}/>
        <figcaption className="caption">Creation of <a href="#">Jules Wyvern</a></figcaption>
      </div>
    </div>
  );
}

export default App;
