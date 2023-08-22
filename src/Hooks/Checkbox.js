import React, { useState } from "react";
function Checkbox() {
    const[liked,setLiked] = useState(true);
    function handleChecked(e){
        setLiked(e.target.checked);
    }
  return (
    <>
      <label>
        <input type="checkbox" checked={liked} onChange={handleChecked} />
        I liked this
      </label>
      <p>You {liked? 'liked' : 'did not like'}</p>
    </>
  );
}
export default Checkbox;
