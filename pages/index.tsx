import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { sanityClient, urlFor } from '../sanity'
import { Collection } from '../typings'

interface Props {
  collections: Collection[]
}

const Home = ({ collections }: Props) => {
  return (
    <div className="flex flex-col min-h-screen py-20 px-10 2xl:px-0 bg-slate-800">
      <Head>
        <title>NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="ml-4 mb-10 text-4xl font-extralight text-amber-700">
          The {' '} 
          <span className="font-extrabold underline decoration-violet-600/50">
              SocialMeaps
          </span> {' '}
          NFT Market Place
      </h1>

      <div className="max-w-7xl m-4 p-2 border-solid rounded-md bg-slate-500">
        <Link href="/demo">
          <h1 className=" text-blue-300 cursor-pointer "> Demo Instructions </h1>
        </Link>
      </div>
      

      <main className=" max-w-7xl bg-slate-500 m-4 p-10 rounded-sm shadow-xl shadow-violet-400/20">
        <div className="grid space-x-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
          {collections.map((collection) => (
            <Link href={`/nft/${collection.slug.current}`}>
            <div className="flex flex-col items-center cursor-pointer transition-all duration-200 hover:scale-105">
              <img className="h-96 w-60 rounded-2xl object-cover" src={urlFor(collection.mainImage).url()} alt="" />
              <div className="p-5">
                <h2 className="text-3xl">{collection.title}</h2>
                <p className="mt-2 text-sm text-gray-400">{collection.description}</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </main>

    </div>
  )
}

export default Home

export const getServerSideProps:GetServerSideProps = async () => {
  const query = `*[_type == "collection"]{
    _id,
    title,
    address,
    description,
    nftCollectionName,
    mainImage {
       asset
    },
    previewImage {
         asset
    },
    slug {
        current
    },
    creator-> {
       _id,
       name,
       address,
       slug {
           current
       },
    },
  }`

  const collections = await sanityClient.fetch(query)
  
  return {
    props: {
      collections
    }
  }
}
