import {
  forwardRef,
  ComponentProps,
  RefAttributes,
  ForwardRefExoticComponent,
  SVGProps,
} from "react";

export interface CardProps
  extends Omit<ComponentProps<"div">, "className" | "children"> {
  title: string;
  description: string;
  href: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ title, description, href, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-gray-100 bg-opacity-80 rounded-md shadow p-4 overflow-hidden h-full"
        {...rest}
      >
        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-bold text-black">{title}</h3>
          <p className="mt-2 text-base text-gray-700 flex-1">{description}</p>
          <div className="pt-6">
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-black font-bold transition tracking-wide hover:text-blue-400"
            >
              Visit documentation →
            </a>
          </div>
        </div>
      </div>
    );
  },
);

Card.displayName = "Card";

export default Card;
