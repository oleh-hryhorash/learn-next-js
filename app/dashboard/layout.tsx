// layout.tsxфайл для створення інтерфейсу користувача, спільного для кількох сторінок.

import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) { // children - це усі інші елементи у папці dashboard і вони автоматично будуть вкладені у SideNav Меню
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
/*
По-перше, ви імпортуєте <SideNav />компонент у свій макет. Будь-які компоненти, які ви імпортуєте в цей файл, будуть частиною макета.
Компонент <Layout />отримує childrenпроп. Цей дочірній елемент може бути сторінкою або іншим макетом. У вашому випадку сторінки всередині /dashboardбудуть автоматично вкладені всередину ось <Layout />
*/