import * as React from "react";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, {
  WithStyles,
  StyleRules,
} from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import ThirdComponent from "./components/ThirdComponent";
import withRoot from "./utils/withRoot";


const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {},
  });

type Props = WithStyles<typeof styles>;

const App: React.FC<Props> = ({ classes }: Props) => (
  <div className={classes.root}>
    <ThirdComponent title="React Template" />
  </div>
);

export default withRoot(withStyles(styles)(App));
