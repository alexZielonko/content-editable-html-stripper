# content-editable-html-stripper

This package contains a convenient function to remove HTML-like entities from a string on paste. You may find it useful when working with [`contenteditable` ](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable) elements.

This uses [`clipboardData`](https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent/clipboardData). Although `clipboardData` is an exprimental technology, it is widely supported.

## Installation

```bash
npm install content-editable-html-stripper --save
```

## Usage

To strip HTML-like entites from content pasted into a `contenteditable` container,

```js
import { handlePaste } from 'content-editable-html-stripper'
```

## API

### `handlePaste(event)`

Insert string into focused `contenteditable` element with HTML-like entities removed from pasted string.

#### Vanilla

```html
<blockquote contenteditable="true">
  ???
</blockquote>
```

```js
document.getElementsByTagName('blockquote')[0].addEventListener('paste', handlePaste)
```

#### React

```js
import React from 'react'
import { handlePaste } from 'content-editable-html-stripper'

function BlockQuote (props) {
  const { onPaste } = props

  return (
    <blockquote
      contenteditable='true'
      onPaste={handlePaste}
    />
  )
}
```

Yeah, it's magic 💫
