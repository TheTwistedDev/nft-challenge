import Link from "next/link"


function demo() {
  return (
    <div className="flex h-screen justify-center bg-slate-800">
        <div className="flex flex-col w-5/6 m-4 rounded-sm items-center bg-slate-500 p-10 shadow-xl shadow-violet-400/20">
            <div className="flex flex-col items-center text-lg font-semibold text-slate-400 mt-40">
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
                    3. Go to <a className='underline pr-2 text-blue-300' href="https://faucets.chain.link/rinkeby"> https://faucets.chain.link/rinkeby </a> I use Ethereum Rinkeby so just go with that
                </p>
                <p className="m-2">
                    4. You can now use your test ethereum to mint the test nft's on the site
                </p>
            </div>   
            <Link href={'/'}>
                <h1 className="m-4 text-blue-400 text-lg font-semibold cursor-pointer"> Go Back to Landing Page </h1>
            </Link>
        </div>
    </div>
    
    
  )
}

export default demo