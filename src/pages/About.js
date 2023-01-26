import React from "react";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <div className="About">
        <div className="AboutDesc">
          <h1>About</h1>
          <p>
            The Open Dictionary assigns a serial number for each meaning 
            that a word or phrase needs to be used for. Some words have 
            multiple definitions in a dictionary, and context sensing is 
            required of the reader to interpret and guess which meaning 
            was intended by the writer. In many cases, the reader may wish 
            to misinturpret. In these cases the reader can plausibly claim 
            they never intended to be responsible for comprehending some 
            set of words. 
          </p>
          <br />
          <p>
            To solve this problem, the likes of David Wynn Miller and 
            Russel Jay Gould have created a dictionary with one word one meaning.
            They created a grammar manual to bring the language of contracts into 
            a world where the language conveys meaning in a clear fasion. As with  
            computer programming languages, the meaning of the written code is 
            deterministic such that the same code always produces the same program. 
          </p>
          <br />
          <p>
            Using serial numbers to remove ambiguity and assigning one meaning to each
            word-or-phrase-with-a-serial-number allows us to decode and encode our 
            communications.
          </p>
        </div>
      </div>
    </>
  );
}
