import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "../button";

describe("Button component", () => {
  test("renders button with correct text", () => {
    const buttonText = "Click me";
    const ariaLabel = "click-button";
    const onClick = jest.fn();

    render(
      <Button
        type="button"
        text={buttonText}
        ariaLabel={ariaLabel}
        onClick={onClick}
      />
    );

    const button = screen.getByRole("button", { name: buttonText });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-label", ariaLabel);
  });

  test("calls onClick handler when clicked", () => {
    const onClick = jest.fn();
    const buttonText = "Click me";

    render(
      <Button
        type="button"
        text={buttonText}
        ariaLabel="click-button"
        onClick={onClick}
      />
    );

    const button = screen.getByRole("button", { name: buttonText });
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("disables the button when disabled prop is true", () => {
    const onClick = jest.fn();
    const buttonText = "Click me";

    render(
      <Button
        type="button"
        text={buttonText}
        ariaLabel="click-button"
        onClick={onClick}
        disabled={true}
      />
    );

    const button = screen.getByRole("button", { name: buttonText });
    expect(button).toBeDisabled();
  });

  test("applies the correct class based on buttonStyle prop", () => {
    const buttonText = "Click me";

    const { rerender } = render(
      <Button
        type="button"
        text={buttonText}
        ariaLabel="click-button"
        buttonStyle="base"
      />
    );

    let button = screen.getByRole("button", { name: buttonText });
    expect(button).toHaveClass("buttonBase");

    rerender(
      <Button
        type="button"
        text={buttonText}
        ariaLabel="click-button"
        buttonStyle="close"
      />
    );

    button = screen.getByRole("button", { name: buttonText });
    expect(button).toHaveClass("buttonClose");
  });
});
