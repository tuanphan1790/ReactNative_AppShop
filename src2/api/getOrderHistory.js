import getToken from './getToken';
import { url } from '../Utilities';

const orderHistory = async () => {
    const token = await getToken();
    return fetch(`${url}/order_history.php`, // eslint-disable-line 
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token })
    })
    .then(res => res.json());
};

export default orderHistory;
