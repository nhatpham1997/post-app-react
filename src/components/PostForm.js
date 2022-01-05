import React, { useState } from 'react';

const Postform = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div>
      <input type="text" onChange={handleChange} defaultValue="Bạn đang nghĩ gì thế" />
    </div>
  );
}

export default Postform;
