import GetServerData from "@/lib/get-server-data"

export default async function Home() {
  const tools = await GetServerData();
  return (
    <div>
      hello world
    </div>
  )
}
