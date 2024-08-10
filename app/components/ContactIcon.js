import { memo } from 'react';
import Image from 'next/image';

const ContactIcon = ({ href, src, alt }) => (
  <a
    href={href}
    className="mx-2"
    rel="noopener noreferrer"
    target="_blank"
  >
    <Image
      src={src}
      alt={alt}
      width={40}
      height={40}
      layout="intrinsic"
      priority={false}
    />
  </a>
);

ContactIcon.displayName = 'ContactIcon';

export default memo(ContactIcon);
