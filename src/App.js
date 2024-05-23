import './App.css';
import { orginals,action,horror,romance,comedy,documentry } from './Urls';
import Navbar from './Componenets/Navbar/Navbar';
import Banner from './Componenets/Banner/Banner';
import Rawpost from './Componenets/Rawpost/Rawpost';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rawpost urls={orginals} title='Netflix Orginals'/>
      <Rawpost urls={action} title='Action' isSmall/>
      <Rawpost urls={horror} title='Horror' isSmall/>
      <Rawpost urls={romance} title='Romance' isSmall/>
      <Rawpost urls={comedy} title='Comedy' isSmall/>
      <Rawpost urls={documentry} title='Documentry' isSmall/>

    </div>
  );
}

export default App;
