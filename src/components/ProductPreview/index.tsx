import { IGuitar } from "@models/index";
import Link from "next/link";
import ImageCarousel from "../ImageCarousel";

export default function ProductPreview(props: IGuitar) {
  const { images } = props;
  return (
    <div>
      <Link href={`/guitar/${props.id}`}>
        <h2 className="cursor-pointer hover:underline text-2xl font-semibold z-20 bg-white text-center">
          {props.title}
        </h2>
      </Link>
      <ImageCarousel images={images} />
    </div>
  );
}
