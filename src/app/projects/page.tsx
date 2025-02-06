import { Metadata } from "next";
import ListLink from "../_components/ListLink";

export const metadata: Metadata = {
  title: 'Projects',
};

export default function Projects() {
  return (
    <ul>
      <ListLink basePath="projects" targetFolder="ubc-query" text="UBC Query" />
    </ul> 
  );
}