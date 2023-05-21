import FooterPart from "./FooterPart"
import HeadPart from "./HeadPart"
import LeftPart from "./LeftPart"
import MainPart from "./MainPart"

function App() {
    const data = {
        h1: "Zhlabo Wladimir",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJsUjB694JkWxHMHz6s-oZBJrHBHpMDWK95g&usqp=CAU",
        p: "Info about my self",
        a:"https://github.com/ZUBR3784"}
  return (<>
  <HeadPart data_props = {data}/>
  <LeftPart data_props = {data}/>
  <MainPart data_props = {data}/>
  <FooterPart data_props = {data}/>
    </>)
    

}

export default App