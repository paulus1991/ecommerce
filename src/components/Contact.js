import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import contact from '../img/contact.png';
import styled from 'styled-components';
const Contact = (props) => {
	return (
		<Style>
			<div className="main container">
				<img src={contact} alt="contact"></img>
				<h1 className="text-center">Contact us</h1>

				<Form>
					<FormGroup>
						<Label for="exampleEmail">Email</Label>
						<Input
							type="email"
							name="email"
							id="exampleEmail"
							placeholder="Enter a valid email"
							required
						/>
					</FormGroup>
					<FormGroup>
						<Label for="Name">Name</Label>
						<Input type="text" name="text" id="textname" placeholder=" Name " />
					</FormGroup>
					<FormGroup>
						<Label for="Surname">Surname</Label>
						<Input
							type="text"
							name="text"
							id="textname"
							placeholder="Surname "
							required
						/>
					</FormGroup>
					<FormGroup>
						<Label for="exampleSelect">Gender</Label>
						<Input type="select" name="select" id="exampleSelect">
							<option>Male</option>
							<option>Female</option>
						</Input>
					</FormGroup>

					<FormGroup>
						<Label for="exampleText">Message</Label>
						<Input
							type="textarea"
							name="text"
							id="exampleText"
							placeholder="Questions, Complains,Suggestions"
							required
						/>
					</FormGroup>
					<FormGroup>
						<Label for="exampleFile">File</Label>
						<Input type="file" name="file" id="exampleFile" />
						<FormText color="muted">
							In case you have a complain about our shoes, please attach your
							picture here.
						</FormText>
					</FormGroup>

					<Button
						onClick={() => {
							alert('Your request was succcesfuly submited');
						}}
					>
						Submit
					</Button>
				</Form>
			</div>
		</Style>
	);
};

export default Contact;

const Style = styled.div`
	.main img {
		width: 100%;
	}
`;
