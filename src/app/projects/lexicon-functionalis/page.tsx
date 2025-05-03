import ContentBox from "@/app/_components/ContentBox";
import ContentHeader from "@/app/_components/ContentHeader";
import ContentParagraph from "@/app/_components/ContentParagraph";
import PageHeader from "@/app/_components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lexicon Functionalis"
};

export default function LexiconFunctionalis() {
  return (
    <>
      <PageHeader>Lexicon Functionalis</PageHeader>
      <ContentBox>
        <ContentHeader>Technologies used</ContentHeader>
        <ContentParagraph>
        Haskell
        </ContentParagraph>
        <ContentHeader>Project Overview</ContentHeader>
        <ContentParagraph>
          This project was a Haskell program that allows users to query the definition of a word in a dictionary (dict.org). The program uses a colourful command line interface that allows user to cycle through different definitions of a word based on the dictionary they would like to query. 
        </ContentParagraph>
        <ContentHeader>Reflections</ContentHeader>
        <ContentParagraph>
          This project was my first introduction to Haskell and functional programming. I was amazed at how much I could do with so little code. The project was a great introduction to the Haskell ecosystem and the libraries available for it. I also learned a lot about how to use the command line interface in a more user-friendly way.
        </ContentParagraph>
      </ContentBox>
    </>
  );
}
