import { Fade } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";
import { connect } from "react-redux";
import Header from "./Header";

function LazyLoad(props) {
  if (!props.trending && !props.explore) {
    return (
      <Fade in={true} timeout={200}>
        <Skeleton
          variant="rect"
          style={{ backgroundColor: "#ededed" }}
          height={113}
          width={window.screen.width}
          animation="pulse"
        />
      </Fade>
    );
  }
  return <Header />;
}

const mapStateToProps = (state) => {
  return {
    trending: state.drawer.trendingList,
    explore: state.drawer.exploreList,
  };
};

export default connect(mapStateToProps)(LazyLoad);
