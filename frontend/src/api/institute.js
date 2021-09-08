import {getJson} from "./helpers";

export async function getInstituteNames() {
  return (await getJson('/api/universities')).data;
}

