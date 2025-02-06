import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Projects',
};

export default function UBCQuery() {
  return (
    <article>
      <h1>UBC Query</h1>
      <hr></hr>
      <h3>Technologies used: TypeScript, Mocha, Chai, Node.js, Express.js</h3>
      <hr></hr>
      <p>For this project, my partner and I were assigned to create a querying application. The app would accept a zip file containing either a list of courses or rooms at UBC, and then unzip and verify the file to ensure it was properly formatted. Users could then query the data for insights, such as the average grade for a course or the number of rooms in a building. I will focus on the portion of the project I implemented, which included most of the backend and the REST endpoints. My partner handled the query processor and frontend. The most complex task I faced was processing the zip file (unzipping and converting the contents into usable data). I used the JSZip module to unzip the file, which was relatively straightforward, but processing the data was significantly more challenging. This was because the course data was a list of JSON objects, whereas the room data was in the form of an HTML file. The actual data for the rooms was located within a table in the HTML file, necessitating two different parsers to sort through the data. If the file contained UBC courses (JSON), the parser would loop through the entries, discarding the invalid ones. The remaining entries were then converted into instances of the Data class. If the file contained UBC rooms (HTML), the parser would recursively traverse the file until it reached the table where the data was located. The data would then be extracted and converted into instances of the Data class. I am greatly simplifying the implementation, but that was the gist of it. Afterward, the data was stored in a data folder as a JSON file for my partner to query. Additionally, the data was persistent between sessions. Both the &quot;remove&quot; and &quot;list&quot; functionalities were relatively straightforward compared to the &quot;add&quot; functionality in terms of implementation. Finally, I used Express.js to implement the endpoints, which was also straightforward. Overall, this project was significantly more challenging and labor-intensive than my NotePad project, but it was well worth the effort. I learned a great deal and grew significantly as a developer!</p>
    </article>
  );
}
