import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import data from "../../data.json";
import { connect } from "react-redux";
import { fetchPrograms, sortPrograms } from "../../redux/actions/programs";
import { isLastDocLayout } from "../../redux/actions/isLastDoc";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
}));

function ScrollableTabsButtonAuto(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { category } = data;
  const { programSort, categorySort } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = async (item) => {
    props.isLastDocLayout(false);
    await props.sortPrograms(item, programSort);
    await props.fetchPrograms(item, programSort);
  };

  const renderTabs = () => {
    return category.map((item, index) => {
      return <Tab key={index} onClick={() => handleClick(item)} label={item} />;
    });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab onClick={() => handleClick("all")} label="All" />
          {renderTabs()}
        </Tabs>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    programSort: state.programs.byProgram,
    categorySort: state.programs.byCategory,
  };
};

export default connect(mapStateToProps, {
  fetchPrograms,
  sortPrograms,
  isLastDocLayout,
})(ScrollableTabsButtonAuto);
