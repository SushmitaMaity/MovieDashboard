import React, { useState, useEffect } from "react";
import {fetchToken, createSessionId } from "./MovieAPI";

const Welcome = () => {
    useEffect(() => {
        // localStorage.clear();
        const fetchData = async () => {
          try {
            const token = await fetchToken();
            console.log("token in useEffect", token);
            
            // const sessionId = await createSessionId();
            // console.log("session ID in useEffect", sessionId);
          } catch (error) {
            console.log("error", error);
          } finally {
            console.log("in finally");
          }
        };
      
        return () =>fetchData();
      }, []);
return(<h1>Welcome to Movie App</h1>);
} 
export default Welcome;