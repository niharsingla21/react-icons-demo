import { FaReact } from "react-icons/fa";
import { MdAlarmOn } from "react-icons/md";
import { IconContext } from "react-icons";
import './App.css';

function App() {
  return (
    <IconContext.Provider value = {{ color:'cyan' ,size:'5rem'}}>
    <div className="App">
      <FaReact/>
      <MdAlarmOn/>
    </div>
    </IconContext.Provider>
  );
}

export default App;
