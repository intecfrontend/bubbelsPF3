import React from 'react'
import styled from "styled-components";

function seebtn() {
  return (
    <div>
      
    </div>
  )
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (

    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};
export default seebtn
