import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchServices } from './actions';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Banner from './components/Banner';
import FixedNavbar from './components/FixedNavbar';

function App() {
  const dispatch = useDispatch();
  const {services, loading, error} = useSelector((state) => state.services)

  useEffect(()=>{
    dispatch(fetchServices())
  }, [dispatch])
  const serviceList = [...services].sort((a,b)=> a.service_order - b.service_order)

  console.log(services)
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <FixedNavbar services={serviceList}/>
      <Services services={serviceList}/>
    </div>
  );
}

export default App;
