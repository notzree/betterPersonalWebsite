export default function DashboardLayout({ children }) {
    return (
      <section>
        <div className="tabs justify-center text-primary mb-4">
          <button className='tab tab-lg hover:scale-125 transition ease-in-out hover:-translate-y-1 text-primary'>Home </button>
          <button className='tab tab-lg  hover:scale-125 transition ease-in-out hover:-translate-y-1 text-primary'>My projects</button>
          <button className='tab tab-lg  hover:scale-125 transition ease-in-out hover:-translate-y-1 text-primary'>Resume  </button>
        </div>
        
        
        
        {children}
      </section>
    );
  }