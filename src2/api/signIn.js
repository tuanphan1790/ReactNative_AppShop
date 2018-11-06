import { url } from '../Utilities';

const signIn = (email, password) => (
    fetch(`${url}/login.php`, // eslint-disable-line 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(res => res.json())
);

module.exports = signIn;
