import logo from './logo.svg';
import './App.css';
import Dishes from './Components/DishesComponents/Dishes';
import AllCategories from './Components/Filter/AllCategories';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <div className='block'>
      
      <AllCategories/>
      <Cart />
      </div>
      <Dishes />
      

    </div>
  );
}

export default App;
