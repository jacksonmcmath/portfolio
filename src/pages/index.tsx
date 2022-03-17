import type { NextPage } from "next";
import Head from "next/head";

import { Project, SkillGroup } from "../components";

import { TEST_SKILLS } from "../content/skills";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jackson McMath</title>
      </Head>
      <section className="h-screen flex justify-center items-center">
        <div className="text-center">
          <p>Hi, my name is</p>
          <h1 className="text-7xl font-bold text-sky-900">Jackson McMath</h1>
          <p>Software Development @ GTRI</p>
          <p>Computer Engineering @ Georgia Tech</p>
        </div>
      </section>
      <section className="bg-sky-900 p-10">
        <h2 className="text-5xl font-bold text-gray-50 text-center mb-10">
          Projects
        </h2>
        <div className="grid grid-cols-3 gap-10">
          <Project />
          <Project />
          <Project />
        </div>
      </section>
      <section className="p-10">
        <h2 className="text-5xl font-bold text-center">Skills</h2>
        {TEST_SKILLS.map(({ heading, skills }, index) => (
          <SkillGroup heading={heading} skills={skills} key={index} />
        ))}
      </section>
      <section className="bg-sky-900 text-gray-50 p-10">
        <h2 className="text-5xl font-bold text-center">Experience</h2>
      </section>
      <footer className="p-10">
        <div className="text-sm text-center space-y-4">
          <p>
            <a
              className="hover:text-gray-600 hover:underline"
              href="mailto:contact@jacksonmcmath.com"
            >
              contact@jacksonmcmath.com
            </a>
          </p>
          <p>All rights reserved © 2022 Jackson McMath</p>
        </div>
      </footer>
    </>
  );
};

export default Index;
