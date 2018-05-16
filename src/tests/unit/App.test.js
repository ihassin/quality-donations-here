import React from 'react'
import { shallow } from 'enzyme'
import App from '../../App'

// Use Jest Global describe method to group tests together,
// two arg, description and a series of tests
describe('App', () => {
  const app = shallow(<App />)

  it('initializes the `state` Logged In equal to false', () => {
    expect(app.state().loggedIn).toEqual(false);
  })

})
