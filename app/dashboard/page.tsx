'use client'

import { pb } from "@/lib/db"
import { useRouter } from "next/navigation"

const Dashboard = () => {
  const router = useRouter()
  if (!pb.authStore.token) {
    router.push('/login')
  }


  return (
    <div>
      Dashboard
    </div>
  )
}
export default Dashboard
