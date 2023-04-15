export default function BackButton({ previous }: { previous: () => void }) {
  return (
    <a
      onClick={() => previous()}
      className="text-gray-400 hover:underline no-underline cursor-pointer m-5"
    >
      <p className="material-symbols-rounded align-bottom text-sm">
        chevron_left
      </p>
      Back
    </a>
  );
}
