import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { Fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto 15px",
  },
}));

const CARD = ({ program }) => {
  const classes = useStyles();

  return (
    <Fade in={true} timeout={200}>
      <Card className={classes.root} elevation={12}>
        <Header program={program} />
        <Content program={program} />
        <Footer program={program} />
      </Card>
    </Fade>
  );
};
export default CARD;
