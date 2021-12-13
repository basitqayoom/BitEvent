import React, { useEffect } from "react";
import Login from "./authentication/Login";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { Router, Route, Switch } from "react-router-dom";
import SignUp from "./authentication/SignUp";
import PasswordReset from "./authentication/PasswordReset";
import { auth } from "../firebase";
import { connect } from "react-redux";
import { updateAuth } from "../redux/actions/authentication";
import CreateProgram from "./program/Create/Create";
import ShowProgram from "./program/Show/Show";

import MyPrograms from "../components/user/programsCreated/Programs";
import RegisteredUsers from "../components/user/programsCreated/Detail/Detail";
import JoinedPrograms from "../components/user/programsJoined/Programs";

import Layout from "../components/Layout";
import Header from "./Header/LazyLoad";

import history from "../redux/history";
import PageNotFound from "./other/404";
import AuthenticatedRoute from "./custom-routes/AuthenticatedRoute";
import GuardUser from "./custom-routes/GuardUser";
import About from "./other/About";
import errorPage from "./other/Error";

import {
  fetchTrendingList,
  fetchExploreList,
} from "../redux/actions/drawerList";

import { getJoinedPrograms } from "../redux/actions/user";
import verifyEmail from "./other/VerifyEmail";

import Policy from "./other//Policy/Policy";
import Info from "./other/Info";
import Footer from "./Footer";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1A73E8",
    },
  },
});

const App = (props) => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      props.updateAuth(user);
    });
    if (props.auth.user) {
      props.getJoinedPrograms(props.auth.user.uid);
    }
  }, [props.auth.user]);

  useEffect(() => {
    props.fetchTrendingList();
  }, [props.programs]);

  useEffect(() => {
    if (props.auth.user) {
      props.fetchExploreList(props.auth.user);
    }
  }, [props.programs, props.auth.user]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Router history={history}>
          <div style={{ minHeight: "100vh" }}>
            <Header />
            <Switch>
              <Route path="/" exact component={Layout} />
              <AuthenticatedRoute
                path="/programs/new"
                exact
                component={CreateProgram}
              />
              <Route
                path="/programs/:programID"
                exact
                component={ShowProgram}
              />
              <Route
                path="/users/:userID/programs/created"
                exact
                component={MyPrograms}
              />
              <Route
                path="/users/:userID/programs/created/:programID"
                exact
                component={RegisteredUsers}
              />
              <Route
                path="/users/:userID/programs/joined"
                exact
                component={JoinedPrograms}
              />

              <Route path="/info" exact component={Info} />
              <Route path="/policy" exact component={Policy} />
              <Route path="/About" exact component={About} />
              <Route path="/verify/email" exact component={verifyEmail} />
              <GuardUser path="/login/email" exact component={Login} />
              <GuardUser path="/signUp/email" exact component={SignUp} />
              <GuardUser
                path="/resetpassword"
                exact
                component={PasswordReset}
              />
              <Route path="/error" exact component={errorPage} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </CssBaseline>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    programs: state.programs.programs,
  };
};

export default connect(mapStateToProps, {
  updateAuth,
  fetchTrendingList,
  fetchExploreList,
  getJoinedPrograms,
})(App);
