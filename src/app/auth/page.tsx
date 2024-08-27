import React from 'react'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AuthPage() {
  return (
    <Card className="w-[400px] mx-auto mt-10">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Welcome</CardTitle>
        <p className="text-sm text-gray-500">Choose an option to get started</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <Link href="/auth/signin" passHref>
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full py-2">
            Sign In
          </Button>
        </Link>
        <Link href="/auth/signup" passHref>
          <Button className="w-full bg-white hover:bg-gray-100 text-green-500 border border-green-500 rounded-full py-2">
            Sign Up
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}