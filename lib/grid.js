import React, {Component} from 'react'

const styles = {
  wrapper: {
    display: 'grid'
  }
}

export class Grid extends Component {
  componentWillMount() {
    const {columns} = this.props
    const columnsSize = 100 / columns

    styles.wrapper.gridTemplateColumns = `${columnsSize}% `.repeat(columns)
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
