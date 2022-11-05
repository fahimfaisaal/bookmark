import Link from 'next/link';

export default function CustomLink({ href, children }) {
  return (
    <Link href={href} sx={{ cursor: 'pointer' }}>
      {children}
    </Link>
  );
}
