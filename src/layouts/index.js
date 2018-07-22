import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../styles/main.scss'
import './index.scss'

import '../utils/i18n'

import Header from '../components/Header/index'
import Footer from '../components/Footer/index'

import bg1 from '../assets/bg-1.svg'
import bg2 from '../assets/bg-2.svg'

const Layout = ({ children, data }) => {
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <img className="bg1" src={bg1} alt=""/>
      <img className="bg2" src={bg2} alt=""/>
      {children()}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
