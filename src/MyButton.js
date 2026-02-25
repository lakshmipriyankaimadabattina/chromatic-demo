export default function MyButton({ label }) {
    return (
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {label}
      </button>
    );
  }
  