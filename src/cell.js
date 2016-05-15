import React, {Component} from 'react'

export class Cell extends Component {
  render () {
    const {children, column, name, row, style} = this.props

    this.cell = {}

    if (name) {
      this.cell = {
        gridArea: name
      }
    }

    if (column && row) {
      this.cell = {
        gridArea: `${row[0]} / ${column[0]} / ${row[1]} / ${column[1]}`
      }
    }

    return (
      <div style={Object.assign(style || {}, this.cell)}>
        {children}
      </div>
    )
  }
}
