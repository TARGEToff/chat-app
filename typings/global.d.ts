interface User {
    user_metadata: {
        avatar_url: string;
        full_name: string;
    }
    id: string;
}

declare module '*.scss' {
    const content: {[className: string]: string};
    export = content;
}

declare module "*.svg" {
    const content: any;
    export default content;
}

type Channel = string | string[] | undefined

interface Message {
    id: number;
    content: string;
    authorAvatar: string;
    authorId: string;
}
  