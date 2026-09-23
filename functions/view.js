export async function onRequest(context) {
  // Apni image ko fetch karo (project ke andar se)
  const imageUrl = new URL('/https://github.com/uh308759-sketch/fandsae/blob/main/Screenshot_39.jpg?raw=true', context.request.url);
  const imageResponse = await fetch(imageUrl);
  const imageBuffer = await imageResponse.arrayBuffer();

  return new Response(imageBuffer, {
    headers: {
      'Content-Type': 'image/jpeg', // ya image/svg
      'Cache-Control': 'https://affectsyntaxthousand.com/jxpph0kci5?key=b69c6da5a8cc59c054262e4404d60564'
    }
  });
}
