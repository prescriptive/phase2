import * as React from "react"
// import { PreviewStoreProvider } from "gatsby-source-prismic"

// export const wrapRootElement = ({ element }) => (
//   <PreviewStoreProvider>{element}</PreviewStoreProvider>
// )

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  // hack to override `shouldUpdateScroll` behavior to bypass useQueryParams in product-checkout
  if (location.search.includes("tab=")) {
    return false
  }
  const currentPosition = getSavedScrollPosition(location)
  return currentPosition || [0, 0]
}
