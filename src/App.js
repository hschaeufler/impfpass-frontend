import React from 'react';
import LogInPage from "./pages/LogInPage";
import CustomAppBar from "./components/CustomAppBar";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import AuthProvider from "./provider/AuthProvider";
import VaccinationPage from "./pages/VaccinationPage";
import RoutesConstants from "./routes/RoutesConstants";
import PrivateRoute from "./routes/PrivateRoute";


function App() {


    return (
        <Router>
            <AuthProvider>

                <CustomAppBar></CustomAppBar>
                <Switch>
                    <PrivateRoute path={[RoutesConstants.STANDARD_PATH,
                        RoutesConstants.VACCINATION_PATH,
                        RoutesConstants.NEW_VACCINATION_PATH,
                        RoutesConstants.VACCINATION_PATH_WITH_ID
                    ]} children={<VaccinationPage></VaccinationPage>} exact/>
                    <Route path={RoutesConstants.LOGIN_PATH} component={LogInPage} exact></Route>
                    <Route path={RoutesConstants.SIGN_UP_PATH} component={SignUpPage} exact></Route>
                </Switch>
            </AuthProvider>
        </Router>
    );
}

export default App;
