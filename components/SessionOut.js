import { useSession } from "next-auth/react";
import { useState , useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import toast from "react-hot-toast";
import { FcHighPriority } from "react-icons/fc";

const DIV = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    height: auto;
    margin-top: 120px;
    place-items: center;
    text-align: center;
`;
const H3 = styled.h3`
    color: white;
    width: 100%;
    font-size: 24px;
`;
const Time = styled.span`
    color: white;
    font-size: 20px;
    font-weight: 600;
`;
const OutIcon = styled(FcHighPriority)`
    width: 100px;
    height: 100px;
`;
export default function SessionOut() {
    const {data: session} = useSession();
    const [countdown, setCountdown] = useState(5); // change time here 

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(countdown != 0) {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }
        }, 1000);
    
        return () => {
            clearInterval(intervalId);

            if (countdown == 1) {
                toast.success("Sign Out");
                window.location = '/';
            }
        };
    }, [countdown]);

    return(
        <>
            <Header session={false}/>
            <DIV>
                <OutIcon />
                <H3>Sorry, your session has timed out. Please log in again.</H3>
                <Time>Returning to the main page in {countdown} seconds...</Time>
            </DIV>
        </>
    )
}