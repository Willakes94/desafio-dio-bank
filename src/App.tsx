import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './components/App.Context';
import MainRoutes from './routes';
import { createLocalStorage, getAllLocalStorage} from './services/storage';




const App: React.FC = () => {

  !getAllLocalStorage() && createLocalStorage()
  


  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes></MainRoutes>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>

    </BrowserRouter>
  );
}


export default App;
