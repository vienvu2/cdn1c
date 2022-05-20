import React from 'react';
import { FormWrap, Input, Label, Row, Col } from './styles.js';

const Form = ({ inputs }) => {
	return (
		<FormWrap>
			<Row>
				{inputs.map((item) => {
					return (
						<Col size={item.size} key={item.label}>
							<Label>{item.label}</Label>
							<Input placeholder={item.label} />
						</Col>
					);
				})}
			</Row>
		</FormWrap>
	);
};

export default Form;
