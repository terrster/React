export const Getgifs = async (ctg, api_key) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(ctg)}&api_key=${api_key}&limit=10`;
    const resp = await fetch(url)
    const {data} = await resp.json();

    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    });
    return gifs;
}