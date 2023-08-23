import Skill from '../elements/Skill'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt, FaReact } from 'react-icons/fa'
import { RiJavascriptFill } from "react-icons/ri"
import { BiLogoTailwindCss } from "react-icons/bi"
import { TbBrandNextjs } from "react-icons/tb"
import Status from '../elements/Status'

const SkillSet = () => {
  return (
    <div className=''>
      <table cellPadding={10}>
        <tr>
          <td >
          <Skill
            icons={<AiFillHtml5/>}
            title={'Html'}
            />
          </td>
          <td>
            <Status status={"advance"} />
          </td>
        </tr>
        <tr>
          <td>
    <Skill
      icons={<FaCss3Alt/>}
      title={"Css"}
    />    
          </td>
          <td>
            <Status status={"advance"} />
          </td>
        </tr>
        <tr>
          <td>
    <Skill
      icons={<RiJavascriptFill/>}
      title={"JavaScipt"}
      
    />
          </td>
          <td>
            <Status status={"intermediate"} />
          </td>
        </tr>
        <tr>
          <td>
          
    <Skill
    icons={<BiLogoTailwindCss/>}
    title={"Tailwind"}
    
    />
          </td>
          <td>
            <Status status={"intermediate"} />
          </td>
        </tr>
        <tr>
          <td>
    <Skill
    icons={<FaReact/>}
    title={"React Js"}

    />    
          </td>
          <td>
            <Status status={"beginner"} />
          </td>
        </tr>
        <tr>
          <td>
    <Skill
    icons={<TbBrandNextjs/>}
    title="Next Js"

    />    
          </td>
          <td>
            <Status status={"beginner"} />
          </td>
        </tr>
      </table>
  </div>
  )
}

export default SkillSet