// Sidebar.js
'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils'; // Importa tu utilidad de clases

const Sidebar = () => {
  const router = useRouter();

  // Elementos de navegación en la barra lateral
  const navigationItems = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Gráfico RA', path: '/dashboard/RA' },
    { label: 'Formularios', path: '/dashboard/Formularios' },
    // Agrega más elementos de navegación según tus necesidades
  ];

  return (
    <aside className="bg-gray-200 p-4 h-screen w-1/6 fixed top-0 left-0 overflow-y-auto">
      <nav>
        <ul className="space-y-2">
          {navigationItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.path}
                className={cn(
                  'block py-2 px-4 rounded hover:bg-gray-300 transition duration-300',
                  {
                    'font-bold': router.pathname === item.path,
                  }
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
