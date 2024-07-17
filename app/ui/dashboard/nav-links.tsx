'use client'; // Вказую, що це клієнтський компонент

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link'; // Імпортую Link, щоб здійснити навігацію на стороні клієнта
import { usePathname } from 'next/navigation'; // Імпортую хук usePathname
import clsx from 'clsx';


// !!! Link Також дозволяє робити навігацію між сторінками без повного оновлення усіх сторінок, а тільки потрібних компонентів
/*
!!!  usePathname() - хук, який можна використовувати для перевірки шляху та реалізації цього шаблону.
*/

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname(); // Присвоїв змінну хуку
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link 
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href, // Використав clsx щоб підсвічувало синім текстом посилання
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
            </Link>
        );
      })}
    </>
  );
}
