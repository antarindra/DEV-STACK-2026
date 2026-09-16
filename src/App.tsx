import { Suspense } from "react";
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import Technologies from "./Components/Technologies";
import type { ITechnology } from "./Components/TechnologiesType";
import Footer from "./Components/Footer";

const technologiesFetch=async():Promise<ITechnology[]>=>{
  const rest= await fetch('/data.json')
  const data = await rest.json()
  return data;
};


function App() {
  const technologiesPromise=technologiesFetch();
  
  return (
    <>
      
<Nav/>
<Banner/>
 <Suspense fallback={<h2>Loading...</h2> }><Technologies technologiesPromise={technologiesPromise}/> </Suspense>
 <Footer/>
      

    </>
  )
}

export default App
