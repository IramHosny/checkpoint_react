
import './App.css';
import Footer from './component/Footer';
import Formulaire from './component/Formulaire';
import Navbarr from './component/Navbarr';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app" style={{ backgroundImage:`url("https://images.unsplash.com/photo-1625225230517-7426c1be750c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvcm18ZW58MHx8MHx8&w=1000&q=80")`}} >
      <Navbarr/>
      <Formulaire/>
      <Footer/>
    </div>
  );
}

export default App;
