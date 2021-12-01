import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FooterClient from '../../components/FooterClient';
import HeaderClient from '../../components/HeaderClient';
function LayoutHome(props) {
  return (
    <>
      <HeaderClient />
      {props.children}
      <FooterClient />
    </>
  );
}

export default class HomeTemplate extends Component {
  render() {
    const { exact, path, component } = this.props;
    return (
      <LayoutHome>
        <Route exact={exact} path={path} component={component} />
      </LayoutHome>
    );
  }
}
