import { withPageAuthRequired } from "@auth0/nextjs-auth0";

import { AppLayout } from "../components/AppLayout";
import { getAppProps } from "../utils/getAppProps";

export default function TokenTopup() {
  const handleClick = async () => {
    await fetch(`/api/addTokens`, {
      method: "POST",
    });
  };
  return (
    <div className="px-10 py-10 bg-gradient-to-b from-slate-100 to-slate-800">
      <h1>this is token-topup page</h1>
      <p className="px-3">for now, tokens are provided for free.</p>
      <button className="btn my-10" onClick={handleClick}>
        Add tokens
      </button>
    </div>
  );
}

TokenTopup.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const props = await getAppProps(ctx);
    return {
      props,
    };
  },
});
