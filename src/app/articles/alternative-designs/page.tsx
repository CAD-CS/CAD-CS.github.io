import ContentBox from "@/app/_components/ContentBox";
import ContentHeader from "@/app/_components/ContentHeader";
import ContentParagraph from "@/app/_components/ContentParagraph";
import PageHeader from "@/app/_components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alternative Designs",
};

export default function AlternativeDesigns() {
  return (
    <article>
      <PageHeader>
        Monads, Forks, And Hooks: Alternative Design Patterns In Non-Object
        Oriented Languages
      </PageHeader>
      <ContentBox>
        <ContentHeader>Introduction</ContentHeader>
        <ContentParagraph>
          Over the decades, a wide variety of design patterns have emerged,
          ranging from the Composite pattern to the Singleton pattern. These
          patterns can broadly be categorized into three groups: structural,
          behavioral, and creational. Each category is directly or indirectly
          related to object-oriented principles, and the patterns themselves
          rely on the object-oriented programming (OOP) tools provided by
          programming languages for their implementation.
        </ContentParagraph>
        <ContentParagraph>
          For example, the Composite pattern (structural) is a textbook
          demonstration of polymorphism, while both the Observer pattern
          (behavioral) and the Abstract Factory pattern (creational) use objects
          and classes as their building blocks. Design patterns significantly
          streamline and standardize software development, freeing up crucial
          time for developers to focus on designing and developing novel
          software components. In other words, developers don’t need to reinvent
          the wheel every time they start a new project.
        </ContentParagraph>
        <ContentParagraph>
          However, design patterns are not exclusive to OOP. They tend to emerge
          when developers encounter similar classes of problems. This article
          explores three non-OOP design patterns: one from functional
          programming and two from the array programming language family.
        </ContentParagraph>
        <ContentHeader>
          The Monad Pattern in Functional Programming
        </ContentHeader>
        <ContentParagraph>
          The Monad is a functional programming equivalent of a design pattern.
          Its basic idea is to allow developers to chain operations. Each
          operation is linked using a bind operator, which feeds the output of
          one operation into the input of another. Along the way, the bind
          operator performs additional actions to modify the output before
          passing it to the next operation. In essence, monads formalize
          function composition.
        </ContentParagraph>
        <ContentParagraph>
          Each monad has a unique bind operator tailored to its specific needs.
          Examples include the failure monad and the list monad. The failure
          monad is used when an operation in a sequence may fail. If failure
          occurs, the bind operator terminates early without continuing. The
          list monad, on the other hand, is useful when an operation returns
          multiple results, requiring each result to be fed into the next
          operation. For instance, given a single number n, an operation might
          generate a list of n numbers, which would then need to be normalized
        </ContentParagraph>
        <ContentHeader>
          Hook and Fork Patterns in Array Programming
        </ContentHeader>
        <ContentParagraph>
          The Hook and Fork patterns are found in the array programming language
          family, particularly in APL and its descendants. These patterns
          represent specialized forms of function composition, supported by the
          compiler, making them language-specific design patterns rather than
          the more abstract patterns discussed earlier.
        </ContentParagraph>
        <ContentParagraph>
          Using array programming notation, a hook is written as (u v) y, which
          translates to u(y, v(y)) in more traditional notation. In simpler
          terms, function v is applied to argument y, and the result is then
          used as an input for function u alongside the original value. For
          example, the expression n × (n + 1) can be conveniently represented as
          a single expression using built-in operators in APL and J, eliminating
          the need for a user-defined function
        </ContentParagraph>
        <ContentParagraph>
          A fork follows a similar structure: (f g h) y, which equates to
          g(f(y), h(y)). This pattern is particularly useful for computing the
          mean of a list, as it allows simultaneous application of functions to
          different aspects of the input data.
        </ContentParagraph>
        <ContentHeader>Conclusion</ContentHeader>
        <ContentParagraph>
          Design patterns emerge wherever there is a thriving ecosystem of
          developers collaborating and publishing their work. As seen with the
          diverse patterns in OOP, functional programming, and array
          programming, each paradigm fosters unique problem-solving approaches.
        </ContentParagraph>
      </ContentBox>
    </article>
  );
}
