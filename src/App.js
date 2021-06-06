import React, {useContext} from 'react';
import LogInPage from "./pages/LogInPage";
import CustomAppBar from "./components/CustomAppBar";
import {makeStyles} from "@material-ui/core/styles";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import AuthProvider from "./provider/AuthProvider";
import AuthContext from "./context/AuthContext";
import PrivateRoute from "./routes/PrivateRoute";
import DoctorVacinationPage from "./pages/DoctorVacinationPage";


const useStyles = makeStyles((theme) => ({
    app: {
        height: "100vh",
    },

}));


function App() {
    const classes = useStyles();
    const {isAuth, user, authToken} = useContext(AuthContext);

    return (
        <Router>
            <AuthProvider>

                <CustomAppBar></CustomAppBar>
                <Switch>
                    <PrivateRoute path={["/", "/vacination", "/vacination/new"]} exact>
                        <DoctorVacinationPage></DoctorVacinationPage>
                    </PrivateRoute>:
                    <Route path={["/login"]} component={LogInPage} exact></Route>
                    <Route path={["/signup"]} component={SignUpPage} exact></Route>
                </Switch>
            </AuthProvider>
        </Router>
    );
}

export default App;
