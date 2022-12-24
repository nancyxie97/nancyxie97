import React , { useState,useEffect } from "react";
import AgGridSandbox from '../Component/Tabs/AgGridSandbox'
import Footer from '../Component/Footer'
import {MdOutlineClose} from 'react-icons/md'
import {AiOutlinePlus} from 'react-icons/ai'
import '../Component/Sandbox.css'
import data from '../Assets/tabPreferences.json';
import { json } from "react-router-dom";

const Sandbox = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [name, setName] = useState("");
  const [dynamicTabs,setDynamicTabs] = useState([]);
  const [addTab,setAddTab] = useState(false);
  // function changeTab(name) {
  //   setActiveTab(name)
  // } 
  let count = 3;
  useEffect(() => {
    const loadedData = JSON.stringify(data);
    const json = JSON.parse(loadedData)?.data;
    
    setDynamicTabs(json);
    console.log(dynamicTabs);
  },[]);

  const settingTab = () => {
    setAddTab(!addTab);
  }

  const handleChange = (event) => {
    setName(event.target.value);

  };

  const handleKeyDown = (e) => {
    
    if(e === undefined) {return}
    if (e.key === 'Enter') {
      const dynamic = [...dynamicTabs];
      dynamic.push({
        component: "other",
        extra: "",
        id: "tab" + count++,
        tabName: name
      });
      setDynamicTabs(dynamic);
      setAddTab(false);
      setName("");
    }
  }

  const deleteTabs = (id) => {
    const dynamicArr = dynamicTabs.filter(function( obj ) {
      return obj.id !== id;
  });
  setDynamicTabs(dynamicArr);
  }
  const iconSize = 30;
  return (
    
    <div className="sandbox">
      <div className="wrapper">
        <ul className="nav">
          
          {dynamicTabs?.map(item => <li key={item.id} className={activeTab === item.id ? "active" : ""}><div className="tab-name" onClick={() => setActiveTab(item.id)} >{item.tabName}</div> <MdOutlineClose onClick={() => deleteTabs(item.id)} className='icon' size={15} style={{color: '#fff'}}/></li>)}
          {/* <li className={activeTab === "tab1" ? "active" : ""}><div className="tab-name" onClick={() => setActiveTab('tab1')} >AgGrid</div> <MdOutlineClose className='icon' size={30} style={{color: '#fff'}}/></li>
          <li className={activeTab === "tab2" ? "active" : ""}><div className="tab-name" onClick={() => setActiveTab('tab2')} >Other</div> <MdOutlineClose className='icon' size={30} style={{color: '#fff'}}/></li> */}
          {addTab ? <li className='new-tab' key="1" onChange={handleChange} onKeyDown={handleKeyDown}><input type="text" value={name} name="name" /><MdOutlineClose className='icon' size={iconSize} style={{color: '#fff'}}/></li> : null}
          <li className="addition-tab" onClick={settingTab}><AiOutlinePlus className='icon' size={30} style={{color: '#fff'}}/></li>
        
        
        </ul>

        
      </div>
      <div className="sandbox-content">
          {activeTab == 'tab1'? <AgGridSandbox/> : <></>}
        </div>
    </div>
  )
}

export default Sandbox