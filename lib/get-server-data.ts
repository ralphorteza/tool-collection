"use server";
import Tool from "@/models/Tool";
import ConnectDB from "@/lib/connect-db";

export default async function GetServerData() {
  await ConnectDB();

  const data = await Tool.find({});

  const tools = data.map((doc: any) => {
    const tool = doc.toObject();
    tool._id = tool._id.toString();
    return tool;
  });

  console.log(tools);

  return tools;
}