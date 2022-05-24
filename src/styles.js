import React from 'react';
import styled, { css } from 'styled-components';

const Wrap = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,700&display=swap');

	box-sizing: border-box;
	color: #333;
	* {
		box-sizing: border-box;
		font-family: 'Lato', sans-serif;
	}
`;

const Button = styled.button`
	cursor: pointer;
	background: transparent;
	font-size: 16px;
	border-radius: 3px;
	color: #333;
	border: 0;
	background: #f4f4f4;
	padding: 12px 24px;
	font-weight: bold;
	margin: 0 12px;
	${(props) =>
		props.primary &&
		css`
			background-color: white;
			color: green;
			border-color: green;
		`};
`;

const PopupWrap = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	background: #0009;
	right: 0;
	z-index: 99999;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const PopupContent = styled.div`
	max-width: 800px;
	width: 100%;
	margin: 0 auto;
	background: white;
	border-radius: 15px;
	box-shadow: 5px 5px 5px #0002;
	overflow: hidden;
`;

const PopupFooter = styled.div`
	padding: 16px;
	text-align: right;
`;
const PopupHeader = styled.div`
	padding: 50px 16px;

	position: relative;
	background-size: cover;
	&:after {
		background-image: url('https://znews-photo.zingcdn.me/w660/Uploaded/tmuitg/2022_05_18/Firdia_Lisnawati.jpg');
		content: '';

		filter: blur(1px);
		-webkit-filter: blur(1px);

		pointer-events: none;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		z-index: 1;
		right: 0;
	}

	&:before {
		content: '';
		pointer-events: none;
		position: absolute;
		top: 0;
		z-index: 2;
		left: 0;
		bottom: 0;
		right: 0;
		background: #0004;
	}
`;
const PopupBody = styled.div`
	max-height: calc(100vh - 350px);
	overflow: auto;
`;
const PopupTitle = styled.h5`
	font-size: 28px;
	line-height: 36px;
	font-weight: bold;
	text-align: center;
	color: white;
	position: relative;
	z-index: 3;
	max-width: 500px;
	margin-left: auto;
	margin-right: auto;
`;
const PopupClose = styled.div`
	height: 40px;
	width: 40px;
	background: red;
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
	z-index: 3;
`;

const FormWrap = styled.div`padding: 24px;`;
const Input = styled.input`
	height: 35px;
	border: 1px solid #ccc;
	border-radius: 6px;
	padding-left: 12px;
	width: 100%;
	display: block;
	&:focus,
	&:active {
		outline: 0;
	}
`;

const Label = styled.label`
	display: block;
	font-weight: bold;
	font-size: 14px;
	margin-top: 16px;
	margin-bottom: 6px;
`;

const Row = styled.div`
	display: flex;
	margin-left: -12px;
	margin-right: -12px;
	flex-wrap: wrap;
`;

const Col = styled.div`
	padding-left: 12px;
	padding-right: 12px;

	${(props) => props.size && css`width: ${100 * props.size / 12}%;`};
`;

const BannerImage = styled.div``;

export {
	Button,
	PopupWrap,
	PopupContent,
	PopupHeader,
	PopupClose,
	PopupTitle,
	PopupFooter,
	PopupBody,
	FormWrap,
	Wrap,
	Label,
	Input,
	Row,
	Col,
	BannerImage
};
