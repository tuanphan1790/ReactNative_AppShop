import { url } from '../Utilities';

const changeInfor = (token, name, phone, address) => (
    fetch(`${url}/change_info.php`, // eslint-disable-line 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ token, name, phone, address })
        })
        .then(res => res.json())
);

export default changeInfor;
