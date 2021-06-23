import { useRouter } from "next/router";
import ImageZoom from "src/components/ImageZoom";
import useSWR from "swr";
export default function GuitarPreview() {
  const { query } = useRouter();
  if (!query.id) {
    return null;
  }
  const { data, error } = useSWR(`/api/guitars/${query.id}`);
  if (!data && !error) {
    return (
      <div className="p-20 text-center text-4xl font-semibold">Loading</div>
    );
  }

  const guitarImages = data.images?.map((img) => (
    <ImageZoom src={img} key={`src${img}`} className="" alt="Guitar image" />
  ));

  async function buyProduct() {
    const request = await fetch("/api/buy", {
      method: "POST",
    });
    const response = await request.json();

    window.open(response.secret_url);
  }

  return (
    <div className="py-12 md:py-16 overflow-y-hidden md:h-screen">
      <div className="flex-centered flex-col-reverse flex-wrap h-full bg-white">
        <div className="product-description h-full w-full md:w-1/2 overflow-y-scroll px-2 md:px-10 py-10 space-y-10 text-lg">
          {guitarImages}
          <iframe
            width="100%"
            className="h-96"
            src={data.video_demo}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
        <div className="h-full w-full md:w-1/2 space-y-6 px-6 sticky top-0">
          <h3 className="text-2xl font-semibold">{data.title}</h3>
          <p>{data.description.split(".")[1]}.</p>
          <button
            onClick={buyProduct}
            className="w-full text-3xl py-5 bg-black text-white font-semibold"
          >
            Buy now for ${data.price}
          </button>
        </div>
      </div>
    </div>
  );
}
