import  styled  from "styled-components";
import { categories2 } from "../data";
import CategoryItem from "./CategoryItem";


const Container = styled.div`
display: flex;
justify-content: space-between;
`

const CategoriesCopy = () => {
  return (
      <Container>
        {categories2.map(item=>(

          <CategoryItem item={item} key={item.id} />

        ))}
      </Container>
          
  )
}

export default CategoriesCopy