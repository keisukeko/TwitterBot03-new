import express from "express";
import { TwitterApi } from "twitter-api-v2";
import process from "process";
import pg from 'pg';
import https from 'https';

// consumer keys - api key
const appKey = process.env.TWITTER_API_KEY;
// consumer keys - api key secret
const appSecret = process.env.TWITTER_API_SECRET;
const accessToken = process.env.TWITTER_ACCESS_TOKEN;
const accessSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET;

const client = new TwitterApi({
    appKey,
    appSecret,
    accessToken,
    accessSecret,
});

client.readWrite;

const app = express();

app.get("/tweet", (req, res) => {
    try {
        var text = "【期間限定】今なら誰でも4500円ゲットできるよ\n招待URL: https://lite.tiktok.com/t/ZSFpk5d9b/\nルールを守らないとお金がもらえないので必ず↓を見て登録してね"
        var random = Math.floor(Math.random() * (30));
        const emojis = [
            "😀",
            "😆",
            "🤣",
            "😉",
            "🥰",
            "😍",
            "🤩",
            "😘",
            "😚",
            "😋",
            "😝",
            "🤑",
            "🫣",
            "🤫",
            "🤔",
            "🫡",
            "😏",
            "🥳",
            "😎",
            "😲",
            "😮",
            "😳",
            "🥺",
            "🥹",
            "😻",
            "🙊",
            "💖",
            "❤️‍🔥",
            "💯"
        ]
        var random = emojis[Math.floor(Math.random()* emojis.length)];
        console.log(random)
        var hashTag = "\n#TikTokLite #ポイ活"
        var link = "\nhttps://know-you.hatenablog.com/entry/2024/04/09/221651"
        var tweet = text + random + hashTag + link;
        console.log(tweet)
        client.v2.tweet(tweet); 
    } catch (err) {
        console.log(err);
    }
    res.send('get');
});

app.get("/", (req, res) => {
    try {
        console.log("ログ定期実行")
    } catch (err) {
        console.log(err);
    }
    res.send('get');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);