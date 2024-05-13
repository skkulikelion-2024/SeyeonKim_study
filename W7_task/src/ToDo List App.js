import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos(currentArray => [toDo, ...currentArray]) 
    // 일반적으로 리액트였다면 toDo.push하여 값을 변경했겠지만, state는 직접 바꿀 수 없음
    // --> toDo array에 새로운 값 넣는 함수 사용
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit = {onSubmit}>
        <input 
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
        <ul>
          {toDos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          {/* toDos array를 가져온 다음 map에서 지정한 함수로 각 요소를 처리 */}
        </ul>
    </div>
  );
}

export default App;
