import { GetServerSideProps } from "next";
import styles from "./styles.module.css";
import Head from "next/head";

import { getSession } from "next-auth/react";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meu paínel de tarefas</title>
      </Head>

      <h1>Página painel</h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  console.log("Buscando pelo server side");
  const session = await getSession({ req });
  console.log(session);

  if (!session?.user) {
    // Se não tem usuario vamos redirecionar para home "/"
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
