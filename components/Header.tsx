import Image from 'next/image';

import userImage from '@images/user.png';

const Header: React.FC = () => {
  return (
    <header>
      <h1>☀️ Sunday</h1>
      <div className="w-16 h-16">
        <Image src={userImage} layout="responsive" />
      </div>
    </header>
  );
};

export default Header;
