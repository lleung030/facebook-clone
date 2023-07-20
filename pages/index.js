import Head from "next/image";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Login from "@/components/Login";
import { getSession } from "next-auth/react";

export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div>
      <Header />
      <main>
        <SideBar />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
