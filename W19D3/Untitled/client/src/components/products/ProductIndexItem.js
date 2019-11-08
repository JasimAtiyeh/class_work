import React from "react";
import { Link } from 'react-router-dom';

const ProductIndexItem = (props) => {
    debugger;
    return(
        <div className="detail-container">
            <Link to={`/product/${props.product._id}`} >
                <p>
                    {props.product.name}
                </p>
            </Link>
        </div>
    );
}

export default ProductIndexItem;