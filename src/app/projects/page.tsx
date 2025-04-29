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
            targetFolder="ubc-query"
            text="UBC Query"
          />
        </List>
      </ContentBox>
    </>
  );
}
