import React, {Component} from 'react'

export class Grid extends Component {
  componentWillMount() {
    const {columns, layout} = this.props

    const colsFromLayout = layout ? layout[0].split(' ').length : null

    if (colsFromLayout && columns) {
      console.warn(
        'Both layout and columns are defined in your Grid component. ' +
        'Columns will not be used and can be safely removed.'
      )
    }

    const cols = colsFromLayout || columns
    const columnsSize = 100 / cols

    let gridLayout = ''

    if (layout) {
      layout.forEach(function(row) {
        gridLayout += `"${row}" `
      })
    }

    this.setState({
      wrapper: {
        display: 'grid',
        gridTemplateColumns: `${columnsSize}% `.repeat(cols),
        gridTemplateAreas: gridLayout
      }
    })
  }

  render () {
    const {children, style} = this.props

    return (
      <div style={Object.assign(style || {}, this.state.wrapper)}>
        {children}
      </div>
    )
  }
}
