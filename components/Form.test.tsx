import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Form } from "./Form";

const ratesMock = {
  DKK: {
    DKK: 1,
    GBP: 0.11673411164863415,
  },
  GBP: {
    DKK: 8.56747833295657,
    GBP: 1,
  },
};

describe("Form", () => {
  it("renders a form", () => {
    render(
      <Form
        rates={ratesMock}
        base="DKK"
        target="GBP"
        onChangeBase={() => {}}
        onChangeTarget={() => {}}
      />
    );

    const label = screen.getByRole("textbox", {
      name: /amount/i,
    });

    expect(label).toBeInTheDocument();
  });
});
