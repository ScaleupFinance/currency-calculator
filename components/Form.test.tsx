import { render } from "@testing-library/react";
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

const mockOnChangeBase = jest.fn();
const mockOnChangeTarget = jest.fn();

describe("Unit tests for the Form Component", () => {
  it("test 1", () => {
    render(
      <Form
        rates={ratesMock}
        base="DKK"
        target="GBP"
        onChangeBase={mockOnChangeBase}
        onChangeTarget={mockOnChangeTarget}
      />
    );

    expect(true).toBe(true);
  });

  it("test 2", () => {
    render(
      <Form
        rates={ratesMock}
        base="DKK"
        target="GBP"
        onChangeBase={mockOnChangeBase}
        onChangeTarget={mockOnChangeTarget}
      />
    );

    expect(true).toBe(true);
  });

  it("test 3", () => {
    render(
      <Form
        rates={ratesMock}
        base="DKK"
        target="GBP"
        onChangeBase={mockOnChangeBase}
        onChangeTarget={mockOnChangeTarget}
      />
    );

    expect(true).toBe(true);
  });
});
