import React, {useState} from 'react';

function App() {
  const [list, setList] = useState(['test', 'testing', 'apple', 'sesac', 'animal']);
  function filterCheck(){
    let lists = ['test', 'testing', 'apple', 'sesac', 'animal'];
    let newLists = [...list, 'dog']; // 전개 연산자 ...lists

    let newList = [];
    for ( let i = 0; i < lists.length; i++ ) {
      if(lists[i].length > 4) newList.push(lists[i]);
    }

    let result = lists.filter((value) => {
      return value.length > 4;
    })
  }

  function addElement() {
    
    console.log( [...list, 's'] );
    setList([...list, 's']);

    let newList = [];
    for ( let i = 0; i < list.length; i++ ) {
      console.log( i );
      console.log( list[i] );
      newList.push( i + list[i] );
     }
     newList = list.map((value, i) => {
      console.log( i );
      console.log( value );
      return i + value;
     })
     console.log( newList );
  }

  return (
  <div>
    <ul>
      {list.map((name, i) =>{
        return <li key={"li_"+i}> {name}</li>
      })}
    </ul>
    <ul>
      {list.filter((name, i) =>{
        return name.includes("a");
      })}
    </ul>
    <button onClick={addElement}>추가</button>
  </div>
  );
}

export default App;
