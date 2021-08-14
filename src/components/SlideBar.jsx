import React, {useState} from 'react';
import './SlideBar.css';

const SlideBar = (props) => {
    const [Nav, setNav] = useState("0");
    const {opciones} = props
    
    const openNav = () => setNav("250px")
    const closeNav = () => setNav("0px")
    
    return(
        <div>
            <div id="mySlidepanel" className="slidepanel" style={{width:Nav}}>
                <button href="#" className="closebtn" onClick={() => {closeNav()} }> × </button>
                {
                    opciones.map( op => 
                        <a key={op} href={'#'+op}> {op} </a>
                    )
                }
            </div>
            <button className="openbtn" onClick={() => {openNav()} }> &#9776; </button>  
        </div>
    )
}
export default SlideBar;