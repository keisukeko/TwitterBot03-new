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
        var text = "https://lite.tiktok.com/t/ZSFgLwgMH/\n今なら↓をやれば誰でも4500円ゲットできるよ\n①Wi-Fiを切る\n②上のリンクを開いてアプリをインストール\n③アプリストアの開くは押さずにもう一度リンクを押してアプリを開いて登録！\n④あとは毎日タスクをクリアするだけ🙆‍♂️\n#TikTokLite #ポイ活"
        var random = Math.floor(Math.random() * (30));
        var blank ="";
        for(var i = 0; i < random; i++){
            blank += " ";
        }
        client.v2.tweet(text + blank); 
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