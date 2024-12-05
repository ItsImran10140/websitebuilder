import BlurPage from "@/components/global/blur-page";
import MediaComponent from "@/components/media";
import { getMedia } from "@/lib/queries";
import React from "react";

type Props = {
  params: Promise<{ subaccountId: string }>;
};

const MediaPage = async ({ params }: Props) => {
  const data = await getMedia((await params).subaccountId);

  return (
    <BlurPage>
      <MediaComponent data={data} subaccountId={(await params).subaccountId} />
    </BlurPage>
  );
};

export default MediaPage;
