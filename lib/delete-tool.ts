"use server";
import Tool from "@/models/Tool";
import connectDB from "./connect-db";
import { revalidatePath } from "next/cache";

export default async function DeleteTool(id: any) {
  await connectDB();

  const selectedTool = await Tool.findByIdAndDelete(id);

  revalidatePath("/");
}