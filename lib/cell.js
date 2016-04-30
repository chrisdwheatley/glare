import React, {Component} from 'react'

const styles = {
  cell: {}
}

export class Cell extends Component {
  componentWillMount() {
    const {column, name, row} = this.props

    if (name) {
      styles.cell.gridArea = name
    }

    if (column && row) {
      styles.cell.gridArea = `${row[0]} / ${column[0]} / ${row[1]} / ${column[1]}`
    }
  }

  render () {
    const {children, style} = this.props

    return (
      <div style={Object.assign(styles.cell, style)}>
        {children}
      </div>
    )
  }
}
