import { url } from '../Utilities';
import getToken from './getToken';

const setOrderHistory = async (arrayDetail) => {
    try {
        const token = await getToken();
        return fetch(`${url}/cart.php`, // eslint-disable-line 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    token,
                    arrayDetail
                })
            })
            .then(res => res.text());
    } catch (error) {
        return error;
    }
};

module.exports = setOrderHistory;
