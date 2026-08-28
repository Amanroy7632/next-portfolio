import Image from "next/image";
import React from "react";
import MyImage from "../../../public/profile.jpeg";
import { VerifiedFilledIcon } from "../Icons";
import { FlipSentences } from "../ui/FlipSentences";
import { FileText } from "lucide-react";
import { Button } from "../ui/button";

function ProfileSection() {
  const flipSentences = [
    "Full stack developer crafting modern web applications.",
    "Mostly as Backend Development.",
    "Creator of useful and exciting side projects.",
    "Backend Architecture and developer at Ur Heaven Space Pvt Ltd.",
  ];

  return (
    <section className="relative flex full-line-bottom h-auto border-x  ">
      <div className="shrink-0 border-r ">
        <div className="p-1">
          <Image
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`Md Taqi Imam avatar`}
            src={MyImage.src}
            width={512}
            height={512}
            quality={100}
            priority
            unoptimized
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between grow items-end pb-1 px-4 lining-tilt-background">
          <span className="line-clamp-1 font-mono text-xs text-zinc-300 select-none dark:text-zinc-800 tracking-wider">
            Last updated 2 days ago
          </span>
          
      
        </div>
        <div className=" border-t">
          <h1 className=" pl-4 py-0.5 font-semibold  select-none text-2xl flex items-center font-mono  ">
            Aman Kumar Yadav&nbsp;
            <VerifiedFilledIcon />{" "}
          </h1>
        </div>
        <div className="h-9 border-t flex items-center justify-start  py-1 pl-4  md:h-auto">
          <FlipSentences sentences={flipSentences} />
        </div>
        <div className="border-t flex flex-wrap items-center gap-2 px-4 py-2">
          <Button size="sm" variant="outline" asChild>
            <a
              href="https://drive.google.com/file/d/1ea2nj6Bmt-X_ti6bFDh8f-YtnyIlR6nT/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText />
              Resume
            </a>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <a
              href="https://drive.google.com/file/d/1ax2f9JsWRPvbJDlpWrl9gcOYTFQUAZWN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText />
              Cover Letter
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
