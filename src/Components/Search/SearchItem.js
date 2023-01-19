import Link from "next/link";
import React from "react";

export default function SearchItem({ item }) {
  return (
    <Link href={`/${item?.slug}`} className="DataItem">
      <div className="nameVersion">
        <h3 className="ItemName">{item?.name}</h3>
        /* <p className="ItemVersion">{item?.wordVersion}</p> */ 
        <h3 className="ItemVersion">{item?.wordVersion}</h3>
      </div>
      <div className="SearchItemDetay">
        <span className="ItemDesc">{item?.description?.slice(0, 50)} </span>
        ...
        <p className="showMore" rel="noreferrer" href={`/${item?.slug}`}>
          /*{" "}*/
          more
        </p>
      </div>
    </Link>
  );
}
