import React, { useState } from 'react';

function SelectContainer() {
  const [selectedValue, setSelectedValue] = useState(''); // Khởi tạo giá trị ban đầu của select

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <select value={selectedValue} onChange={handleChange}>
        <option value="">Chọn một mục</option>
        <option value="option1">Tùy chọn 1</option>
        <option value="option2">Tùy chọn 2</option>
        <option value="option3">Tùy chọn 3</option>
      </select>
    </div>
  );
}

export default SelectContainer;