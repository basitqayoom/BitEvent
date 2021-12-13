import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";
import SelectField from "../../material-ui/SelectField";
import data from "../../../data.json";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "15px",
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

  field: {
    marginTop: 20,
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  const [loader, setLoader] = useState(false);

  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);

  const [categoryError, setCategoryError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [fileError, setFileError] = useState(null);

  const onCategoryChange = (value) => {
    setCategory(value);
  };

  const handleFile = (e) => {
    let selected = e.target.files[0];
    const types = ["image/jpeg", "image/png"];
    console.log(selected);

    if (selected && types.includes(selected.type) && selected.size <= 100000) {
      setFile(selected);
      setFileError(null);
    } else {
      setFile(null);
      setFileError("Image type should be (jpeg/png) & less than 100kb");
    }
  };

  useEffect(() => {
    onCategoryChange(category);
    return () => {
      onCategoryChange("");
    };
  }, [category]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategoryError(false);
    setTitleError(false);
    setDescriptionError(false);

    if (category === "") {
      setCategoryError(true);
    }
    if (title === "") {
      setTitleError(true);
    }
    if (description === "") {
      setDescriptionError(true);
    }
    if (category && title && description) {
      const formValues = {
        category: category.toLowerCase(),
        title,
        description,
        link,
      };
      const input = {
        formValues,
        file,
      };
      setLoader(true);
      props.onSubmit(input).then(() => setLoader(false));
    }
  };

  const renderButton = () => {
    if (!loader) {
      return (
        <Button
          style={{ borderRadius: "25px" }}
          variant="contained"
          component="span"
          color="primary"
          fullWidth
          onClick={handleSubmit}
        >
          Create
        </Button>
      );
    } else {
      return (
        <Button
          style={{ borderRadius: "25px" }}
          variant="contained"
          component="span"
          color="primary"
          fullWidth
        >
          <CircularProgress color="inherit" size={"1.5rem"} />
        </Button>
      );
    }
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Card className={classes.root} elevation={9}>
        <Typography
          variant="h4"
          color="textSecondary"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15px",
          }}
        >
          Create program
        </Typography>

        <CardContent>
          <div className={classes.field}>
            <Grid container alignItems="center" justify="space-between">
              <Grid item>
                {/* <Autocomplete
                  data={data}
                  onCategoryChange={onCategoryChange}
                  categoryError={categoryError}
                /> */}
                <SelectField
                  data={data}
                  onCategoryChange={onCategoryChange}
                  categoryError={categoryError}
                />
              </Grid>
              <Grid item>
                <input type="file" onChange={handleFile} />
              </Grid>
            </Grid>
            <Typography style={{ marginLeft: "8px", fontSize: "15px" }}>
              Don't know which category to choose.{" "}
              <Link to="/info#pick-category" style={{ cursor: "pointer" }}>
                Click Here
              </Link>
            </Typography>
            <br />
            {fileError ? (
              <div style={{ textAlign: "center", color: "red" }}>
                {fileError}
              </div>
            ) : null}
          </div>

          <br />
          <Divider />
          <TextField
            className={classes.field}
            placeholder="max. words allowed: 80"
            label="Title"
            variant="outlined"
            color="primary"
            fullWidth
            required
            error={titleError}
            inputProps={{ maxLength: 80 }}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>
            <Typography
              variant="subtitle2"
              color="error"
              style={{
                textTransform: "none",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              {title.length === 80
                ? "Max 80 words allowed"
                : title.length + " words"}
            </Typography>
          </label>
          <Divider />
          <TextField
            className={classes.field}
            placeholder="max. words allowed: 2500"
            label="Description"
            variant="outlined"
            color="primary"
            multiline
            rows={10}
            fullWidth
            required
            error={descriptionError}
            inputProps={{ maxLength: 2500, minLength: 100 }}
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>
            <Typography
              variant="subtitle2"
              color="error"
              style={{
                textTransform: "none",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              {description.length === 2500
                ? "Max 2500 words allowed"
                : description.length + " words"}
            </Typography>
          </label>
          <Divider />
          <TextField
            className={classes.field}
            placeholder="optional"
            label="External Link"
            variant="outlined"
            color="primary"
            fullWidth
            error={titleError}
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <br />

          <br />

          <Divider />
          <br />
          <Typography style={{ fontFamily: "Quicksand", fontWeight: "500" }}>
            By creating, you agree to our{" "}
            <Link to="/policy">Terms and Conditions.</Link>
          </Typography>
        </CardContent>

        <br />
        <Box mb={5} mx={12}>
          {renderButton()}
        </Box>
        <Divider />
      </Card>
    </form>
  );
}
