import Head from 'next/image';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';

export default function Home() {
  return (
    <div>
    <Header />
    <main>
      <SideBar />
    </main>
    </div>
  )
}
