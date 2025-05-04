import ContentBox from "@/app/_components/ContentBox";
import ContentHeader from "@/app/_components/ContentHeader";
import ContentParagraph from "@/app/_components/ContentParagraph";
import PageHeader from "@/app/_components/PageHeader";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Course Insights"
};

export default function CourseInsights() {
  return (
    <>
      <PageHeader>Course Insights</PageHeader>
      <ContentBox>
        <ContentHeader>Technologies used</ContentHeader>
        <ContentParagraph>
        JavaScript, Python, React, Django, D3, Docker
        </ContentParagraph>
        <ContentHeader>Project Overview</ContentHeader>
        <ContentParagraph>
          Course Insights is a data analytics and visualization tool integrated into UBC's Learning Management System, Canvas. It provides instructors with insights into student engagement and performance, helping them make data-driven decisions to improve their courses. The tool uses a combination of JavaScript, Python, and D3.js for data visualization, and is built on top of the Canvas API. Additionally, I also worked on the Equity Insights feature of the project, which uses student demographics data to provide insights into equity and inclusion in the classroom.
        </ContentParagraph>
        <ContentHeader>Reflections</ContentHeader>
        <ContentParagraph>
          This was my first introduction to a large and sophisticated software project. I had to work with a large codebase and learn how to navigate it. I also learned visualize data using D3.js and integrate it with my React components. The project was a great opportunity to learn about data analytics and visualization, and I gained valuable experience in working cross-functionally with a team of developers.
        </ContentParagraph>
        <ContentHeader>Gallery</ContentHeader>
        <Image src="/images/BarChart.png" alt="Bar Chart" width={1000} height={1000}/>
        <Image src="/images/BoxPlot.png" alt="Box Plot" width={1000} height={1000}/>
      </ContentBox>
    </>
  );
}
