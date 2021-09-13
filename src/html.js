import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  function gtmBodyDelay() {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MCJCSBW"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
              `,
        }}
      />
    )
  }
  return (
    <html {...props.htmlAttributes}>
      <head>
        <script src="https://cdn.jsdelivr.net/modernizr/3.3.1/modernizr.min.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()
                `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        setTimeout(function() {(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MCJCSBW');}, 5000)
            `,
          }}
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {gtmBodyDelay()}
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <div
          dangerouslySetInnerHTML={{
            __html: `
                      <a class="typeform-share button" href="https://form.typeform.com/to/LkNfiuv4?typeform-medium=embed-snippet" data-mode="popup" style="display:none;" data-size="100" target="_blank">Launch me page </a><script>console.log('test')</script>
                        `,
          }}
        />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
