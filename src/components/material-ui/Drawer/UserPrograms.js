import { List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function UserPrograms(props) {
  const renderProgramsLink = () => {
    const signedInLinks = [
      {
        label: "My Programs",
        icon: null,
        path: "/users/" + props.user.uid + "/programs/created",
      },
      {
        label: "Joined Programs",
        icon: null,
        path: "/users/" + props.user.uid + "/programs/joined",
      },
    ];
    return (
      <List>
        {renderCreate()}
        {signedInLinks.map((item, index) => (
          <Link
            to={item.path}
            variant="inherit"
            style={{
              textTransform: "none",
              textDecoration: "none",
              color: "inherit",
            }}
            key={index}
          >
            <ListItem button key={index}>
              <ListItemText primary={item.label} />
            </ListItem>
          </Link>
        ))}
      </List>
    );
  };

  const renderCreate = (props) => {
    return (
      <Link
        to="/programs/new"
        variant="inherit"
        style={{
          textTransform: "none",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <ListItem button>
          <ListItemText primary="Create Program" />
        </ListItem>
      </Link>
    );
  };

  return (
    <React.Fragment>
      {props.user ? (
        renderProgramsLink()
      ) : (
        <React.Fragment>{renderCreate()}</React.Fragment>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(UserPrograms);
