import Link from "next/link";
import React from "react";

export default function SearchItem({ item }) {
  return (
    <div className="DataItem">
      <Link className="nameVersion" href={`/${item?.slug}`}>
        <h3 className="ItemName">{item?.name}</h3>
        <h3 className="ItemVersion">{item?.wordVersion}</h3>
      </Link>
      <Link className="SearchItemDetay">
        <span className="ItemDesc" href={`/${item?.slug}`}> {item?.description?.slice(0, 50)} </span>
        ...
        <p className="showMore" rel="noreferrer" href={`/${item?.slug}`}>
          more
        </p>
      </Link>
    </div>
  );
}
