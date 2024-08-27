import React from 'react'
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Mail } from 'lucide-react'

interface SocialLoginsProps {
  onSocialLogin: (provider: 'facebook' | 'twitter' | 'google') => Promise<void>
}

export default function SocialLogins({ onSocialLogin }: SocialLoginsProps) {
  return (
    <>
      <div className="mt-6 flex justify-center space-x-4">
        <Button 
          onClick={() => onSocialLogin('facebook')} 
          className="p-2 bg-white hover:bg-gray-100 border rounded-full"
        >
          <Facebook className="w-6 h-6 text-blue-600" />
        </Button>
        <Button 
          onClick={() => onSocialLogin('twitter')} 
          className="p-2 bg-white hover:bg-gray-100 border rounded-full"
        >
          <Twitter className="w-6 h-6 text-sky-500" />
        </Button>
        <Button 
          onClick={() => onSocialLogin('google')} 
          className="p-2 bg-white hover:bg-gray-100 border rounded-full"
        >
          <Mail className="w-6 h-6 text-red-500" />
        </Button>
      </div>
    </>
  )
}