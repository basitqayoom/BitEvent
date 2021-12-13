import { CircularProgress, Container } from "@material-ui/core";
import React from "react";
import DataTable from "./DataTable";
import { connect } from "react-redux";
import { getRegisteredUsers } from "../../../../redux/actions/user";

const Detail = (props) => {
  React.useEffect(() => {
    if (props.user) {
      props.getRegisteredUsers(props.user.uid, props.match.params.programID);
    }
  }, [props.user]);

  const renderTable = () => {
    if (!props.registeredUsers) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "250px",
          }}
        >
          <CircularProgress />
        </div>
      );
    }
    return (
      <Container>
        <DataTable
          registeredUsers={props.registeredUsers}
          programId={props.match.params.programID}
        />
      </Container>
    );
  };

  return <React.Fragment>{renderTable()}</React.Fragment>;
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    registeredUsers: state.userReducer.registeredUsers,
  };
};

export default connect(mapStateToProps, { getRegisteredUsers })(Detail);
