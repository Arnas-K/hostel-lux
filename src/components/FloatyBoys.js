export default function FloatyBoy({ title, content }) {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
      <div className="px-4 py-5 flex-auto" style={{ minHeight: "150px" }}>
        <h6 className="text-xl font-semibold">{title}</h6>
        <p className="mt-2 mb-4 text-blueGray-500">{content}</p>
      </div>
    </div>
  );
}
