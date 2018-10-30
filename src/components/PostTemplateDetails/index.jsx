import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import './style.scss'

class PostTemplateDetails extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const tags = post.fields.tagSlugs
    const homeLink = post.frontmatter.category === 'Project' ? '/categories/project/' : '/'
    const homeTitle = post.frontmatter.category === 'Project' ? 'All Projects' : 'All Articles'
    const postURL = this.props.data.site.siteMetadata.url + this.props.location.pathname
    let publishedAndUpdatedDate = `Published ${moment(post.frontmatter.date).format('DD MMM YYYY')}`
    if (post.frontmatter.updated !== undefined) {
      publishedAndUpdatedDate += ` – Last Updated ${moment(post.frontmatter.updated).format('DD MMM YYYY')}.`
    }

    const homeBlock = (
      <div>
        <Link className="post-single__home-button" to={homeLink}>
          {homeTitle}
        </Link>
      </div>
    )

    const tagsBlock = (
      <div className="post-single__tags">
        <ul className="post-single__tags-list">
          {tags &&
            tags.map((tag, i) => (
              <li className="post-single__tags-list-item" key={tag}>
                <Link to={tag} className="post-single__tags-list-item-link">
                  {post.frontmatter.tags[i]}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    )

    return (
      <div>
        {homeBlock}
        <div className="post-single">
          <div className="post-single__inner">
            <h1 className="post-single__title">{post.frontmatter.title}</h1>
            <div
              className="post-single__body"
              /* eslint-disable-next-line react/no-danger */
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div className="post-single__date">
              <em>
                {publishedAndUpdatedDate}
              </em>
            </div>
          </div>
          <div className="post-single__footer">
            {tagsBlock}
            <hr />
            <p className="post-single__footer-text">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.frontmatter.title)}&url=${encodeURIComponent(postURL)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-twitter" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postURL)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-facebook" />
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default PostTemplateDetails
