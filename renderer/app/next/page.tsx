
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next Page',
}

export default function NextPage() {
  return (
    <>

      <div className="grid grid-col-1 text-2xl w-full text-center">
        <div>
          <Image
            className="ml-auto mr-auto"
            src="/images/logo.png"
            alt="Logo image"
            width={256}
            height={256}
          />
        </div>
        <span>⚡ Nextron ⚡</span>
      </div>
      <div className="mt-1 w-full flex-wrap flex justify-center">
        <Link href="/">Go to home page</Link>
      </div>
    </>
  )
}
