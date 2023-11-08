import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Form } from "./Form";
import { rates } from "./Converter";

describe("Form", () => {
  it("renders a form", () => {
    render(
      <Form
        rates={rates}
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
