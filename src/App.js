
import './App.css';

function App() {
  let total = 0;
  let arrayNums = [1,2,3,4,5,6,7];
  arrayNums.forEach((num) => total += num);
  console.log("Total " + total)

  return (
    <div className="App">

    </div>
  );
}

export default App;
