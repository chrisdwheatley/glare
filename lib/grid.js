import React, {Component} from 'react'

const styles = {
  wrapper: {
    display: 'grid'
  }
}

export class Grid extends Component {
  componentWillMount() {
    const {columns, layout} = this.props

    const colsFromLayout = layout[0].split(' ').length

    if (colsFromLayout && columns) {
      console.warn(
        'Both layout and columns are defined in your Grid component. ' +
        'Columns will not be used and can be safely removed.'
      )
    }

    const cols = colsFromLayout || columns
    const columnsSize = 100 / cols

    styles.wrapper.gridTemplateColumns = `${columnsSize}% `.repeat(cols)

    if (layout) {
      let gridLayout = ''

      layout.forEach(function(row) {
        gridLayout += `"${row}" `
      })

      styles.wrapper.gridTemplateAreas = gridLayout
    }
  }

  render () {
    const {children, style} = this.props

    return (
      <div style={Object.assign(styles.wrapper, style)}>
        {children}
      </div>
    )
  }
}
