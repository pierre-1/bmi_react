import React from "react";
import { mount } from "enzyme";
import App from "../App";

describe("app component", () => {
  const wrapper = mount(<App />);
  it("Calculation with metric system", () => {
    wrapper
      .find("#selectmethod")
      .simulate("change", { target: { value: "metric" } });
    wrapper
      .find("#weight")
      .simulate("change", { target: { name: "weight", value: "90" } });
    wrapper
      .find("#height")
      .simulate("change", { target: { name: "height", value: "190" } });
    wrapper.find("form").simulate("submit");
    expect(wrapper.find("#bmi-message").text()).toEqual(
      "You are Normal with a BMI of 24.93"
    );
  });

  it("Calculation with imperial system", () => {
    wrapper.find('select[name="calculationSystem"]').simulate("change", {
      target: {
        name: "calculationSystem",
        value: "imperial"
      }
    });
    wrapper
      .find("#weight")
      .simulate("change", { target: { name: "weight", value: "192" } });
    wrapper
      .find("#height")
      .simulate("change", { target: { name: "height", value: "74" } });
    wrapper.find("form").simulate("submit");
    expect(wrapper.find("#bmi-message").text()).toEqual(
      "You are Normal with a BMI of 24.65"
    );
  });
});
