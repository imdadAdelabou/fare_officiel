import React from 'react'

function CardHeader({imageUri, productName, price }) {
    return (
        <div>
            <img className="z-50" src={imageUri} alt="" />
            <div>
                <h2 className="text-gray-700 text-2xl font-sanchez">{productName}</h2>
                <small className="text-gray-700 text-2xl font-sanchez">XOF {price}</small>
            </div>
        </div>
    );
}

export default CardHeader;
