import dayjs from "dayjs";
import { usePostLink } from "~~/composables/utils/usePostLink";
import { Post } from "~~/types/post";
import thumbnail from "~/assets/images/posts/kichijoji-nepo-20250817.jpg";

const id = "live-at-kichijoji-nepo-in-2025-08-17";

export const post004: Post = {
  id,
  title: "心酔 vol.34",
  categories: ["show"],
  isPicked: true,
  contents: [
    {
      type: "image",
      value: thumbnail,
    },
    "一年ぶりに、吉祥寺NEPOのステージに立たせてもらうことになりました。オファーいただいていても、なかなか参加できず、己の無力に歯噛みしていた日々でしたが、ようやく。前回、出来の割には、若者にありがたがられた御神木体験がありましたので、またしっかりやろうと準備している次第。大枠変わらないが、少しだけ変化ありますので、一挙手一投足が気になる方も、ただただ「あなたは何のために音楽をやってますか？」が気になる向きにも。",
    {
      type: "link",
      src: "https://nepo.co.jp/schedules/view/2833",
    },
    "この時よりは良くしたい。そんな気持ちが私にもあります。（柿崎さんによる、前回ライブの動画）",
    {
      type: "youtube",
      id: "B581tzJ9wMI",
    },
  ],
  to: usePostLink(id),
  thumbnail,
  info: [
    {
      label: "Date",
      value: dayjs("2025-08-17 18:30:00").format("YYYY-MM-DD HH:mm"),
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
      value: "Arrrepentimiento / The Patios / Green Pal / 樂園",
    },
  ],
};
