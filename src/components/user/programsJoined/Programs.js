import { Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import { connect } from "react-redux";
import { getJoinedPrograms } from "../../../redux/actions/user";
import Card from "./Card";
import Skeleton from "../../material-ui/Skeleton";
import NoProgramFound from "../../other/NoProgramFound";

const breakpoints = {
  default: 3,
  1250: 2,
  900: 1,
};

const Programs = (props) => {
  useEffect(() => {
    if (props.user) {
      props.getJoinedPrograms(props.user.uid);
    }
  }, [props.user]);

  const renderList = () => {
    if (!props.programs) {
      return [1, 2, 3, 4, 5, 6].map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Skeleton />;
          </React.Fragment>
        );
      });
    }
    if (props.programs.length > 0) {
      return props.programs.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Card program={item} />
          </React.Fragment>
        );
      });
    } else {
      return <NoProgramFound />;
    }
  };

  return (
    <React.Fragment>
      <Typography
        color="textSecondary"
        style={{ textAlign: "center", fontSize: "25px" }}
      >
        Programs joined by you
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
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    programs: state.userReducer.joinedPrograms,
  };
};

export default connect(mapStateToProps, { getJoinedPrograms })(Programs);
