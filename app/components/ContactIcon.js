import { memo } from 'react';
import Image from 'next/image';

const ContactIcon = ({ href, src, alt }) => (
  <a href={href} className="mx-2">
    <Image src={src} alt={alt} width={40} height={40} />
  </a>
);

ContactIcon.displayName = 'ContactIcon';
export default memo(ContactIcon);
