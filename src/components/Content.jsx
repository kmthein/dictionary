import React, { useContext } from "react";
import { IoPlay } from "react-icons/io5";
import { SearchContext } from "../contexts/SearchContext";
import { IoSearch } from "react-icons/io5";
import { MagnifyingGlass } from "react-loader-spinner";
import { UiContext } from "../contexts/UiContext";

const Content = () => {
  const { currentContent } = useContext(SearchContext);

  const { loading } = useContext(UiContext);

  console.log(currentContent);
  return (
    <>
      {loading && (
        <div className="flex items-center justify-center mt-[10%]">
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#fff"
            color="#5a5a5a"
          />
        </div>
      )}
      {!loading && !currentContent && (
        <div className="flex items-center justify-center mt-[10%]">
          <div className=" text-gray-400">
            <IoSearch className="text-5xl mb-3 mx-auto" />
            <p className="text-center font-medium text-xl">
              Welcome To My Dictionary
            </p>
          </div>
        </div>
      )}
      {currentContent && (
        <div className="pt-4">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold">{currentContent[0].word}</h1>
            <div className=" bg-[#add0fc] py-4 px-4 rounded-full">
              <IoPlay className="text-xl text-[#3a6ead]" />
            </div>
          </div>
          <span className="text-[#3a6ead] text-xl">
            {currentContent[0].phonetic}
          </span>
          {currentContent.map((content, i) => (
            <div key={i}>
              <p className="my-2 pt-6 font-bold">
                {content.meanings[0].partOfSpeech}
              </p>
              <p className="my-4 text-lg text-black/60 dark:text-white/60">
                Meaning
              </p>
              <ul className=" ml-6">
                {content.meanings[0].definitions.map((meaning, i) => (
                  <div key={i}>
                    <li className=" list-disc my-2">{meaning.definition}</li>
                    <li className=" my-2 text-black/60 dark:text-white/60">
                      {meaning.example && `"${meaning.example}"`}
                    </li>
                  </div>
                ))}
              </ul>
              {content.meanings[0].synonyms && (
                <div className="pb-5">
                  <p className="my-4 pt-5 text-lg text-black/60 dark:text-white/60">
                    Synonyms
                  </p>
                  {content.meanings[0].synonyms.map((s, i) => (
                    <span>
                      {s}
                      {i != s.length - 1 && ", "}
                    </span>
                  ))}
                </div>
              )}
              <hr />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Content;
