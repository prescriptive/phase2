const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pages = await graphql(`
    {
      blog: allPrismicBlogPost {
        nodes {
          uid
        }
      }
      page: allPrismicPa {
        nodes {
          uid
          data {
            webinar
          }
        }
      }
      buzz: allBuzzsproutPodcastEpisode(filter: { private: { eq: false } }) {
        nodes {
          id
          title
          slug
          buzzsproutId
          private
        }
      }
    }
  `)
  //   const postsPerPage = 9
  //   const numPages = Math.ceil(pages.data.blog.nodes.length / postsPerPage)
  //   Array.from({ length: numPages }).forEach((_, i) => {
  //     createPage({
  //       path: i === 0 ? `/blog` : `/blog/${i + 1}`,
  //       component: path.resolve("./src/templates/blog.js"),
  //       context: {
  //         limit: postsPerPage,
  //         skip: i * postsPerPage,
  //         numPages,
  //         currentPage: i + 1,
  //       },
  //     })
  //   })
  const postTemplate = path.resolve("src/templates/post.js")
  pages.data.blog.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.uid}`,
      component: postTemplate,
      context: {
        uid: node.uid,
      },
    })
  })
  const podcastTemplate = path.resolve("src/templates/podcast.js")
  pages.data.buzz.nodes.forEach(node => {
    // var podSlug = convertToSlug(node.title)
    // console.log(podSlug)
    var buzzer = "Buzzsprout__PodcastEpisode__" + node.buzzsproutId
    var buzzId = node.buzzsproutId.toString()
    console.log(buzzId)
    createPage({
      path: `/podcast/${node.slug}`,
      component: podcastTemplate,
      context: {
        buzzer: buzzer,
        buzzId: buzzId,
        id: node.id,
      },
    })
  })
  //   const jobTemplate = path.resolve("src/templates/job.js")
  //   pages.data.job.nodes.forEach(node => {
  //     createPage({
  //       path: `/job-opportunity/${node.uid}`,
  //       component: jobTemplate,
  //       context: {
  //         uid: node.uid,
  //       },
  //     })
  //   })

  const pageTemplate = path.resolve("src/templates/page.js")
  pages.data.page.nodes.forEach(node => {
    if (node.uid == "home") {
      createPage({
        path: `/`,
        component: pageTemplate,
        context: {
          uid: node.uid,
        },
      })
    } else if (node.data.webinar == true) {
      createPage({
        path: `/webinars/${node.uid}`,
        component: pageTemplate,
        context: {
          uid: node.uid,
        },
      })
    } else {
      createPage({
        path: `/${node.uid}`,
        component: pageTemplate,
        context: {
          uid: node.uid,
        },
      })
    }
  })
}

function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
}
