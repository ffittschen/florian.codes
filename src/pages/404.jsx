import React from 'react'
import { graphql } from 'gatsby'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'

class NotFoundRoute extends React.Component {
  render() {
    const fullPath = this.props.data.site.siteMetadata.url + this.props.location.pathname

    return (
      <Layout>
        <div>
          <Sidebar {...this.props} />
          <div className="content">
            <div className="content__inner">
              <div className="page">
                <h1 className="page__title">NOT FOUND</h1>
                <div className="page__body">
                  <p>
                    You just tried to access {fullPath}<br />
                    It seems like that route doesn&#39;t exist...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default NotFoundRoute

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        url
        menu {
          label
          path
        }
        author {
          name
          email
          twitter
          github
          rss
        }
      }
    }
  }
`
