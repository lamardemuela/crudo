import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FoodPlanningList from './pages/FoodPlanningList';
import DishesList from './pages/DishesList';
import EditFoodPlanning from './pages/EditFoodPlanning';
import EditDish from './pages/EditDish';
import AddFoodPlanning from './pages/AddFoodPlanning';
import AddDish from './pages/AddDish';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Error from './pages/Error';
import Footer from './components/Footer';
import FoodPlanningDetails from './pages/FoodPlanningDetails';
import DishDetails from './pages/DishDetails';
import MainNavbar from './components/MainNavbar';
import Preparation from './pages/Preparation';
import TestAdd from './pages/TestAdd';
import { ThemeContext } from "./context/theme.context";
import { useContext } from 'react';

function App() {
  const {isDarkTheme} = useContext(ThemeContext)
  return (
    <div className={isDarkTheme?"darkTheme":"lightTheme"}>
      
    <MainNavbar/>
    

    <div className='divContainer'>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/food-planning-list' element={ <FoodPlanningList /> } />
        <Route path='/dishes-list' element={ <DishesList /> } />
        <Route path='/edit-food-planning/:foodPlanningId' element={ <EditFoodPlanning /> } />
        <Route path='/edit-dish/:dishId' element={ <EditDish /> } />
        <Route path='/add-food-planning' element={ <AddFoodPlanning /> } />
        <Route path='/add-dish' element={ <AddDish /> } />
        <Route path='/food-planning-details/:foodPlanningId' element={ <FoodPlanningDetails /> } />
        <Route path='/dish-details/:dishId' element={ <DishDetails /> } />
        <Route path='/preparation/:dishId' element={ <Preparation /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/test' element={ <TestAdd/> } />
        <Route path='*' element={ <NotFound /> } />
        <Route path='/error' element={ <Error /> } />
      </Routes>
    </div>

    <Footer />
    </div>
  )
}

export default App
