function CallToAction({ variantType, hoverStyle }) {
  const styles = {
    primary: {
      bg: "bg-primary",
      text: "text-white",
      hover: "bg-black",
    },
    light: {
      bg: "bg-white",
      text: "primary_dark",
      hover: "bg-light_hover",
    },
  };

  return (
    <button
      className={`rounded-full text-sm px-7 py-3 hover:${hoverStyle} ${styles[variantType].bg}  ${styles[variantType].text}`}
    >
      {" "}
      Get Started{" "}
    </button>
  );
}

export default CallToAction;
