import React, { useState } from 'react'

import propTypes from "prop-types" //kalo menerima props harus import propTypes

export default function Stepper(props) {
    const { steps, initialStep } = props; //destructure props
    const stepsKeys = Object.keys(steps); //mengubah props step dari bentuk object menjadi array dan mengambil semua key yg ada dari object

    //membuat state lokal CurrentStep dan memberi func setCurrentStep
    const [CurrentStep, setCurrentStep] = useState(
        stepsKeys.indexOf(initialStep) > -1 ? initialStep : stepsKeys[0]
    );
    const totalStep = stepsKeys.length;
    const indexStep = stepsKeys.indexOf(CurrentStep);

    function prevStep () {
        if (+indexStep > 0) setCurrentStep(stepsKeys[indexStep - 1]);
    }

    function nextStep () {
        if (+indexStep < totalStep) setCurrentStep(stepsKeys[indexStep + 1]);
    }

    return <>{props.children(prevStep, nextStep, CurrentStep, steps)}</>; //mengembalikan masing2 nilai ke parentnya
}

Stepper.propTypes = {
    data: propTypes.object.isRequired,
    initialStep: propTypes.string,
};

export { default as Controller } from "./Controller";
export { default as MainContent } from "./MainContent";
export { default as Meta } from "./Meta";
export { default as Numbering } from "./Numbering";