import { useEffect } from 'react';
import './App.css';
import {fetchDataFromApi} from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration,getGenres } from './store/homeSlice';
import { BrowserRouter, Route } from 'react-router-dom/';
import { Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Details from './pages/details/Details'
import Explore from './pages/explore/Explore';
import PagesNotFound from './pages/404/PagesNotFound';
import Header from '../src/components/header/Header'
import Footer from './components/footer/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SearchResult from './searchResults/SearchResult';


function App() {
  const dispatch = useDispatch();
  const {url} = useSelector((state) => state.home)
  console.log(url);
  useEffect(() => {
    fetchApiCongif();
    genresCall();
  },[])

  const fetchApiCongif = () => {
    fetchDataFromApi('/configuration')
    .then ((res) => {
      console.log(res);
      const url = {
        backdrops: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      }
      dispatch(getApiConfiguration(url))
    })
  }

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
        promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    data.map(({genres}) => {
        return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
};

  return (
    <div>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:mediaType/:id" element={<Details/>}/>
      <Route path="/search/:query" element={<SearchResult/>}/>
      <Route path="/explore/:mediaType" element={<Explore/>}/>
      <Route path="*" element={<PagesNotFound/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>

       
    </div>
  );
}

export default App;
