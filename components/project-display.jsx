"use client";

export const ProjectDisplay = ({projectName,projectParagraph, projectImage, projectSkills})=>{


    return (
        <div className="card lg:card-side bg-base-300 w-[37rem]">
        <div className="card-body">
        <h2 class="card-title text-2xl">{projectName}</h2>
        <div className="flex flex-row">
        {projectSkills.map((item, i)=>(
            <p className=" text-xs">
            {projectSkills[i]}
            </p>
        ))}
        </div>
        <img src = {projectImage} className = " touch-none pointer-events-none " />
        <p className=" py-2 ">
        {projectParagraph}
        </p>
        </div>
        </div>


    )
}