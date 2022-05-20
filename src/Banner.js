import React, { useEffect, useState } from 'react';
import Popup from './Popup.js';
import api from './services/api.js';
import { Button, Wrap, BannerImage } from './styles.js';

const Banner = () => {
	const [ showPopup, setPopup ] = useState(false);
	const [data, setData] = useState({})
	useEffect(()=>{
		api.get('https://jsonblob.com/api/jsonBlob/977079044361437184').then(res=> {
			setData(res?.data)
		})
	}, [])
	return (
		<Wrap>
			<BannerImage   onClick={() => setPopup(!showPopup)}>
				<img src={data.banner} />
			</BannerImage>
			{/* <Button onClick={() => setPopup(!showPopup)}></Button> */}
			{showPopup && <Popup data={data} onClose={()=> setPopup(false)} />}
		</Wrap>
	);
};

export default Banner;
