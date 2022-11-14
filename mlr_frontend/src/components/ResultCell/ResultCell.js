import React from 'react';
import './ResultCell.css';

const ResultCell = (props) => {
    return (
        <React.Fragment>
            <div className='result-table-cell'>
                <div>
                    <p style={{ fontWeight: 'bold' }}>{props.name}</p>
                </div>
                <div>
                    <p>{props.value}</p>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ResultCell