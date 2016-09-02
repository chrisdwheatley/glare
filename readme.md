# glare

[![Travis][travis-badge]][travis] [![Coveralls][coveralls-badge]][coveralls]

[CSS Grid Layout](http://gridbyexample.com/examples/) for React

## Browser Support

CSS Grid Layout is under development in most browsers. [Can I use...](http://caniuse.com/#search=grid) lists support.

Support can be enabled in Chrome by toggling _chrome://flags/#enable-experimental-web-platform-features_ on.

## Install

Using [npm](http://npmjs.com):

```
npm install --save glare
```

The UMD build is also available on [unpkg.com](http://unpkg.com):

```
<script src="https://unpkg.com/glare/dist/glare.js"></script>
<script src="https://unpkg.com/glare/dist/glare.min.js"></script>
```

## Example

```js
import {Grid, Cell} from 'glare'
import React, {Component} from 'react'
import {render} from 'react-dom'

const styles = {
  wrapper: {
    gridGap: '10px'
  },
  cell: {
    backgroundColor: '#444',
    color: '#f2f2f2',
    padding: '20px',
    fontSize: '150%'
  }
}

class Dashboard extends Component {
  render() {
    return (
      <Grid style={styles.wrapper} columns={2}>
        <Cell style={styles.cell}>a</Cell>
        <Cell style={styles.cell}>b</Cell>
        <Cell style={styles.cell}>c</Cell>
        <Cell style={styles.cell}>d</Cell>
      </Grid>
    )
  }
}

render(
  <Dashboard />,
  document.body
)
```

## API

Grid

```js
<Grid
  columns={ number }  // the number of columns desired for the grid
  layout={ array }    // an array of cell names to use for layout
/>
```

Cell

```js
<Cell
  name={ string }   // the name to reference in the <Grid /> layout prop
  column={ array }  // the column start and end values, e.g. [1, 2]
  row={ array }     // the row start and end values, e.g. [1, 2]
/>
```

## License

Released under the MIT license: [opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)

[travis]: https://travis-ci.org/swirlycheetah/glare
[travis-badge]: https://img.shields.io/travis/swirlycheetah/glare/master.svg?style=flat-square

[coveralls]: https://coveralls.io/github/swirlycheetah/glare
[coveralls-badge]: https://img.shields.io/coveralls/swirlycheetah/glare.svg?style=flat-square
