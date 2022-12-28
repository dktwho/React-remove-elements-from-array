import { useState } from 'react';
import './App.css';

function App() {

  const [notes, setNotes] = useState([1,2,3,4,5])
  const [letters, setletters] = useState(['a', 'b', 'c', 'd', 'e'])


  const result = notes.map((note, index) => {
    return <p key={index} onClick={() => remItem(index)}>{note} </p>
  } )

  function remItem(index) {
    setNotes([...notes.slice(0, index), ...notes.slice(index + 1) ])
  }
  // ---------------------------------------------------
  const res = letters.map((letter, idx) => {
    return <p key={idx}  >{letter} <button onClick={() => removeItem(idx)}>delete this item</button> </p> 
  })

  function removeItem(idx) {
    setletters([...letters.slice(0, idx), ...letters.slice(idx + 1)])
  }

  return (
    <div className="App">
      {result}
      <br />
      <br />
      <hr />
      {res}

    </div>
  );
}

export default App;
