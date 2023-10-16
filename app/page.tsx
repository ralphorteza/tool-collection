import GetServerData from "@/lib/get-server-data"
import { columns } from "./columns";
import { DataTable } from "./data-table";
export default async function Home() {
  const tools = await GetServerData();
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={tools} />
    </div>
  )
}
