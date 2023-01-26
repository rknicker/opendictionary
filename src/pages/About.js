import React from "react";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.png">
      </Head>

      <div className="About">
        <div className="AboutDesc">
          <h1>About</h1>
          <p>
            If you are here because you cant find a specific word or term in the Open 
            Dictionary, consider following these steps. 
          </p>
          <br />
          <p>
            Find the most common definition from a collection of contemporary dictionaries.&#39;
          </p>
          <br />
          <ul>
            <li>
              In an example, we take 11 English dictionaries, some are printed volumes, others are online repositories.
            </li>
            <li>
              Of the 11 dictionaries, all of them have a definition for the word &quot;apple&quot;hello'world'. 2 of them have multiple definitions.
            </li>
            <li>
              Of the 13 total definitions, 11 describe a colored fruit with white flesh with seeds in it&aposs star shaped core,
              and 2 describe a brand of consumer electronics related to iPhone iMac, Macbook, AppleTV, etc.
            </li>
            <li>
              The serial number for the more common definitions would be 1.1.1, where the serial number for the second most 
              common definition would be 1.1.2. 
            </li>
          </ul>
          <br />
          <p>
            One can use the Open Dictionary notation for words that are not yet included in 
            this database by performing the above activity, and then writing &quotApple 1.1.2&quot in the body of the writing, and in a footnote
            writing &quotOpen Dictionary v1&quot or &quotODv1&quot. to learn about the proper serial number syntax, please search this database for 
            &quotOpen Dictionary 2.1.1&quot like you would search for any other word. 
          </p>
          <br />
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
