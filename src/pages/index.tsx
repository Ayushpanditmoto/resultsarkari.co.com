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
      title="Esarkari.in"
      description="Esarkari.in is a website for all the latest government jobs, Sarkari Naukri, Sarkari Result, Admit Card, Answer Key, Syllabus, and more."
      openGraph={{
        type: 'website',
        locale: 'en_IE',
        url: 'https://esarkari.in/',
        site_name: 'Esarkari.in',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
      />
      <main>
        <AppSection/>
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

