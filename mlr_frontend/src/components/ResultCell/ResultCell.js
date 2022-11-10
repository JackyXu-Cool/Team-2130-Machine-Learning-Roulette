import React from 'react';
import './ResultCell.css';

const ResultCell = (props) => {
    return (
        <React.Fragment>
            <div className='result-table-cell'>
                <p style={{ fontWeight: 'bold' }}>{props.name}</p>
            </div>
            <div className='result-table-cell'>
                <p>{props.value}</p>
            </div>
        </React.Fragment>
    )
};

export default ResultCell