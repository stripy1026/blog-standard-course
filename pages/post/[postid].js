import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function Post() {
  return (
    <>
      <h1>This is postId</h1>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
