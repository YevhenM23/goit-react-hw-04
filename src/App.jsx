import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Loader from './components/Loader/Loader';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreButton from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import ImageModal from './components/ImageModal/ImageModal';


function App() {
  const API_KEY = "1gOr15J92LNKilCVsjC_jrkmQ-6Vfv0aNX3Uqwg1SXo";
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query.trim()) return;
     const getPhotosData = async () => {
       try {
         setIsLoading(true);
         setIsError(false);
         const { data } = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&page=${page}&query=${query}`)
         setPhotos(prev => [...prev, ...data.results]);
       } catch (err) {
         console.error('Error fetching photos:', err);
         setIsError(true);
       } finally {
         setIsLoading(false);
      }
    }
    getPhotosData();
  },[page, query]) 

  const handleChangePage = () => {
    setPage(prev => prev + 1);
  }

  const handleChangeQuery = (newQuery) => {
    if (newQuery === query) {
      return;
    }
    setQuery(newQuery)
    setPhotos([])
    setPage(1)
  }

  return (
    <>
      <SearchBar onSearchChange={handleChangeQuery} />
      <ImageGallery photos={photos} />
      {photos.length > 0 && <LoadMoreButton handleChangePage={handleChangePage} />}
      {isLoading && <Loader />}
      <ImageModal/>
      {isError && <h2>Something went wrong! Try again...</h2>}
    </>
  )
}

export default App
