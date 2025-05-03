import ContentBox from "@/app/_components/ContentBox";
import ContentHeader from "@/app/_components/ContentHeader";
import ContentParagraph from "@/app/_components/ContentParagraph";
import PageHeader from "@/app/_components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NotePad",
};

export default function NotePad() {
  return (
    <>
      <PageHeader>PC Builder</PageHeader>
      <ContentBox>
        <ContentHeader>Technologies used</ContentHeader>
        <ContentParagraph>
        Java Swing for the frontend and JUnit for testing. Project completely written in Java.
        </ContentParagraph>
        <ContentHeader>Project Overview</ContentHeader>
        <ContentParagraph>
          This project is a simple note-taking application that allows users to create, edit, and delete notes. The application is built using Java Swing for the frontend and JUnit for testing. The project is completely written in Java.
        </ContentParagraph>
        <ContentHeader>Reflections</ContentHeader>
        <ContentParagraph>
          This project was my first major software project and my first experience with designing a GUI with code. Additionally, the project was my first taste of using JUnit for testing. I learned a lot about Java Swing and how to create a user-friendly interface. I also learned about the importance of testing and how to write effective unit tests. Overall, this project was a great learning experience and helped me to improve my programming skills.
        </ContentParagraph>
      </ContentBox>
    </>
  );
}
