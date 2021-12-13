import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));
function SimpleBackdrop(props) {
  const classes = useStyles();

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "200px" }}
    >
      <CircularProgress color="primary" />
    </div>
  );
}

export default SimpleBackdrop;
