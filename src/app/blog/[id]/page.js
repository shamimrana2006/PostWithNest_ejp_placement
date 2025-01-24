import React from "react";

export default async function page({ params }) {
  const { id } = params;
  console.log(params);

  const responst = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const postDAta = await responst.json();
 
  

  return (
    <div className="  flex justify-center items-center">
      <div className="border w-1/2 p-3 rounded-lg bg-slate-700 text-white">
      <span className="font-bold text-blue-500">Post Id :</span>  {id}
        <hr />
        <span className="font-bold text-blue-500">Post Title :</span> {postDAta.title}
        <hr />
        <span className="font-bold text-blue-500">Post Details :</span> {postDAta.body}
      </div>
    </div>
  );
}
