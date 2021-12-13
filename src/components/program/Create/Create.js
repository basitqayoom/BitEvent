import { makeStyles, Container } from "@material-ui/core";
import React from "react";
import Form from "./Form";
import { connect } from "react-redux";
import { createProgram } from "../../../redux/actions/programs";
import Loader from "../../material-ui/Loader";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "60%",
    },
  },
}));

const Create = (props) => {
  const classes = useStyles();
  const [showLoader, setShowLoader] = React.useState(false);

  const [formValues, setFormValue] = React.useState(null);

  const onSubmit = async (data) => {
    await setShowLoader(true);
    await setFormValue(data);
    await props.createProgram(data);
  };

  return (
    <Container className={classes.root}>
      {showLoader ? <Loader /> : <Form onSubmit={onSubmit} />}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, { createProgram })(Create);
