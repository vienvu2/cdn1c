import React from 'react';
import { createRoot } from 'react-dom/client';
import Banner from './Banner.js';
import Popup from './Popup.js';
import Form from './Form.js';

console.log("1C - start >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.")

const bannerDom = document.getElementById('1c-banner');
console.log("1C - bannerDom >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.", bannerDom)
const banner = createRoot(bannerDom);

banner.render(<Banner />);

const popupDom = document.getElementById('1c-popup');
if (popupDom) {
	const popup = createRoot(popupDom);
	popup.render(<Popup />);
}

const formDom = document.getElementById('1c-form');
if (formDom) {
	const form = createRoot(formDom);
	form.render(<Form />);
}
