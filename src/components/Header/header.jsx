import React from "react";
import './header.css'

// export function Header() {
//   return (
//     <header>
//        <nav id="main-navbar" className="navbar">
//         <h1 className="logo">Techithon</h1>
//         <nav>
//           <ul>
//             <li>
//               <a href="/home">Home</a>
//             </li>
//             <li>
//               <a href="/home">Events</a>
//             </li>
//             <li>
//               <a href="/home">About Us</a>
//             </li>
//             <li>
//               <a href="/home">Login</a>
//             </li>
//           </ul>
//         </nav>
//       </nav>
//     </header>
    
//   );
// }

export function Header() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <a href="/home" className="nav-logo">
            Techithon
          </a>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href ='/home'
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/home"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Events
              </a>
            </li>
            <li className="nav-item">
              <a href = "/home"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Login
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
