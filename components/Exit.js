import styled from "styled-components"
import emailjs from 'emailjs-com';
import React from 'react';
import toast from "react-hot-toast";

export default function Exit({email}) {

    emailjs.init("aQmAikkvlmMBVFXdP");
        
    const sendMail = () => {
        emailjs.send("service_7xsu58o","template_dx06ebh", {email: email}).then(() => {
        toast.success("You're Now Subscribed. Thank You !");
        });
    };

    return(
        <>
            <button type="button" onClick={sendMail}>Proceed</button>
        </>
    )
}