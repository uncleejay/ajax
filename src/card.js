import React from 'react';

const Card = ({titles}) => {
    return (
        <div key={titles.id}>
            {titles.slice(0,4).map((title) => (
                <div>
                    <p>{title.title}</p>
                    <img src={title.url} alt="img"/>
                </div>
            ))}
        </div>
    )
}

export default Card;