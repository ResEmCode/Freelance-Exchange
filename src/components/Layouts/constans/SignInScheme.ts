import * as z from 'zod';

import { checkIfEmailIsValid } from '../utils/checkIfEmailIsValid';

export const signInSchema = z.object({
  email: z
    .string()
    .min(6, { message: 'Минимальная длина 6 символов' })
    .max(24, { message: 'Максимальная длина 24 символа' })
    .refine((email) => checkIfEmailIsValid(email), 'Некорректная почта'),
  login: z
    .string()
    .min(3, { message: 'Минимальная длина 3 символов' })
    .max(14, { message: 'Максимальная длина 14 символа' }),
  password: z
    .string()
    .min(6, { message: 'Пароль должен содержать минимум 6 символов' })
    .max(20, { message: 'Пароль должен содержать максимум 20 символов' })
});

export type SignInSchema = z.infer<typeof signInSchema>;
