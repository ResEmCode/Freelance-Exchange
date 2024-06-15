import * as z from 'zod';

export const auctionSchema = z.object({
  name: z
    .string()
    .min(6, { message: 'Минимальная длина 6 символов' })
    .max(24, { message: 'Максимальная длина 24 символа' }),
  desc: z
    .string()
    .min(24, { message: 'Минимальная длина 24 символа' })
    .max(600, { message: 'Максимальная длина 600 символов' }),

  startPrice: z
    .number({ message: 'Нужно ввести цену' })
    .min(1, { message: 'Минимальная цена 1$' })
    .max(1000000, { message: 'Максимальная цена 1M$' }),
  bidTime: z.string(),
  auctionTime: z.string()
  // imgUrl: yup.string()
});

export type AuctionSchema = z.infer<typeof auctionSchema>;
