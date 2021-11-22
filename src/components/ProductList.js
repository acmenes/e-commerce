import React from "react";
import ProductItem from "./ProductItem";
import ProductTags from "./ProductTags";
import withContext from "../withContext";

const ProductList = props => {
    const { tags } = props.context;
    const { products } = props.context;

    return (
        <div className="container">
            <div class="box">
            <span className="title has-text-grey-light">
            Browse our tags:
             </span>
            <div class="tags">
            {tags && tags.length ? (
                tags.map((tag, index) => (
                <ProductTags 
                    tag={tag}
                    key={index}
                    sortByTag={props.context.sortByTag}/>
                ))
            ): (  
            <span className="title has-text-grey-light">
            No tags found!
             </span>)}
             </div>
            </div>
            <div className="column columns is-multiline">
            {products && products.length ? (
                products.map((product, index) => (
                <ProductItem
                    product={product}
                    key={index}
                    addToCart={props.context.addToCart}
                    sortByTag={props.context.sortByTag}
                />
                ))
            ) : (
                <div className="column">
                <span className="title has-text-grey-light">
                    No products found!
                </span>
                </div>
            )}
            </div>
        </div>
    )
}



export default withContext(ProductList);