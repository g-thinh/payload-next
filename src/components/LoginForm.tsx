'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { useAuth } from '@/providers/AuthProvider'

type FormValues = z.infer<typeof formSchema>

const formSchema = z.object({
  email: z
    .string({
      required_error: 'You need to enter your email.',
    })
    .email('This is not a valid email.'),
  password: z
    .string({
      required_error: 'You need to enter your password.',
    })
    .min(8),
})

export function LoginForm() {
  const { login } = useAuth()

  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit(values: FormValues) {
    await login({
      email: values.email,
      password: values.password,
    })

    toast({
      title: 'You are now connected.',
      description: new Date().toUTCString(),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="max-w-md">
          <h3 className="text-2xl">Sign In to YAHPA</h3>
          <p>Please enter your email and password to connect to your YAHPA account.</p>
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="text" placeholder="example@yahpa.org" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="not12345678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-2">
          <p className="text-sm">
            Don&apos;t have one?{' '}
            <Link href="/signup" className="underline">
              Create an account
            </Link>
          </p>
          <div>
            <Button type="submit" disabled={!form.formState.isDirty}>
              Sign In
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}