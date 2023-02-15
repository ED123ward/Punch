import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import axios, { AxiosResponse } from "axios";
import { Buffer } from 'buffer'

import { getDiscordToken } from "../../api/task";

function Task(props) {
  const search = useLocation();
  const [code, setCode] = useState();

  const getQuery = async () => {
    let url = window.location.href;
    let start = url.indexOf("code=");
    let end = url.indexOf("#/task");
    if (start > end) {
      end = url.length;
    }
    let code = url.substring(start + 5, end);
    console.log(code);

    let state_start = url.indexOf("state=");
    let state_end = url.indexOf("&code=");
    let state = url.substring(state_start + 6, state_end);
    console.log(state);

    setCode(code);
    if (state === "Twitter_state") {
      getTwitter(code);
    } else {
      getDiscord(code);
    }
  };

  const getDiscord = async (code) => {
    let CLIENT_ID = "1070631420046884926";
    let CLIENT_SECRET = "BxEALA_JqsagsiYGeboxLYnDy0e7K_nM";
    let REDIRECT_URI = "http://localhost:3000/#/task";

    const data = new URLSearchParams();
    data.append("client_id", CLIENT_ID);
    data.append("client_secret", CLIENT_SECRET);
    data.append("grant_type", "authorization_code");
    data.append("redirect_uri", `${REDIRECT_URI}`);
    data.append("scope", "identify");
    data.append("code", `${code}`);

    // let info_token = await getDiscordToken(url, data);
    fetch("https://discord.com/api/oauth2/token", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  // add your client id and secret here:
  const TWITTER_OAUTH_CLIENT_ID = "T1dLaHdFSWVfTnEtQ2psZThTbnI6MTpjaQ";
  const TWITTER_OAUTH_CLIENT_SECRET ="m7fgggIUHJ4p4dNBQ_8pFj1F73YE0_yyn5G31RWzL7iTPyWKlS";

  // the url where we get the twitter access token from
  const TWITTER_OAUTH_TOKEN_URL = "https://api.twitter.com/2/oauth2/token";

  // we need to encrypt our twitter client id and secret here in base 64 (stated in twitter documentation)
  const BasicAuthToken = Buffer.from(
    `${TWITTER_OAUTH_CLIENT_ID}:${TWITTER_OAUTH_CLIENT_SECRET}`,
    "utf8"
  ).toString("base64");
  console.log(BasicAuthToken)

  const twitterOauthTokenParams = {
    client_id: TWITTER_OAUTH_CLIENT_ID,
    code_verifier: "8KxxO-RPl0bLSxX5AWwgdiFbMnry_VOKzFeIlVA7NoA",
    redirect_uri: "https://wwww.jasontaylor.club",
    grant_type: "authorization_code",
  };

  const getTwitter = async (code) => {
    try {
      // POST request to the token url to get the access token
      const res = await axios.post(
        TWITTER_OAUTH_TOKEN_URL,
        new URLSearchParams({ ...twitterOauthTokenParams, code }).toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${BasicAuthToken}`,
          },
        }
      );

      console.log(res);
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const TWITTER_CLIENT_ID = "SEZkblo5Qkppa082UzFzVm1tVGo6MTpjaQ";

  const getTwitterOauthUrl = async () => {
    const rootUrl = "https://twitter.com/i/oauth2/authorize";
    const options = {
      redirect_uri: "https://www.jasontaylor.club", // client url cannot be http://localhost:3000/ or http://127.0.0.1:3000/
      client_id: TWITTER_CLIENT_ID,
      state: "Twitter_state",
      response_type: "code",
      code_challenge: "y_SfRG4BmOES02uqWeIkIgLQAlTBggyf_G7uKT51ku8",
      code_challenge_method: "S256",
      scope: ["users.read", "tweet.read", "follows.read", "follows.write"].join(
        " "
      ),
    };
    const qs = new URLSearchParams(options).toString();
    window.location.href = `${rootUrl}?${qs}`;
  };

  useEffect(() => {
    getQuery();
  }, []);

  return (
    <>
      <div>Task</div>;
      <div onClick={getTwitterOauthUrl}>
        <p>{" twitter"}</p>
      </div>
    </>
  );
}

export default Task;
