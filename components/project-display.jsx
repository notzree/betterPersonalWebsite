"use client";

export const ProjectDisplay = ({
  projectName,
  projectParagraph,
  projectImage,
  projectSkills,
  projectLink,
}) => {
  return (
    <div className="card lg:card-side bg-base-300 w-[37rem]">
      <div className="card-body">
        <div className="flex flex-row justify-evenly">
          <h2 class="card-title text-2xl">{projectName}</h2>
          {projectLink != "" && (
            <a
              className="kbd hover:bg-stone-400 transition-all duration-150"
              href={projectLink}
              target="_blank"
              rel="noreferrer"
            >
              Visit
            </a>
          )}
        </div>
        <div className="flex flex-row">
          {projectSkills?.map((item, i) => (
            <p className=" text-xs" key={i}>
              {projectSkills[i]}
            </p>
          ))}
        </div>
        <img src={projectImage} className=" touch-none pointer-events-none " />
        <p className=" py-2 ">{projectParagraph}</p>
      </div>
    </div>
  );
};
