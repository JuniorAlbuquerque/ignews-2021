import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";

export function SignInButton() {
  const { data: session } = useSession();

  console.log(session)

  if (session) {
    return (
      <button
        type="button"
        className={styles.signInButton}
      >
        <FaGithub color="#04b361" />
        {session?.user?.name}
        <FiX color="#737380" className={styles.closeIcon} onClick={() => signOut()}/>
      </button>
    );
  }

  return (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn("github")}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
