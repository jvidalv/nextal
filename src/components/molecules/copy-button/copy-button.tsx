"use client";
import { ComponentProps, forwardRef, useState } from "react";
import {
  CheckCircleIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

interface Props extends Omit<
  ComponentProps<"button">,
  "className" | "onClick" | "title"
> {
  text: string;
}

const CopyButton = forwardRef<HTMLButtonElement, Props>(
  ({ text, ...rest }, ref) => {
    const [copied, setCopied] = useState(false);
    const onClick = () => {
      navigator.clipboard?.writeText(text).then(() => setCopied(true));
    };

    const Icon = copied ? CheckCircleIcon : DocumentDuplicateIcon;
    const title = copied ? "Copied" : "Click to copy to clipboard";

    return (
      <button
        type="button"
        {...rest}
        ref={ref}
        className="w-full sm:w-auto flex-none bg-gray-50 text-gray-400 hover:text-gray-900 font-mono leading-6 py-3 px-2 sm:px-6 border border-gray-200 rounded-xl flex items-center justify-center space-x-2 sm:space-x-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 focus:outline-none transition-colors duration-200"
        onClick={onClick}
        title={title}
      >
        <span className="text-gray-900">
          <span className="inline text-gray-500" aria-hidden="true">
            ${" "}
          </span>
          {text}
        </span>
        <span className="sr-only">(click to copy to clipboard)</span>
        <span>
          <Icon className="w-6 h-6" />
        </span>
      </button>
    );
  },
);

CopyButton.displayName = "CopyButton";

export default CopyButton;
