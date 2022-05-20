import React from 'react';
import Form from './Form.js';
import {
	PopupWrap,
	PopupContent,
	PopupTitle,
	PopupClose,
	PopupBody,
	PopupHeader,
	Button,
	PopupFooter
} from './styles.js';
const Popup = ({ onClose, data }) => {
	return (
		<PopupWrap>
			<PopupContent>
				<PopupHeader>
					<PopupTitle>{data.title}</PopupTitle>
					<PopupClose onClick={() => onClose && onClose()} />
				</PopupHeader>
				<PopupBody>
					<Form inputs={data.inputs || []} />
				</PopupBody>
				<PopupFooter>
					<Button onClick={() => onClose && onClose()}>Đóng</Button>
					<Button>Gửi thông tin</Button>
				</PopupFooter>
			</PopupContent>
		</PopupWrap>
	);
};

export default Popup;
