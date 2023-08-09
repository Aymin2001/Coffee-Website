import React from 'react';
import logo from '../../assets/images/logo.png';
import { links} from '../../assets/Data';
import { AiOutlineAppstore } from "react-icons/ai";
import './Header.css';
export default function Header() {
  return (
    <header className='header'>
      <div className='container'>
      <nav className='nav-container'>
        <a href="/" className='nav-logo'>
          <img src={logo} alt="Logo" className='nav-img' />
        </a>
        <ul className='nav-menu'>
          {links.map(({ name, path }, index) => (
            <li className='nav-items' key={index}>
              <a href={path} className='nav-link'>{name}</a>
            </li>
          ))}
        </ul>
       <div className='nav-toggle'>
<AiOutlineAppstore />
       </div>

      </nav>
      </div>
    </header>
  );
}
