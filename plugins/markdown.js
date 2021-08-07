import marked from 'marked'

// eslint-disable-next-line no-unused-vars,func-names
export default function ({ app }, inject) {
  const renderer = new marked.Renderer()

  // eslint-disable-next-line func-names
  renderer.link = function (href, title, text) {
    return title
      ? `<a target="_blank" href="${href}" title="${title}">${text}</a>`
      : `<a target="_blank" href="${href}">${text}</a>`
  }

  const compile = (markdown) => {
    if (!markdown) {
      return
    }

    // eslint-disable-next-line consistent-return
    return marked(markdown, { renderer })
  }

  inject('markdown', compile)
}
