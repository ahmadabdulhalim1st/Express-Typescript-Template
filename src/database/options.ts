import mongoose, { Document } from "mongoose";

const transform = (
  doc: Document,
  ret: Record<string, unknown>,
): Record<string, unknown> => {
  ret.id = ret._id as mongoose.Types.ObjectId;
  delete ret._id;
  delete ret.__v;
  return ret;
};

export const schemaOptions = {
  timestamps: true,
  toJSON: { virtuals: true, transform },
  toObject: { virtuals: true, transform },
};

export const updateOptions = {
  returnDocument: "after",
  runValidators: true,
};
