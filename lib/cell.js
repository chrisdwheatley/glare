import React, {Component} from 'react'

export class Cell extends Component {
  componentWillMount() {
    const {column, name, row} = this.props

    this.setState({
      cell: {}
    })

    if (name) {
      this.setState({
        cell: {
          gridArea: name
        }
      })
    }

    if (column && row) {
      this.setState({
        cell: {
          gridArea: `${row[0]} / ${column[0]} / ${row[1]} / ${column[1]}`
        }
      })
    }
  }

  render () {
    const {children, style} = this.props

    return (
      <div style={Object.assign(style || {}, this.state.cell)}>
        {children}
      </div>
    )
  }
}
