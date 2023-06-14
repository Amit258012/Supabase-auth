import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const supabase = createClient(
  "https://dpmwmwxqyxrfnyzkysgt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwbXdtd3hxeXhyZm55emt5c2d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY3NDk1NjQsImV4cCI6MjAwMjMyNTU2NH0.zO1h9Lbl68cOqf2hQvg9ktX0sSF1EktjC8cS1ZA22ek"
);

const Success = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        //value.data.user
        if (value.data?.user) {
          console.log(value.data.user);
          setUser(value.data.user);
        }
      });
    }
    getUserData();
  }, []);

  async function signOutUser() {
    console.log("signout");
    const { error } = await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <div>
      {Object.keys(user).length !== 0 ? (
        <>
          <h1>Success</h1>
          <button onClick={() => signOutUser()}>Sign Out</button>
        </>
      ) : (
        <>
          <h1>User is not logged In</h1>
          <button
            onClick={() => {
              navigate("/");
            }}>
            Go back home
          </button>
        </>
      )}
    </div>
  );
};

export default Success;
