import React from "react";
import Masonry from "react-masonry-css";
import Card from "./material-ui/Card/Card";
import { connect } from "react-redux";
import { fetchPrograms } from "../redux/actions/programs";
import { isLastDocLayout } from "../redux/actions/isLastDoc";
import Skeleton from "./material-ui/Skeleton";
import GroupedSelect from "./material-ui/GroupSelect";
import {
  Button,
  CircularProgress,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import NoProgramFound from "./other/NoProgramFound";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const useStyles = makeStyles((theme) => ({}));

const Layout = (props) => {
  const classes = useStyles();
  const { programs } = props;

  const fetchMore = async () => {
    props.isLastDocLayout(false);
    await props.fetchPrograms(
      programs.byCategory,
      programs.byProgram,
      programs.lastDoc,
      programs.programs
    );
  };

  React.useEffect(() => {
    const runFunc = async () => {
      props.isLastDocLayout(false);
      await props.fetchPrograms("all", "mostPopular");
    };
    runFunc();
  }, []);

  const renderCards = () => {
    if (!props.programs.programs) {
      return [1, 2, 3, 4, 5, 6].map((item) => {
        return <Skeleton key={item} />;
      });
    } else {
      if (props.programs.programs.length > 0) {
        return props.programs.programs.map((program, index) => {
          return <Card key={index} program={program} />;
        });
      } else {
        return (
          <div style={{ display: "flex" }}>
            <NoProgramFound />
          </div>
        );
      }
    }
  };
  const renderLoader = () => {
    return (
      <div style={{ display: "block", textAlign: "center" }}>
        <CircularProgress />
        <Typography>Loading...</Typography>
      </div>
    );
  };

  const breakpoints = {
    default: 3,
    1020: 2,
    710: 1,
  };
  const renderSort = () => {
    if (!props.programs.programs) {
      return null;
    }
    return <GroupedSelect />;
  };
  const renderLoadButton = () => {
    return (
      <Container style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{}}>Load more</Button>
      </Container>
    );
  };

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "35px",
        }}
      >
        {renderSort()}
      </div>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {renderCards()}
      </Masonry>

      {!props.LayoutIsLast ? (
        renderLoader()
      ) : (
        <Container
          style={{
            margin: "35px auto",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={fetchMore}
            style={{ paddingRight: "40px", paddingLeft: "40px" }}
          >
            load more <ArrowDownwardIcon />
          </Button>
        </Container>
      )}
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    programs: state.programs,
    LayoutIsLast: state.isLastDoc.LayoutIsLast,
  };
};

export default connect(mapStateToProps, { fetchPrograms, isLastDocLayout })(
  Layout
);
