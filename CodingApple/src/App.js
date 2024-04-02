import './App.css';
import { useState } from 'react';

function App() {

  let [postTitle,postChange] = useState(['Man Coat', 'Gangnam Food', 'Python Study']); //변동시 자동으로 반영되게 만들고 싶을시
  let [Rating,RatingChange] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      
      <button onClick={ ()=> {
        let copy2 = [...postTitle];
        copy2 = ['Man Coat', 'Gangnam Food', 'Python Study'];
        postChange(copy2);
      }}>Post Return</button>

      <button onClick={()=>{
        let copy1 = [...postTitle];
        copy1 = copy1.sort();
        postChange(copy1);
      }}>가나다정렬</button>

      <button onClick={ ()=> {
        let copy = [...postTitle];
        copy[0] = 'Woman Coat';
        postChange(copy);
      }}>Post Change</button>

      <div className="list">
        <h4>{postTitle[0]} <span onClick={ ()=>{RatingChange(Rating+1)}}>👍</span> {Rating} </h4>
        <p>write. 2024.02.17</p>
      </div>

      <div className="list">
        <h4>{postTitle[1]}</h4>
        <p>write. 2024.02.17</p>
      </div>
      <div className="list">
        <h4>{postTitle[2]}</h4>
        <p>write. 2024.02.17</p>
      </div>

      <Modal/>

    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
        <h4>Title</h4>
        <p>Date</p>
        <p>Detail Info</p>
      </div>
  )
}
export default App;
