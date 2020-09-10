import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getUsers, getAll, fetchPublished } from '../../../redux/postsRedux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Post.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


class Component extends React.Component {

  async componentDidMount(){
    const {fetchPublishedPosts} = this.props;
    await fetchPublishedPosts();
  }

  render(){

    const {className, posts } = this.props;

    return(
      <div className={clsx(className, styles.root)}>
        {posts.filter((post) => post._id).map(post =>
          (
            <div key={post._id}>
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
          )
        )}
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
  users: PropTypes.array,
  fetchPublishedPosts: PropTypes.func,
};

const mapStateToProps = (state) => ({
  posts: getAll(state),
  users: getUsers(state),
});

const mapDispatchToProps = (dispatch, state) => ({
  fetchPublishedPosts: () => dispatch(fetchPublished()),
});

//const Container = connect(mapStateToProps)(Component);
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Post,
  Container as Post,
  Component as PostComponent,
};
