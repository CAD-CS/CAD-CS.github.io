import ContentBox from "@/app/_components/ContentBox";
import ContentHeader from "@/app/_components/ContentHeader";
import ContentParagraph from "@/app/_components/ContentParagraph";
import PageHeader from "@/app/_components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prolog Integrator",
};

export default function PrologIntegrator() {
  return (
    <>
      <PageHeader>Prolog Integrator</PageHeader>
      <ContentBox>
        <ContentHeader>Project Overview</ContentHeader>
        <ContentParagraph>
          Made in pure Prolog, this project was created in an effort to test
          Prolog's symbolic integration capabilities.
        </ContentParagraph>
        <ContentParagraph>
          Given an elementary function, f(x), the program would return the
          function's antiderivative, F(x). In addition, given an integration
          constant, C, and a value F(a), the program would calculate the value
          of C such that F(a) = C.
        </ContentParagraph>
        <ContentHeader>A little about Prolog</ContentHeader>
        <ContentParagraph>
          Prolog is a logic programming language that is particularly
          well-suited for tasks that involve symbolic reasoning and
          manipulation. It is based on formal logic and allows for the
          representation of knowledge in a declarative manner. Prolog programs
          consist of a set of facts and rules that define relationships between
          different entities. The language uses a process called unification to
          match patterns and derive conclusions from the provided information.
        </ContentParagraph>
        <ContentHeader>Implementation</ContentHeader>
        <ContentParagraph>
          The implementation of the integration algorithm was quite a
          straightforward process. It predominantly involved writing the
          integration rules 'as-is'. This is due to the fact that Prolog handles
          symbolic manipulation incredibly well, arguably one of the only
          languages that excels at it. As such, it should be no surprise that
          this section is so short.
        </ContentParagraph>
      </ContentBox>
    </>
  );
}
