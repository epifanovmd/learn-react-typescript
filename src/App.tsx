import React from "react";
import Auth from "./pages/auth/Auth.component";

const App = () => (
  <div>
    <Auth initialValidate={true} />
    {/* <Auth initialValidate={false} />*/}
  </div>
);

export default App;
