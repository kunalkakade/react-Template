import * as React from "react";
import Button from "@material-ui/core/Button";
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
    header: {
      backgroundColor: theme.palette.primary.main,
      boxShadow: theme.shadows[2],
      padding: 10,
    },
    counter: {
      fontSize: 60,
    },
  });

interface Props extends WithStyles<typeof styles> {
  title?: string;
}

interface State {
  readonly counter: number;
}

class ThirdComponent extends React.Component<Props, State> {
  readonly state: State = {
    counter: 0,
  };

  private _onIncrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  public render() {
    const { classes, title } = this.props;
    const { counter } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.header}>{title || "My Third TS Component"}</div>
        <div>
          <span className={classes.counter}>{counter}</span>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={this._onIncrement}
          >
            Increment
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ThirdComponent);
