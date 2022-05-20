import axios from 'axios';
const baseUrl = '';
 const api = {
	post(url, data) {
		return axios.post(baseUrl + url, data, { clientId: '21321', userInfo: {} });
	},
    get(url) {
		return axios.get(baseUrl + url, { clientId: '21321', userInfo: {} });
	}
};


export default api