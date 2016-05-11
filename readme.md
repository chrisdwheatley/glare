# glare

[![build status](https://img.shields.io/travis/swirlycheetah/glare/master.svg?style=flat-square)](https://travis-ci.org/swirlycheetah/glare) [![Coveralls](https://img.shields.io/coveralls/jekyll/jekyll.svg?maxAge=2592000?style=flat-square)](https://coveralls.io/github/swirlycheetah/glare)

[CSS Grid Layout](http://gridbyexample.com/examples/) for React

## Browser Support

CSS Grid Layout is under development in most browsers. [Can I use...](http://caniuse.com/#search=grid) lists support.

Support can be enabled in Chrome through the '[Experimental Web Platform features](chrome://flags/#enable-experimental-web-platform-features)'.

## Install

Using [npm](http://npmjs.com):

```
npm install --save glare
```

## Example

```
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

```
<Grid
  columns={ number }  // the number of columns desired for the grid
  layout={ array }    // an array of cell names to use for layout
/>
```

Cell

```
<Cell
  name={ string }   // the name to reference in the <Grid /> layout prop
  column={ array }  // the column start and end values, e.g. [1, 2]
  row={ array }     // the row start and end values, e.g. [1, 2]
/>
```

## License

Released under the MIT license: [opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
