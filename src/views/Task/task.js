import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { getDiscordToken } from "../../api/task";

function Task(props) {
  const search = useLocation();
  const [code, setCode] = useState();

  const getQuery = async () => {
    // const searchParams = new URLSearchParams(search.search);
    // console.log(searchParams.get("code"));
    // let code = searchParams.get("code");
    let url = window.location.href
    let start = url.indexOf('code=')
    let end = url.indexOf('#/task')
    let code = url.substring(start+5,end)
    console.log(code)
    setCode(code);
    getDiscord(code);
  };

  const getDiscord = async (code) => {
    let API_ENDPOINT = "https://discord.com/api/users/@me";
    let CLIENT_ID = "1070631420046884926";
    let CLIENT_SECRET = "BxEALA_JqsagsiYGeboxLYnDy0e7K_nM";
    let REDIRECT_URI = "http://localhost:3000/#/task";


    const data = new URLSearchParams();
    data.append('client_id', CLIENT_ID);
    data.append('client_secret', CLIENT_SECRET);
    data.append('grant_type', 'authorization_code');
    data.append('redirect_uri', `${REDIRECT_URI}`);
    data.append('scope', 'identify');
    data.append('code', `${code}`);

    // let info_token = await getDiscordToken(url, data);
    fetch('https://discord.com/api/oauth2/token', { method: "POST", body: data }).then(response => response.json()).then(data => {
        console.log(data);
});
    
  };

  useEffect(() => {
    getQuery();
  }, []);

  return <div>Task</div>;
}

export default Task;
