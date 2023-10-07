

export const api={
    ...[
        {
            base: "http://0.0.0.0:8000/"
        },
        {
            base: "http://quotientbot.xyz/api/"
        }
    ][0]
}


export const links ={
    ...[
        {
            home:"http://localhost:3000",
            oauth: "https://discord.com/api/oauth2/authorize?client_id=765159200204128266&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin&response_type=code&scope=identify%20email%20guilds",
            no_prompt_auth: "https://discord.com/api/oauth2/authorize?prompt=none&client_id=765159200204128266&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin&response_type=code&scope=identify%20email%20guilds"
        },
    ][0]
}