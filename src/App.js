import React from 'react';
import LogInPage from "./pages/LogInPage";
import CustomAppBar from "./components/CustomAppBar";
import {makeStyles} from "@material-ui/core/styles";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import AuthProvider from "./provider/AuthProvider";
import DoctorVaccinationPage from "./pages/DoctorVaccinationPage";
import UserRole from "./enum/UserRole";
import UserVaccinationPage from "./pages/UserVaccinationPage";
import RoutesConstants from "./routes/RoutesConstants";
import AuthorizedRoute from "./routes/AuthorizedRoute";


const useStyles = makeStyles((theme) => ({
    app: {
        height: "100vh",
    },

}));


function App() {
    const classes = useStyles();

    return (
        <Router>
            <AuthProvider>

                <CustomAppBar></CustomAppBar>
                <Switch>
                    <AuthorizedRoute
                        path={[RoutesConstants.STANDARD_PATH,
                            RoutesConstants.VACCINATION_PATH,
                            RoutesConstants.NEW_VACCINATION_PATH
                            ]}
                        role={UserRole.Doctor}
                        alternateContent={<UserVaccinationPage></UserVaccinationPage>} exact>
                        <DoctorVaccinationPage></DoctorVaccinationPage>
                    </AuthorizedRoute>
                    <Route path={RoutesConstants.LOGIN_PATH} component={LogInPage} exact></Route>
                    <Route path={RoutesConstants.SIGN_UP_PATH} component={SignUpPage} exact></Route>
                </Switch>
            </AuthProvider>
        </Router>
    );
}

export default App;
