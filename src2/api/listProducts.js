import { url } from '../Utilities';

const listProducts = (typeId, page) => (
    fetch(`${url}/product_by_type.php?id_type=${typeId}&page=${page}`) // eslint-disable-line 
        .then(res => res.json())
);

export default listProducts;
