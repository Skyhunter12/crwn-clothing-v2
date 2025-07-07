import {Routes, Route} from 'react-router-dom';

import Shop from './routes/shop/shop.component';
import Navigation from './routes/navigation/navigation.component';
import Authenticate from './routes/authentication/authentication.component';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authenticate />} />
      </Route>
    </Routes>
  );
};

export default App;
