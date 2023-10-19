import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import ToolForm from './tool-form'

export default async function Page() {
  const prefill = {
    name: "",
    price: null,
    type: null,
    description: null,
    model_number: null,
    manufacturer: null,
    status: null,
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Add new tool</CardTitle>
        </CardHeader>
        <CardContent>
          <ToolForm />
        </CardContent>
      </Card>
    </div>
  )
}