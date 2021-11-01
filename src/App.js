import {useState, useEffect} from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
function App() {
  const [images,setImages] = useState([]);
  const [term,setTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`;
  
  const getImages= async ()=>{
    
    const response = await  fetch(URL);
    const data = await response.json();
    
    
    return data.hits
  }
  
  
  const loadMore = ()=>{
    getImages().then(data => {
      setImages([...images,...data])
    })
  }

  useEffect(() =>{
    setIsLoading(true);
    getImages().then(data => {

      setImages(data);
      setIsLoading(false);
    })
  }, [term]);

  return (
  <div className="container mx-auto">
  <ImageSearch setTermSearch= {(text)=>{setTerm(text)}} />
    {!isLoading && images.length === 0 && <h1 className="font-bold text-2xl mx-auto text-center mt-32">No images found</h1> }
    {isLoading ? <h1 className="font-bold text-3xl mx-auto text-center mt-32 ">Loading...</h1> : 
    <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-3">
      {images.map((image,index) =>(

        <ImageCard key={index} image={image} />
      )
      
      )}
    </div>}
    {!isLoading && images.length>0 && <button onClick={loadMore} className=" block bg-blue-400 hover:bg-blue-300 border-teal-500  text-sm
                    border-4 text-white max-w-sm rounded overflow-hidden my-10 mx-auto py-1 px-2 ">Load more ..</button>}
  </div>
  );
}

export default App;
