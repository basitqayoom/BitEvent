import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { fetchExploreList } from "../../../redux/actions/drawerList";
import { fetchPrograms, sortPrograms } from "../../../redux/actions/programs";
import { isLastDocLayout } from "../../../redux/actions/isLastDoc";

function Explore(props) {
  const { list } = props;

  const renderExplore = () => {
    if (!props.user) {
      return null;
    } else {
      if (props.list.length !== 0) {
        return (
          <List>
            <Typography variant="h6" style={{ marginLeft: "16px" }}>
              Explore
            </Typography>
            <br />
            <Typography
              variant="caption"
              color="textSecondary"
              style={{ marginLeft: "16px" }}
            >
              TOP CATEGORIES FOR YOU
            </Typography>
            <br />
            {list &&
              list.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    props.isLastDocLayout(false);
                    props.fetchPrograms(item, props.byProgram);
                    props.sortPrograms(item, props.byProgram);
                  }}
                >
                  <ListItem button key={index}>
                    <ListItemText
                      primary={item[0].toUpperCase() + item.substring(1)}
                    />
                  </ListItem>
                </div>
              ))}
          </List>
        );
      }
    }
  };
  return <React.Fragment>{renderExplore()}</React.Fragment>;
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    list: state.drawer.exploreList,
    byProgram: state.programs.byProgram,
  };
};

export default connect(mapStateToProps, {
  fetchExploreList,
  fetchPrograms,
  sortPrograms,
  isLastDocLayout,
})(Explore);
