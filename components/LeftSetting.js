import styled from "styled-components"
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const LeftCon = styled.div`
    position: fixed;
    width: 240px;
    height: 640px;
    margin: 30px 0 30px 15px;
    border-radius: 10px;
    background: #343A40;
    box-shadow: -6px 6px 2px 0px rgba(33, 37, 41, 0.25);
    padding: 0 30px;
`;

// Left Top Start
const LeftUpCon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #F8F9FA;
    margin-top: 15px;
    padding-bottom: 15px;
`;

const Img = styled.img`
    width: 70px;
    height: 65px;
    border-radius: 10px;
    border: 1px solid #DEE2E6;
    background: rgba(217, 217, 217, 0.00);
`;

const TxtCon = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    color: #FFF;
    font-family: Poppins;
`;

const H1 = styled.h1`
    font-size: 24px;
    font-weight: 400;
    text-align: center;
`;

const Img1 = styled.img`
    width: 18px;
    margin-right: 5px;
    filter: grayscale(30%) brightness(70%);
`;

const Span = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: right;

    margin-left: auto;
    text-decoration: none;
    color: lightgray;
    cursor: default;

    &:hover {
        cursor: pointer;
        color: white;
        ${Img1} {
            filter: grayscale(0%) brightness(100%);
        }
    }
`;
// Left Top End

// Left Selection Start
const DetailsCon = styled.div`
    height: 76%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`;

const Img2 = styled.img`
    width: 30px;
    height: 30px;    
    margin-top: 2px;
    margin-right: 10px;
`;

const Detail = styled.div`
    color: #FFF;
    font-family: Poppins;
    display: flex;
    flex-direction: row;
    text-align: left;
    justify-content: left;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover {
        color: #a9a9a9;
    }
`;

const Detail1 = styled(Detail)`
    cursor: default;

    &:hover {
        color: white;
    }
`;

const H2 = styled.h2`
    font-size: 22px;
    font-weight: 600;
    margin: 5px 0 15px 0;
`;

const SubDetail = styled.div`
    display: flex;
    flex-direction: column;
`;

const A = styled.a`
    text-decoration: none;
    color: white;
    font-size: 18px;
    font-weight: 400;
    margin: 0 0 10px 30px;
    width: fit-content;

    &:hover {
        cursor: pointer;
        color: #a9a9a9;
    }
`;
// Left Selection End

export default function LeftSetting(){
    const {data : session} = useSession();
    const router = useRouter();

    return (
        <LeftCon>
            <LeftUpCon>
                <Img src="AfterLogin/User_Icon.png"/>
                <TxtCon>
                    <H1>{session?.user?.name}</H1>
                    <Span href="account">
                        <Img1 src="AfterLogin/User_Setting_Icon.png" alt="Edit" />
                        Edit
                    </Span>
                </TxtCon>
            </LeftUpCon>

            <DetailsCon>
                
                {/* Details Start */}
                <Detail1>
                    <Img2 src="AfterLogin/User_Icon.png" alt="User"/>
                    <SubDetail>
                        <H2>My Account</H2>
                        <A href="account">Profile</A>
                        {/* <A href="card">Bank & Cards</A> */}
                        {/* <A href="#">Address</A> */}
                    </SubDetail>
                </Detail1>
                {/* Details End */}

                {/* Details Start */}
                {/* <Detail>
                    <Img2 src="AfterLogin/Like_Icon.png" alt="Like"/>
                    <H2 onClick={() => router.push('wishlist')}>Wishlist</H2>
                </Detail> */}
                {/* Details End */}

                {/* Details Start */}
                <Detail>
                    <Img2 src="AfterLogin/Shopping_Cart.png" alt="Cart"/>
                    <H2 onClick={() => router.push('purchasehistory')}>Purchase History</H2>
                </Detail>
                {/* Details End */}

                {/* Details Start */}
                {/* <Detail>
                    <Img2 src="AfterLogin/Coupon_Icon.png" alt="Coupon"/>
                    <H2 onClick={() => router.push('')}>Voucher</H2>
                </Detail> */}
                {/* Details End */}

            </DetailsCon>

        </LeftCon>
    )
}