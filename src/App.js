import Home from './components/Home';
import AppProvider from './context';


function App() {

  return (
    <AppProvider>
     <Home/>
    </AppProvider>
  );
}

export default App;
