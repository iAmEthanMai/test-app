import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-accentBlack text-white w-80 flex-shrink-0 border-r border-detailGrey hidden md:block">
      <div className="pt-16">
        <div className="p-4">
          <h2 className="text-lg font-bold">New Network</h2>
          <div className="my-8">
              <input type="text" className="w-full bg-backgroundBlack border border-detailGrey border-t-1 rounded-lg p-2 text-detailGrey" placeholder='Type network name...'/>
              <button className="py-2 px-4 bg-accentBlack border-detailGrey border rounded-lg my-4 hover:border-green hover:text-green">Create</button>

          </div>


        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold">Version Control</h2>
          <div className="my-4">
              <select className="w-full bg-backgroundBlack border border-detailGrey border-t-1 rounded-lg p-2 text-detailGrey" placeholder='Choose network...'>
                <option value="someOption">PeachTreeCorners</option>
                <option value="otherOption">Montréal</option>
              </select>
              <button className="py-2 px-4 bg-accentBlack border-detailGrey border rounded-lg my-4 hover:border-green hover:text-green">Pull</button>
              <textarea className="w-full p-2 bg-backgroundBlack border border-detailGrey border-t-1 rounded-lg text-detailGrey" name="" id="" placeholder='Commit message...'></textarea>
          <button className="py-2 px-4 bg-accentBlack border-detailGrey border rounded-lg my-4 hover:border-green hover:text-green">Push</button>
          </div>


        </div>
      </div>
      
    </aside>
  );
};

export default Sidebar;

/*

<h2 className="text-2xl font-bold">Sidebar</h2>
        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="block hover:text-gray-300">Link 1</a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-300">Link 2</a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-300">Link 3</a>
            </li>
          </ul>
  
          
          
        
        </nav>
*/