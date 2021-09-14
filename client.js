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

async function signInWithDiscord() {
    const { user, session, error } = await supabase.auth.signIn({
        provider: "discord",
    }, {
        redirectTo: "http://localhost:3000/chat",
    });
}

async function signout() {
    const { error } = await supabase.auth.signOut();
}

async function getMessages(setData) {
    const { data, error } = await supabase
    .from("messages")
    setData(data);
}

async function sendMessage(message, user) {
    const getId = () => `${Math.random()}`.toString(36).substr(2, 9);
    const id = parseInt(getId());
    const { data, error } = await supabase
       .from('messages')
       .insert([
           { id, author: user.user_metadata.full_name, authorAvatar: user.user_metadata.avatar_url, content: message }
       ]) 
}

export { supabase, signInWithGoogle, signInWithDiscord, signout, getMessages, sendMessage }



