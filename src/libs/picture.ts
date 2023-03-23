import axios from "./api.request";

function getPictureFromServer(id: number) {
  return axios.get("/picture/" + id);
}

function cachePicture(id: number, url: string) {
  let jsonStr = localStorage.getItem("pictures");
  if (!jsonStr) {
    jsonStr = "[]";
  }
  let pictures = JSON.parse(jsonStr);
  if (pictures.length >= 1000) {
    const pictureOut = pictures.map(
      (x: { times: number }, y: { times: number }) =>
        x.times < y.times ? x : y
    );
    pictures = pictures.filter((x: { id: any }) => x.id != pictureOut.id);
  }
  pictures.push({ id, url, times: 1 });
  localStorage.setItem("pictures", JSON.stringify(pictures));
}

function getPictrueFromCache(id: number): string | undefined {
  let jsonStr = localStorage.getItem("pictures");
  if (!jsonStr) {
    jsonStr = "[]";
  }
  const pictures = JSON.parse(jsonStr);
  for (const picture of pictures) {
    if (picture.id === id) {
      picture.times++;
      localStorage.setItem("pictures", JSON.stringify(pictures));
      return picture.url;
    }
  }
}

export async function getPicture(id: number) {
  let url = getPictrueFromCache(id);
  if (url) {
    return url;
  }
  const res = await getPictureFromServer(id);
  if (res.status) {
    url = res.data.picture.md5 + "." + res.data.picture.format;
    cachePicture(id, url);
    return url;
  }
  return "";
}
