
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Page',
}

export default function HomePage() {
  return (
    <div className='flex w-full h-screen'>

      <div className="flex-wrap flex justify-center">
        {/* image gallery */}
        <Link href="/next">Go to next page</Link>
      </div>
    </div>
  )
}

