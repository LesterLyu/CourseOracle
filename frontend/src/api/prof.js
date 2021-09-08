import {getJson} from "./helpers";

export async function getProfNamesByInstitute(institute) {
  return (await getJson('/api/profs/' + institute)).data;
}

