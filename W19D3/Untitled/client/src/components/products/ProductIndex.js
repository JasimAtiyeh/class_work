import React from "react";
import { Query } from "react-apollo";
import * as Queries from "../../graphql/queries";
import ProductIndexItem from "./ProductIndexItem";

const ProductIndex = () => {
    return(
        <Query query={Queries.FETCH_PRODUCTS}>
        {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        return (
          <ul>
            {data.products.map(product => (
                <li key={product._id}>
                  <ProductIndexItem product={product} />
                </li>
            ))}
          </ul>
        );
      }}
    </Query>
    )
}

export default ProductIndex;