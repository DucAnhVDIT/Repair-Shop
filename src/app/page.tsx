
import TodoDash from '@/components/TodoDash'
import { Suspense } from 'react'


export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TodoDash />
    </Suspense>
  )
}