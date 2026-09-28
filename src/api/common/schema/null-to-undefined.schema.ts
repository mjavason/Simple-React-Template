import { z } from "zod";

export const nullToUndefined = <T>(schema: z.ZodType<T>) =>
  schema.nullish().transform((value) => value ?? undefined);
