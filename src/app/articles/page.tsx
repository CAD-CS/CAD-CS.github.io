import { Metadata } from "next";
import PageHeader from "../_components/PageHeader";
import ContentBox from "../_components/ContentBox";
import List from "../_components/List";
import ListLink from "../_components/ListLink";

export const metadata: Metadata = {
  title: "Articles",
};

export default function Articles() {
  return (
    <>
      <PageHeader>Articles</PageHeader>
      <ContentBox>
        <List>
          <ListLink
            basePath="articles"
            targetFolder="alternative-designs"
            primaryText="Monads, Forks, And Hooks"
            secondaryText="Alternative Design Patterns In Non-Object Oriented Languages"
          />
          <ListLink
            basePath="articles"
            targetFolder="monadic-dyadic"
            primaryText="Monadic and Dyadic Functions"
            secondaryText="Breaking Free from the Mold"
          />
        </List>
      </ContentBox>
    </>
  );
}
