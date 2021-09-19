import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    "https://pejryzqentklhwacybfx.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTQ2OTEyMCwiZXhwIjoxOTQ3MDQ1MTIwfQ.DMCXTp02Iwiomfn_PJOGg7jfDxj7_fDC-gO4FZszo1k"
);

async function signInWith(provider) {
    const { user, session, error } = await supabase.auth.signIn({
        provider,
    }, {
        redirectTo: "http://localhost:3000/chat/general",
    });
}

async function signout() {
    const { error } = await supabase.auth.signOut();
}

async function getMessages(setData, channel) {
    const { data, error } = await supabase
        .from(channel)
    setData(data);
}

async function sendMessage(message, user, channel) {
    const getId = () => `${Math.random()}`.toString(36).substr(2, 9);
    const id = parseInt(getId());
    const { data, error } = await supabase
       .from(channel)
       .insert([{ 
            id, 
            author: user.user_metadata.full_name, 
            authorAvatar: user.user_metadata.avatar_url, 
            content: message, 
            authorId: user.id 
        }]) 
}

export { supabase, signInWith, signout, getMessages, sendMessage }



