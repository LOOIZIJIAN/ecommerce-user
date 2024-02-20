import styled, {css} from "styled-components";
import {primary} from "@/lib/colors";

export const ButtonStyle = css`
	border:0;
	padding: 5px 15px;

	/* width:100%; */
	/* height:100%; */

	width: 30px;
	height: 30px;
	/* gap: 5px; */

	border-radius: 5px;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	font-family: sans-serif;
	font-weight: 500;
	font-size: 1rem;
  	white-space: nowrap;

	svg{
			height: 18px;
				
	}

	${props => props.block && css`
		display: block;
		width: 100%;
	`}

	${props => props.white && !props.outline && css`
			background-color: #fff;
			color: #000;
	`}  

	${props => props.white && props.outline && css`
			background-color: transparent;
			color: #fff;
			border: 1px solid #fff;
	`}

	${props => props.black && !props.outline && css`
    background-color: #000;
    color: #fff;
  `}
	
  ${props => props.black && props.outline && css`
    background-color: transparent;
    color: #000;
    border: 1px solid #000;
  `}

	${props => props.primary && !props.outline && css`
			background-color: ${primary};
			border: 1px solid ${primary};
			color: #fff;
	`}

	${props => props.primary && props.outline && css`
			background-color: transparent;
			border: 1px solid ${primary};
			color: ${primary};
	`}

	${props => props.cate && css`
			background-color: transparent;
			border: none ${primary};
			color: #252323;
			border-top-left-radius:10px;
			border-bottom-left-radius:10px;
			border-top-right-radius:10px;
			border-bottom-right-radius:10px;
			&:hover{
				background-color: #000;
				color: #fff;
					transition: transform 0.5s ease, border-radius 0.5s ease; /* Add transition for transform and border-radius */
					transform: scale(1.2,1.2); /* Enlarge the button */
					border-top-right-radius: 10px; /* Adjust border-radius on hover */
					border-bottom-right-radius: 10px;
					
		
			  }
			
	`}

	${props => props.cate2 && css`
			background-color: transparent;
			border: none ${primary};
			color: white;
			border-top-left-radius:10px;
			border-bottom-left-radius:10px;
			border-top-right-radius:10px;
			border-bottom-right-radius:10px;
			&:hover{
				background-color: #000;
				color: #fff;
					transition: transform 0.5s ease, border-radius 0.5s ease; /* Add transition for transform and border-radius */
					transform: scale(1.2,1.2); /* Enlarge the button */
					border-top-right-radius: 10px; /* Adjust border-radius on hover */
					border-bottom-right-radius: 10px;
					
		
			  }
			
	`}

	${props => props.size === 'l' && css`
			font-size:1.2rem;
			padding 10px 20px;
			svg{
					height:20px;
			}
	`}

`;

const StyledButton = styled.button`
	${ButtonStyle}
	border: 0.5px solid gray;
`;

export default function Button({children, ...rest}) {
	return(
			<StyledButton {...rest}>{children}</StyledButton>
	);
}