import { GetServerSideProps } from "next";
import supabase from "@/config/Supabase.config";



export default function Sitemap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const sitemap = await createSitemap();
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
    return {
        props: {},
    };
};


  

    async function createSitemap() {
        const { data: posts, error } = await supabase
        .from('posts')
        .select('*')
        const createSiteMapUrls = async () => {
            let postUrls = "";
            posts!.map((post) => {
                postUrls += `
                <url>
                <loc>https://resultsarkari.co.com/${post.slug}</loc>
                <lastmod>${
                    new Date(post.updated_at).toISOString().split("T")[0]
                }</lastmod>
                </url>
                `;
            });
            
            return postUrls;
        };



        return `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${await createSiteMapUrls()}</urlset>`;
    }
   


