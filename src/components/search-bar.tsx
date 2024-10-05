"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
// import { get } from "http";
import { getTopDictionarySuggestions } from "@/lib/helper";
import { Button } from "./ui/button";

const FormSchema = z.object({
  search: z.string(),
});

export default function SearchBar() {
  const [suggestedWords, setSuggestedWords] = useState<string[]>([]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      search: "",
    },
  });

  const inputChangeData = form.watch("search");
  useEffect(() => {
    //use the helper.ts file to get the suggested words
    (async () => {
      try {
        const suggestedWords =
          await getTopDictionarySuggestions(inputChangeData);
        setSuggestedWords(suggestedWords);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [inputChangeData]);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <div className=" text-secondary relative">
        <form onSubmit={form.handleSubmit(onSubmit)} className=" relative">
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem className=" ">
                <FormControl>
                  <Input
                    className="placeholder:text-lg text-xl h-14  w-full"
                    placeholder="Search..."
                    type=""
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            className=" absolute p-5 right-3 -translate-y-1/2 top-1/2  "
            type="submit"
            variant={"secondary"}
          >
            <SearchIcon size={20} className="" />
          </Button>
        </form>

        {inputChangeData && suggestedWords.length > 0 && (
          <section className=" h-auto mt-2 space-y-2  rounded-b-2xl p-2 w-full shadow-xl absolute shardow z-50   bg-primary-foreground">
            {suggestedWords &&
              suggestedWords.map((word) => (
                <div className=" w-full flex items-center h-10 shadow-sm rounded-lg">
                  {word}
                </div>
              ))}
          </section>
        )}
      </div>
    </Form>
  );
}
