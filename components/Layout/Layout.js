import Head from "next/head";
import Main from "./Main/Main";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import NavMenu from "./NavMenu/NavMenu";

export default function Layout({ children, title = "Home", content }) {
  return (
    <section>
      <Head>
        <title>{`Sport Store - ${title}`}</title>
        <meta
          name="description"
          content={content}
        />
      </Head>
      <Header/>
      <NavMenu />
      <Main>
        {children}
      </Main>
      <Footer />
    </section>
  );
}
