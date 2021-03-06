import React from "react";

const ProductItem = props => {
    const { product } = props;
    return (
        <div className=" column is-half">
            <div className="box">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img
                                class="is-rounded"
                                src={product.image}
                                alt={product.shortDesc}
                            />
                        </figure>
                    </div>
                    <div className="media-content">
                        <b style={{ textTransForm: "capitalize" }}>
                            {product.name}{ " " }
                            <span className="tag is-primary">${product.price}</span>
                            { "  " }
                            <span className="tag is-light is-normal is-rounded" 
                            onClick={props.sortByTag()}>{product.category}</span>
                        </b>
                        <div>{product.shortDesc}</div>
                            {product.stock > 0 ? (
                            <small>{product.stock + " Available"}</small>
                        ) : (
                            <small className="has-text-danger">Out Of Stock</small>
                        )}
                        <div className="is-clearfix">
                            <button
                                className="button is-small is-outlined is-primary   is-pulled-right" 
                                onClick={() => {
                                    props.addToCart({
                                        id: product.name, 
                                        product,
                                        amount: 1
                                    })
                                }}
                            >
                            Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;