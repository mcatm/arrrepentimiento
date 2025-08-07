import dayjs from "dayjs";
import { usePostLink } from "~~/composables/utils/usePostLink";
import { Post } from "~~/types/post";
import thumbnail from "~/assets/images/posts/asagaya-mogumogu-20250719.jpg";

const id = "live-at-asagaya-mogumogu-2025-07-19";

export const post003: Post = {
  id,
  title: "Flutty Acid Afternoon Turned Around",
  categories: ["show"],
  isPicked: false,
  contents: [
    "美しい大きなダブルブッキングの恩恵を受けて、5月に続けて7月にも阿佐ヶ谷mogumoguでのsttさん企画に出演させていただけることになりました。withマコメロジー。先日、頭士奈生樹／浅井直樹／アンデルセンズのライブ観に行った際に、全員いた。全員いました。ので、挨拶済みです。たぎりました、その後、代田橋の湯の楽行きました",
    "僕はしばらくソロで行く覚悟でおりますので、今回も肝の座ったソロ。前回、ちょっと日和ったなーと反省しているので、バッキバキにテープ編集していくつもりなのでよろしくお願いします。",
    {
      type: "image",
      value: thumbnail,
    },
    "無事終了して、アンダーグラウンドシーンを記録しまくっているありがたい善行に身を投じる柿崎さんが、この日の様子をYouTubeという動画投稿サイトにアップしてくれたのでした。歳ばかり重ねて未熟なのは恥ずかしいことなのか、MC全滑りが悲しいのか、自己責任で確認してもらえればと思います。「これは俺の悪魔です」のくだりは、いまだにむすこにバカにされます。",
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
      value: dayjs("2025-07-19 14:20:00").format("YYYY-MM-DD HH:mm"),
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
      value: "Arrrepentimiento / マコメロジー / 蜂蜜stt",
    },
  ],
};
