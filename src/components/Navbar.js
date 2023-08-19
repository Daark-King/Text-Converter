import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div>
         <nav className="navbar navbar-expand-lg" style={{
                    backgroundColor: props.mode==='light'?'#e6e1d3':(props.mode==='#041227'?'#333757':props.mode==='green'?'#65c7ab':'#f01a57')}}>
        <div className="container-fluid">
          <Link className="navbar-brand" style={{
                    color: props.mode==='light'?'black':'white'}} to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" style={{
                    color: props.mode==='light'?'black':'white'}} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" style={{
                    color: props.mode==='light'?'black':'white'}}aria-current="page" to="/about">
                  About
                </Link>
              </li>
            
            </ul>
           
            {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input mx-3" onClick={props.toggleMode} type="radio" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark</label>
</div>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input mx-3" onClick={props.toggleMode} type="radio" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Green</label>
</div>
            <div className={`form-check form-radio text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input mx-3" onClick={props.toggleMode} type="radio" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Red</label>
</div> */}
           <div className={`mx-3 text-${props.mode==='light'?'dark':'light'}`} >
              <input type="radio" name="radio" onClick={props.toggleLight}/>
              <label htmlFor=""> Light</label>
            </div>
            <div className={`mx-3 text-${props.mode==='light'?'dark':'light'}`}>
              <input type="radio" name="radio"  onClick={props.toggleGreen}/>
              <label htmlFor=""> Green</label>
            </div>
            <div className={`mx-3 text-${props.mode==='light'?'dark':'light'}`}>
              <input type="radio" name="radio" onClick={props.toggleRed}/>
              <label htmlFor=""> Red</label>
            </div>
            <div className={`mx-3 text-${props.mode==='light'?'dark':'light'}`}>
              <input type="radio" name="radio"onClick={props.toggleDark} />
              <label htmlFor=""> Dark</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.prototypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps ={
    title: 'Book My Court'
}