import styled from "styled-components"
import emailjs from 'emailjs-com';
import React, { useState , useEffect } from 'react';
import toast from "react-hot-toast";
import Button from "./Button";

const Btn = styled(Button)`

`;

export default function Exit({email , amount}) {
    const [currentTime, setCurrentTime] = useState('');
    const [amPm, setAmPm] = useState('');
    const [day , setDay] = useState('');
    const [month , setMonth] = useState('');
    const [year , setYear] = useState('');

    const DisplayTime = () => {
        const now = new Date();
        let hours = now.getHours();
        const amPmValue = hours >= 12 ? 'PM' : 'AM';
      
        // Convert to 12-hour format
        hours = hours % 12 || 12;
      
        const minutes = now.getMinutes().toString().padStart(2, '0'); /* Minute */
        const currentTimeString = `${hours}:${minutes}`; /* Combine together */
      
        setCurrentTime(currentTimeString);
        setAmPm(amPmValue);
    };

    const CurrentDate = () => {
        const currentDate = new Date();
        const dayy = currentDate.getDate();
        const monthh = currentDate.toLocaleString('default', { month: 'short' });
        const yearr = currentDate.getFullYear();
      
        setDay(dayy);
        setMonth(monthh);
        setYear(yearr);
    };

    useEffect(() => {
        DisplayTime();
        CurrentDate();
    },[]);
      
    emailjs.init("aQmAikkvlmMBVFXdP");
        
    const sendMail = () => {        
        emailjs.send("service_7xsu58o","template_dx06ebh", {
            email: email,
            amount: amount,
            day: day,
            month: month,
            year: year,
            time: currentTime,
            ap: amPm
        }).then(() => {
            toast.success("Pls check your email. Thank You !");
        });

        console.log(`Date / Time : ${day} ${month} ${year} ${currentTime} ${amPm}`);
        // console.log("Date / Time : " + day + month + year + " " + time + ampm);

    };

    return(
        <>
            <Btn type="button" onClick={sendMail}>Proceed</Btn>
        </>
    )
}