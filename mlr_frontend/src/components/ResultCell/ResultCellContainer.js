import React from 'react';
import ResultCell from './ResultCell';
import './ResultCellContainer.css';

const ResultCellContainer = (props) => {
    const map = new Map();
    for (const key in props.data) {
        if (Array.isArray(props.data[key])) {
            const list = props.data[key];
            let counter = 0;
            for (const summary of list) {
                const keyMean = key + '_mean_' + counter;
                const keyStd = key + '_std_' + counter;
                map.set(keyMean, summary['mean'].toFixed(4));
                map.set(keyStd, summary['std'].toFixed(4));
                counter++;
            }
        } else {
            map.set(key, props.data[key]);
        }
    }

    const allKeys = [];
    for (const key of map.keys()) {
        allKeys.push(key);
    }
    return (
        <div className='result-table-cell-container'>
            {allKeys.map((key) => (
                <ResultCell key={key} name={key} value={map.get(key)} />
            ))}
        </div>
    )
};

export default ResultCellContainer;