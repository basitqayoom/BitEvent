import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import React from "react";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { connect } from "react-redux";
import Skeleton from "@material-ui/lab/Skeleton";
import { fetchTrendingList } from "../../../redux/actions/drawerList";
import { fetchPrograms, sortPrograms } from "../../../redux/actions/programs";
import { isLastDocLayout } from "../../../redux/actions/isLastDoc";

function Trending(props) {
  const { list } = props;

  React.useEffect(() => {
    if (props.user) {
      props.fetchTrendingList();
    }
  }, [props.user]);

  const renderTrending = () => {
    if (!list) {
      return (
        <div style={{ marginLeft: "9px" }}>
          <br />
          <Skeleton animation="wave" variant="text" width={210} height={30} />
          <Skeleton animation="wave" variant="text" width={210} height={30} />
          <Skeleton animation="wave" variant="text" width={210} height={30} />
        </div>
      );
    }
    return (
      <React.Fragment>
        <br />

        {list &&
          list.map((item, index) =>
            index <= 2 ? (
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
            ) : null
          )}
      </React.Fragment>
    );
  };
  return (
    <List>
      {" "}
      <Typography
        variant="h6"
        style={{
          marginLeft: "16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <WhatshotIcon /> Trending
      </Typography>
      {renderTrending()}
    </List>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    list: state.drawer.trendingList,
    byProgram: state.programs.byProgram,
  };
};

export default connect(mapStateToProps, {
  fetchTrendingList,
  fetchPrograms,
  sortPrograms,
  isLastDocLayout,
})(Trending);
