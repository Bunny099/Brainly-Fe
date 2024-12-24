


export function GetLink(link:string):string {

    const url = new URL(link);
    const videoId = url.searchParams.get("v");
    if(videoId){
      return `https://www.youtube.com/embed/${videoId}`
    }if(url.pathname.startsWith("embed")){
      return link;
    }
    throw new Error("invalid youtube url")
  
}

export default GetLink