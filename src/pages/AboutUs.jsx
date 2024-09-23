import React from "react";
import MainPageTemplate from "../template/MainPageTemplate";
import SubBanner from "../component/SubBanner";
import WorldClassFacilityImgComponent from "../component/WorldClassFacilityImgComponent";
import FooterComponent from "../component/FooterComponent";

const AboutUs = () => {
  return (
    <MainPageTemplate>
      <SubBanner
        bannerimg={"/images/admissionsubbanner.jpg"}
        heading={"About Us"}
      />
      <div className="xl:p-16 lg:p-8 sm:p-4 flex flex-col gap-8">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-6 md:gap-4 xl:gap-16">
          <div className="flex flex-col sm:gap-2 lg:gap-4">
            <span className="xl:text-4xl sm:text-2xl lg:text-2xl md:text-xl font-semibold text-[#DC143C]">
              About Modern Institute Of Engineering Of Technology
            </span>
            <div className="flex flex-col gap-2 sm:text-xs lg:text-sm xl:text-lg">
              <span>
                Lorem ipsum dolor sit amet consectetur. Interdum quam est libero
                pharetra eleifend sed. Euismod ipsum bibendum mauris aenean
                placerat libero. Malesuada convallis sed integer nec vel id nisl
                odio. Hendrerit a tortor id ipsum tempus pellentesque volutpat
                massa ut. Natoque urna tellus ultrices mauris risus nunc auctor.
                Donec mattis arcu odio eget. Velit lacus pretium pharetra enim.
                At pellentesque at tellus tortor diam placerat nulla integer
                habitasse. Bibendum lacus eleifend ut felis viverra.
              </span>
              <span>
                Quam in arcu quisque non risus. Lacus gravida ultricies molestie
                laoreet sed odio augue. Enim et amet imperdiet sit ornare.
                Iaculis viverra porta volutpat suscipit. Malesuada mi blandit
                scelerisque pellentesque nunc porttitor aliquet.
              </span>
              <span>
                Donec tortor arcu in hendrerit lorem a facilisi. Orci arcu
                magnis mattis integer rhoncus platea nunc ut convallis. Dolor
                sed turpis pellentesque euismod donec dui. Amet proin elementum
                senectus commodo tortor velit habitant enim. Quisque non hac sed
                neque condimentum donec vulputate viverra. Accumsan ac amet
                lobortis id vel accumsan massa. Risus iaculis feugiat duis
                consectetur viverra turpis.
              </span>
              <span>
                A eget nibh libero vulputate nec neque nisi ipsum enim. Faucibus
                enim iaculis enim porta lorem dis enim at. Porta nunc imperdiet
                nunc tellus leo netus viverra. Sit eget pulvinar eu varius
                massa. Suspendisse pretium lectus venenatis montes cursus
                pulvinar arcu. Viverra vel elit sit tincidunt nisl et. Odio
                aenean venenatis aenean tincidunt bibendum ipsum. Tortor cursus
                accumsan orci tortor donec est tincidunt. Aenean tincidunt
                phasellus erat nisl massa massa lobortis. Mi vitae elit
                hendrerit amet volutpat vel. Odio ridiculus tellus eu feugiat.
                Vulputate malesuada nibh egestas sed. Eget quam donec tincidunt
                at duis morbi. Dignissim velit suspendisse penatibus condimentum
                posuere. Massa sodales
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/about1.png" alt="" />
              <img src="/images/about1.png" alt="" />
            </div>
            <div>
              <img src="/images/about3.png" alt="" className="w-full" />
            </div>
            <div className="w-full h-[5rem] flex justify-center items-center bg-[#DC143C] text-white text-xl font-semibold rounded-md">
              Life At MIET
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <span>
            Lorem ipsum dolor sit amet consectetur. Interdum quam est libero
            pharetra eleifend sed. Euismod ipsum bibendum mauris aenean placerat
            libero. Malesuada convallis sed integer nec vel id nisl odio.
            Hendrerit a tortor id ipsum tempus pellentesque volutpat massa ut.
            Natoque urna tellus ultrices mauris risus nunc auctor. Donec mattis
            arcu odio eget. Velit lacus pretium pharetra enim. At pellentesque
            at tellus tortor diam placerat nulla integer habitasse. Bibendum
            lacus eleifend ut felis viverra.
          </span>
          <span>
            Quam in arcu quisque non risus. Lacus gravida ultricies molestie
            laoreet sed odio augue. Enim et amet imperdiet sit ornare. Iaculis
            viverra porta volutpat suscipit. Malesuada mi blandit scelerisque
            pellentesque nunc porttitor aliquet.
          </span>
          <span>
            Donec tortor arcu in hendrerit lorem a facilisi. Orci arcu magnis
            mattis integer rhoncus platea nunc ut convallis. Dolor sed turpis
            pellentesque euismod donec dui. Amet proin elementum senectus
            commodo tortor velit habitant enim. Quisque non hac sed neque
            condimentum donec vulputate viverra. Accumsan ac amet lobortis id
            vel accumsan massa. Risus iaculis feugiat duis consectetur viverra
            turpis.
          </span>
          <span>
            A eget nibh libero vulputate nec neque nisi ipsum enim. Faucibus
            enim iaculis enim porta lorem dis enim at. Porta nunc imperdiet nunc
            tellus leo netus viverra. Sit eget pulvinar eu varius massa.
            Suspendisse pretium lectus venenatis montes cursus pulvinar arcu.
            Viverra vel elit sit tincidunt nisl et. Odio aenean venenatis aenean
            tincidunt bibendum ipsum. Tortor cursus accumsan orci tortor donec
            est tincidunt. Aenean tincidunt phasellus erat nisl massa massa
            lobortis. Mi vitae elit hendrerit amet volutpat vel. Odio ridiculus
            tellus eu feugiat. Vulputate malesuada nibh egestas sed. Eget quam
            donec tincidunt at duis morbi. Dignissim velit suspendisse penatibus
            condimentum posuere. Massa sodales
          </span>
        </div>
      </div>
      <WorldClassFacilityImgComponent />
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default AboutUs;
