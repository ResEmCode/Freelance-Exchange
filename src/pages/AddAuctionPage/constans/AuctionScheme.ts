import * as z from 'zod';

export const auctionSchema = z.object({
  name: z.string().min(6).max(24),
  desc: z.string().min(24).max(600),

  startPrice: z.number().min(1).max(999999),
  bidTime: z.string(),
  auctionTime: z.string()
  // imgUrl: yup.string()
});

export type AuctionSchema = z.infer<typeof auctionSchema>;
