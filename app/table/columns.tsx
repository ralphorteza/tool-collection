import { ColumnDef } from "@tanstack/react-table";


export type Tools = {
  _id: string
  name: string
  price: number
  type: "power-tool" | "hand-tool" | "electronics"
  description: string
  manufacturer: string
  status: "available" | "in-use" | "maintenance" | "missing" | "broken"
  date_created: Date
  date_modified: Date
}

export const columns: ColumnDef<Tools>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
]