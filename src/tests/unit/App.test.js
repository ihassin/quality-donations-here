import React from 'react'
import App from '../../App'
import { shallow, mockImplementation } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

describe('App', () => {
  const app = shallow(<App />)

  describe('Initial state', () => {
    it('Initializes the `state` Logged In equal to false', () => {
      expect(app.state().loggedIn).toEqual(false)
    })
  })
})
