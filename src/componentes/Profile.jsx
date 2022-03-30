import React, {useState} from 'react';
import '../css/profile.css';

export default function Profile(){
    return(

        <body>
            <div className='container1'>
                <div className='container'>
                    <input type="file" className='upload-box'/>
                </div>
            </div>
           
           <div className='div-boton'>
                <button className='boton'>¡Mira ahora tus imagenes!</button>
           </div>
            
        </body>

        
        
    )
}

