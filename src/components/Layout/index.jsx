import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/scss/init.scss'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="layout">
        <Helmet defaultTitle="Florian Fittschen">
          {/* Favicon stuff from realfavicongenerator.net */}
          <meta name="apple-mobile-web-app-title" content="florian.codes" />
          <meta name="application-name" content="florian.codes" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff8126" />
          <link rel="manifest" href="/site.webmanifest" />
        </Helmet>
        {children}
      </div>
    )
  }
}

export default Layout
