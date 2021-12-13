import {
  CardContent,
  Typography,
  Divider,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

function Content({ program }) {
  const classes = useStyles();
  const more = program.description.length > 200 ? " ...." : "";

  const renderImage = () => {
    if (!program.imageURL) {
      return null;
    }
    return (
      <CardMedia
        className={classes.media}
        image={program.imageURL}
        title="image"
      />
    );
  };

  return (
    <React.Fragment>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ textAlign: "justify" }}
        >
          {program.description.substring(0, 200) + more}
        </Typography>
      </CardContent>
      {renderImage()}
      <Divider />
    </React.Fragment>
  );
}

export default Content;
