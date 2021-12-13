import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({}));

const Footer = ({ program }) => {
  // const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    history.push(`/programs/${program.programId}`);
  };
  return (
    <Button
      variant="contained"
      fullWidth
      component="span"
      size="small"
      onClick={handleClick}
    >
      Know more
    </Button>
  );
};

export default Footer;
