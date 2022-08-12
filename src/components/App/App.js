import './App.css';
import Admin from '../admin/Admin';
import List from '../courses/list/List';
import Edit from '../courses/edit/Edit';
import Details from '../courses/details/Details';
import Add from '../courses/add/Add';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Services from '../services/Services';
import CountactUs from '../contactus/ContactUs';
import Shop from '../shop/Shop';
import AboutUs from '../aboutus/AboutUs';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<List/>}/>
          <Route path='/courses/' element={<List/>} />
          <Route path='/courses/list' element={<List/>} />
          <Route path='/courses/add' element={<Add/>} />
          <Route path='/courses/details' element={<Details/>} />
          <Route path='/courses/edit' element={<Edit />} />
          <Route path='/admin/' element={<Admin/>} />
          <Route path='/contactus/' element={<CountactUs/>}/>
          <Route path='/shop/' element={<Shop/>}/>
          <Route path='/aboutus/' element={<AboutUs/>}/>
          <Route path='/services/' element={<Services/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
