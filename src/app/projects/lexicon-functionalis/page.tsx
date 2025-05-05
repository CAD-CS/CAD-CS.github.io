import ContentBox from "@/app/_components/ContentBox";
import ContentHeader from "@/app/_components/ContentHeader";
import ContentParagraph from "@/app/_components/ContentParagraph";
import PageHeader from "@/app/_components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lexicon Functionalis",
};

export default function LexiconFunctionalis() {
  return (
    <>
      <PageHeader>Lexicon Functionalis</PageHeader>
      <ContentBox>
        <ContentHeader>Project Overview</ContentHeader>
        <ContentParagraph>
          This project was a Haskell program that allows users to query the
          definition of a word in a dictionary (
          <a
            href="https://dict.org/bin/Dict"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-purple-700 hover:italic"
          >
            dict.org
          </a>
          ). The program uses a colourful command line interface that allows
          users to cycle through different definitions of a word based on the
          dictionary they would like to query.
        </ContentParagraph>
        <ContentHeader>Norvig's Spelling Corrector Algorithm</ContentHeader>
        <ContentParagraph>
          One unique aspect of the program is that it comes with a spelling
          corrector. For example, if you type 'aple', it will give you the
          option to search for 'apple' instead. This is a Haskell-based
          implementation of Norvig's algorithm which can be found{" "}
          <a
            href="https://norvig.com/spell-correct.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-purple-700 hover:italic"
          >
            here
          </a>
          .
        </ContentParagraph>
        <ContentHeader>Reflections</ContentHeader>
        <ContentParagraph>
          This project was my first introduction to Haskell and functional
          programming. I was amazed at how much I could do with so little code.
          The project was a great introduction to the Haskell ecosystem and the
          libraries available for it. I also learned a lot about how to use the
          command line interface in a more user-friendly way.
        </ContentParagraph>
      </ContentBox>
    </>
  );
}
