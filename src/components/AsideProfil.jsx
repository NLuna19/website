import React from 'react';
import './AsideProfil.css';

const AsideProfil = () => {
    const nombre = "Nicolas Omar Luna";
    const subtitle= "web developer";
    
    const clip1 = {
        clipPath: "url(#avatar-box)"
    }


    return (
        <aside className="col-12 col-md-12 col-xl-4 pe-3 border border-0 border-primary">
            <div className="p-3 sidebar rounded bg-blue-800 shadow" >
                <svg className="avatar d-block" viewBox="0 0 188 188" style={{width:"100%"}}>
                    <g style={clip1} >
                        <image className="w-100" xlinkHref="http://lorempixel.com/g/200/200/" alt="..."/> 
                    </g>
                </svg>
                <div className="text-center mt-3 ">
                    <h3 className="name-title fw-lighter text-blue-200">{nombre}</h3>
                    <span className="badge rounded-pill bg-blue-900 px-3 py-2 text-white">{subtitle}</span>
                </div>
            </div>
            <svg className="position-absolute">
                <clipPath id="avatar-hexagon">
                    <path d="M0 27.2891c0-4.6662 2.4889-8.976 6.52491-11.2986L31.308 1.72845c3.98-2.290382 8.8697-2.305446 12.8637-.03963l25.234 14.31558C73.4807 18.3162 76 22.6478 76 27.3426V56.684c0 4.6805-2.5041 9.0013-6.5597 11.3186L44.4317 82.2915c-3.9869 2.278-8.8765 2.278-12.8634 0L6.55974 68.0026C2.50414 65.6853 0 61.3645 0 56.684V27.2891z"></path>
                </clipPath>	
                <clipPath id="avatar-box">
                    <path d="M1.85379 38.4859C2.9221 18.6653 18.6653 2.92275 38.4858 1.85453 56.0986.905299 77.2792 0 94 0c16.721 0 37.901.905299 55.514 1.85453 19.821 1.06822 35.564 16.81077 36.632 36.63137C187.095 56.0922 188 77.267 188 94c0 16.733-.905 37.908-1.854 55.514-1.068 19.821-16.811 35.563-36.632 36.631C131.901 187.095 110.721 188 94 188c-16.7208 0-37.9014-.905-55.5142-1.855-19.8205-1.068-35.5637-16.81-36.63201-36.631C.904831 131.908 0 110.733 0 94c0-16.733.904831-37.9078 1.85379-55.5141z"></path>
                </clipPath>	
            </svg>
        </aside>
    )
}

export default AsideProfil;
