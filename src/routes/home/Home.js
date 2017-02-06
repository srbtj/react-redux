
import React, { PropTypes } from 'react';
import s from './Home.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../../components/Link';
class Home extends React.Component {
  static propTypes = {};

  render() {
    return (
      <div className={s.root}>
        <h1 className={s.header}>Boxlinker</h1>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

export default withStyles(s)(Home);
