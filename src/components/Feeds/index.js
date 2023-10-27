import { useEffect } from "react";
import News from "../News";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../../store/locationSlice";

// ()=>{}
const Feeds = (props) => {

  // const latitude = useSelector((state)=> state.latitude)
  // const longitude = useSelector((state)=> state.longitude)
  const {latitude,longitude} = useSelector((state)=> state.location)
  const dispatch = useDispatch()
  // following useEffect will execute only 1 time - because [] empty dependecy array
  // on initial render of a component
  // useEffect(()=>{
  //   console.log('ppp',)
  // },[])
  useEffect(()=>{
    console.log('ppp',props)
  },[props])

  useEffect(()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (position)=>{
          dispatch(setLocation({latitude: position.coords.latitude, longitude: position.coords.longitude}))
        },(error)=>{
          console.log("ppp there is a problem while fetching the location");
        })
    }else {
      console.log("ppp your browser does not provide location");
    }
  },[])

  return (
    <>
      <p>Feeds</p>
      <News/>
      {/* {latitude && longitude?
      (<> */}
        <p>My Location is:</p>
        <ul>
          <li>latitude: {latitude}</li>
          <li>longitude: {longitude}</li>
        </ul>
        </>
      // ):
      // <>
      //   <p>fetching....</p>
      // </>
      // }
    // </>
  );
};

export default Feeds;
