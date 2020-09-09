import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getPost, getUsers } from '../../../redux/postsRedux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Post.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Component = ({className, post}) => {

  return(
    <div className={clsx(className, styles.root)}>
      <p>title: {post.title} </p>
      <p>content:  {post.content} </p>
      <p>date Of Publication: {post.dateOfPublication} </p>
      <p>update Date: {post.updateDate} </p>
      <p>email: {post.email} </p>
      <p>status: {post.status} </p>
      <p>price: {post.price} </p>
      <p className={styles.image} >image: {post.image}</p>
      <Button className={styles.edit} component={Link} to={`/post/:id/edit`} variant="outlined" color="primary" >
      Edit poster
      </Button>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  post: PropTypes.object,
  users: PropTypes.array,
};

const mapStateToProps = (state, props) => ({
  post: getPost(state, props.match.params.id),
  users: getUsers(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);
// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Post,
  Container as Post,
  Component as PostComponent,
};
