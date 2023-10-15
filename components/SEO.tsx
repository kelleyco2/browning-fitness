import Head from "next/head";

type SEOProps = {
  title: string;
  description: string;
  asPath: string;
};

const SEO = ({ title, description, asPath }: SEOProps) => {
  const canonicalUrl = `https://browningfitness.com${asPath}`;
  return (
    <Head>
      <title>{title}</title>

      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="image" content="/logo.jpeg" />

      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/logo.jpeg" />

      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};

export default SEO;
