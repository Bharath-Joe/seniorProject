import React from "react";
import {Link} from 'react-router-dom';
import {MovingComponent} from 'react-moving-text'

function Home() {
    return (
      <div className="Home">
         <header className="Home-header">
            <MovingComponent className ="textAnimation"
               type="shakeMix"
               duration="1000ms"
               delay="0s"
               direction="normal"
               timing="ease"
               iteration="infinite"
               fillMode="none">
               Hello, this is a hackable website.
            </MovingComponent>
            <div>
               <Link to="/Random">
                  <button>Click Me</button>
               </Link>
            </div>
         </header>
      </div>
    );

 }
 export default Home;