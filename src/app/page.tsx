import Container from "@/components/container";
import {
   HomeBanner,
   OurServices,
   WhoWeAre,
   HowWeWorkTimeline,
   ContactUs,
   FromOurBlog,
   Sponsors,
   NewHomeBanner,
} from "@/components/home";
import { Metadata } from "next";
import pageTitle from "@/common/utils/page-title";
import { getAllPosts } from "@/common/apis/post.api";
import NewTimeLine from "@/components/home/NewTimeline";
import { CallIcon, CallIconNewCase } from "@/components/icons";
import whatsupImage from '../public/assets/images/whatsup.png';

export const metadata: Metadata = pageTitle.home;

const HomePage = async () => {
   const { posts } = await getAllPosts(1, 10);
   // console.log(posts)

   return (
      <div className="min-h-[90vh]  bg-[#F3F3F3]">
         {/* <h1>hello</h1> */}
         {/* <HomeBanner /> */}
         <div className="aPPointment">
            <a id="Registers" className="btn btn-lg  book-ap flex gap-1" href="https://wa.me/+447748464899">
               <img src={'/assets/images/whatsup.png'}  alt="" style={{width:'25px'}} />
               <span>How Can I help you ?</span>
            </a>
         </div>

         <NewHomeBanner />
         <Container>
            <WhoWeAre />
            <OurServices />
            {/* <HowWeWorkTimeline /> */}
            <NewTimeLine />
         </Container>

         <div className="bg-[#F6F6F6]">
            <Container>
               <ContactUs />
               <FromOurBlog posts={posts} />
            </Container>
            <Sponsors />
         </div>
      </div>
   );
};

export default HomePage;
