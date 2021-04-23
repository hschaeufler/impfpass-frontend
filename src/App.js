import React from 'react';
import LogInPage from "./pages/LogInPage";
import CustomAppBar from "./components/CustomAppBar";




function App() {

  return (
    <div className="App">
        <CustomAppBar></CustomAppBar>
        <LogInPage></LogInPage>

    </div>
  );
}

export default App;
