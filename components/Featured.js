import styled from "styled-components";
import Center from "./Center";

const Bg = styled.div`
    background-color: #222;
    color:#fff;
    padding: 50px 0;
`;

const Title = styled.h1`
    margin: 0;
    font-weigth: normal;
`;

const Decs = styled.p`
    color: #aaa;
    font-size:.8rem;
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-comlumns: 1fr 1fr;
`;

export default function Featured() {
    return(
        <Bg>
            <Center>
                <Wrapper>
                    <div><Title>Pro Anywhere</Title></div>
                </Wrapper>
                    
                <Decs>In the heart of a bustling city, amid the towering skyscrapers and bustling streets, there exists a tranquil park. Its lush greenery and winding pathways offer an oasis of serenity for those seeking refuge from the urban chaos. Birds sing their melodious tunes, and the gentle rustling of leaves in the breeze provides a soothing soundtrack to the park's visitors.</Decs>
            </Center>
        </Bg>
    );
}