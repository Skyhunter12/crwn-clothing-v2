import { Routes, Route } from "react-router-dom";

import Shop from "./routes/shop/shop.component";
import Navigation from "./routes/navigation/navigation.component";
import Authenticate from "./routes/authentication/authentication.component";
import SignOut from "./routes/sign-out/sign-out.component";
import Checkout from "./routes/check-out/check-out.component";
import Home from "./routes/home/home.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUserSession } from "./routes/store/user/user.action";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authenticate />} />
        <Route path="signout" element={<SignOut />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
