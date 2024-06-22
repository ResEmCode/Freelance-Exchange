import * as z from 'zod';

export const financeSchema = z.object({
  sberbank: z
    .string()
    .min(6, { message: 'Минимальная длина 6 символов' })
    .max(24, { message: 'Максимальная длина 24 символа' }),
  qiwi: z
    .string()
    .min(6, { message: 'Минимальная длина 6 символов' })
    .max(24, { message: 'Максимальная длина 24 символа' }),
  webmoney: z
    .string()
    .min(6, { message: 'Минимальная длина 6 символов' })
    .max(24, { message: 'Максимальная длина 24 символа' })
});

export type FinanceSchema = z.infer<typeof financeSchema>;
