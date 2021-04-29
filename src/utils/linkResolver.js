const linkResolver = doc => {
  // Route for blog posts
  if (doc.type === "pa") {
    if (doc.uid === 'home') {
      return "/"
    }
    else {
      return "/" + doc.uid
    }
  }

  // Homepage route fallback
  return "/"
}
module.exports = linkResolver

