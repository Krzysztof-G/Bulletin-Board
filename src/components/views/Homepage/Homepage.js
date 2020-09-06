import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, getUsers} from '../../../redux/postsRedux';

import styles from './Homepage.module.scss';

import { Link } from 'react-router-dom';
import { Button, ListItem, List } from '@material-ui/core';

const Component = ({className, children, posts, users}) => {

  return(
    <div className={clsx(className, styles.root)}>
      <h2>Posts</h2>
      <Button className={styles.addpost} component={Link} to={`/post/add`} variant="outlined" color="primary" >
        Add new post
      </Button>
      <List>
        {posts.map(post => (
          <ListItem key={post.id} className={styles.list} component={Link} to={`/post/${post.id}`} >
            {post.title}
          </ListItem>
        ))}
      </List>
    </div>
  );
};




Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
  users: PropTypes.array,
};

const mapStateToProps = state => ({
  posts: getAll(state),
  users: getUsers(state),
  //   someProp: reduxSelector(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);
// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
