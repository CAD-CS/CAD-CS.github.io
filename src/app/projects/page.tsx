import { Metadata } from "next";
import ListLink from "../_components/ListLink";
import PageHeader from "../_components/PageHeader";
import ContentBox from "../_components/ContentBox";
import List from "../_components/List";
import ContentParagraph from "../_components/ContentParagraph";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <>
      <PageHeader>Projects</PageHeader>
      <ContentBox>
        <ContentParagraph>
          You can find the code for these projects on my{" "}
          <a
            href="https://github.com/CAD-CS"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-red-600 hover:italic"
          >
            GitHub
          </a>
          .
        </ContentParagraph>
        <List>
          <ListLink
            basePath="projects"
            targetFolder="course-insights"
            primaryText="Course Insights: A Course Data Visualization And Analysis Tool"
            secondaryText="JavaScript, Python, React, NodeJS, Django, D3, Docker"
          />
          <ListLink
            basePath="projects"
            targetFolder="pc-builder"
            primaryText="PC Builder: A PC Building Application"
            secondaryText="JavaScript, PostgreSQL, React, NodeJS, Express.js"
          />
          <ListLink
            basePath="projects"
            targetFolder="ubc-query"
            primaryText="UBC Query: A Querying Application for UBC Data"
            secondaryText="TypeScript, NodeJS, Express.js, Mocha, Chai"
          />
          <ListLink
            basePath="projects"
            targetFolder="notepad"
            primaryText="NotePad: A Simple Note Taking Application"
            secondaryText="Java, Java Swing, JUnit"
          />
          <ListLink
            basePath="projects"
            targetFolder="lexicon-functionalis"
            primaryText="Lexicon Functionalis: An Online Dictionary Client With A Spell Checker"
            secondaryText="Haskell"
          />
          <ListLink
            basePath="projects"
            targetFolder="prolog-integrator"
            primaryText="Prolog Integrator: A Symbolic Integration Application"
            secondaryText="Prolog"
          />
        </List>
      </ContentBox>
    </>
  );
}
