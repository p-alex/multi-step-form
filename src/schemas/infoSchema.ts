import { z } from "zod";

export const infoSchema = z.object({
  name: z.string({}).min(1, "Can't be empty"),
  email: z.string({}).min(1, "Can't be empty").email("Invalid email"),
  phone: z
    .string({})
    .min(1, "Can't be empty")
    .regex(/^\d+$/gm, "Only numbers")
    .regex(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      "Invalid phone number"
    ),
});

export type InfoType = z.TypeOf<typeof infoSchema>;
