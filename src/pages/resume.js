import Head from "next/head";

export default function ResumePage() {
  return (
    <>
      <Head>
        <title>My Resume</title>
        <link
          rel="shortcut icon"
          href="/icons8-t-64.png?v=2"
          type="image/png"
        />
      </Head>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <iframe
          src="/resume.pdf"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </main>
    </>
  );
}
