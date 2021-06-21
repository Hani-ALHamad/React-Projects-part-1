import React, { useContext } from 'react'
import { SiJavascript } from 'react-icons/si'
import { FaCss3Alt, FaGithub } from 'react-icons/fa'
import { RiImage2Fill } from 'react-icons/ri'
import { AiFillFolderOpen } from 'react-icons/ai'
import { BiArrowBack } from 'react-icons/bi'
import { Link, useParams } from 'react-router-dom'
import { AppContext } from '../context'
import Title from '../title'
import main_data from '../main_data'
import details_data from './data/details_data'
import FOF from './404'

const Details = () => {
  let { url } = useParams()
  const { currentIndex } = useContext(AppContext)
  let index = currentIndex

  if (currentIndex === "") {
    let i = 0
    let found = false
    main_data.forEach(element => {
      i = i + 1
      if (element.details === url) {
        index = i-1
        found = true
        return
      }
      
    });
    if(found === false){
      return <FOF />
    }
    
  }

  return(
    <main>
      <Title />
      <div id="details_container">
        <div id="details_box">
          <img id="details_img" src={main_data[index].img} alt={main_data[index].name}/>
          <Link id="details_back_button" to="/"><BiArrowBack /></Link>
          <div id="details_text_box">
            <div id="details_title">{main_data[index].name}</div>
            <div id="details_files_box">
              <div id="details_src"><AiFillFolderOpen />&ensp;src<a id="details_github_link" href={main_data[index].github} target="_blank" rel="noreferrer">See this project on GitHub <div id="details_github_link_icon"><FaGithub /></div></a></div>
              <div id="details_src_box">
                {details_data[index].files.map((item) =>(
                  <div className="details_src_files" key={item.name}>
                    {item.format === "js" ? 
                    <div className="flex_row"><span className="js_icon"><SiJavascript /></span>{item.name}</div> :
                    item.format === "css" ? <div className="flex_row"><span className="css_icon"><FaCss3Alt /></span>{item.name}</div>
                    : 
                    item.format === "img" ? <div className="flex_row"><span className="img_icon"><RiImage2Fill /></span>{item.name}</div>
                    :
                    <div>
                      <div className="details_src_folder">
                        <span className="folder_icon"><AiFillFolderOpen /></span>
                        {item.name}
                      </div>
                      {item.items.map((file) =>(
                        <div className="details_src_folder_files" key={file.name}>
                          <div className="details_src_files">
                            {file.format === "js" ?
                              <div className="flex_row"><span className="js_icon"><SiJavascript /></span>{file.name}</div> 
                              :
                              file.format === "css" ? <div className="flex_row"><span className="css_icon"><FaCss3Alt /></span>{file.name}</div>
                              :
                              file.format === "img" ? <div className="flex_row"><span className="img_icon"><RiImage2Fill /></span>{file.name}</div>
                              :
                              <div className="flex_row"><span className="img_icon"><AiFillFolderOpen /></span>{file.name}</div>
                            }
                          </div>
                        </div>
                      ))}
                    </div>
                    }</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Details