import React, { useEffect, useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/schwifty.ttf",
  display: "swap",
});
const imgStyle = {
  borderRadius: "10px",
};
export default function Character({ character }) {
  return (
    <div className="flex flex-col mx-auto  gap-1">
      {character?.name && (
        <>
          <Image
            style={imgStyle}
            src={character?.image}
            width={200}
            height={200}
            placeholder="empty"
            alt={character?.name}
          />
          <h5 className={`text-[#43b4cb] mt-1 ${myFont.className}`}>
            {character?.name}
          </h5>
          <div>
            <p>
              <b>Specie</b>: {character?.species}
            </p>
            <p>
              <b>Status</b>: {character?.status}
            </p>
            <p>
              <b>Origin</b>: {character?.origin?.name}
            </p>
          </div>
        </>
      )}
      {!character?.name && (
        <span className="loading loading-spinner loading-lg"></span>
      )}
    </div>
  );
}
