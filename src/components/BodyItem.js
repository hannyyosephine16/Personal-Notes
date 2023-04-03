import React from "react";
import {showFormattedDate} from '../utils/index'

function BodyItem({title, body}){
    return(
        <div className="item-body">
            <h3 className="item-title">{title}</h3>
            <span className="item-date">{showFormattedDate(new Date())}</span>
            <p className="item-body">{body}</p>
        </div>
    );
}

export default BodyItem;