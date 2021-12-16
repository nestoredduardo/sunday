import Image from 'next/image'

import userImage from '@images/user.png'

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-6 md:px-10 lg:row-span-1 lg:row-start-1 lg:col-start-1 lg:p-0 lg:justify-center lg:h-20 mt-5">
      <h1 className="py-2 font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-br from-[#cb5eee] to-[#0cd7e4] lg:text-center">
        ☀️ Sunday
      </h1>
      <div className="w-16 h-16 lg:hidden">
        <Image src={userImage} layout="responsive" />
      </div>
    </header>
  )
}

export default Header
