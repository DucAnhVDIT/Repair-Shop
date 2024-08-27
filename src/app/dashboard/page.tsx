'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  const router = useRouter()

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.log('Error signing out:', error.message)
    } else {
      router.push('/auth/signin')  
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h1>
      <p>You are now signed in.</p>
      <Button onClick={handleSignOut} className="mt-4">Sign Out</Button>
    </div>
  )
}