import { Metadata } from "next";
import ContentBox from "./_components/ContentBox";
import PageHeader from "./_components/PageHeader";

export const metadata: Metadata = {
  title: 'Home'
};

export default function Home() {
  return (
    <>
      <PageHeader text="Home" content="A little about myself" />
      <ContentBox>
        <h1 className="text-3xl font-bold underline mb-6">Who am I?</h1>
        <p className="text-lg leading-relaxed mb-4">
          I am a software developer and IT support analyst passionate about solving challenges and delivering value. A quick learner and team player, I bring technical expertise and adaptability to any environment.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          My experience spans multiple programming languages, including JavaScript, TypeScript, Python, Java, and C++. I am proficient in frameworks like React and Next.js for web development, Jest and JUnit for testing, and D3 for data visualization. Additionally, I have extensive knowledge of SQL (PostgreSQL), database management tools like pgAdmin, and DevOps tools such as Docker and GitHub Actions. My projects range from building websites and text editors to developing data analytics and visualization tools, showcasing my ability to master new technologies quickly.
        </p> 
        <p className="text-lg leading-relaxed mb-4">
          In IT support, I provide confidential troubleshooting and consultations for university faculty, ensuring privacy and effective technical communication. I have a deep understanding of business needs and privacy considerations, enabling me to resolve software issues efficiently, translate technical concepts for non-technical audiences, write clear documentation, and handle sensitive information with discretion. My hands-on experience includes industry-standard tools like ServiceNow for ticketing, Confluence for documentation, and Microsoft Power Automate.
        </p>
        <p className="text-lg leading-relaxed">
          Beyond technical skills, my greatest strengths lie in collaboration, client communication, conflict resolution, and mentoring junior hires. I thrive in team environments, ensuring successful project outcomes and fostering positive workplace relationships.
        </p>
      </ContentBox>
    </>
  );
}
