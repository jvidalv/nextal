import Button from "./button";
import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";

describe("Button test", () => {
  test("Should render the specified label and register the click", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    const label = "This is a button";

    const { getByText, getByRole } = render(
      <Button onClick={onClick}>{label}</Button>,
    );

    const button = getByRole("button");

    expect(getByText(label)).toBeDefined();
    expect(button).toBeDefined();
    await user.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
