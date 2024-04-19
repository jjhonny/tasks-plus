import { GetServerSideProps } from "next";
import styles from "./styles.module.css";
import Head from "next/head";

import { getSession } from "next-auth/react";
import { Textarea } from "../../components/textarea";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meu paínel de tarefas</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.content}>
          <div className={styles.contentForm}>
            <h1 className={styles.title}>Qual a sua tarefa?</h1>
            <form>
              <Textarea placeholder="Digite qual a sua tarefa" />
              <div className={styles.checkboxArea}>
                <input type="checkbox" className={styles.checkbox} />
                <label>Deixar tarefa publica?</label>
              </div>
              <button className={styles.button} type="submit">
                Registar
              </button>
            </form>
          </div>
        </section>
      </main>
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
