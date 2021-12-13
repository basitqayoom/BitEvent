import { List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import history from "../../../redux/history";
import { logout } from "../../../redux/actions/authentication";
import data from "../../../data.json";

function BottomSection(props) {
  const renderBottom = () => {
    return (
      <React.Fragment>
        <div onClick={() => history.push("/about")}>
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
        </div>
        <div onClick={() => history.push("/policy")}>
          <ListItem button>
            <ListItemText primary="Policy" />
          </ListItem>
        </div>
        <a
          style={{
            textTransform: "none",
            textDecoration: "none",
            color: "inherit",
          }}
          href={`mailto:${data.contact.email}?subject=User Support`}
        >
          <ListItem button>
            <ListItemText primary="Contact Us" />
          </ListItem>
        </a>
        {props.user ? (
          <ListItem button>
            <ListItemText
              primary="Logout"
              onClick={() => {
                props.logout();
              }}
            />
          </ListItem>
        ) : (
          <ListItem button>
            <ListItemText
              primary="Sign in"
              onClick={() => history.push("/login/email")}
            />
          </ListItem>
        )}
      </React.Fragment>
    );
  };
  return <List>{renderBottom()}</List>;
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, { logout })(BottomSection);
