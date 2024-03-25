import React from 'react';

function Card({username = "anoymous user", post="not assign at"}) {
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img className="w-24 h-24 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSud7leAvAMnkZuUY_GkeVMSmAYRNgeHrMO0FZF2LT12Q&s " alt="" width="384" height="512" />
      <div className="pt-6 md:p-8 text-center space-y-4">
        <blockquote className="text-lg font-medium">
          “Tailwind CSS is the only framework that I've seen scale
          on large teams. It’s easy to customize, adapts to any design,
          and the build size is tiny.”
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">
            {username}
          </div>
          <div className="text-slate-700 dark:text-slate-500">
            {post}
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

export default Card;
