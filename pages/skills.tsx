import Skills from "@/components/Skills";

function About() {
  return (
    <div className="flex flex-col pt-2">
      <div className="flex flex-col items-start px-20 py-18  bg-cover bg-center">
        <div className="relative pt-4">
          <div className="relative">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
