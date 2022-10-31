import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="fixed w-screen bg-additional h-12">
      <div className="flex justify-start items-center flex-col">
        <div className="fixed typed-information-wrapper">
          <div className="flex h-12 gap-x-5 nowrap justify-center items-center">
            <Link className="text-3xl text-white" to={"/foo"}>
              Тестировние
            </Link>
            <Link className="text-3xl text-white" to={"/bar"}>
              Тренировка
            </Link>
          </div>
        </div>
        <Link className="absolute right-2 top-1" to={"settings"}>
          <svg
            width="31"
            height="31"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="20.5"
              cy="20.5"
              r="10.5"
              stroke="#3D6186"
              stroke-width="6"
            />
            <rect x="17" width="7" height="9" rx="2" fill="#3D6186" />
            <rect
              x="3"
              y="7.94977"
              width="7"
              height="10.9159"
              rx="2"
              transform="rotate(-45 3 7.94977)"
              fill="#3D6186"
            />
            <rect
              x="32.7188"
              y="3"
              width="7"
              height="10.9159"
              rx="2"
              transform="rotate(45 32.7188 3)"
              fill="#3D6186"
            />
            <rect
              x="11"
              y="25"
              width="7"
              height="10.9159"
              rx="2"
              transform="rotate(45 11 25)"
              fill="#3D6186"
            />
            <rect
              x="25"
              y="29.9498"
              width="7"
              height="10.9159"
              rx="2"
              transform="rotate(-45 25 29.9498)"
              fill="#3D6186"
            />
            <rect x="17" y="32" width="7" height="9" rx="2" fill="#3D6186" />
            <rect
              x="32"
              y="24"
              width="7"
              height="9"
              rx="2"
              transform="rotate(-90 32 24)"
              fill="#3D6186"
            />
            <rect
              y="24"
              width="7"
              height="9"
              rx="2"
              transform="rotate(-90 0 24)"
              fill="#3D6186"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
export default Header;
