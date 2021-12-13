import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Container, Grid } from "@material-ui/core";

import { connect } from "react-redux";
import { fetchPrograms, sortPrograms } from "../../redux/actions/programs";
import { isLastDocLayout } from "../../redux/actions/isLastDoc";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function GroupedSelect(props) {
  const classes = useStyles();

  const handleChange = async (e) => {
    props.isLastDocLayout(false);
    await props.sortPrograms(props.byCategory, e.target.value);
    await props.fetchPrograms(props.byCategory, e.target.value);
  };

  const renderSelect = (key) => {
    switch (key) {
      case "PROGRAMS":
        return (
          <FormControl className={classes.formControl} size="small">
            <InputLabel>Sort by</InputLabel>
            <Select
              defaultValue={props.byProgram}
              value={props.byProgram}
              id="grouped-select"
              onChange={handleChange}
            >
              <MenuItem value="mostPopular" selected>
                Most Popular
              </MenuItem>
              <MenuItem value="mostRecent">Most Recent</MenuItem>
            </Select>
          </FormControl>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <Grid
        container
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <Grid item>{renderSelect("PROGRAMS")}</Grid>
      </Grid>
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    byProgram: state.programs.byProgram,
    byCategory: state.programs.byCategory,
  };
};

export default connect(mapStateToProps, {
  fetchPrograms,
  sortPrograms,
  isLastDocLayout,
})(GroupedSelect);
