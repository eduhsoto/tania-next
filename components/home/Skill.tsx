import {
  SkillDiv,
  TitleH3,
  List,
} from '@/styles/styled-components/home/Skill'

const Skill = ({ title, list }: SkillProps): JSX.Element => {
  return (
    <SkillDiv>
      <TitleH3>{title}</TitleH3>
      <List>
        {list.map((value, index) => {
          return <li key={index}>{value}</li>
        })}
      </List>
    </SkillDiv>
  )
}

export default Skill

interface SkillProps {
  title: string
  list: string[]
}
