import { FunctionComponent, ReactNode } from "react";

export type FCC<P = {}> = FunctionComponent<P & { children?: ReactNode }>;
