import {postJson, getJson} from "./helpers"

export const purchaseMaterial = async (email, materialId) => {
    const url = '/api/material/purchase';
    const data = {
        userEmail: email,
        materialId: materialId,
      }
    return await postJson(url, data)
}

export const rateMaterial = async (email, materialId, rate) => {
    const url = '/api/material/rate';
    const data = {
      userEmail: email,
      materialId: materialId,
      rate: rate
      }
    return await postJson(url, data)
}

export const tipMaterial = async (email, materialId, tip) => {
    const url = '/api/material/tip';
    const data = {
      userEmail: email,
      materialId: materialId,
      tip: tip
      }
    return await postJson(url, data)
}

export const getMaterials = async (courseName, instituteName, email) => {
    const url = '/api/materials?course=' + courseName + '&institution=' + instituteName + '&buyerEmail=' + email;
    return await getJson(url)
}


