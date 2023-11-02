import "./App.css";
import Navbar from "./Components/Navbar";
import TvShows from "./TvShows";
import Movies from "./Movies";
import Premium from "./Premium";
import WebSeries from "./WebSeries";
import BuyPlan from "./Components/BuyPlan";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Footer from "./Footer";
import TopHolly from "./TopHolly";
import HollyGemsMovies from "./HollyGemsMovies";
import SearchResults from "./Components/SearchResults";
import { Routes, Route } from "react-router-dom";
import Favroite from "./Favroite";
import Video from "./Components/Video";
import ImageSlider from "./Components/ImageSlider";
function App(props) {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
               <Navbar /> 
            <ImageSlider/>
             <TopHolly url ={"https://academics.newtonschool.co/api/v1/ott/show?page=23&limit=10"} heading={"Top Hollywood Movies"}/>
           <TopHolly heading = {"Hollywood Gems Movies"} url = {"https://academics.newtonschool.co/api/v1/ott/show?page=22&limit=10"}/>
           <TopHolly url = {"https://academics.newtonschool.co/api/v1/ott/show?page=50&limit=10"} heading = {"World Hits"}/>
              <Footer/> 
            </>
          }
        ></Route>
        <Route
          path="/tvshows"
          element={
            <>
              <Navbar />
            
              <TvShows heading={"Popular Shows"} />
              <HollyGemsMovies heading={"Free tv Shows"}/>
              <Footer />
          </>
          }
        ></Route>
        <Route
          path="/movie"
          element={
            <>
              <Navbar />
              
              <TvShows heading={"popular movies"}/>
              <Movies heading={'Free on Zee5'}/> 
              <Footer />
            </>
          }
        ></Route>
         <Route
          path="/search"
          element={
            <>
              <Navbar />
              
              <SearchResults />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/premium"
          element={
            <>
              <Navbar />
             
              <HollyGemsMovies heading={'Premium Movies'}/>
              <Premium heading={'Trending Premium Movies'}/> 
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/webseries"
          element={
            <>
              <Navbar /> 
              
              <WebSeries heading={'Popular web Series'}/>
               <TopHolly heading={"Top10 webSeries"} url = {"https://academics.newtonschool.co/api/v1/ott/show?page=50&limit=10"}/>
               <TopHolly url={"https://academics.newtonschool.co/api/v1/ott/show?page=50&limit=10"} heading={"Worlds Hits"}/>
               <Footer />
            </>
          }
        ></Route>
        <Route path="/favorites" element={<><Navbar/>
        <Favroite/>
        </>
      }>

        </Route>

        <Route path="/buyplan" element={<BuyPlan />}>

        </Route>
        <Route path="/login" element={<><LogIn />
        </>} 
        />
        <Route path="/searchmovie" element={<SearchResults />
      } 
      />
        <Route path="/signup" element={<SignUp />}
         />
      <Route path="/video" element={<><Navbar/> <Video /></>}/>
    </Routes> 

    </>
  );
}

export default App;
