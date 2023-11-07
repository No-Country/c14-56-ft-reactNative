const About = ({ description }) => {
  return (
    <>
      <div className='mt-20'>
        <div className="bg-white dark:bg-neutral-800 shadow-md p-4 rounded-lg">
          <h4 className="text-xl font-semibold dark:text-slate-200">Sobre Mí</h4>
          <hr className="my-2 bg-slate-200 h-1 rounded-xl dark:border-slate-600" />
          <p className="text-slate-700 dark:text-slate-400">{description}</p>
        </div>
      </div>
    </>
  )
}

export default About
