import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
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

function App() {

  return (
    <>
    <MainNavbar />

    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/food-planning-list' element={ <FoodPlanningList /> } />
      <Route path='/dishes-list' element={ <DishesList /> } />
      <Route path='/edit-food-planning' element={ <EditFoodPlanning /> } />
      <Route path='/edit-dish' element={ <EditDish /> } />
      <Route path='/add-food-planning' element={ <AddFoodPlanning /> } />
      <Route path='/add-dish' element={ <AddDish /> } />
      <Route path='/food-planning-details/:foodPlanningId' element={ <FoodPlanningDetails /> } />
      <Route path='/dish-details/:dishId' element={ <DishDetails /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='*' element={ <NotFound /> } />
      <Route path='/error' element={ <Error /> } />
    </Routes>

    <Footer />
    </>
  )
}

export default App
