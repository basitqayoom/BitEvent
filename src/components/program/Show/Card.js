import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Header from "../../material-ui/Card/Header";
import {
  Box,
  Button,
  CardMedia,
  Divider,
  Grid,
  Snackbar,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import FileCopyIcon from "@material-ui/icons/FileCopy";

import { CopyToClipboard } from "react-copy-to-clipboard";
import Alert from "@material-ui/lab/Alert";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {
      width: "57%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ShowCard = (props) => {
  const { program, handleClick } = props;
  const classes = useStyles();
  const [link, setLink] = React.useState(false);

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

  const renderLink = () => {
    if (!program.link) return null;
    return (
      <div>
        <Typography paragraph variant="body1">
          External Link: <aTypography>{program.link}</aTypography>
        </Typography>{" "}
        <Divider />
      </div>
    );
  };

  return (
    <Card className={classes.root} elevation={20}>
      <Header program={program} />
      <CardContent>
        <Typography
          paragraph
          style={{ fontSize: "20px", textAlign: "justify" }}
        >
          {program.title}
        </Typography>
        {renderImage()}
        <br />
        <Grid container justify="space-between" alignContent="flex-end">
          <Grid item style={{ display: "flex", alignContent: "center" }}>
            <Button
              href={"mailto:" + program.host.email}
              variant="contained"
              color="primary"
              style={{ textTransform: "none" }}
            >
              <MailIcon fontSize="small" />
              Contact host
            </Button>
          </Grid>
          <Grid item style={{ display: "flex", alignContent: "center" }}>
            <CopyToClipboard text={window.location.href}>
              <Button
                color="primary"
                style={{ textTransform: "none" }}
                onClick={() => setLink(true)}
                variant="contained"
              >
                <FileCopyIcon fontSize="small" />
                Copy Link
              </Button>
            </CopyToClipboard>
          </Grid>
        </Grid>
        <br />
        <Divider />
        <br />
        <Typography paragraph variant="h6">
          Description:
        </Typography>
        <Typography paragraph style={{ textAlign: "justify" }}>
          {program.description}
        </Typography>
        <Divider />
        <br />
        {renderLink()}
        <br />
        <Typography style={{ fontFamily: "Quicksand", fontWeight: "500" }}>
          By registering, you agree to our{" "}
          <Link to="/policy">Terms and Conditions.</Link>
        </Typography>
      </CardContent>
      <br />

      <Box mb={5} mx={8}>
        <Button
          style={{ borderRadius: "25px" }}
          variant="contained"
          component="span"
          color="primary"
          fullWidth
          onClick={handleClick}
        >
          Register
        </Button>
      </Box>
      <Snackbar
        open={link}
        autoHideDuration={3000}
        onClose={(event, reason) =>
          reason === "clickaway" ? null : setLink(false)
        }
      >
        <Alert
          variant="filled"
          severity="success"
          onClose={(event, reason) =>
            reason === "clickaway" ? null : setLink(false)
          }
        >
          Copied to clipboard
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default ShowCard;
