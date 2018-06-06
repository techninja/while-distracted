import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Sidebar from '../components/sidebar';

import './index.css';
import '../styles/layout-override.scss';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div className='content'>
      <div className='main'>{children()}</div>
      <div className="sidebar">
        <Sidebar
          title="Thing"
          description="Something goes over here?"
        />
        <Sidebar
          title="Who knows"
          description="I don't even think people use sidebars anymore."
        />
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
