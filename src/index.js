// Removes HTML-like entities from string
export function stripHtmlLikeEntities(str = '') {
  return str.replace(/<\/?[^>]+>/gi, '')
}

// Returns object with key 'getData', function value
export function getClipboardData (event = {}) {
  return (event.clipboardData || window.clipboardData || { getData: () => '' })
}

export function formatPaste(event) {
  event.preventDefault()

  const paste = getClipboardData(event).getData('text')

  return stripHtmlLikeEntities(paste)
}

export function handlePaste(event) {
  window.document.execCommand('insertText', false, formatPaste(event))
}
