import ContentBox from "@/app/_components/ContentBox";
import ContentHeader from "@/app/_components/ContentHeader";
import ContentParagraph from "@/app/_components/ContentParagraph";
import PageHeader from "@/app/_components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UBC Query",
};

export default function UBCQuery() {
  return (
    <>
      <PageHeader>UBC Query</PageHeader>
      <ContentBox>
        <ContentHeader>Technologies used</ContentHeader>
        <ContentParagraph>
          TypeScript, Mocha, Chai, Node.js, Express.js
        </ContentParagraph>
        <ContentHeader>Project Overview</ContentHeader>
        <ContentParagraph>
          For this project, my partner and I were tasked with developing a
          querying application. The app needed to process a zip file containing
          either a list of courses or rooms at UBC. It would then unzip and
          validate the file to ensure proper formatting before allowing users to
          query the data for insights, such as the average grade for a course or
          the number of rooms in a building.
        </ContentParagraph>
        <ContentHeader>My Role</ContentHeader>
        <ContentParagraph>
          I primarily focused on implementing the backend and REST endpoints,
          while my partner handled the query processor and frontend. One of the
          most complex challenges I faced was processing the zip file,
          specifically unzipping it and converting its contents into usable
          data.
        </ContentParagraph>
        <ContentHeader>Handling File Processing</ContentHeader>
        <ContentParagraph>
          Using the JSZip module to extract the file was fairly straightforward,
          but handling the data itself proved far more difficult. The course
          data was structured as a list of JSON objects, whereas the room data
          was embedded within an HTML file. Since the relevant room data resided
          within a table inside the HTML file, I had to design two distinct
          parsers to extract and process the information efficiently.
        </ContentParagraph>
        <ContentHeader>Parsing</ContentHeader>
        <ContentParagraph>
          For course data in JSON format, the parser iterated through the
          entries, filtering out any invalid ones. The remaining records were
          then converted into instances of the Data class. If the file contained
          room data in HTML format, the parser recursively navigated the file
          structure until it reached the table holding the relevant information.
          Once located, the extracted data was converted into instances of the
          Data class. While I am greatly simplifying the implementation, this
          captures the essence of the process.
        </ContentParagraph>
        <ContentHeader>Storing and Querying Data</ContentHeader>
        <ContentParagraph>
          Once parsed, the data was stored in a designated folder as a JSON
          file, ensuring persistence across sessions and making it readily
          available for my partner to query. Implementing the "remove" and
          "list" functionalities was relatively simple compared to the more
          complex "add" functionality. Finally, I used Express.js to build the
          REST endpoints, which was a straightforward task.
        </ContentParagraph>
        <ContentHeader>Reflections</ContentHeader>
        <ContentParagraph>
          Overall, this project was significantly more challenging and
          labor-intensive than my NotePad project. However, the effort was well
          worth it. I gained valuable experience and grew tremendously as a
          developer.
        </ContentParagraph>
      </ContentBox>
    </>
  );
}
