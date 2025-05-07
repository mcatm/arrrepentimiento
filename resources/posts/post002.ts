import dayjs from "dayjs";
import { usePostLink } from "~~/composables/utils/usePostLink";
import { Post } from "~~/types/post";
import thumbnail from "~/assets/images/posts/asagaya-mogumogu-20250525.jpg";

const id = "live-at-asagaya-mogumogu-2025-05-25";

export const post002: Post = {
  id,
  title: "Obscure Meeting of Three Wisemen",
  categories: ["show"],
  isPicked: true,
  contents: [
    "旧知のsttさんからお誘いを受けまして、阿佐ヶ谷Mogumoguで演奏します。ちょっと前にお米ちゃん（マコメロジー）から「阿佐ヶ谷によい場所がある」と聞いていたところだったので、こうして大した時も経ずにこのような機会になるというのは、やはり天命としか言えないのでは？と、ヒルマ・アフ・クリント観た後に思ってました。",
    "マコメロジーも招いた第二弾も7月に予定されているのですが、私に関して言えば、小回りの効くソロセット。毎回少しずつセットリストも趣向も少しずつ変えていく予定なので、ぜひお越しいただければ幸い。珍しくカバーもやるつもりです。",
    {
      type: "image",
      value: thumbnail,
    },
  ],
  to: usePostLink(id),
  thumbnail,
  info: [
    {
      label: "Date",
      value: dayjs("2025-05-25 14:30:00").format("YYYY-MM-DD HH:mm"),
      onList: true,
      isBold: true,
    },
    {
      label: "At",
      value: "阿佐ヶ谷Mogumogu",
      url: "https://www.instagram.com/mogumogu1969/",
      onList: true,
    },
    {
      label: "Act",
      value: "Arrrepentimiento / 山田民族 / 蜂蜜stt",
    },
  ],
};
