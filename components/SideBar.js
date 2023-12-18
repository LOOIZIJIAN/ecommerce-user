import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: white;
`;

const MiniContainer = styled.div`
    width: 160px;
    height: 100vh;
    background-color: rgb(229, 231, 235);
    position: sticky;
    top: 0;
    padding: 16px;
`;

const Select = styled.ul`
    list-style-type: none;
    /* text-align: center; */

`;

const Option = styled.li`
    margin-bottom: 0.5rem;
    border-radius: 10px;
    padding: 8px 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;

    &:hover {
        background-color: darkgray;
        A {
            color: white;
        }

        Svg {
            fill: white;
        }

    }
`;

const A = styled.a`
    color: rgb(55, 65, 81);
    font-weight: 600;
    font-size: 18px;
`;

const Detail = styled.div`
    width: 75%;
    background-color: white;
    padding: 1rem;
    color: black;
`;

const Svg = styled.svg`
    fill: #4f4f4f;
    height: 1em;
`;

const Battery = styled.div`
    border: 3px solid #333;
    width: 18px;
    height: 28px;
    padding: 2px;
    border-radius: 4px;
    position: relative;
    margin: 15px 0;

    &:before {
        content: '';
        height: 3px;
        width: 10px;
        display: block;
        position: absolute;
        top: -6px;
        border: 2px solid #333;
        border-radius: 4px 4px 0 0;
    }

    &:after {
        content: '';
        display: block;
        position: absolute;
        top: -1px;
        left: -1px;
        right: -1px;
        bottom: -1px;
        border: 1px solid #fff;
        border-radius: 2px;
    }
`;

const BatteryLevel = styled.div`
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cg%3E%3C%2Fg%3E%20%3Cpath%20fill%3D%22%23e81309%22%20d%3D%22M17.927%2012l2.68-10.28c0.040-0.126%200.060-0.261%200.060-0.4%200-0.726-0.587-1.32-1.314-1.32-0.413%200-0.78%200.187-1.019%200.487l-13.38%2017.353c-0.18%200.227-0.287%200.513-0.287%200.827%200%200.733%200.6%201.333%201.333%201.333h8.073l-2.68%2010.28c-0.041%200.127-0.060%200.261-0.060%200.4%200.001%200.727%200.587%201.32%201.314%201.32%200.413%200%200.78-0.186%201.020-0.487l13.379-17.353c0.181-0.227%200.287-0.513%200.287-0.827%200-0.733-0.6-1.333-1.333-1.333h-8.073z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E');
    background-repeat: no-repeat;
    background-size: 18px;
    height: 18px;
    width: 18px;
    margin-left: -4px;
    content: '';
    display: inline-block;
    position: absolute;
`;

export default function SideBar(){
    return (
        <div>        

            <Container>
                <MiniContainer>

                    <Select>
                        <Option>
                            <A href="#">Brand</A>
                            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/>
                            </Svg>
                        </Option>

                        <Option>
                            <A href="#">Power Bank</A>

                            <Battery>
                                <BatteryLevel></BatteryLevel>
                            </Battery>

                        </Option>

                        <Option>
                            <A href="#">Cable</A>
                        </Option>

                        <Option>
                            <A href="#">Charger</A>
                        </Option>

                        <Option>
                            <A href="#">Screen Protection</A>
                        </Option>

                        <Option>
                            <A href="#">Phone Case</A>
                        </Option>
                    </Select>
                </MiniContainer>

                <Detail>Content</Detail>
            </Container>
        </div>
    )
}