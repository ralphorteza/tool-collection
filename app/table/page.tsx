import GetServerData from "@/lib/get-server-data";
import { Tools, columns } from "./columns";
import { DataTable } from "./data-table";

export default async function DemoPage() {
  const data = await GetServerData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}