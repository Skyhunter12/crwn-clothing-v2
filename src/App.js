import {Routes, Route} from 'react-router-dom';

import Shop from './routes/shop/shop.component';
import Navigation from './routes/navigation/navigation.component';
import Authenticate from './routes/authentication/authentication.component';
import SignOut from './routes/sign-out/sign-out.component';
import Checkout from './routes/check-out/check-out.component';
import Category from './routes/catagory/(title).component';
import Home from './routes/home/home.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:title" element={<Category />} />
        <Route path="auth" element={<Authenticate />} />
        <Route path="signout" element={<SignOut />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
