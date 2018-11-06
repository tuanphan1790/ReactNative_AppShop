import { url } from '../Utilities';

const searchProduct = (keyword) => (
    fetch(`${url}/search.php?key=${keyword}`)// eslint-disable-line 
        .then(res => res.json()));

export default searchProduct;
