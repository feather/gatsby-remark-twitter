/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/basic.js TAP basic conversion > should convert twitter link 1`] = `
{ type: 'root',
  children:
   [ { type: 'html',
       children: null,
       value:
        '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Sorry, everyone. I&#39;m giving up pro bono argument services.' } ] }
`

exports[`test/basic.js TAP dont convert if nested > should not convert twitter inline link 1`] = `
{ type: 'root',
  children:
   [ { type: 'paragraph',
       children:
        [ { type: 'text', value: 'Really, I mean it, like I said in ' },
          { type: 'link',
            title: null,
            url: 'https://twitter.com/izs/status/503226223527337985',
            children:
             [ { type: 'text',
                 value: 'https://twitter.com/izs/status/503226223527337985' } ] },
          { type: 'text', value: '.' } ] } ] }
`

exports[`test/basic.js TAP failed conversion > should handle failure nicely 1`] = `
{ type: 'root',
  children:
   [ { type: 'paragraph',
       children:
        [ { type: 'link',
            title: null,
            url: 'https://twitter.com/izs/status/13425',
            children:
             [ { type: 'text', value: 'https://twitter.com/izs/status/13425' } ] } ] } ] }
`

exports[`test/basic.js TAP failed conversion > should get expected logs 1`] = `
[ [ '\\nfound tweetLink', 'https://twitter.com/izs/status/13425' ],
  [ '\\nembeding tweet: https://twitter.com/izs/status/13425\\n' ],
  [ '\\nfailed to get blockquote for https://twitter.com/izs/status/13425\\n',
    'ERROR MESSAGE: invalid json response body at https://publish.twitter.com/oembed?url=https://twitter.com/izs/status/13425 reason: Unexpected token < in JSON at position 0' ] ]
`