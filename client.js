import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    "https://pejryzqentklhwacybfx.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTQ2OTEyMCwiZXhwIjoxOTQ3MDQ1MTIwfQ.DMCXTp02Iwiomfn_PJOGg7jfDxj7_fDC-gO4FZszo1k"
);

async function signInWithGoogle() {
    const { user, session, error } = await supabase.auth.signIn({
        provider: "google",
    }, {
        redirectTo: "http://localhost:3000/chat",
    });
}

async function signout() {
    const { error } = await supabase.auth.signOut();
}

export { supabase, signInWithGoogle, signout }



