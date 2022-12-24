import React , { useState,useEffect } from "react";
import data from '../Assets/workExp.json';



const Project = () => {
  const [allWork,setAllWork] = useState({});
  // function changeTab(name) {
  //   setActiveTab(name)
  // } 
  const showInfo= () => {
    const cat = [];
    for(const item of Object.keys(allWork)){
      //console.log(item);
      const group = [];
      if(item === 'work'){
      let chunk;
        cat.push(<h1>{item}</h1>);
        allWork[`${item}`].map(
          work => {
             
            group.push(<div>
              <h2>{work.company}</h2> 
              <div className="group">
                <h3>{work.role}</h3>
                <h4>{work.duration}</h4>
              </div>
             { work['techStack'] ? <p>Tech Stack: {work['techStack'].join(', ')}</p> : ''}
              <p>{work.description}</p>
              </div>);
          }
        );
        cat.push(<div className={item}>{group}</div>);
        
        
      }else{
        cat.push(<h1>{item}</h1>);
        const obj = allWork[`${item}`];
        
        
        for(const innerItem of Object.keys(obj)){
          if(Array.isArray(obj[`${innerItem}`])){
            group.push(<p> {innerItem} : {obj[`${innerItem}`].join(',')}</p>);
          }
          else{
            innerItem  === 'gpa' ? group.push(<p> {innerItem} : {obj[`${innerItem}`]}</p>) : group.push(<p>{obj[`${innerItem}`]}</p>);
           }
        }
        cat.push(<div className={item}>{group}</div>)
        

      }
      
    }
    return cat;
  }
  useEffect(() => {
    const loadedData = JSON.stringify(data);
    const json = JSON.parse(loadedData);
    
    setAllWork(json);
  },[]);
  return (
    
    <div className='project-page'>
      {showInfo()}
      <h1></h1>
    </div>
  )
}

export default Project