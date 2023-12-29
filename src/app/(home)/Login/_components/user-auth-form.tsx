"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import LoginAuth from "@/lib/authStore"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export default function UserAuthForm({ className, ...props }: UserAuthFormProps) {

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form action={LoginAuth}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" >
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              name="email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
            <Label className="sr-only" >
              Password
            </Label>
            <Input
              placeholder="Contraseña"
              id='password'
              name="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
            />
          </div>
          <Button >
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
        </div>
      </div>
    </div>
  )
}
