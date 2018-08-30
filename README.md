# content-editable-html-stripper

[![Build Status](https://travis-ci.org/alexZielonko/content-editable-html-stripper.svg?branch=master)](https://travis-ci.org/alexZielonko/content-editable-html-stripper)
[![npm Version](https://img.shields.io/badge/npm-v1.0.1-blue.svg)](https://www.npmjs.com/package/content-editable-html-stripper)

This package contains a convenient function to remove HTML-like entities from a string on paste events to [`contenteditable` ](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable) elements. This uses [`clipboardData`](https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent/clipboardData). Although `clipboardData` is an exprimental technology, it is widely supported by modern browsers.

## Installation

```bash
npm install content-editable-html-stripper --save
```

## Usage

### `handlePaste(event)`

Remove HTML-like entities from string before inserting into focused `contenteditable` element.

#### Vanilla

```html
<blockquote contenteditable="true">
  ???
</blockquote>
```

```js
import { handlePaste } from 'content-editable-html-stripper'

document
  .getElementsByTagName('blockquote')[0]
  .addEventListener('paste', handlePaste)
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

export default BlockQuote
```

Yeah, it's magic 💫
