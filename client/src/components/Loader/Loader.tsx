interface Props {
  isLoading: boolean;
}

const Loader = ({ isLoading }: Props) => (
  <div className="flex__center" style={{ display: isLoading ? "flex" : "none" }}>
    <svg
      version="1.1"
      id="L3"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 0 0"
      xmlSpace="preserve"
      style={{ height: 76, width: 76 }}
    >
      <circle fill="none" stroke="#fff" stroke-width="4" cx="50" cy="50" r="44" style={{ opacity: 0.5 }} />
      <circle fill="#fff" stroke="#e74c3c" stroke-width="3" cx="8" cy="54" r="6">
        <animateTransform
          attributeName="transform"
          dur="2s"
          type="rotate"
          from="0 50 48"
          to="360 50 52"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
);

export default Loader;
