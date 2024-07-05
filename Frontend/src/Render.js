import React, { useState } from 'react';
import i from "./assests/Group 3742.png";
function Render() {
  const [condition, setCondition] = useState(true);

  return (
    <div>
      {condition ? (
        <img src={i} alt="First" style={{borderRadius:"50%",width:"100px",height:"100px"}}/>
      ) : (
        <a href='#'>Login</a>
      )}
      <button onClick={() => setCondition(!condition)}>Toggle Image</button>
    </div>
  );
}

export default Render;
