import { Metadata } from "next";
import PageHeader from "../_components/PageHeader";
import ContentBox from "../_components/ContentBox";
import List from "../_components/List";
import ListLink from "../_components/ListLink";

export const metadata: Metadata = {
  title: 'Articles',
};

export default function Articles() {
  return (
    <>
      <PageHeader text="Articles" content="A collection of technical articles I have written" />
      <ContentBox>
        <List>
          <ListLink basePath="articles" targetFolder="alternative-designs" text="Monads, Forks, And Hooks: Alternative Design Patterns In Non-Object Oriented Languages" />
        </List>
      </ContentBox>
    </>
  );
}
