import GetServerData from "@/lib/get-server-data";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const tools = await GetServerData();
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-end mx-auto pb-4">
        <Button>
          <Link href={"tool/new"}>Add</Link>
          </Button>
      </div>
      <div>
        <DataTable columns={columns} data={tools} />
      </div>
    </div>
  )
}
