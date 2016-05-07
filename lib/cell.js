import React, {Component} from 'react'

export class Cell extends Component {
  componentWillMount() {
    const {column, name, row} = this.props

    this.setState({
      styles: {
        cell: {}
      }
    })

    if (name) {
      this.setState({
        styles: {
          cell: {
            gridArea: name
          }
        }
      })
    }

    if (column && row) {
      this.setState({
        styles: {
          cell: {
            gridArea: `${row[0]} / ${column[0]} / ${row[1]} / ${column[1]}`
          }
        }
      })
    }
  }

  render () {
    const {children, style} = this.props

    return (
      <div style={Object.assign(style || {}, this.state.styles.cell)}>
        {children}
      </div>
    )
  }
}
