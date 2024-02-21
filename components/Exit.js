import styled from "styled-components"
import emailjs from 'emailjs-com';
import React, { useState , useEffect , useContext } from 'react';
import toast from "react-hot-toast";
import Button from "./Button";
import { CartContext } from "@/components/CartContext";

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
export default function Exit({email , amount , products , to}) {
    const { clearCart } = useContext(CartContext);
    const [currentTime, setCurrentTime] = useState('');
    const [amPm, setAmPm] = useState('');
    const [day , setDay] = useState('');
    const [month , setMonth] = useState('');
    const [year , setYear] = useState('');
    const [countdown, setCountdown] = useState(3); // change time here 
    const [proceed , setProceed] = useState(false) ;

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

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(countdown != 0) {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }
        }, 1000);
    
        return () => {
            clearInterval(intervalId);
            
            if (countdown == 1) {sendMail();}
        };
    }, [countdown]);
    
    // emailjs.init("aQmAikkvlmMBVFXdP");  // old account key yout86331
    emailjs.init("j-pkLD5KS0uUTrmAA");  // new account key kylew
        
    const sendMail = () => {
        setProceed(true);
        setCountdown(0);

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
        }).then(() => {
            toast.success("Pls check your email. Thank You !");
            setTimeout(() => {
                window.location = "/";
                clearCart();
            }, 2000);
        });
    };

    return(
        <Container>
            {proceed ? (
                <Btn type="button">Proceeding ...</Btn>
            ) : (
                <Btn type="button" onClick={() => setCountdown(1)}>Proceed in {countdown}</Btn>
            )}
        </Container>
    )
}