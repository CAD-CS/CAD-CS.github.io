import ContentBox from "@/app/_components/ContentBox";
import ContentHeader from "@/app/_components/ContentHeader";
import ContentParagraph from "@/app/_components/ContentParagraph";
import PageHeader from "@/app/_components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PC Builder",
};

export default function PCBuilder() {
  return (
    <>
      <PageHeader>PC Builder</PageHeader>
      <ContentBox>
        <ContentHeader>Project Overview</ContentHeader>
        <ContentParagraph>
          Developed by a team of three, this project is a web app to store
          information on different PC builds, and provide a platform for
          reviewing and testing them. There are multiple components, and each
          component can be in different builds. Users can post reviews of
          different builds, and benchmark tests can also be shared. This will
          allow users to gather enough information to be well informed when
          making their PC’s.
        </ContentParagraph>
        <ContentParagraph>
          For our database management system, we used PostgreSQL while we used
          NodeJS and Express.js for our backend and React for our frontend.
        </ContentParagraph>
        <ContentHeader>Reflections</ContentHeader>
        <ContentParagraph>
          This project was a great opportunity to learn about databases and
          database management tools such as PostgreSQL and pgAdmin. I
          particularly enjoyed playing around with the psql (SQL shell) command
          line tool. Additionally, learning about functional dependencies and
          how to properly normalize a database was a great experience.
        </ContentParagraph>
      </ContentBox>
    </>
  );
}
