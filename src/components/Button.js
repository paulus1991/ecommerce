import styled from 'styled-components';

export const ButtonContainer = styled.button`
 
 
	border: 0.05rem solid ;
	font-size:0.9rem;
	border-color: ${(props) => (props.cart ? 'var(--mainYellow)' : 'black')};
		color:${(prop) => (prop.cart ? 'var(--mainYellow)' : 'var(--lightBlue)')}
	cursor: pointer;
	border-radius: 0.5rem;
	transition: all 0.4s ease-in-out;
	&:hover {
		cursor:pointer;
		background: ${(prop) => (prop.cart ? 'var(--mainYellow)' : '#F0FFFF')}
	}
	&:focus {
		outline: none;
	}
`;
