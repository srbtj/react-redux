
import React from 'react';
import Layout from '../../components/Layout';

export default {
  path: '/',
  async action() {

    const Home = await new Promise((resolve) => {
      require.ensure([], (require) => resolve(require('./Home').default), 'home');
    })

    return {
      title: 'Boxlinker',
      chunk: 'home',
      component: <Layout><Home/></Layout>,
    }
  }
}
