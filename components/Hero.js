import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useStatus } from "../context/statusContext";

import {
  getMaxMintAmount,
  getTotalSupply,
  getNftPrice,
  mintNFT,
  getSaleState,
} from "../utils/interact";

const Hero = () => {
  const { status, setStatus } = useStatus();

  const [count, setCount] = useState(1);
  const [maxMintAmount, setMaxMintAmount] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [nftPrice, setNftPrice] = useState("0.01");
  const [isSaleActive, setIsSaleActive] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      setMaxMintAmount(await getMaxMintAmount());
      setNftPrice(await getNftPrice());
      setIsSaleActive(await getSaleState());
      await updateTotalSupply();
    };

    prepare();
  });

  const updateTotalSupply = async () => {
    const mintedCount = await getTotalSupply();
    setTotalSupply(mintedCount);
  };

  const incrementCount = () => {
    if (count < maxMintAmount) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const mintNewWorld = async () => {
    const { status } = await mintNFT(count);
    setStatus(status);

    // We minted a new New World, so we need to update the total supply
    updateTotalSupply();
  };

  return (
    <div className='bg-navy-bluerr bg-cover max-h-full py-28 w-full flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1920px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-10 py-8'>
            <h1 className="pl-0 lg:pl-10 text-5xl text-white font-Aldrich">WELCOME TO <br/>REALITY OF DELUSIONS</h1><br/><br/>
            <div>
                <p className="pl-0 lg:pl-10 leading-loose text-white font-Aldrich">
                    A collection of unique, cool and diverse Delusions, ready to leave a mark in the NFT space! <br/><br/>


                    8,888 randomly generated digital collectibles of various rarity living on the Ethereum<br/> blockchain as ERC-721 tokens and hosted on IPFS<br/><br/><br/>


                    ROD NFT, we are here to build a strong and supportive community for you. In the principle of <b>ROD NFT</b>, we aim to support other NFT artists and projects,
                    to buy their NFTs for you and send them to you as a gift. In this way, we both support the project and send you a gift.

                </p>
            </div>
            <br/><br/><br/>
            <div>
                <p><h2 className="text-4xl px-24 text-white font-Aldrich pl-0 lg:pl-10">COMING SOON!</h2></p>
            </div>
            </div>

            <div className='flex flex-col justify-center md:items-start w-full px-10 py-8'>
            <div className="container max-w-6xl mx-auto flex flex-col items-center pt-4">
        <div className="flex flex-col items-center">
          <Image
            src="/images/foto.gif"
            width="300"
            height="300"
            alt="emoji faces gif"
            className="rounded-md"
          />

          {isSaleActive ? (
            <>
              {/* Minted NFT Ratio */}
              <p className="bg-gray-100 rounded-md text-gray-800 font-extrabold text-lg my-4 py-1 px-3">
                <span className="text-purple-600">{`${totalSupply}`}</span> /
                50
              </p>

              <div className="flex items-center mt-6 text-3xl font-bold text-gray-200">
              <button
                  className="flex items-center justify-center w-12 h-12 bg-white rounded-md hover:bg-pink-200 text-center"
                  onClick={decrementCount}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-pink-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12H4"
                    />
                  </svg>
                </button>

                <h2 className="mx-8">{count}</h2>
                <button
                  className="flex items-center justify-center w-12 h-12 bg-white rounded-md text-black hover:bg-pink-200 text-center"
                  onClick={incrementCount}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-pink-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>

              <h4 className="mt-2 font-semibold text-center text-white">
                {nftPrice} ETH{" "}
                <span className="text-sm text-gray-300"> + GAS</span>
              </h4>

              {/* Mint Button */}
              <button
                className="mt-6 py-2 px-4 text-center text-white uppercase bg-yellow-500 border-b-4 border-orange-500 rounded hover:bg-orange-400 hover:border-yellow-500"
                onClick={mintNewWorld}
              >
                Mint
              </button>
            </>
          ) : (
            <p className="text-white text-2xl mt-8">
              {" "}
              COMING SOON!
            </p>
          )}

          {/* Status */}

          {status && (
            <div className="flex items-center justify-center px-4 py-4 mt-8 font-semibold text-white bg-red-400 rounded-md">
              {status}
            </div>
          )}
        </div>
      </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;
