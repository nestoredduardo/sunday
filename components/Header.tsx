import Image from 'next/image';

import userImage from '@images/user.png';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center m-6">
      <h1 className="font-bold magic-title text-4xl">☀️ Sunday</h1>
      <div className="w-16 h-16">
        <Image src={userImage} layout="responsive" />
      </div>
    </header>
  );
};

export default Header;
