

import '../styles/globals.css'
import Link from 'next/link'

type Props = {
  children: React.ReactNode
};

function MyApp(
  { children }: Props
) {
  return (
    <html>
      <body className='flex w-full h-screen'>
        <SideNavBtn />
        <SideNav />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

function SideNavBtn() {
  return (
    <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
      <span className="sr-only">Open sidebar</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
      </svg>
    </button>
  )

}

function NavItem({ className, href, children }: { className?: string, href: string, children: React.ReactNode }) {
  return (
    <li className={className}>
      <Link href={href} 
      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        {children}
      </Link>
    </li>
  );
}

function SideNav() {
  return (
    
    <aside id="default-sidebar" className=" z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="font-medium flex flex-col h-full">
          <NavItem href="/">Games</NavItem>
          <NavItem href="/library">Library</NavItem>
          <NavItem href="/categories">Categories</NavItem>
          <NavItem href="/help" className='mt-auto'>Help</NavItem>
          <NavItem href="/settings">Settings</NavItem>
        </ul>
      </div>
    </aside>
  )
}

export default MyApp
