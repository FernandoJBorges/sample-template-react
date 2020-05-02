import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import {Header, Menu, Aside, Footer} from './components';

const GeneralLayout = props => {
    const { children } = props;
    return (
        <>
        <Header />
        <div class="row">
          <Menu />
            <div class="col-6">
              {children}
            </div>
            <Aside />
        </div>
        <Footer />
       </>
      );
    };
    GeneralLayout.propTypes = {
        children: PropTypes.node
    };

export default GeneralLayout;

