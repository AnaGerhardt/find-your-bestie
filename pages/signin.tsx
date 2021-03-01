import { providers, signIn } from "next-auth/client";
import { Providers } from "next-auth/providers";
import styles from "styles/pages/Signin.module.scss";

interface IProps {
  providers: Providers;
}

export default function SignIn({ providers }: IProps) {
  return (
    <div className={styles.providers}>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => signIn(provider.id)}
            className={styles.provider}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

SignIn.getInitialProps = async () => {
  return {
    providers: await providers(),
  };
};
