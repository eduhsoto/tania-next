import Head from "next/head"

export default function SeoMeta({title, description, keywords} : SeoProps) : JSX.Element {
    return(
        <Head>
        <title>
            {title}
        </title>
        <meta
          name="description"
          content={description}
        />
        <meta
          name="keywords"
          content={keywords}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Head>
    )
}

interface SeoProps  {
    title: string 
    description: string 
    keywords: string
}