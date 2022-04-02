import Link from "next/link"


function demo() {
  return (
    <div className="flex h-screen justify-center">
        <div className="flex flex-col w-5/6 m-4 items-center bg-slate-100 p-10 shadow-xl shadow-rose-400/20">
            <div className="flex flex-col items-center text-slate-400">
               <h1 className="m-2">
               Demo Instructions 
               </h1>
                <p className="m-2">
                    1. Install the Metamask browser extension 
                </p>
                <p className="m-2">
                    2. Create a wallet account
                </p>
                <p className="m-2">
                    3. Go to https://faucets.chain.link/rinkeby I use Ethereum Rinkeby so just go with that
                </p>
                <p className="m-2">
                    4. You can now use your fake ethereum to mint the fake nft's on the site
                </p>
            </div>   
            <Link href={'/'}>
                <h1 className="m-4 text-blue-400 cursor-pointer"> Go Back to Landing Page </h1>
            </Link>
        </div>
    </div>
    
    
  )
}

export default demo