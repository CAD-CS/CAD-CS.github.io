import { Metadata } from "next";
import ListLink from "../_components/ListLink";
import PageHeader from "../_components/PageHeader";
import ContentBox from "../_components/ContentBox";
import List from "../_components/List";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <>
      <PageHeader>Projects</PageHeader>
      <ContentBox>
        <List>
          <ListLink
            basePath="projects"
            targetFolder="course-insights"
            text="Course Insights: A Course Data Visualization And Analysis Tool | JavaScript, Python, React, NodeJS, Django, D3, Docker"
          />
          <ListLink
            basePath="projects"
            targetFolder="pc-builder"
            text="PC Builder: A PC Building Application | JavaScript, PostgreSQL, React, NodeJS, Express.js"
          />
          <ListLink
            basePath="projects"
            targetFolder="ubc-query"
            text="UBC Query: A Querying Application for UBC Data | TypeScript, NodeJS, Express.js, Mocha, Chai"
          />
          <ListLink
            basePath="projects"
            targetFolder="notepad"
            text="NotePad: A Simple Note Taking Application | Java, Java Swing, JUnit"
          />
          <ListLink
            basePath="projects"
            targetFolder="lexicon-functionalis"
            text="Lexicon Functionalis: An Online Dictionary Client With A Spell Checker | Haskell"
          />
          <ListLink
            basePath="projects"
            targetFolder="prolog-integrator"
            text="Prolog Integrator: A Symbolic Integration Application | Prolog"
          />
        </List>
      </ContentBox>
    </>
  );
}
