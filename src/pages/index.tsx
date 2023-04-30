import { Inter } from 'next/font/google'
import AppSection from '@/components/App.section'
import PostSection from '@/components/Post.section'
import { DefaultSeo } from 'next-seo';
import FooterOne from '@/components/FooterOne'
import NodeCache from 'node-cache'
import supabase from '@/config/Supabase.config';
import Category from '@/types/PostEnum';
import Props from '@/types/HomeProps';

const inter = Inter({ subsets: ['latin'] })
const cache = new NodeCache();

export default function Home({ result, admit, admissions, answerkeys, governments, importants, jobs, syllabi }: Props) {

  return (
    <>
      <DefaultSeo 
      title="Result Sarkari Naukri"
      description="Result Sarkari Naukri is a website that provides all the latest government jobs, admit cards, results, answer keys, syllabus, and admission information."
      openGraph={{
        type: 'website',
        locale: 'en_IE',
        url: 'https://www.resultsarkari.co.com/',
        site_name: 'Result Sarkari Naukri',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
      />
      <main>
        {/* <AppSection/> */}
        <PostSection 
        result={result}
        admit={admit}
        admissions={admissions}
        answerkeys={answerkeys}
        governments={governments}
        importants={importants}
        jobs={jobs}
        syllabi={syllabi}
        />
        <FooterOne/>
      </main>
    </>
  )
}

export async function getStaticProps() {
  
    const { data: AllData, error: err } = await supabase
    .from('posts')
    .select('*')

    if (err) {
      console.log(err)
      
    }

    const result:any = [];
    const admit :any= [];
    const admissions:any = [];
    const answerkeys:any = [];
    const governments:any = [];
    const importants:any = [];
    const jobs :any= [];
    const syllabi:any = [];

    AllData?.forEach((post) => {
      switch (post.category) {
        case Category.Result:
          result.unshift(post);
          break;
        case Category.AdmitCard:
          admit.unshift(post);
          break;
        case Category.Admission:
          admissions.unshift(post);
          break;
        case Category.AnswerKey:
          answerkeys.unshift(post);
          break;
        case Category.Government:
          governments.unshift(post);
          break;
        case Category.Important:
          importants.unshift(post);
          break;
        case Category.Job:
          jobs.unshift(post);
          break;
        case Category.Syllabus:
          syllabi.unshift(post);
          break;
        default:
          break;
      }
    });

    console.log("Loading from DB")
   

  return {
    props: {
      result: result,
      admit: admit,
      admissions: admissions,
      answerkeys: answerkeys,
      governments: governments,
      importants: importants,
      jobs: jobs.slice(0, 8),
      syllabi: syllabi,
    },
    revalidate: 10, // In seconds
  }
}

