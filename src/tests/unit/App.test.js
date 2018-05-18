import React from "react";
import App from "../../App";
import { shallow, mockImplementation } from "enzyme";

describe("Initial state", () => {
  const app = shallow(<App />);

  it("Initializes the `state` Logged In equal to false", () => {
    expect(app.state().loggedIn).toEqual(false);
  });

  // describe('and the user wants to login', () => {
  //   beforeEach(() => {
  //     app.instance()._login('lisa', 'lisa')
  //   })

  //   it('The `state` Logged In equal to true', () => {
  //     expect(app.state().loggedIn).toEqual(true);
  //   })
  // })

  // describe('User Login, working with promise calling `axios.post`', () => {

  //   it('The `state` Logged In equal to true', () => {
  //     const mockData = { loggedIn:true };
  //     jest.spyOn(window, 'axios.post').mockImplementation(() => Promise.resolve(mockData));

  //     const wrapper = shallow(<App />, { disableLifecycleMethods: true });
     
  //     return wrapper.instance()._login('lisa', 'lisa')
  //     .then(() => {
  //       expect(wrapper.state()).toEqual(mockData);
  //     })
  
  //   })
  // })


});
