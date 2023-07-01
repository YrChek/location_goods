import Store from './components/Store/Store';
import { products } from './data/data'
import './App.css';

function App() {
  return (
    <div className='container'>
      <Store products={ products }/>
    </div>
  );
}

export default App;
