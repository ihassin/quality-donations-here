import React from "react";
import { shallow } from "enzyme";
import Navbar from "../../components/Navbar/Navbar";

describe("Navbar", () => {
    const navbar = shallow(<Navbar />);

    describe("when clicking on `login` link", () => {
        it("displays a `LoginM` component", () => {
            expect(navbar.find("LoginM").exists()).toBe(true);
          });
    });
    describe("when clicking on `signup` link", () => {
        it("displays a `SignupM` component", () => {
            expect(navbar.find("SignupM").exists()).toBe(true);
          });
    });
});