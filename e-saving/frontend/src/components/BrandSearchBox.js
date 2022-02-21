import React, { useState } from "react";

export default function BrandSearchBox(props) {
  const [name, setName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/name/${name}`);
  };
  return (
    <form className='' onSubmit={submitHandler}>
      <div className='' id='brandInput'>
        <input
          placeholder='Type Your Brand'
          type='text'
          name='q'
          id='q'
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button id='BrandSearchBTN' className='primary' type='submit'>
          Enter
        </button>
      </div>
    </form>
  );
}
