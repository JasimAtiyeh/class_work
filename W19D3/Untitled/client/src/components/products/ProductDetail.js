import React from "react";
import { Link } from 'react-router-dom';
import * as Queries from "../../graphql/queries";
import { Query } from "react-apollo";

const ProductDetail = (ownProps) => {
    debugger;
    return(
        <Query query={Queries.FETCH_PRODUCT} variables={{id: ownProps.match.params.productId}}>
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error</p>;
                return(

                    <div className="detail-container">
                        <p>
                            {data.product.name}
                        </p>
                        <p>
                            {data.product.description}
                        </p>
                        <p>
                            {data.product.weight}
                        </p>
                    </div>
                );}}
        </Query>
    );
}

export default ProductDetail;