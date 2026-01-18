"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  username: z.string().min(2, { message: "Username must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  address: z.string().min(2, { message: "Address must be at least 2 characters." }),
  dateOfBirth: z.string().min(1, { message: "Date of birth is required." }),
})

export default function FormPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      address: "",
      dateOfBirth: "",
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", values)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 flex items-center justify-center p-6">
      {/* Card Container */}
      <div className="w-full max-w-lg bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-10">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-zinc-100 text-center">
          Update Profile
        </h1>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Username */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-4 hover:border-zinc-300 dark:hover:border-zinc-600 transition">
                  <FormLabel className="text-zinc-700 dark:text-zinc-300">Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your username"
                      {...field}
                      className="mt-2 bg-zinc-50 dark:bg-zinc-800"
                    />
                  </FormControl>
                  <FormDescription className="text-sm text-zinc-500 dark:text-zinc-400">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-4 hover:border-zinc-300 dark:hover:border-zinc-600 transition">
                  <FormLabel className="text-zinc-700 dark:text-zinc-300">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                      className="mt-2 bg-zinc-50 dark:bg-zinc-800"
                    />
                  </FormControl>
                  <FormDescription className="text-sm text-zinc-500 dark:text-zinc-400">
                    We'll never share your email.
                  </FormDescription>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            {/* Address */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-4 hover:border-zinc-300 dark:hover:border-zinc-600 transition">
                  <FormLabel className="text-zinc-700 dark:text-zinc-300">Address</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your full address"
                      {...field}
                      rows={3}
                      className="mt-2 bg-zinc-50 dark:bg-zinc-800 resize-none"
                    />
                  </FormControl>
                  <FormDescription className="text-sm text-zinc-500 dark:text-zinc-400">
                    Street, City, State, Postal Code
                  </FormDescription>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            {/* Date of Birth */}
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-4 hover:border-zinc-300 dark:hover:border-zinc-600 transition">
                  <FormLabel className="text-zinc-700 dark:text-zinc-300">Date of Birth</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      {...field}
                      className="mt-2 bg-zinc-50 dark:bg-zinc-800"
                    />
                  </FormControl>
                  <FormDescription className="text-sm text-zinc-500 dark:text-zinc-400">
                    We'll never share your date of birth.
                  </FormDescription>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button
              type="submit"
              className="w-full py-3 mt-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold text-lg rounded-lg transition"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
