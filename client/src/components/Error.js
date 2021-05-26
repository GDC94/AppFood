import React from 'react';
import "../styles/Error.css";


const Error = ({mensaje}) => {
    return ( 
        <p className="error">{mensaje}</p>

     );
}
 
export default Error;