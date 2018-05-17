import React from 'react'
import App from '../../App'
import { shallow } from 'enzyme'

describe('Initial state', () => {
  const app = shallow(<App />)

  it('Initializes the `state` Logged In equal to false', () => {
    expect(app.state().loggedIn).toEqual(false)
  })
})
