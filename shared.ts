import { z } from "zod";

export const listingSchema = z.object({
  address: z.string().min(1),
  attributes: z.string().optional(),
  category: z.string().optional(),
  city: z.string().min(1),
  description: z.string().min(1),
  displayTitle: z.string().min(1),
  email: z.string().email().min(1),
  image1: z.string().min(1),
  image2: z.string().min(1).optional().nullable(),
  image3: z.string().min(1).optional().nullable(),
  image4: z.string().min(1).optional().nullable(),
  name: z.string().min(1),
  phone: z.string().min(10),
  subTitle: z.string().optional(),
  website: z.string().min(1),
  zipcode: z.string().min(5),
});

export const getListingSchema = z.string();

export const getAllListingsParams = z.object({
  name: z.string().default(""),
});

export const deleteListingSchema = z.string(); //validate the incoming object

export const createCouponSchema = z.object({
  name: z.string(),
  listingId: z.number().int(),
  deal: z.string(),
  expires: z.date(),
});

export const getCouponSchema = z.string();

export const updateCouponSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  listingId: z.number().int(),
  deal: z.string(),
  expires: z.date(),
});

export const deleteCouponSchema = z.string(); //validate the incoming object

export const createUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  role: z.string(),
});
export const getUserSchema = z.string();

export const updatedUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  role: z.string(),
});

export const deleteUserSchema = z.string(); //validate the incoming object
