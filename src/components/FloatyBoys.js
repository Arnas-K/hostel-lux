export default function FloatyBoy({ title, content }) {
  return (
    <div className="px-4 py-5 flex-auto">
      <h6 className="text-xl font-semibold">{title}</h6>
      <p className="mt-2 mb-4 text-blueGray-500">{content}</p>
    </div>
  );
}
