

import React, { useState } from 'react';
import './SaveTheDateComponent.scss';

const SaveTheDateComponent = ({ deadline }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const crearUrlEvento = (titulo, inicio, fin, descripcion, lugar) => {
        titulo = encodeURIComponent(titulo);
        descripcion = encodeURIComponent(descripcion);
        lugar = encodeURIComponent(lugar);

        return `https://www.google.com/calendar/render?action=TEMPLATE&text=${titulo}&dates=${inicio}/${fin}&details=${descripcion}&location=${lugar}&sf=true&output=xml`;
    };

    const handleEventoClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <ul 
          className="add-to-date dropdown dropbtn" 
          onClick={() => setIsOpen(!isOpen)}>
            <li className="text-left save-date">
                <div title="Add to Calendar" className="addeventatc save-date-content">
                    <div className="clock">
                        <div className="clock-inner"></div>
                    </div>
                    <span className="about-event">
                        <h1>Save The Date</h1>
                        <p>{deadline}</p>
                    </span>
                    {/* Desplegable */}
                    {isOpen && (
                        <div className="dropdown-content">
                            <button onClick={() => handleEventoClick(crearUrlEvento("Evento 1", "20230821T090000Z", "20230821T110000Z", "Descripción del Evento 1", "Ubicación 1"))}>Evento 1</button>
                            <button onClick={() => handleEventoClick(crearUrlEvento("Evento 2", "20230822T090000Z", "20230822T110000Z", "Descripción del Evento 2", "Ubicación 2"))}>Evento 2</button>
                            {/* ... puedes agregar más botones aquí */}
                        </div>
                    )}
                </div>
            </li>
        </ul>
    );
};

export default SaveTheDateComponent;

