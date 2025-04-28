import ContentBox from "@/app/_components/ContentBox";
import ContentHeader from "@/app/_components/ContentHeader";
import ContentParagraph from "@/app/_components/ContentParagraph";
import PageHeader from "@/app/_components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monadic Dyadic",
};

export default function MonadicDyadic() {
  return (
    <article>
      <PageHeader>
        Monadic and Dyadic Functions: Breaking Free from the Mold
      </PageHeader>
      <ContentBox>
        <ContentHeader>The Standard Function Notation</ContentHeader>
        <ContentParagraph>
          Developers have long relied on the familiar f(x) notation for
          functions, a convention rooted in early mathematical education and
          reinforced by the prevalence of C-like syntax. This notation is nearly
          universal, appearing across physics, mathematics, computer science,
          and other STEM fields. Although variations exist, such as Haskell’s f
          x or the LISP family’s (f x), the core principle remains unchanged.
          The function f takes input(s) x, and the result is consistent
          regardless of the placement of the function name relative to its
          arguments.
        </ContentParagraph>
        <ContentHeader>Breaking Away from Tradition</ContentHeader>
        <ContentParagraph>
          Despite its widespread use, the conventional function notation is not
          the only approach. The APL language family introduces monadic and
          dyadic functions, offering an alternative perspective that diverges
          from traditional function application.
        </ContentParagraph>
        <ContentHeader>Monadic Functions: A Familiar Concept</ContentHeader>
        <ContentParagraph>
          Monadic functions operate similarly to standard functions but with a
          slight variation in notation. In the J programming language, a monadic
          function is expressed as f x, with the argument always positioned on
          the right. While this may seem trivial, it plays a crucial role in
          distinguishing monadic from dyadic functions.
        </ContentParagraph>
        <ContentHeader>
          Dyadic Functions: Expanding the Possibilities
        </ContentHeader>
        <ContentParagraph>
          Dyadic functions in J take two arguments, appearing in the form y f x,
          where y is on the left and x is on the right. Although this structure
          may seem limiting, APL and J are specifically designed for array
          processing. When more than two arguments are required, one of the
          parameters can be treated as a vector or list, allowing for
          flexibility
        </ContentParagraph>
        <ContentHeader>A Unique Consequence: Dual Functionality</ContentHeader>
        <ContentParagraph>
          One of the most fascinating aspects of this monadic-dyadic distinction
          is that a single function f can perform two different operations
          depending on whether it is used monadically (f x) or dyadically (y f
          x).
        </ContentParagraph>
        <ContentParagraph>
          For example, in J, the primitive % exhibits distinct behaviors based
          on its usage: % x (monadic) returns the reciprocal of x (1/x) and y %
          x (dyadic) performs simple division (y/x). This dynamic feature allows
          developers to define fewer functions while maintaining expressive and
          efficient code
        </ContentParagraph>
        <ContentHeader>A Paradigm Worth Exploring</ContentHeader>
        <ContentParagraph>
          Although monadic and dyadic functions are not widely adopted outside
          of specialized languages, they offer intriguing possibilities that
          challenge conventional programming paradigms. By introducing an
          alternative approach to function application, they provide elegant
          solutions and fresh perspectives that merit further exploration.
        </ContentParagraph>
      </ContentBox>
    </article>
  );
}
