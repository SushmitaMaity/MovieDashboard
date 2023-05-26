import React, { useEffect } from "react";
import {fetchToken } from "./MovieAPI";

const Welcome = () => {
    useEffect(() => {
        // localStorage.clear();
        const fetchData = async () => {
          try {
            const token = await fetchToken();
          } catch (error) {
            console.log("error", error);
          } finally {
            console.log("in finally");
          }
        };
      
        return () =>fetchData();
      }, []);
return(<div className="welcome"><h1>Welcome to Movie App</h1></div>);
} 
export default Welcome;