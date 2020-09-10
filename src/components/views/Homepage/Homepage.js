import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { connect } from "react-redux";
import { getAll } from "../../../redux/postsRedux";

import styles from "./Homepage.module.scss";

import { Link } from "react-router-dom";
import { Button, ListItem, List } from "@material-ui/core";

const Component = ({ className, children, posts, users }) => {
  console.log(posts);
  return (
    <div className={clsx(className, styles.root)}>
      <h2>Posts</h2>
      <Button
        className={styles.addnewpost}
        component={Link}
        to={`/post/add`}
        variant="outlined"
        color="primary"
      >
        Add new post
      </Button>
      <List>
        {posts.map((post) => (
          <ListItem
            className={styles.root}
            key={post.id}
            component={Link}
            to={`/post/${post.id}`}
          >
            <Button className={styles.list}>{post.title}</Button>
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

const mapStateToProps = (state) => ({
  posts: getAll(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
