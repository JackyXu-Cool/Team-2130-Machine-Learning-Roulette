import React from 'react';

import './CheckboxList.css';

const CheckboxList = (props) => {
  const checkList = props.checkList;

  const handleCheck = (event) => {
    let updatedList = [...props.checked];
    if (event.target.checked) {
      updatedList = [...props.checked, event.target.value];
    } else {
      updatedList.splice(props.checked.indexOf(event.target.value), 1);
    }
    props.setChecked(updatedList);
  };

  const isChecked = (item) => (props.checked.includes(item) ? 'checked-item' : 'not-checked-item');

  return (
    <div className="checkList">
      <div className="checklist_title">{props.title}:</div>
      <div className="list-container">
        {checkList.map((item, index) => (
          <div key={index}>
            <input value={item} type="checkbox" onChange={handleCheck} />
            <span className={isChecked(item)}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxList;
