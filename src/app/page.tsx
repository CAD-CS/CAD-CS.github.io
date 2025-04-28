import { Metadata } from "next";
import ContentBox from "./_components/ContentBox";
import PageHeader from "./_components/PageHeader";
import ContentHeader from "./_components/ContentHeader";
import ContentParagraph from "./_components/ContentParagraph";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <PageHeader>Home</PageHeader>
      <ContentBox>
        <ContentHeader>Who am I?</ContentHeader>
        <ContentParagraph>
          I am a software developer and IT support analyst passionate about
          solving challenges and delivering value. A quick learner and team
          player, I bring technical expertise and adaptability to any
          environment.
        </ContentParagraph>
        <ContentParagraph>
          My experience spans multiple programming languages, including
          JavaScript, TypeScript, Python, Java, and C++. I am proficient in
          frameworks like React and Next.js for web development, Jest and JUnit
          for testing, and D3 for data visualization. Additionally, I have
          extensive knowledge of SQL (PostgreSQL), database management tools
          like pgAdmin, and DevOps tools such as Docker and GitHub Actions. My
          projects range from building websites and text editors to developing
          data analytics and visualization tools, showcasing my ability to
          master new technologies quickly.
        </ContentParagraph>
        <ContentParagraph>
          As an IT expert, I provide confidential troubleshooting and
          consultations for university faculty, ensuring privacy and effective
          technical communication in addition to having a deep understanding of
          business needs and privacy considerations. I have experience resolving
          software issues efficiently, translating technical concepts for
          non-technical audiences, writing clear documentation, and handling
          sensitive information with discretion. My hands-on experience includes
          industry-standard tools like ServiceNow for ticketing, Confluence for
          documentation, and Microsoft Power Automate.
        </ContentParagraph>
        <ContentParagraph>
          Beyond technical skills, my greatest strengths lie in collaboration,
          client communication, conflict resolution, and mentoring junior hires.
          I thrive in team environments, ensuring successful project outcomes
          and fostering positive workplace relationships.
        </ContentParagraph>
        <ContentHeader>A little about this site</ContentHeader>
        <ContentParagraph>
          This site is a personal project that I built to showcase my skills and
          projects. It is built using Next.js, TypeScript, and Tailwind CSS. The
          source code is available on <a href="https://github.com/CAD-CS/CAD-CS.github.io" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-700 hover:italic">GitHub</a>.
        </ContentParagraph>
      </ContentBox>
    </>
  );
}
