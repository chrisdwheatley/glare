import React from 'react'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {shallow} from 'enzyme'
import {Grid} from '../src/grid'

chai.use(chaiEnzyme())

describe('<Grid />', () => {

  describe('with neither columns or layout passed through as props', () => {

    it('should render a grid component with only display:style set', () => {
      const grid = shallow(<Grid />)

      expect(grid).to.have.style('display', 'grid')
      expect(grid).to.not.have.style('grid-template-columns')
      expect(grid).to.not.have.style('grid-template-areas')
    })

  })

  describe('when columns is passed through as a prop', () => {

    it('should render a grid component with the defined number of template columns', () => {
      const grid = shallow(<Grid columns='2' />)

      expect(grid).to.have.style('grid-template-columns', '50% 50%')
      expect(grid).to.not.have.style('grid-template-areas')

    })

  })

  describe('when layout is passed through as a prop', () => {

    it('should render a grid component with the defined layout', () => {
      const layout = [
        'foo foo',
        'bar bar',
        'baz baz'
      ]
      const grid = shallow(<Grid layout={layout} />)

      expect(grid).to.have.style('grid-template-columns', '50% 50%')
      expect(grid).to.have.style('grid-template-areas', '"foo foo" "bar bar" "baz baz"')

    })

  })

  describe('when both layout and columns are passed through as props', () => {

    it('should render a grid component using the layout prop and ignoring columns', () => {
      const layout = [
        'foo foo foo foo',
        'bar bar bar bar',
        'baz baz baz baz'
      ]
      const grid = shallow(<Grid layout={layout} columns='99' />)

      expect(grid).to.have.style('grid-template-columns', '25% 25% 25% 25%')
      expect(grid).to.have.style(
        'grid-template-areas',
        '"foo foo foo foo" "bar bar bar bar" "baz baz baz baz"'
      )

    })

  })

})
