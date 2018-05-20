import React from "react";
import { shallow } from "enzyme";
import LoginM from "../../components/Login/LoginM";

describe("LoginM", () => {
  const mockHandleChange = jest.fn();
  const mockHandleLoginSubmit = jest.fn();
  const user = "lisa";
  const pass = "password123";
  const usernameEvent = {
    target: {
      value: user
    }
  }
  const passEvent = {
    target: {
      value: pass
    }
  }
  const props = {
    username: {
      user
    },
    password: {
      pass
    },
    handleChange: mockHandleChange,
    handleLoginSubmit: mockHandleLoginSubmit
  };
  const loginM = shallow(<LoginM {...props} />);

  describe("when typing into `user name input`", () => {
    beforeEach(() => {
      loginM.find("#login-username-input").simulate("change", usernameEvent);
    });
    it("calls the handleChange callback`", () => {
      expect(mockHandleChange).toHaveBeenCalledWith(usernameEvent);
    });
  });

  describe("when typing into `password input`", () => {
    beforeEach(() => {
      loginM.find("#login-password-input").simulate("change", passEvent);
    });
    it("calls the `handleChange callback`", () => {
      expect(mockHandleChange).toHaveBeenCalledWith(passEvent);
    });
  });

  describe("when clicking the `Login` button", () => {
    beforeEach(() => {
      loginM.find("#login-submit-button").simulate("click");
    });
    it("calls the `handleLoginSubmit callback`", () => {
      expect(mockHandleLoginSubmit).toHaveBeenCalled();
    });
  });
});
