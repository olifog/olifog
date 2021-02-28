import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center py-10">
      <div>
        <Link href="/">
          <a className="font-medium text-gray-300 hover:text-yellow-600 px-4">
            Home
          </a>
        </Link>
      </div>
      <div className="text-base leading-5">
        <a href="https://fog.codes" className="font-medium text-gray-300 hover:text-yellow-600 px-4">
          Projects
        </a>
        <a href="https://github.com/olifog" className="font-medium text-gray-300 hover:text-yellow-600 px-4">
          Github
        </a>
        <a href="mailto:olimooseman@gmail.com" className="font-medium text-gray-300 hover:text-yellow-600 px-4">
          Contact
        </a>
      </div>
    </header>
  )
}