import * as React from 'react'
import {mount, shallow} from 'enzyme'
import IndexPage from '../pages/index.js'

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', ()=> {
      shallow(<IndexPage/>)
    })

    it('should mount without throwing an error', ()=> {
      mount(<IndexPage/>)
    })

  })  
})