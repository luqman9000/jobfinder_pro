import React from 'react';

function listtuto({ items }) {
    return (
      <ol>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    );
  }
  
  export default listtuto;