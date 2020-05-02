import React from 'react';
import PropTypes from 'prop-types';
import {Header, Menu} from './components';

const SingleLayout = props => {
    const { children } = props;
    return (
        <>
        <Header />
        <div class="row">
          <Menu />
            <div class="col-6">
              {children}
            </div>
         </div>
      </>
      );
    };
    SingleLayout.propTypes = {
        children: PropTypes.node
    };
export default SingleLayout;