import React from "react";
import Fade from "react-reveal/Fade"; //animasi transisi

//destrucuture props jadi data dan current
export default function MainContent({ data, current }) {
    return <Fade>{data[current] && data[current].content}</Fade>; //&& if, jika data current ada maka akan merender content
}