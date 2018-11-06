import getToken from './getToken';
import savetoken from './saveToken';
import { url } from '../Utilities';

const refreshToken = async () => {
    try {
        const token = await getToken();
        if (token === '' || token === 'TOKEN_KHONG_HOP_LE') {
            console.log('Chua co token');
        }
        const newToken = await fetch(`${url}/refresh_token.php`, // eslint-disable-line 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    token
                })
            })
            .then(res => res.text());
        await savetoken(newToken);
    } catch (error) {
        return error;
    }
};

export default refreshToken;
