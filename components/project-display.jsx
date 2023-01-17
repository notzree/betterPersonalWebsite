"use client";

export const ProjectDisplay = ({projectName,projectParagraph})=>{


    return (
        <div className="card lg:card-side bg-base-300 w-96">
        <div className="card-body">
        <h2 class="card-title">{projectName}</h2>
        <p>
        {projectParagraph}
        </p>
        </div>
        </div>


    )
}