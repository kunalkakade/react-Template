import * as React from "react";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, {
  WithStyles,
  StyleRules,
} from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";

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

interface Props extends WithStyles<typeof styles> {
  title?: string;
}

class SecondComponent extends React.PureComponent<Props> {
  public render() {
    const { classes, title } = this.props;
    return (
      <div className={classes.root}>
        <p className={classes.paragraph}>{title || "My Second TS Component"}</p>
      </div>
    );
  }
}

export default withStyles(styles)(SecondComponent);
