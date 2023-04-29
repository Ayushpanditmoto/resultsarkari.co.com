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

export async function getServerSideProps() {
  const AdmitCard = cache.get(Category.AdmitCard);
  const Result = cache.get(Category.Result);
  const Admission = cache.get(Category.Admission);
  const AnswerKey = cache.get(Category.AnswerKey);
  const Government = cache.get(Category.Government);
  const Important = cache.get(Category.Important);
  const Job = cache.get(Category.Job);
  const Syllabus = cache.get(Category.Syllabus);

  if (AdmitCard!= undefined && Result!= undefined && Admission!= undefined && AnswerKey!= undefined && Government!= undefined && Important!= undefined && Job!= undefined && Syllabus!= undefined) {
    // If data is present in cache, return it
    console.log('from cache')
    return {
      props: {
      result: Result,
      admit: AdmitCard,
      admissions: Admission,
      answerkeys: AnswerKey,
      governments: Government,
      importants: Important,
      jobs:   Job,
      syllabi: Syllabus,
        
      },
    };
  } else {
  //fetch all posts
    const { data: AllData, error: err } = await supabase
    .from('posts')
    .select('*')
    
  

    console.log(AllData)

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
          result.push(post);
          break;
        case Category.AdmitCard:
          admit.push(post);
          break;
        case Category.Admission:
          admissions.push(post);
          break;
        case Category.AnswerKey:
          answerkeys.push(post);
          break;
        case Category.Government:
          governments.push(post);
          break;
        case Category.Important:
          importants.push(post);
          break;
        case Category.Job:
          jobs.push(post);
          break;
        case Category.Syllabus:
          syllabi.push(post);
          break;
        default:
          break;
      }
    });

    console.log("Loading from DB")
    // Set data in cache
    const time=1 // 3 minutes
    cache.set(Category.Result, result, time);
    cache.set(Category.AdmitCard, admit, time);
    cache.set(Category.Admission, admissions, time);
    cache.set(Category.AnswerKey, answerkeys, time);
    cache.set(Category.Government, governments, time);
    cache.set(Category.Important, importants, time);
    cache.set(Category.Job, jobs, time);
    cache.set(Category.Syllabus, syllabi, time);

  return {
    props: {
      result: result,
      admit: admit,
      admissions: admissions,
      answerkeys: answerkeys,
      governments: governments,
      importants: importants,
      jobs: jobs,
      syllabi: syllabi,
    },
  }
}
}
