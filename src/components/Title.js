import React from 'react';
import styled from 'styled-components';
export default function Title({ name, title }) {
	return (
		<Styled>
			<div className="row">
				<div className="col-10 mx-auto my-2 text-center text-title">
					<h1 className=" main text-capitalize font-weight-bold">
						{name} <strong className="main">{title}</strong>
					</h1>
				</div>
			</div>
		</Styled>
	);
}

const Styled = styled.div`
	.main {
		font-family: 'Cormorant Garamond', serif;
	}
`;
