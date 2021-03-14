import { providers, signIn, csrfToken } from "next-auth/client";
import { Providers } from "next-auth/providers";
import styles from "styles/pages/Signin.module.scss";

interface IProps {
  providers: Providers;
  csrfToken: any;
}

export default function SignIn({ providers, csrfToken }: IProps) {
  return (
    <div className={styles.providers}>
      {Object.values(providers).map((provider) =>
        provider.name === "Email" ? (
          <form
            className={styles.form}
            method="post"
            action="/api/auth/signin/email"
            key={provider.name}
          >
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <label>
              <input
                className={styles.input}
                type="text"
                id="email"
                name="email"
                placeholder="email@example.com"
              />
            </label>
            <button className={styles.provider} type="submit">
              Sign in with Email
            </button>
            <h3>
              <span>or</span>
            </h3>
          </form>
        ) : (
          <div key={provider.name}>
            <button
              onClick={() => signIn(provider.id)}
              className={styles.provider}
            >
              Sign in with {provider.name}
            </button>
          </div>
        )
      )}
    </div>
  );
}

SignIn.getInitialProps = async (context) => {
  return {
    providers: await providers(),
    csrfToken: await csrfToken(context),
  };
};
