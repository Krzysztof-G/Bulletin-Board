import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Component = ({className}) => {

  return(
    <div className={clsx(className, styles.root)}>
      <p>BULETTIN BOARD</p>
      <Button className={styles.login} component={Link} to={`https://google.com`} variant="outlined" color="primary" >
        LogIn
      </Button>
      <Button className={styles.logout} component={Link} to={`/`} variant="outlined" color="primary" >
        LogOut
      </Button>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);
const Container = connect(mapStateToProps)(Component);

export {
  //Component as Header,
  Container as Header,
  Component as HeaderComponent,
};
