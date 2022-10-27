import { useState } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer/TodoContainer';

function App() {
  const [darkMode,setDarkMode] = useState(true);

  return (
    <div className="App"  
    style={{

      backgroundColor: darkMode ? "hsl(235, 21%, 11%)" : "white"


    }}
    
    >

    <img alt="bg-dark-desktop" style={{width:"100%",minHeight:"30%"}} src={require(`./assets/images/bg-desktop-${darkMode ?'dark.jpg':'light.jpg' }`)}/>
   <TodoContainer  darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  );
}

export default App;
