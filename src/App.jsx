import logo from './assets/bz.jpg'
import commerse from './assets/IMAGE.png'
import hero from './assets/'
import img_1 from './assets/IMAGE2.png'
import img_2 from './assets/IMAGE3.png'
import img_3 from './assets/IMAGE4.png'
import img_4 from './assets/IMAGE5.png'
import img_5 from './assets/IMAGE6.png'
import img_6 from './assets/IMAGE7.png'
import './App.css'

function App() {

  return (
    <>
      <div className="container">
  <div className="top--header">
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
    <div className="nav">
      <ul>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Use cases</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </div>
    <div className="demo">
      <a href="#">Login</a>
      <button>Request a demo</button>
    </div>
  </div>
  <div className="hero">
    <div className="left">
      <h1>Next generation</h1>
      <p>
        Welcome to the next generation of mobile commerce and customer
        engagement. Meet your mobile customers where they want to be met.
      </p>
      <img src={commerse} alt="commerse" />
    </div>
    <div className="right">
      <img src={hero} alt="hero img" />
    </div>
  </div>
  <div className="leaders">
    <p>Used by industry leaders</p>
    <div className="lead-pic">
      <img src={img_1} alt="img 1" />
      <img src={img_2} alt="img 2" />
      <img src={img_3} alt="img 3" />
      <img src={img_4} alt="img 4" />
      <img src={img_5} alt="img 5" />
      <img src={img_6} alt="img 6" />
    </div>
  </div>
</div>

    </>
  )
}

export default App
