import { z } from "zod";

export const createListingSchema = z.object({
  name: z.string(),
  address: z.string(),
  category: z.string(),
  description: z.string(),
  email: z.string(),
  phone: z.string(),
  website: z.string(),
  city: z.string(),
  zipcode: z.string(),
  displayTitle: z.string(),
  attributes: z.string(),
  images: z.string(),
});
export const getListingSchema = z.string();

export const getAllListingsParams = z.object({
  name: z.string().default(""),
});

export const updatedListingSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  address: z.string(),
  category: z.string(),
  description: z.string(),
  email: z.string(),
  phone: z.string(),
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
