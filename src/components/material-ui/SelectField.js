import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect({
  data,
  onCategoryChange,
  categoryError,
}) {
  const classes = useStyles();
  const [category, setCategory] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (e) => {
    onCategoryChange(e.target.value);
    setCategory(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const renderOption = () => {
    return data.category.map((item, index) => {
      return (
        <MenuItem value={item} key={index}>
          {item}
        </MenuItem>
      );
    });
  };

  return (
    <React.Fragment>
      <FormControl className={classes.formControl} component="span">
        <InputLabel id="demo-controlled-open-select-label">
          Select category
        </InputLabel>
        <Select
          error={categoryError}
          style={{ minWidth: "180px" }}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={category}
          onChange={handleChange}
        >
          {renderOption()}
        </Select>
      </FormControl>
    </React.Fragment>
  );
}
