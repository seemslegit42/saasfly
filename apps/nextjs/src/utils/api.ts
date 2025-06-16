import { createTRPCReact } from "@trpc/react-query";

import type { AppRouter } from "@nexos/api";

export const api = createTRPCReact<AppRouter>();

export { type RouterInputs, type RouterOutputs } from "@nexos/api";
