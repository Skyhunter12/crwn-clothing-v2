import {Routes, Route} from 'react-router-dom';

import Shop from './routes/shop/shop.component';
import Navigation from './routes/navigation/navigation.component';
import Authenticate from './routes/authentication/authentication.component';
import SignOut from './routes/sign-out/sign-out.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authenticate />} />
        <Route path="signout" element={<SignOut />} />
      </Route>
    </Routes>
  );
};

export default App;
