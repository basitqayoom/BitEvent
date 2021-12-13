import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Grid, Snackbar, Typography } from "@material-ui/core";
import moment from "moment";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable(props) {
  const classes = useStyles();
  const [link, setLink] = React.useState(false);

  const users = props.registeredUsers;
  let cc = "";

  for (var i = 0; i < users.length; i++) {
    cc = cc + users[i].email + ";";
  }
  return (
    <React.Fragment>
      <br />
      <Grid container justify="space-between">
        <Grid item>
          <Typography variant="h6">
            Total users: {props.registeredUsers.length}
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="secondary" href={"mailto:" + cc}>
            Send mail to all users
          </Button>
        </Grid>
      </Grid>
      <CopyToClipboard
        text={window.location.origin + "/programs/" + props.programId}
      >
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
      <br />
      <br />
      <TableContainer component={Paper} id="myTable">
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Joined at</TableCell>
              <TableCell align="right">Contact</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {props.registeredUsers.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.displayName}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">
                  {moment(row.joinedAt.toDate()).format("LLL")}
                </TableCell>
                <TableCell align="right">
                  <Button href={"mailto:" + row.email} color="primary">
                    Send mail
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Snackbar */}
      <Snackbar
        open={link}
        autoHideDuration={1500}
        onClose={() => setLink(false)}
      >
        <Alert onClose={() => setLink(false)} severity="success">
          Link Copied to clipboard
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
