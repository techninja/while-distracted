import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

export default function Template({ data }) {
  const post = data.markdownRemark;
  return (
    <div className="blog-post-container">
      <Helmet title={`${post.frontmatter.title} | while (distracted)`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <h2>
          <Img
              alt={`Avatar of ${post.frontmatter.author.id}`}
              resolutions={post.frontmatter.author.avatar.children[0].resolutions}
              css={{
                borderRadius: `100%`,
                float: `left`,
                marginRight: 2,
                marginBottom: 0,
              }}
              Tag="span"
            />
        </h2>
        <h3>{post.frontmatter.date}</h3>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        tags
        categories
        path
        title
        author {
          id
          bio
          avatar {
            children {
              ... on ImageSharp {
                resolutions(
                  width: 50
                  height: 50
                  quality: 75
                ) {
                  ...GatsbyImageSharpResolutions
                }
              }
            }
          }
        }
      }
    }
  }
`;
