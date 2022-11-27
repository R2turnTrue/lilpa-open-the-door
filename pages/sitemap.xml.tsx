const EXTERNAL_DATA_URL = 'https://jsonplaceholder.typicode.com/posts';

function generateSiteMap(posts) {

  return `<?xml version="1.0" encoding="UTF-8"?>

   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

     <!--We manually set the two URLs we know already-->

     <url>

       <loc>https://lilpa-open-the-door.vercel.app/</loc>

     </url>

       
     
       

   </urlset>

 `;

}

function SiteMap() {

  // getServerSideProps will do the heavy lifting

}

export async function getServerSideProps(ctx) {
  
  const res = ctx.res

  // We generate the XML sitemap with the posts data

  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');

  // we send the XML to the browser

  res.write(sitemap);

  res.end();

  return {

    props: {}

  };

}

export default SiteMap;
