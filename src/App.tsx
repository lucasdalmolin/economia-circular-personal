import './App.css';
import Clock from './components/Clock';
// import SaveTheDate from './components/SaveTheDate/SaveTheDate'
import SaveTheDateComponent from './components/SaveTheDate/SaveTheDateComponent';

function App() {
  const deadline = new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000);

  return (
    <div className="background">
      <div className='centered-square'>
        <div className="reloj">
          <h1>Cuanto falta:</h1>
          <Clock countdown={deadline} callback={() => alert("countdown complete")} />
        </div>
        <div className='container-container'>
          <h1>Reserva Ahora!</h1>
          <SaveTheDateComponent deadline="March 21-22, 2023" />
          
        </div>
        {/* <Clock /> */}
      </div>
    </div>
  );
}

export default App;