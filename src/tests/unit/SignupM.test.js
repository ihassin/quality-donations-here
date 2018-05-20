import React from "react";
import { shallow } from "enzyme";
import SignupM from "../../components/Login/SignupM";

describe("SignupM", () => {
  const mockHandleChange = jest.fn();
  const mockHandleSignupSubmit = jest.fn();
  const fname = "Lisa";
  const lname = "Smith";
  const email = "lisa@gmail.com";
  const user = "lisa";
  const pass = "password123";
  const confirmPass = "password123";
  const fnameEvent = { target: { value: fname } };
  const lnameEvent = { target: { value: lname } };
  const emailEvent = { target: { value: email } };
  const usernameEvent = { target: { value: user } };
  const passEvent = { target: { value: pass } };
  const confirmPassEvent = { target: { value: confirmPass } };
  const props = {
    signupFirstname: { fname },
    signupLastname: { lname },
    signupEmail: { email },
    signupUsername: { user },
    signupPassword: { pass },
    signupconfirmPassword: { confirmPass },
    handleChange: mockHandleChange,
    handleSignupSubmit: mockHandleSignupSubmit
  };
  const signupM = shallow(<SignupM {...props} />);

  describe("when typing into `first name input`", () => {
    beforeEach(() => {
      signupM.find("#signup-firstname-input").simulate("change", fnameEvent);
    });
    it("calls the handleChange callback`", () => {
      expect(mockHandleChange).toHaveBeenCalledWith(fnameEvent);
    });
  });

  describe("when typing into `last name input`", () => {
    beforeEach(() => {
      signupM.find("#signup-lastname-input").simulate("change", lnameEvent);
    });
    it("calls the handleChange callback`", () => {
      expect(mockHandleChange).toHaveBeenCalledWith(lnameEvent);
    });
  });

  describe("when typing into `email input`", () => {
    beforeEach(() => {
      signupM.find("#signup-email-input").simulate("change", emailEvent);
    });
    it("calls the handleChange callback`", () => {
      expect(mockHandleChange).toHaveBeenCalledWith(emailEvent);
    });
  });


  describe("when typing into `user name input`", () => {
    beforeEach(() => {
      signupM.find("#signup-username-input").simulate("change", usernameEvent);
    });
    it("calls the handleChange callback`", () => {
      expect(mockHandleChange).toHaveBeenCalledWith(usernameEvent);
    });
  });

  describe("when typing into `password input`", () => {
    beforeEach(() => {
      signupM.find("#signup-password-input").simulate("change", passEvent);
    });
    it("calls the handleChange callback`", () => {
      expect(mockHandleChange).toHaveBeenCalledWith(passEvent);
    });
  });

  describe("when typing into `confirm password input`", () => {
    beforeEach(() => {
      signupM.find("#signup-confirmPassword-input").simulate("change", confirmPassEvent);
    });
    it("calls the handleChange callback`", () => {
      expect(mockHandleChange).toHaveBeenCalledWith(confirmPassEvent);
    });
  });

  describe("when clicking the `Signup` button", () => {
    beforeEach(() => {
      signupM.find("#signup-submit-button").simulate("click");
    });
    it("calls the `handleSignupSubmit callback`", () => {
      expect(mockHandleSignupSubmit).toHaveBeenCalled();
    });
  });
});
