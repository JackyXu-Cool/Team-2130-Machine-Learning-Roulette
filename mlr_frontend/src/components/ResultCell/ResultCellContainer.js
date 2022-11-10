import React from 'react';
import ResultCell from './ResultCell';
import './ResultCellContainer.css';

const ResultCellContainer = (props) => {
    let allKeys = [];
    for (const key in props.data) {
        allKeys.push(key);
    }
    return (
        <div className='result-table-cell-container'>
            {allKeys.map((key) => (
                <ResultCell key={key} name={key} value={props.data[key]} />
            ))}
        </div>
    )
};

export default ResultCellContainer;