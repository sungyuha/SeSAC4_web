import './App.css';
function App() {
  const flag = true;
  var name = "";
  if (flag) name = "SeSAC";
  else name = "문래";

  return (
    <div className="test" style= {{
      backgroundColor: "yellow",
      color: "blue"
    }}>
  
    {name}
    {flag && (<h1>True</h1>)}
  </div>
  );
}
// && 참과 참 일때의 결과만 사용

export default App;
