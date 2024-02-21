import styled from "styled-components";

const DetailCon = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    height: 100%;
    width: 100%;
    margin-bottom: 20px;
`;

const ImgCon = styled.div`
    width: 10%;
`
const SelectionIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-top: 5px;
`;

const SelectTxt = styled.h3`
    width: 25%;
    height: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    color: #495057;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
`;

const ShipDetail = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
    margin-top: 12px;
`;

const DetRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
`;

const P = styled.p`
    color: #000;

    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin: 0;
    width: 45%;
`;

const P1 = styled(P)`
    width: 55%;
`;
export default function ItemDetail(){
    return(
        <DetailCon>
            <ImgCon><SelectionIcon src="/Ship_Icon.png" alt="Ship" /></ImgCon>
            <SelectTxt>Shipping</SelectTxt>
            <ShipDetail>
                <DetRow>
                    <P>Shipping From</P>
                    <P1>: MALAYSIA</P1>
                </DetRow>
            </ShipDetail>
        </DetailCon>
    )
};