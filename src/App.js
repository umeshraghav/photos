 import './App.css';
import Photos from './Photos';
import Search from './Search';
import Loading from './Loading';
import {useGlobalContext} from './context'


 

function App() {

      const {loading} = useGlobalContext();
       

      if(loading){
        return<Loading/>
      }
  return (
    <main>
     <Search/>   
      <Photos/>
     
    </main>
  );
}

export default App;
