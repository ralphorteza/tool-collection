import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import connectDB from '@/lib/connect-db'
import Tool from '@/models/Tool';
import ToolForm from './tool-form';

export default async function Page(
  { params} :
  { params: { id: string } }
) {

  connectDB();
  const toolObj = await Tool.findById(params.id);
  const tool = {
    _id: toolObj.id,
    name: toolObj.name,
    price: toolObj.price,
    type: toolObj.type,
    description: toolObj.description,
    model_number: toolObj.model_number,
    manufacturer: toolObj.manufacturer,
    status: toolObj.status,
    date_created: toolObj.date_created,
    date_modified: toolObj.date_modified
  };

  console.log(tool);


  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>View/Edit Tool</CardTitle>
        </CardHeader>
        <CardContent>
          <ToolForm tool={tool} id={params.id}/>
        </CardContent>
      </Card>
    </div>
  )
}