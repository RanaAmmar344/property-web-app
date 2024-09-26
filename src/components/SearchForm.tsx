'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import {Form, FormControl,FormField,FormItem,FormLabel} from './ui/form'
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
  

const SearchForm = () => {
    const form = useForm()
  return (
 <>
 <div className=' grid w-full items-end gap-3 rounded-lg bg-black sm:grid-cols-1 lg:grid-cols-4 p-4'>
<Form {...form}>
<FormField
  control={form.control}
  name="property"
  render={({ field }) => (
     <FormItem>
      <FormLabel className='text-white'>Property</FormLabel>
      <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Type" />
      </SelectTrigger>
      <SelectContent>
        
          
          <SelectItem value="buy">Buy</SelectItem>
          <SelectItem value="Sale">Sale</SelectItem>
          <SelectItem value="Rent">Rent</SelectItem>
        
      </SelectContent>
    </Select> 
    </FormItem>
  )}
/>
 <FormField 
control={form.control}
  name="search"
  render={({  }) => (

    <FormItem>
        <FormLabel className='text-white'> Address </FormLabel>
        <Input   type="search" placeholder="Search by Address" />
    </FormItem>

  )}

/>
   
<FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className='text-white' >Buy/Sell Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[200px] pl-3  text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              
            </FormItem>
          )}
        />

  <Button className='bg-slate-800 text-white ml-7 search' >Search</Button>

</Form>


 </div>
 
 
 </>

  )
}

export default SearchForm
