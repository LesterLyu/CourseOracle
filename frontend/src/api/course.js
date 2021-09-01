import {getJson} from "./helpers";

export async function getCourseData(courseName, instituteName) {
  const url = '/api/materials?course=' + courseName + '&institution=' + instituteName + '&buyerEmail=';
  return (await getJson(url)).course;
}
