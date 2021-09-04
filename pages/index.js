import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import request from "../utils/request";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Stream TV and Movies Live and Online | Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      <Nav />
      <Results results={props.results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const requests = await fetch(
    `https://api.themoviedb.org/3${
      request[genre]?.url || request.fetchTrending.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      results: requests.results,
    },
  };
}
