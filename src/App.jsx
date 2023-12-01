import './App.css';

function MainTitle({ title }) {
return <h1>{title}</h1>;
}


function App() {
  
  return (
    <div className='App'>
      <MainTitle title="Demo" />
    </div>
  );
}

export default App;
