import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Search from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';

const styles = {
  input: {
    color: 'rgba(256, 256, 256, 0.9)',
    borderBottom: '1px solid rgba(256, 256, 256, 0.42)',
    fontSize: 20,
  },
  whiteUnderline: {
    '&:after': {
      borderBottom: '2px solid rgba(256, 256, 256, 0.9)',
    },
  }
};

function searchbutton(props) {
  const { classes } = props;

  return (
    <Input
      id="insert_act"
      classes={{
        root: classes.root,
        label: classes.label,
      }}
      className={classes.input}
      classes={{ underline: classes.whiteUnderline }}
      placeholder="Insert your activity here!"
      fullWidth={true}
      endAdornment={
        <InputAdornment position="end">
          <Search />
        </InputAdornment>
      }
    />

  );
}

searchbutton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(searchbutton);