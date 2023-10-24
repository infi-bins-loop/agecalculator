import React from 'react'
import { useState } from "react";
import './agecalculator.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const AgeCalculator = () => {
    const [dob, setDob] = useState(new Date());
    const [age, setAge] = useState(0);
      const calcAge = () => {
        const today = new Date();
        const birth = new Date(dob);
        let age_diff = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age_diff--;
        }
        setAge(age_diff);
      };
  return (
    <section id="age">
        <div className="ageMain">
            <h1 className="ageTitle">Age Calculator</h1>
            <b><p className="ageEnter">Enter your date of birth</p></b>
            <input type="date" id="dob" placeholder='dd/mm/yyyy' className='ageDate' value={dob} onChange={(e) => setDob(e.target.value)} />
            <br /><br />
            <button className="btn btn-primary" onClick={calcAge} type='button'>Calculate Age</button>
            <br /><br />
            <p className="ageDis">You are {age} years old.</p>
        </div>
    </section>
  )
}

export default AgeCalculator;