const Skill = ({ skill }: { skill: string }) => {
  return (
    <button className='font-bold px-4 py-2 border border-slate-600 dark:border-slate-300 rounded-full text-slate-600 dark:text-slate-300' key={skill}>
      {skill}
    </button>
  );
};
export default Skill;
