import dayjs from "dayjs";
import { usePostLink } from "~~/composables/utils/usePostLink";
import { Post } from "~~/types/post";
import thumbnail from "~/assets/images/posts/kichijoji-nepo-20240922.jpg";

const id = "live-at-kichijoji-nepo-in-2024-09-22";

export const post001: Post = {
  id,
  title: "心酔 vol.18",
  categories: ["show"],
  isPicked: true,
  contents: [
    {
      type: "image",
      value: thumbnail,
    },
    "思い切って強烈にインプットをし続ける年にしよう、と割り切って、すごいペースで映画を見続けている2024年なんすけど、ライブ復帰のための準備は欠かさず、珍しくギターを弾き続ける年でもあった。思えば昨年『Hesitation of Syllables』を発表して以降、「こんなん、どうやってライブやるんですか…？」と遠回りでアクロバティックな心配されていたんですが、実に実直に、弦を擦り続けてきた。",
    "今回、昨今奇特な精神、未知のものに対する冒険心を以て、ライブに誘っていただいたので、これを機に数年ぶりにライブ活動を再開したいと思ってます。バンドも準備しているんですが、こちらは若干間に合わず、今回はソロでのパフォーマンスとなります。今後もこのセットでパフォーマンスしたいと思っているので、いつもより入念に準備中。今後を占う意味でも、ぜひ遊びに来てください。",
    "（…と言われても、ソロで一体どんなライブするのかピンと来ないと思うので、近日、リハーサル音源をSoundCloudに公開する予定。お楽しみに！）",
    {
      type: "link",
      src: "https://nepo.co.jp/schedules/view/2487",
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
      value: "Arrrepentimiento / Tamuraryo with Human Coda / Ukas",
    },
  ],
};
