import React from "react";

function AboutSection() {
  return (
    <section className="px-4 border-x full-line-bottom relative">
      <h2 className="text-3xl font-semibold relative full-line-bottom ">
        About
      </h2>
      <div className="flex flex-col gap-4 py-4 font-mono text-sm ">
        <p className="tracking-wide">
          Hi there! I&apos;m <span className="font-semibold">Aman Kumar Yadav</span> — 
          a full stack engineer passionate about building modern and scalable web applications.
        </p>
        <p className="tracking-wide">
          My main tech stack includes the <span className="font-semibold">MERN stack (MongoDB, Express.js, React, Node.js)</span>, 
          along with <span className="font-semibold">Next.js</span> for server-side rendering and performance optimization.  
          I also work with <span className="font-semibold">VPS deployments and AWS cloud infrastructure</span> to build 
          secure and scalable applications.
        </p>
        <p className="tracking-wide">
          I focus on creating user-friendly, responsive, and efficient solutions while ensuring 
          clean and maintainable code. I enjoy solving real-world problems through technology 
          and continuously learning new tools to stay ahead in the tech world.
        </p>
        <p className="tracking-wide">
          Apart from coding, I like exploring new technologies, sharing knowledge, 
          and experimenting with creative ideas that can make an impact.
        </p>
        <p className="tracking-wide">
          Let&apos;s connect and build something amazing together!
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
