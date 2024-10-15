"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="row wow fadeInUp" data-wow-delay="0.5s">
      <div className="col-lg-6 mb-md-60">
        <div className="position-relative">
          {/* Image */}
          <div className="position-relative overflow-hidden">
            <Image
              width={960}
              height={539}
              src="/assets/images/afd/four.jpg"
              className="image-fullwidth relative"
              alt="Image Description"
            />
          </div>
          {/* End Image */}
          {/* Decorative Waves */}
          <div
            className="decoration-1 d-none d-sm-block"
            data-rellax-y=""
            data-rellax-speed={1}
            data-rellax-percentage="0.1"
          >
            <Image
              width="159"
              height="74"
              src="/assets/images/decoration-1.svg"
              className="svg-shape"
              alt=""
            />
          </div>
          {/* End Decorative Waves */}
        </div>
      </div>
      <div className="col-lg-6 col-xl-5 offset-xl-1">
        {/* <h4 className="h5">Our Legacy</h4> */}
        <p className="text-gray">
          At AFD India, we specialize in coaching for entrance exams to top
          design and architecture colleges, including NIFT, NID, NATA, CEED,
          UCEED, MIT, UID, CEPT, and many more. Apart from the coaching, we
          assist students in securing admissions to Art, Animation,
          Architecture, Design, and Fashion programs at institutions both in
          India and abroad. Our distinguished faculty, comprised of NID and NIFT
          graduates and seasoned architects, offers unmatched expertise.
        </p>
        {/* <h4 className="h5">Our Vision</h4> */}
        <p className="text-gray">
          Our founder, Ms. Julie James, is a distinguished trainer for
          NIFT/NID/UCEED/NATA exams, leveraging her extensive experience as a
          postgraduate from NIFT New Delhi and former HOD of Fashion Design at
          MG University. Led by her, AFD India has been a leader in design test
          preparation for 25 years, consistently producing top-ranking students.
        </p>
      </div>
    </div>
  );
}
