import React from 'react';

function ThoughtsList({ thoughts, onDelete }) {
  return (
    <ul>
      {thoughts.map((thought, index) => (
        <li key={index}>
          <span>{thought.date}</span>
          <p>{thought.text}</p>
          <button onClick={() => onDelete(index)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default ThoughtsList;



