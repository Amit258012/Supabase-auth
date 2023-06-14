import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";

const supabase = createClient(
  "https://dpmwmwxqyxrfnyzkysgt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwbXdtd3hxeXhyZm55emt5c2d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY3NDk1NjQsImV4cCI6MjAwMjMyNTU2NH0.zO1h9Lbl68cOqf2hQvg9ktX0sSF1EktjC8cS1ZA22ek"
);

const Login = () => {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event == "SIGNED_IN") {
      console.log(event);
      // Forwardt to success url
      navigate("/success");
    } else {
      //Forward to localHost
      navigate("/");
    }
  });
  return (
    <div>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={["discord"]}
      />
    </div>
  );
};

export default Login;
