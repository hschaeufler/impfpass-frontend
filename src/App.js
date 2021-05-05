import React from 'react';
import LogInPage from "./pages/LogInPage";
import CustomAppBar from "./components/CustomAppBar";
import {makeStyles} from "@material-ui/core/styles";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";

const useStyles = makeStyles((theme) => ({
    app: {
        height: "100vh",
    },

}));


function App() {
    const classes = useStyles();

  return (
    <Router>
        <CustomAppBar></CustomAppBar>
        <Switch>
            <Route path={["/","/login"]} component={LogInPage} exact></Route>
            <Route path={["/signup"]} component={SignUpPage} exact></Route>
        </Switch>
    </Router>
  );
}

export default App;
