import React, {Component} from 'react'

const styles = {
  cell: {}
}

export class Cell extends Component {
  componentWillMount() {
    const {column, row} = this.props

    styles.cell.gridArea = `${row[0]} / ${column[0]} / ${row[1]} / ${column[1]}`
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
