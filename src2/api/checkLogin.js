import { url } from '../Utilities';

const checkLogin = (token) => (
    fetch(`${url}/check_login.php`, // eslint-disable-line 
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token })
    })
    .then(res => res.json())
);

export default checkLogin;
