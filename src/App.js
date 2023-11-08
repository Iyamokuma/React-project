
import './App.css';
import Employee from './components/Employee';

function App() {
  const employees = true;
  return (
    <div className="App">
      {
        employees ? (
          <>
            <Employee />
            <Employee />
            <Employee />
            <Employee />
          </>
        ) : (
          <p>No employees to display</p>
        )
      }
    </div>
  );
}

export default App;
