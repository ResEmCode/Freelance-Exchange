import * as z from 'zod';

import { checkIfEmailIsValid } from '@/components/Layouts/utils/checkIfEmailIsValid';

export const generalSchema = z
  .object({
    login: z
      .string()
      .min(6, { message: 'Минимальная длина 6 символов' })
      .max(24, { message: 'Максимальная длина 24 символа' }),
    phone: z
      .string()
      .min(11, { message: 'Минимальная длина 11 символов' })
      .max(11, { message: 'Максимальная длина 11 символов' }),
    email: z
      .string({ message: 'Нужно ввести почту' })
      .min(1, { message: 'Почта не найдена' })
      .refine((email) => checkIfEmailIsValid(email), { message: 'Некорректная почта' }),
    time: z.string().min(5, { message: 'Недопустимое значение' }),

    password: z
      .string()
      .min(6, { message: 'Пароль должен содержать минимум 6 символов' })
      .max(20, { message: 'Пароль должен содержать максимум 20 символов' }),

    passwordMust: z.string()
  })
  .refine((data) => data.password === data.passwordMust, {
    path: ['passwordMust'],
    message: 'Пароли не совпадают'
  });

export type GeneralSchema = z.infer<typeof generalSchema>;
