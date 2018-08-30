import {
  formatPaste,
  getClipboardData,
  handlePaste,
  stripHtmlLikeEntities
} from '../src/index.js'

describe('stripHtmlLikeEntities', () => {
  it('Does nothing to strings containing non-html like entities', () => {
    const str = '[{A lazy dog! jumps over the log in the park**]}'
    const actual = stripHtmlLikeEntities(str)
    const expected = str

    expect(actual).toBe(expected)
  })

  it('Removes all html from a string', () => {
    const str = `<html><h1></h1><img src="source" /><p>paragraph</p></html>`
    const actual = stripHtmlLikeEntities(str)
    const expected = 'paragraph'

    expect(actual).toBe(expected)
  })
})

describe('getClipboardData', () => {
  it('Returns an object with the key "getData" if no event is passed', () => {
    const actual = Object.keys(getClipboardData())[0]

    expect(actual).toBe('getData')
  })

  test('Returned key "getData" returns a string when no event is passed', () => {
    const actual = getClipboardData().getData()

    expect(actual).toBe('')
  })

  it('Returns the window.clipboardData if available', () => {
    global.clipboardData = 'bar'
    const actual = getClipboardData()
    const expected = global.clipboardData

    expect(actual).toEqual(expected)
  })

  it("Returns the event's clipboardData if available", () => {
    const mockEvent = { clipboardData: 'foo' }
    const actual = getClipboardData(mockEvent)
    const expected = mockEvent.clipboardData

    expect(actual).toEqual(expected)
  })
})

describe('formatPaste', () => {
  it("Removes text's html", () => {
    const foo = 'bar'
    const mockEvent = {
      clipboardData: {
        getData: () => `<div>${foo}</div>`
      },
      preventDefault: jest.fn()
    }

    const actual = formatPaste(mockEvent)
    const expected = foo

    expect(actual).toBe(expected)
  })
})

describe('handlePaste', () => {
  it('Calls Web API func with expected arguments', () => {
    const mockEvent = {
      clipboardData: {
        getData: () => `<div>foobar</div>`
      },
      preventDefault: jest.fn()
    }
    global.document.execCommand = jest.fn()

    const actual = handlePaste(mockEvent)
    const formattedPaste = formatPaste(mockEvent)

    expect(global.document.execCommand).toHaveBeenCalledWith(
      'insertText',
      false,
      formattedPaste
    )
  })
})
