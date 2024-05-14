import './styles/dropdownStyle.css'
import './styles/formStyle.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Form from "./pages/form";
import Dropdown from "./pages/dropdown";
import ServiceDropdown from './pages/AddingService';


function App() {
  return (
    <>
    <ServiceDropdown/>
    {/* <BrowserRouter>
        <Routes>
            <Route path='/' element={<Form/>}/>
            <Route path='/dropdown' element={<Dropdown/>}/>
        </Routes>
    </BrowserRouter> */}
    {/* <Dropdown/> */}
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src="Octocat.png" className="App-logo" alt="logo" />
    //     <p>
    //       GitHub Codespaces <span className="heart">♥️</span> React
    //     </p>
    //     <p className="small">
    //       Edit <code>src/App.jsx</code> and save to reload.
    //     </p>
    //     <p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </p>
    //   </header>
    // </div>
  );
}

export default App;
