import React from 'react'

import Fade from "react-reveal/Fade";

import propTypes from "prop-types"

import "./index.scss";

//destructure props menjadi style, classname, data, current
export default function Numbering({ style, className, data, current }) {
    
    //akan mencari key dari props data yg dikirim
    const KeysOfData = Object.keys(data);
    return (
        <Fade>
            <ol className={["stepper", className].join(" ")} style={style}>
                {KeysOfData.map((list, index) => { //mapping KeysOfData dan ambil nilai list dan index
                    let isActive = list === current ? "active" : ""; //jika isi list yg diterima di isActive = current yg dikrim + cls "active" 
                    if (index + 1 === KeysOfData.length) { 
                        isActive = "";
                        return null;
                    }

                    return (
                        <li key={`list-${index}`} className={[isActive].join(" ")}>
                            {index + 1}
                        </li>
                    );
                    
                })}
            </ol>
        </Fade>
    );
}

Numbering.propTypes = {
    className: propTypes.string,
    data: propTypes.object,
    current: propTypes.string
}