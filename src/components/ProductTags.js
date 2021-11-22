import React from "react";
import withContext from "../withContext";

const ProductTags = props => {
    const { tag } = props;

    return (
        <div class="tags-field">
            <span class="tag" onClick={props.sortByTag()}>{tag}</span>
        </div>
        )
};

export default ProductTags;