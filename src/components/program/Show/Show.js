import { Container } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProgram } from "../../../redux/actions/programs";
import { register } from "../../../redux/actions/register";
import Loader from "../../material-ui/Loader";
import Snackbar from "../../material-ui/Snackbar";

import Card from "./Card";

class Show extends Component {
  state = {
    snackbar: {
      open: false,
      message: "",
      severity: "",
    },
  };

  componentDidMount() {
    this.props.fetchProgram(this.props.match.params.programID);
  }
  handleClick = async () => {
    try {
      this.props.register(
        this.props.match.params.programID,
        this.props.user,
        this.props.program.program.host,
        this.props.program.program
      );
      await this.setState({
        snackbar: {
          open: true,
          message: "Registered successfully",
          severity: "success",
        },
      });
    } catch (error) {
      await this.setState({
        snackbar: {
          open: true,
          message: error.message,
          severity: "success",
        },
      });
    }
  };

  render() {
    if (!this.props.program.program) {
      return (
        <div>
          <Loader />
        </div>
      );
    }
    return (
      <React.Fragment>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "45px",
          }}
        >
          <Card
            program={this.props.program.program}
            handleClick={this.handleClick}
            joinedPrograms={this.props.joinedPrograms}
          />
        </Container>

        <Snackbar snackbar={this.state.snackbar} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    program: state.programs,
    user: state.auth.user,
    joinedPrograms: state.userReducer.joinedPrograms,
  };
};

export default connect(mapStateToProps, {
  fetchProgram,
  register,
})(Show);
