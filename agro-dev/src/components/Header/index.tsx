import React, {useState} from 'react';
import logoC from '../../assets/logo-C-m.png';
import './styles.css';
import { Link } from 'react-router-dom';
//import menuResponsive from '../../utils/menuResponsivo';

const Header = () => {

const [classOn, setClassOn] = useState();
  
const nenuResponsive = () => {
      if (!classOn) {
        setClassOn(true);
      }
       else {
        setClassOn(false);
       }
  }

  return (
    <header>
    <div className="container">
      <img className="logo-cyan" src={logoC} alt="logo Cyan"/>
      <div className = { classOn ? 'menu-section on' : 'menu-section '} onClick={nenuResponsive}>
           <div className="menu-toggle">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
           </div>

           <nav>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/">USINA</Link>
              </li>
              <li>
                <Link to="/">SAFRA</Link>
              </li>
              <li>
                <Link to="/">FAZENDA</Link>
              </li>
            </ul>
          </nav>

          </div>
        </div>

      </header>

      )
    }
    
export default Header;