import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { editPost, getUsers, getPost } from '../../../redux/postsRedux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PostEdit.module.scss';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import datePicker from 'date-and-time';



class Component extends React.Component {
  state = {
    // id: shortid.generate(),    JAK POBRAC DANE Z POST ??
    // title: '',
    // content: '',
    // email: '',
    // status: 'closed',
    // photo: '',
    // price: '',
  };

  componentDidMount(){
    const today = new Date();
    this.setState({ updateDate: datePicker.format(today, 'DD.MM.YYYY') });
  }

  handleChange = (event, name) => {
    event.preventDefault();
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.editPost(this.state);
    alert('You edited post');
  };

  render(){
    const { title, price, content, email, status } = this.state;
    const {className} = this.props;

    const titleLenght = {
      minLength: 10,
    };

    const contentLenght = {
      minLength: 20,
    };

    return (
      <div className={clsx(className, styles.root)}>
        <h2>Post</h2>
        <form className={styles.root} noValidate autoComplete="off" onSubmit={e => this.handleSubmit(e)}>
          <TextField
            id="standard-basic"
            label="Title"
            required
            inputProps={titleLenght}
            value={title}
            onChange={e => this.handleChange(e, 'title')}
          /><br />
          <TextField
            id="standard-basic"
            label="Content"
            required
            inputProps={contentLenght}
            value={content}
            onChange={e => this.handleChange(e, 'content')}
          /><br />
          <TextField
            id="standard-basic"
            label="Email"
            required
            type="email"
            value={email}
            onChange={e => this.handleChange(e, 'email')}
          /><br />
          <TextField
            id="standard-basic"
            label="Price"
            required
            type="number"
            value={price}
            onChange={e => this.handleChange(e, 'price')}
          /><br />
          <Button
            variant="outlined"
            component="label"
          >
              Add picture
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={e => this.handleChange(e, 'image')}
            />
          </Button><br />
          <InputLabel id="demo-simple-select-label" >Status</InputLabel>
          <Select
            labelId="post-status-label"
            value={status}
            id="post-status-select"
            onChange={e => this.handleChange(e, 'status')}

          >
            <MenuItem value={'published'}>published</MenuItem>
            <MenuItem value={'closed'}>closed</MenuItem>
          </Select><br />
          <Button type="submit" variant="outlined" color="primary" className={styles.button}>Edit post</Button>
        </form>
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  editPost: PropTypes.func,
  getUsers: PropTypes.array,
  post: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  getUsers: getUsers(state),
  post: getPost(state, props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  editPost: post => dispatch(editPost(post)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as PostEdit,
  Container as PostEdit,
  Component as PostEditComponent,
};
