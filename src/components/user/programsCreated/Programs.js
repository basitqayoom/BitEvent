import React, { useEffect } from "react";
import Card from "./Card";
import { makeStyles, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { getMyPrograms } from "../../../redux/actions/user";
import Masonry from "react-masonry-css";
import Skeleton from "../../material-ui/Skeleton";
import NoProgramFound from "../../other/NoProgramFound";

const useStyles = makeStyles((theme) => ({}));

function Programs(props) {
  const classes = useStyles();

  useEffect(() => {
    if (props.user) {
      props.getMyPrograms(props.user.uid);
    }
  }, [props.user]);

  const renderList = () => {
    if (props.user) {
      if (!props.programs) {
        return [1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Skeleton />
            </React.Fragment>
          );
        });
      }
      if (props.programs.length > 0) {
        return props.programs.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Card key={index} program={item} userId={props.user.uid} />
            </React.Fragment>
          );
        });
      } else {
        return <NoProgramFound />;
      }
    }
  };

  const breakpoints = {
    default: 3,
    1250: 2,
    900: 1,
  };

  return (
    <React.Fragment>
      <Typography
        color="textSecondary"
        style={{ textAlign: "center", fontSize: "25px" }}
      >
        Programs created by you
      </Typography>

      <br />

      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {renderList()}
      </Masonry>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    programs: state.userReducer.myPrograms,
  };
};

export default connect(mapStateToProps, { getMyPrograms })(Programs);
