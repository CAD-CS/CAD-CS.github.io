import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Monadic Dyadic',
};

export default function MonadicDyadic() {
  return (
    <article>
      <h1>Monadic and Dyadic Functions: Breaking Free form the Mold</h1>
      <hr></hr>
      <p>Developers have grown accustomed to the standard f(x) notation for functions due to their early math education and the prevalence of C-like syntax. This intuitive and simple notation is almost universal, used in physics, mathematics, computer science, and other STEM fields. Variations exist, such as Haskell&#39;s f x or the LISP language family&#39;s (f x), but the core idea remains the same: the function f takes input(s) x, and the result is consistent regardless of where the name is located relative to its arguments. However, it doesn&#39;t have to be this way. This article explores the idea of monadic and dyadic functions in the APL language family and how they break free from the traditional mold. Monadic functions operate similarly to &quot;regular&quot; functions. In the J programming language, a monadic function is written as f x, with the argument always on the right side. While this might seem obvious, it plays a crucial role when discussing dyadic functions. Dyadic functions in J look like y f x, taking at most two arguments, one on the left and one on the right. This might seem restrictive, but APL and J are designed to work with arrays. Therefore, if more than two arguments are needed, one parameter can be treated as an argument vector/list. One fascinating consequence of this monadic and dyadic split is that a single function, f, can perform two different operations depending on whether it is used monadically (f x) or dyadically (y f x). For example, in the J language, the primitive % used monadically (% x) yields the reciprocal of the number (1/x). When used dyadically (y % x), it performs simple division (y/x). This dynamic allows developers to define a single function that performs two related operations, reducing the number of user-defined functions. Though not widely used, monadic and dyadic functions offer a glimpse into a unique paradigm that deserves exploration. They provide elegant solutions that challenge longstanding norms and unveil new perspectives.</p>
    </article>
  );
}
