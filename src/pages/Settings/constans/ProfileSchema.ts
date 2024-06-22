import * as z from 'zod';

export const profileSchema = z.object({
  name: z
    .string()
    .min(4, { message: 'Минимальная длина 4 символов' })
    .max(14, { message: 'Максимальная длина 14 символа' }),
  work: z
    .string()
    .min(4, { message: 'Минимальная длина 4 символов' })
    .max(40, { message: 'Максимальная длина 40 символов' }),
  about: z
    .string()
    .min(10, { message: 'Минимальная длина 10 символов' })
    .max(400, { message: 'Максимальная длина 400 символов' }),
  country: z
    .string()
    .min(4, { message: 'Минимальная длина 4 символов' })
    .max(20, { message: 'Максимальная длина 20 символов' })
});

export type ProfileSchema = z.infer<typeof profileSchema>;
