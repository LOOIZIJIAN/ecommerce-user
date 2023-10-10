import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
	background-color: #222;
	color:#fff;
	padding: 50px 0;
`;

const Title = styled.h1`
	margin: 0;
	font-weigth: normal;
	font-size: 3rem; 
`;

const Decs = styled.p`
	color: #aaa;
	font-size:.8rem;
`;

const ColumnsWrapper = styled.div`
	display: grid;
	grid-template-columns: 1.1fr 0.9fr;
	gap: 40px;
	img{
		max-width: 100%;
	}
`;

const Column = styled.div`
	display: flex;
	align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap:15px;
  margin-top:25px;
`;

export default function Featured({product}) {
	const {addProduct} = useContext(CartContext);
	function addFeaturedToCart() {
		addProduct(product._id);
	}
	return(
		<Bg>
			<Center>
				<ColumnsWrapper>
					<Column>
						<div>
							<Title>{product.title}</Title>
							<Decs>{product.description}</Decs>
							<ButtonsWrapper>
								<ButtonLink href={'/products/'+product._id} outline white>Read more</ButtonLink>
								<Button white onClick={addFeaturedToCart}>
									<CartIcon/>
									Add to cart
								</Button>
							</ButtonsWrapper>
						</div>
					</Column>
					<Column>
						<img src="https://149426355.v2.pressablecdn.com/wp-content/uploads/2021/10/mbp-2021-bbedit-lede.png" alt="macbook"/>
					</Column>
				</ColumnsWrapper>	
			</Center>
		</Bg>
	);
}