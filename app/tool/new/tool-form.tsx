"use client"

// TODO: client form validation.
import AddTool from "@/lib/add-tool";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


enum TypeEnum {
  power_tool = "power-tool",
  hand_tool = "hand-tool",
  electronics = "electronics"
};

enum StatusEnum {
  available = "available",
  in_use = "in-use",
  maintenance = "maintenance",
  missing = "missing",
  broken = "broken"
};

type Inputs = {
  name: string,
  price: string,
  type: TypeEnum,
  description: string,
  model_number: string,
  manufacturer: string,
  status: StatusEnum,
};

export default function ToolForm() {
  const prefill = {
    name: "",
    price: "",
    type: TypeEnum.hand_tool,
    description: "",
    model_number: "",
    manufacturer: "",
    status: StatusEnum.available,
  }

  const form= useForm<Inputs>({
    defaultValues: { ...prefill },
  })

  const onSubmit: SubmitHandler<Inputs> = async (data) => AddTool(data);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="screw driver #12" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="420.69" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a tool type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="power-tool">power-tool</SelectItem>
                <SelectItem value="hand-tool">hand-tool</SelectItem>
                <SelectItem value="electronics">electronics</SelectItem>
              </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="A very large screw driver" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="model_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Model #</FormLabel>
              <FormControl>
                <Input placeholder="SCR3W3D" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="manufacturer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Manufacturer</FormLabel>
              <FormControl>
                <Input placeholder="mad co." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
          <FormItem>
            <FormLabel>Status</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a tool type" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="available">available</SelectItem>
              <SelectItem value="in-use">in-use</SelectItem>
              <SelectItem value="maintenance">maintenance</SelectItem>
              <SelectItem value="missing">missing</SelectItem>
              <SelectItem value="broken">broken</SelectItem>
            </SelectContent>
            </Select>
          </FormItem>
          )}
        />
        <div className="flex justify-between">
          <Button variant="outline"><Link href="/">Cancel</Link></Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  )
}
