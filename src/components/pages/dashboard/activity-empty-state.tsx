import { Link } from "react-router-dom";

interface ActivityEmptyStateType {
  to: string;
}

const ActivityEmptyState = ({ to }: ActivityEmptyStateType) => {
  return (
    <Link
      to={to}
      className="block w-[767px] mx-auto"
      data-cy="activity-empty-state"
    >
      <svg
        width="767"
        height="490"
        viewBox="0 0 767 490"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#a)">
          <path
            fill="#A0616A"
            d="M183.552 477.666h10.988l5.227-42.334-16.216.001.001 42.333Z"
          />
          <path
            fill="#2F2E41"
            d="m180.75 474.083 21.638-.001h.001a13.802 13.802 0 0 1 9.75 4.035 13.772 13.772 0 0 1 4.04 9.74v.447l-35.428.002-.001-14.223Z"
          />
          <path
            fill="#A0616A"
            d="M256.134 477.666h10.987l5.228-42.334-16.217.001.002 42.333Z"
          />
          <path
            fill="#2F2E41"
            d="m253.331 474.083 21.638-.001h.001a13.804 13.804 0 0 1 9.751 4.035 13.767 13.767 0 0 1 4.039 9.74v.447l-35.428.002-.001-14.223Z"
          />
          <path
            fill="#E6E6E6"
            d="M524.915 488.371H30.633V490h494.282v-1.629Z"
          />
          <path
            fill="#2F2E41"
            d="M174.353 468.486h28.462l18.192-159.118 33.448 159.118h19.204V278.743l-91.308-27.297-7.998 217.04Z"
          />
          <path
            fill="#A0616A"
            d="M222.883 111.444c13.708 0 24.821-11.101 24.821-24.795 0-13.693-11.113-24.794-24.821-24.794-13.708 0-24.821 11.1-24.821 24.794s11.113 24.795 24.821 24.795Z"
          />
          <path
            fill="#E6E6E6"
            d="M184.35 255.44c26.633 20.807 56.031 31.294 89.309 27.297-14.055-49.295-18.223-98.217-4.665-146.469l-27.993-12.65-31.465-1.997-22.869 6.719a15.292 15.292 0 0 0-8.016 5.625 15.265 15.265 0 0 0-2.954 9.33c.808 41.15-1.931 79.661 8.653 112.145Z"
          />
          <path
            fill="#2F2E41"
            d="M199.127 74.182c2.388-4.5 5.422-13.47 10.242-15.134a38.359 38.359 0 0 1 8.249-1.755l8.192 3.148-4.459-3.464c.868-.052 1.736-.094 2.603-.127l5.528 2.124-2.828-2.197c5.153-.053 10.472.482 14.465 3.616 3.404 2.671 6.776 12.79 7.322 17.08.583 4.104.379 8.281-.602 12.308l-1.399 1.33a17.164 17.164 0 0 1-1.099-3.492 16.543 16.543 0 0 0-7.924-10.74l-.077-.042c-2.347-1.32-5.196-1.26-7.889-1.163l-12.786.46c-3.077.11-6.389.305-8.788 2.233-1.619 1.301-2.59 3.223-3.513 5.084-1.192 2.403-3.521 11.465-3.521 11.465s-1.317-1.71-1.949-.437a44.028 44.028 0 0 1-1.834-10.219 20.008 20.008 0 0 1 2.067-10.078Z"
          />
          <path
            fill="#F0F0F0"
            d="M717.888 234.293H431.343a18.511 18.511 0 0 1-13.061-5.413 18.476 18.476 0 0 1-5.419-13.047V18.459a18.474 18.474 0 0 1 5.419-13.046A18.51 18.51 0 0 1 431.343 0h286.545a18.513 18.513 0 0 1 13.061 5.413 18.469 18.469 0 0 1 5.418 13.046v197.374a18.47 18.47 0 0 1-5.418 13.047 18.513 18.513 0 0 1-13.061 5.413ZM431.343 1.629a16.876 16.876 0 0 0-11.908 4.935 16.839 16.839 0 0 0-4.941 11.895v197.374a16.84 16.84 0 0 0 4.941 11.896 16.876 16.876 0 0 0 11.908 4.935h286.545a16.878 16.878 0 0 0 11.908-4.935 16.844 16.844 0 0 0 4.94-11.896V18.459a16.842 16.842 0 0 0-4.94-11.895 16.877 16.877 0 0 0-11.908-4.935H431.343Z"
          />
          <path
            fill="#E4E4E4"
            d="M382.689 250.864V53.49a17.653 17.653 0 0 1 5.18-12.471 17.692 17.692 0 0 1 12.484-5.174h286.545a17.696 17.696 0 0 1 12.485 5.174 17.656 17.656 0 0 1 5.179 12.471v197.374a17.656 17.656 0 0 1-5.179 12.471 17.695 17.695 0 0 1-12.485 5.174H400.353a17.69 17.69 0 0 1-12.484-5.174 17.653 17.653 0 0 1-5.18-12.471Z"
          />
          <path
            fill="#F4F4F4"
            d="M393.959 251.21V53.141a5.451 5.451 0 0 1 5.445-5.44h288.443a5.455 5.455 0 0 1 3.848 1.596 5.443 5.443 0 0 1 1.597 3.844V251.21a5.45 5.45 0 0 1-5.445 5.439H399.404a5.449 5.449 0 0 1-5.445-5.439Z"
          />
          <path
            fill="#E6E6E6"
            d="M509.935 443.609c4.433 0 8.027-3.59 8.027-8.018 0-4.429-3.594-8.019-8.027-8.019s-8.027 3.59-8.027 8.019c0 4.428 3.594 8.018 8.027 8.018ZM543.381 443.609c4.434 0 8.028-3.59 8.028-8.018 0-4.429-3.594-8.019-8.028-8.019-4.433 0-8.027 3.59-8.027 8.019 0 4.428 3.594 8.018 8.027 8.018ZM576.828 443.609c4.433 0 8.027-3.59 8.027-8.018 0-4.429-3.594-8.019-8.027-8.019s-8.027 3.59-8.027 8.019c0 4.428 3.594 8.018 8.027 8.018Z"
          />
          <path
            fill="#16ABF8"
            d="M543.626 210.391a58.321 58.321 0 0 1-32.378-9.811 58.226 58.226 0 0 1-21.464-26.126 58.152 58.152 0 0 1-3.316-33.635 58.196 58.196 0 0 1 15.949-29.807 58.298 58.298 0 0 1 29.839-15.932 58.335 58.335 0 0 1 33.671 3.313 58.26 58.26 0 0 1 26.154 21.441 58.167 58.167 0 0 1 9.822 32.342 58.246 58.246 0 0 1-17.088 41.145 58.374 58.374 0 0 1-41.189 17.07Z"
          />
          <path
            fill="#F4F4F4"
            d="M566.62 146.434h-17.246v-17.228a5.736 5.736 0 0 0-1.687-4.054 5.75 5.75 0 0 0-9.81 4.054v17.228h-17.246a5.748 5.748 0 0 0-5.739 5.742c0 1.522.604 2.981 1.68 4.057a5.754 5.754 0 0 0 4.059 1.686h17.246v17.227a5.737 5.737 0 0 0 1.687 4.055 5.752 5.752 0 0 0 8.123 0 5.737 5.737 0 0 0 1.687-4.055v-17.227h17.246a5.76 5.76 0 0 0 4.071-1.675 5.731 5.731 0 0 0 1.692-4.06 5.741 5.741 0 0 0-5.747-5.75h-.016Z"
          />
          <path
            fill="#E6E6E6"
            d="M119.057 439.758a83.424 83.424 0 0 0-7.338-23.532l-.524-1.084-3.895 4.315 2.886-6.427-.189-.372a153.666 153.666 0 0 0-8.455-14.655l-.572-.875-.764.845.535-1.19-.268-.401c-3.821-5.726-6.757-9.347-6.786-9.384l-.83-1.02-.535 1.217c-.098.223-9.801 22.559-11.087 44.631l-.02.344 6.53 7.886-6.66-4.177.012 1.516c.02 2.594.197 5.184.53 7.757a120.64 120.64 0 0 0 1.035 6.482c.63.02 1.242.211 1.77.552a123.72 123.72 0 0 1-1.19-7.263 62.478 62.478 0 0 1-.483-6.013l12.882 8.08-12.757-15.405c1.161-18.661 8.37-37.462 10.395-42.424a148.13 148.13 0 0 1 5.587 7.789l-4.457 9.924 6.354-7.037a152.081 152.081 0 0 1 7.602 13.239l-6.862 15.281 9.278-10.277a81.71 81.71 0 0 1 6.663 21.93c1.624 12.253 1.307 24.024-.893 33.144-2.106 8.737-5.82 14.108-10.188 14.735a6.897 6.897 0 0 1-2.691-.16c-.704.5-1.551.758-2.415.736h-.238a9.467 9.467 0 0 0 4.423 1.187c.383 0 .765-.027 1.144-.082 5.135-.737 9.237-6.42 11.547-16.002 2.249-9.327 2.579-21.327.924-33.81Z"
          />
          <path
            fill="#E6E6E6"
            d="M104.685 489.007c-6.718 0-16.403-3.691-26.009-10.41a41.561 41.561 0 0 1-4.042-3.247l-1.076-.982 4.068-1.17-5.417-.198-.228-.239c-10.154-10.623-16.472-25.627-16.535-25.776l-.494-1.186 1.284.059c.128.005 3.18.149 7.767.799l.286.041v-.003l1.006.153c3.746.569 7.457 1.348 11.115 2.333l.39.106 1.221 3.003-.185-2.693 1.12.323a54.008 54.008 0 0 1 14.946 6.922c14.609 10.218 22.693 22.99 18.42 29.086-1.461 2.083-4.15 3.078-7.637 3.079Zm-27.844-13.888a39.405 39.405 0 0 0 2.773 2.144c13.38 9.36 27.746 12.899 31.371 7.731 3.624-5.17-4.62-17.446-18.002-26.806a52.335 52.335 0 0 0-13.36-6.366l.724 10.522-4.752-11.694c-3.13-.83-6.333-1.512-9.539-2.034l.525 7.638-3.271-8.049a100.873 100.873 0 0 0-5.82-.632c1.694 3.717 7.292 15.194 15.443 23.823l14.948.547-11.04 3.176Z"
          />
          <path
            fill="#A0616A"
            d="M199.961 271.695a8.483 8.483 0 0 0-3.076-6.502 8.51 8.51 0 0 0-6.965-1.818l-14.895-26.282-6.147 12.584 14.236 24.205a8.549 8.549 0 0 0 9.396 6.381 8.553 8.553 0 0 0 5.356-2.87 8.534 8.534 0 0 0 2.095-5.698ZM266.566 300.912a8.494 8.494 0 0 1 4.856-12.096l.55-30.197 12.957 8.878-2.51 27.314a8.533 8.533 0 0 1-.688 6.032 8.553 8.553 0 0 1-4.525 4.052 8.553 8.553 0 0 1-10.64-3.983Z"
          />
          <path
            fill="#E6E6E6"
            d="m176.352 268.089 10.664-9.986-5.473-53.927 6.332-76.231c-13.754 4.318-28.522 15.918-30.955 30.113l-8.701 50.778 28.133 59.253Z"
          />
          <path
            fill="#000"
            d="m182.544 175.215-8.665 34.62 13.137 49.126-8.472-46.463 4-37.283Z"
            opacity={0.2}
          />
          <path
            fill="#E6E6E6"
            d="m268.327 286.73 17.329 1.998-4.057-128.538a29.905 29.905 0 0 0-5.281-16.044 29.945 29.945 0 0 0-13.136-10.631l-6.185-2.574 1.666 60.252 9.664 95.537Z"
          />
          <path
            fill="#000"
            d="m261.84 193.164 6.688 74.183-11.325-73.666 4.637-.517Z"
            opacity={0.2}
          />
          <path
            fill="#555"
            d="M400.454 318.408c.944.176 1.72.648 2.328 1.416.608.768.912 1.648.912 2.64 0 .896-.224 1.688-.672 2.376-.432.672-1.064 1.2-1.896 1.584-.832.384-1.816.576-2.952.576h-7.224v-16.752h6.912c1.136 0 2.112.184 2.928.552.832.368 1.456.88 1.872 1.536.432.656.648 1.4.648 2.232 0 .976-.264 1.792-.792 2.448-.512.656-1.2 1.12-2.064 1.392Zm-6.144-1.248h3.072c.8 0 1.416-.176 1.848-.528.432-.368.648-.888.648-1.56s-.216-1.192-.648-1.56c-.432-.368-1.048-.552-1.848-.552h-3.072v4.2Zm3.384 7.104c.816 0 1.448-.192 1.896-.576.464-.384.696-.928.696-1.632 0-.72-.24-1.28-.72-1.68-.48-.416-1.128-.624-1.944-.624h-3.312v4.512h3.384Zm21.23-10.56V327h-3.384v-1.68c-.432.576-1 1.032-1.704 1.368-.688.32-1.44.48-2.256.48-1.04 0-1.96-.216-2.76-.648-.8-.448-1.432-1.096-1.896-1.944-.448-.864-.672-1.888-.672-3.072v-7.8h3.36v7.32c0 1.056.264 1.872.792 2.448.528.56 1.248.84 2.16.84.928 0 1.656-.28 2.184-.84.528-.576.792-1.392.792-2.448v-7.32h3.384Zm2.451 6.6c0-1.344.264-2.536.792-3.576.544-1.04 1.272-1.84 2.184-2.4.928-.56 1.96-.84 3.096-.84.992 0 1.856.2 2.592.6.752.4 1.352.904 1.8 1.512v-1.896h3.384V327h-3.384v-1.944c-.432.624-1.032 1.144-1.8 1.56-.752.4-1.624.6-2.616.6a5.71 5.71 0 0 1-3.072-.864c-.912-.576-1.64-1.384-2.184-2.424-.528-1.056-.792-2.264-.792-3.624Zm10.464.048c0-.816-.16-1.512-.48-2.088-.32-.592-.752-1.04-1.296-1.344a3.397 3.397 0 0 0-1.752-.48c-.624 0-1.2.152-1.728.456-.528.304-.96.752-1.296 1.344-.32.576-.48 1.264-.48 2.064s.16 1.504.48 2.112c.336.592.768 1.048 1.296 1.368.544.32 1.12.48 1.728.48.624 0 1.208-.152 1.752-.456.544-.32.976-.768 1.296-1.344.32-.592.48-1.296.48-2.112Zm10.578-3.888v6.432c0 .448.104.776.312.984.224.192.592.288 1.104.288h1.56V327h-2.112c-2.832 0-4.248-1.376-4.248-4.128v-6.408h-1.584v-2.76h1.584v-3.288h3.384v3.288h2.976v2.76h-2.976Zm10.247 3.84c0-1.344.264-2.536.792-3.576.544-1.04 1.272-1.84 2.184-2.4.928-.56 1.96-.84 3.096-.84.992 0 1.856.2 2.592.6.752.4 1.352.904 1.8 1.512v-1.896h3.384V327h-3.384v-1.944c-.432.624-1.032 1.144-1.8 1.56-.752.4-1.624.6-2.616.6a5.71 5.71 0 0 1-3.072-.864c-.912-.576-1.64-1.384-2.184-2.424-.528-1.056-.792-2.264-.792-3.624Zm10.464.048c0-.816-.16-1.512-.48-2.088-.32-.592-.752-1.04-1.296-1.344a3.397 3.397 0 0 0-1.752-.48c-.624 0-1.2.152-1.728.456-.528.304-.96.752-1.296 1.344-.32.576-.48 1.264-.48 2.064s.16 1.504.48 2.112c.336.592.768 1.048 1.296 1.368.544.32 1.12.48 1.728.48.624 0 1.208-.152 1.752-.456.544-.32.976-.768 1.296-1.344.32-.592.48-1.296.48-2.112Zm5.802 0c0-1.376.28-2.576.84-3.6.56-1.04 1.336-1.84 2.328-2.4.992-.576 2.128-.864 3.408-.864 1.648 0 3.008.416 4.08 1.248 1.088.816 1.816 1.968 2.184 3.456h-3.624c-.192-.576-.52-1.024-.984-1.344-.448-.336-1.008-.504-1.68-.504-.96 0-1.72.352-2.28 1.056-.56.688-.84 1.672-.84 2.952 0 1.264.28 2.248.84 2.952.56.688 1.32 1.032 2.28 1.032 1.36 0 2.248-.608 2.664-1.824h3.624c-.368 1.44-1.096 2.584-2.184 3.432-1.088.848-2.448 1.272-4.08 1.272-1.28 0-2.416-.28-3.408-.84a6.108 6.108 0 0 1-2.328-2.4c-.56-1.04-.84-2.248-.84-3.624Zm19.213-3.888v6.432c0 .448.104.776.312.984.224.192.592.288 1.104.288h1.56V327h-2.112c-2.832 0-4.248-1.376-4.248-4.128v-6.408h-1.584v-2.76h1.584v-3.288h3.384v3.288h2.976v2.76h-2.976Zm7.097-4.344c-.592 0-1.088-.184-1.488-.552a1.925 1.925 0 0 1-.576-1.416c0-.56.192-1.024.576-1.392.4-.384.896-.576 1.488-.576s1.08.192 1.464.576c.4.368.6.832.6 1.392 0 .56-.2 1.032-.6 1.416-.384.368-.872.552-1.464.552Zm1.656 1.584V327h-3.36v-13.296h3.36Zm8.864 10.2 3.36-10.2h3.576L507.776 327h-4.08l-4.896-13.296h3.6l3.36 10.2Zm10.527-11.784c-.592 0-1.088-.184-1.488-.552a1.925 1.925 0 0 1-.576-1.416c0-.56.192-1.024.576-1.392.4-.384.896-.576 1.488-.576s1.08.192 1.464.576c.4.368.6.832.6 1.392 0 .56-.2 1.032-.6 1.416-.384.368-.872.552-1.464.552Zm1.656 1.584V327h-3.36v-13.296h3.36Zm7.231 2.76v6.432c0 .448.104.776.312.984.224.192.592.288 1.104.288h1.56V327h-2.112c-2.832 0-4.248-1.376-4.248-4.128v-6.408h-1.584v-2.76h1.584v-3.288h3.384v3.288h2.976v2.76h-2.976Zm18.113-2.76-8.232 19.584h-3.576l2.88-6.624-5.328-12.96h3.768l3.432 9.288 3.48-9.288h3.576Zm10.89 1.92c.432-.608 1.024-1.112 1.776-1.512.768-.416 1.64-.624 2.616-.624 1.136 0 2.16.28 3.072.84.928.56 1.656 1.36 2.184 2.4.544 1.024.816 2.216.816 3.576 0 1.36-.272 2.568-.816 3.624-.528 1.04-1.256 1.848-2.184 2.424-.912.576-1.936.864-3.072.864-.976 0-1.84-.2-2.592-.6a5.571 5.571 0 0 1-1.8-1.512v8.232h-3.36v-19.632h3.36v1.92Zm7.032 4.68c0-.8-.168-1.488-.504-2.064-.32-.592-.752-1.04-1.296-1.344a3.403 3.403 0 0 0-1.728-.456c-.608 0-1.184.16-1.728.48-.528.304-.96.752-1.296 1.344-.32.592-.48 1.288-.48 2.088s.16 1.496.48 2.088c.336.592.768 1.048 1.296 1.368a3.49 3.49 0 0 0 1.728.456c.624 0 1.2-.16 1.728-.48a3.45 3.45 0 0 0 1.296-1.368c.336-.592.504-1.296.504-2.112Zm18.234-.24c0 .48-.032.912-.096 1.296h-9.72c.08.96.416 1.712 1.008 2.256.592.544 1.32.816 2.184.816 1.248 0 2.136-.536 2.664-1.608h3.624c-.384 1.28-1.12 2.336-2.208 3.168-1.088.816-2.424 1.224-4.008 1.224-1.28 0-2.432-.28-3.456-.84a6.182 6.182 0 0 1-2.376-2.424c-.56-1.04-.84-2.24-.84-3.6 0-1.376.28-2.584.84-3.624a5.861 5.861 0 0 1 2.352-2.4c1.008-.56 2.168-.84 3.48-.84 1.264 0 2.392.272 3.384.816a5.63 5.63 0 0 1 2.328 2.328c.56.992.84 2.136.84 3.432Zm-3.48-.96c-.016-.864-.328-1.552-.936-2.064-.608-.528-1.352-.792-2.232-.792-.832 0-1.536.256-2.112.768-.56.496-.904 1.192-1.032 2.088h6.312Zm9.292-3.336a4.755 4.755 0 0 1 1.68-1.656c.704-.4 1.504-.6 2.4-.6v3.528h-.888c-1.056 0-1.856.248-2.4.744-.528.496-.792 1.36-.792 2.592V327h-3.36v-13.296h3.36v2.064Zm10.255.696v6.432c0 .448.104.776.312.984.224.192.592.288 1.104.288h1.56V327h-2.112c-2.832 0-4.248-1.376-4.248-4.128v-6.408h-1.584v-2.76h1.584v-3.288h3.384v3.288h2.976v2.76h-2.976Zm4.529 3.84c0-1.344.264-2.536.792-3.576.544-1.04 1.272-1.84 2.184-2.4.928-.56 1.96-.84 3.096-.84.992 0 1.856.2 2.592.6.752.4 1.352.904 1.8 1.512v-1.896h3.384V327h-3.384v-1.944c-.432.624-1.032 1.144-1.8 1.56-.752.4-1.624.6-2.616.6a5.71 5.71 0 0 1-3.072-.864c-.912-.576-1.64-1.384-2.184-2.424-.528-1.056-.792-2.264-.792-3.624Zm10.464.048c0-.816-.16-1.512-.48-2.088-.32-.592-.752-1.04-1.296-1.344a3.397 3.397 0 0 0-1.752-.48c-.624 0-1.2.152-1.728.456-.528.304-.96.752-1.296 1.344-.32.576-.48 1.264-.48 2.064s.16 1.504.48 2.112c.336.592.768 1.048 1.296 1.368.544.32 1.12.48 1.728.48.624 0 1.208-.152 1.752-.456.544-.32.976-.768 1.296-1.344.32-.592.48-1.296.48-2.112Zm23.178-6.84c1.632 0 2.944.504 3.936 1.512 1.008.992 1.512 2.384 1.512 4.176v7.8h-3.36v-7.344c0-1.04-.264-1.832-.792-2.376-.528-.56-1.248-.84-2.16-.84-.912 0-1.64.28-2.184.84-.528.544-.792 1.336-.792 2.376V327h-3.36v-7.344c0-1.04-.264-1.832-.792-2.376-.528-.56-1.248-.84-2.16-.84-.928 0-1.664.28-2.208.84-.528.544-.792 1.336-.792 2.376V327h-3.36v-13.296h3.36v1.608c.432-.56.984-1 1.656-1.32.688-.32 1.44-.48 2.256-.48 1.04 0 1.968.224 2.784.672a4.55 4.55 0 0 1 1.896 1.872c.432-.768 1.056-1.384 1.872-1.848a5.43 5.43 0 0 1 2.688-.696Zm7.772 6.792c0-1.344.264-2.536.792-3.576.544-1.04 1.272-1.84 2.184-2.4.928-.56 1.96-.84 3.096-.84.992 0 1.856.2 2.592.6.752.4 1.352.904 1.8 1.512v-1.896h3.384V327h-3.384v-1.944c-.432.624-1.032 1.144-1.8 1.56-.752.4-1.624.6-2.616.6a5.71 5.71 0 0 1-3.072-.864c-.912-.576-1.64-1.384-2.184-2.424-.528-1.056-.792-2.264-.792-3.624Zm10.464.048c0-.816-.16-1.512-.48-2.088-.32-.592-.752-1.04-1.296-1.344a3.397 3.397 0 0 0-1.752-.48c-.624 0-1.2.152-1.728.456-.528.304-.96.752-1.296 1.344-.32.576-.48 1.264-.48 2.064s.16 1.504.48 2.112c.336.592.768 1.048 1.296 1.368.544.32 1.12.48 1.728.48.624 0 1.208-.152 1.752-.456.544-.32.976-.768 1.296-1.344.32-.592.48-1.296.48-2.112Zm23.178-6.84c1.632 0 2.944.504 3.936 1.512 1.008.992 1.512 2.384 1.512 4.176v7.8h-3.36v-7.344c0-1.04-.264-1.832-.792-2.376-.528-.56-1.248-.84-2.16-.84-.912 0-1.64.28-2.184.84-.528.544-.792 1.336-.792 2.376V327h-3.36v-7.344c0-1.04-.264-1.832-.792-2.376-.528-.56-1.248-.84-2.16-.84-.928 0-1.664.28-2.208.84-.528.544-.792 1.336-.792 2.376V327h-3.36v-13.296h3.36v1.608c.432-.56.984-1 1.656-1.32.688-.32 1.44-.48 2.256-.48 1.04 0 1.968.224 2.784.672a4.55 4.55 0 0 1 1.896 1.872c.432-.768 1.056-1.384 1.872-1.848a5.43 5.43 0 0 1 2.688-.696Zm21.188.192V327h-3.384v-1.68c-.432.576-1 1.032-1.704 1.368-.688.32-1.44.48-2.256.48-1.04 0-1.96-.216-2.76-.648-.8-.448-1.432-1.096-1.896-1.944-.448-.864-.672-1.888-.672-3.072v-7.8h3.36v7.32c0 1.056.264 1.872.792 2.448.528.56 1.248.84 2.16.84.928 0 1.656-.28 2.184-.84.528-.576.792-1.392.792-2.448v-7.32h3.384Z"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h767v490H0z" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
};

export default ActivityEmptyState;
