import * as React from "react";
import withStyles, { StyleRules } from "@material-ui/core/styles/withStyles";
import { Theme, createStyles } from "@material-ui/core";

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      textAlign: "center",
    },
    paragraph: {
      fontFamily: "serif",
      padding: 10,
    },
  });

const FirstComponent = ({ classes, title }) => (
  <div className={classes.root}>
    <p className={classes.paragraph}>{title || "My First TS Component"}</p>
  </div>
);

export default withStyles(styles)(FirstComponent);
