import dayjs from "dayjs";
import { usePostLink } from "~~/composables/utils/usePostLink";
import { Post } from "~~/types/post";
import thumbnail from "~/assets/images/posts/kichijoji-nepo-20240922.jpg";

const id = "live-at-kichijoji-nepo-in-2024-09-22";

export const post001: Post = {
  id,
  title: "心酔 vol.18",
  categories: ["show"],
  isPicked: false,
  contents: [
    {
      type: "image",
      value: thumbnail,
    },
    "思い切って強烈にインプットをし続ける年にしよう、と割り切って、すごいペースで映画を見続けている2024年なんすけど、ライブ復帰のための準備は欠かさず、珍しくギターを弾き続ける年でもあった。思えば昨年『Hesitation of Syllables』を発表して以降、「こんなん、どうやってライブやるんですか…？」と遠回りでアクロバティックな心配されていたんですが、実に実直に、弦を擦り続けてきた。",
    "今回、昨今奇特な精神、未知のものに対する冒険心を以て、ライブに誘っていただいたので、これを機に数年ぶりにライブ活動を再開したいと思ってます。バンドも準備しているんですが、こちらは若干間に合わず、今回はソロでのパフォーマンスとなります。今後もこのセットでパフォーマンスしたいと思っているので、いつもより入念に準備中。今後を占う意味でも、ぜひ遊びに来てください。",
    {
      type: "link",
      src: "https://nepo.co.jp/schedules/view/2487",
    },
    "…と言われても、ソロで一体どんなライブするのかピンと来ないと思うので、リハーサル音源をSoundCloudに公開していきます。深夜の部屋で声の大きさを気にしながら録音したものなので、ヘロヘロっぷりはあんま気にしないで。興が乗ったら、いくつかアップしますんでね、ライブ来れる方も来れない方も、ぜひ再生してみてください。",
    {
      type: "soundcloud",
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1878689795&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
  ],
  to: usePostLink(id),
  thumbnail,
  info: [
    {
      label: "Date",
      value: dayjs("2024-09-22 18:30:00").format("YYYY-MM-DD HH:mm"),
      onList: true,
      isBold: true,
    },
    {
      label: "At",
      value: "吉祥寺NEPO",
      url: "https://nepo.co.jp/",
      onList: true,
    },
    {
      label: "Act",
      value:
        "Arrrepentimiento / Tamuraryo with Human Coda / Ukas / HU？KOKORO / Kommune",
    },
  ],
};
