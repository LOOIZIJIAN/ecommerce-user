import styled from "styled-components"
import emailjs from 'emailjs-com';
import React, { useState , useEffect } from 'react';
import toast from "react-hot-toast";
import Button from "./Button";

const Container = styled.div`
    width: 100%;
    text-align: right;
`;
const Btn = styled(Button)`
    width: fit-content;
    background-color: transparent;
    color: #fff;
    border-width: 2px;

    &:hover {
        background-color: #fff;
        color: black;
    }
`;

export default function Exit({email , amount , products , tax , ship , to}) {
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
    
    // emailjs.init("aQmAikkvlmMBVFXdP");  // old account key yout86331
    emailjs.init("j-pkLD5KS0uUTrmAA");  // new account key kylew
        
    const sendMail = () => {
        const productDetails = products.map(product => ({
            name: product.name,
            quantity: product.quantity,
            price: (product.price).toFixed(2),
            total: (product.price * product.quantity).toFixed(2),
            image: product.images[0]
        }));

        // emailjs.send("service_7xsu58o","template_dx06ebh" , {   // old account yout86331
        emailjs.send("service_w6z7h4s","template_vtagjle", {    // new account kylew
            email: email,
            to: to,
            amount: (amount).toFixed(2),
            day: day,
            month: month,
            year: year,
            time: currentTime,
            ap: amPm,
            products: productDetails,
            tax: tax,
            taxAmount: (amount*(tax/100)).toFixed(2),
            ship: ship.toFixed(2)
        }).then(() => {
            toast.success("Pls check your email. Thank You !");
            setTimeout(() => {
                window.location = "/";
            }, 2000);
        });
    };

    return(
        <Container>
            <Btn type="button" onClick={sendMail}>Proceed</Btn>
        </Container>
    )
}