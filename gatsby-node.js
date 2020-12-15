const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pages = await graphql(`
    {
      page: allPrismicPa {
        nodes {
          uid
        }
      }
      job: allPrismicJob {
        nodes {
          uid
        }
      }
    }
  `)

    const jobTemplate = path.resolve("src/templates/job.js")
      pages.data.job.nodes.forEach(node => {
      createPage({
      path: `/current-opportunity/${node.uid}`,
      component: jobTemplate,
        context: {
        uid: node.uid,
        },
      })
    })

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
