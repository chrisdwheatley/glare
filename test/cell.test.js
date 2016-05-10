import React from 'react'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {shallow} from 'enzyme'
import {Cell} from '../src/cell'

chai.use(chaiEnzyme())

describe('<Cell />', () => {

  describe('when neither column, name or row are passed through as props', () => {

    it('should render a cell component with no styles set', () => {
      const cell = shallow(<Cell />)

      expect(cell).to.not.have.style('grid-area')
    })

  })

  describe('when name is passed through as a prop', () => {

    it('should render a cell component with grid-area set as name', () => {
      const cell = shallow(<Cell name='foo' />)

      expect(cell).to.have.style('grid-area', 'foo')
    })

  })

  describe('when column and row are passed through as props', () => {

    it('should render a cell component with grid-area set based on the columns and rows defined', () => {
      const row = [
        1,
        2
      ]
      const column = [
        2,
        4
      ]
      const cell = shallow(<Cell row={row} column={column} />)

      expect(cell).to.have.style('grid-area', '1 / 2 / 2 / 4')
    })

  })

  describe('when column, row and name are passed through as props', () => {

    it('should render a cell component with grid-area set based on the columns and rows defined', () => {
      const row = [
        1,
        2
      ]
      const column = [
        2,
        4
      ]
      const cell = shallow(<Cell row={row} column={column} name='bar' />)

      expect(cell).to.have.style('grid-area', '1 / 2 / 2 / 4')
    })

  })

})
